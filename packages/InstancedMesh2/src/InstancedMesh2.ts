import { BufferGeometry, Camera, Color, ColorRepresentation, DynamicDrawUsage, Frustum, InstancedBufferAttribute, InstancedMesh, Intersection, Material, Matrix4, Mesh, Raycaster, Sphere, Vector3 } from 'three';
import { InstancedEntity } from './InstancedEntity';
import { BVHParams, InstancedMeshBVH } from './InstancedMeshBVH';

/** InstancedEntity with custom T data. */
export type Entity<T> = InstancedEntity & T;
/** Type of callback invoked after creation of each instance. */
export type CreateEntityCallback<T> = (obj: Entity<T>, index: number) => void;
/** Determine which strategy to use for frustum culling (can be `CullingNone`, `CullingStatic`, `CullingDynamic`). */
export type CullingMode = typeof CullingNone | typeof CullingStatic | typeof CullingDynamic;

/** Frustum culling is disabled, suitable if all instances are always visible in the camera's frustum. */
export const CullingNone = 0;
/** Fast frustum culling using a BVH, ideal for static objects (you can only modify instances in `onInstanceCreation` callback). */
export const CullingStatic = 1;
/** Individual frustum culling for each instance, necessary for animated meshes. */
export const CullingDynamic = 2;

/** Configuration for creating an InstancedMesh2 */
export interface InstancedMesh2Params<T> {
  /** Determine which strategy to use for frustum culling (can be `CullingNone`, `CullingStatic`, `CullingDynamic`). */
  behaviour: CullingMode;
  /** Callback invoked after creation of each instance (optional if behaviour is not `CullingStatic`). */
  onInstanceCreation?: CreateEntityCallback<Entity<T>>;
  /** The default color to apply to each instance (optional). */
  color?: ColorRepresentation;
  /** TODO */
  verbose?: boolean;
  /** TODO */
  bvhParams?: BVHParams;
  /** TODO */
  createEntities?: boolean;
}

/** 
 * Extends the functionality of `InstancedMesh`, providing streamlined control over instance `transformations` and `visibility`, 
 * while also integrating `frustum culling` for each instance to improve performance. 
 * @template T - Custom data type.
 * @template G - Geometry type.
 * @template M - Material type.
 */
export class InstancedMesh2<T = {}, G extends BufferGeometry = BufferGeometry, M extends Material = Material> extends InstancedMesh<G, M> {
  public override type = 'InstancedMesh2';
  /** A flag indicating that this is an instance of InstancedMesh2. */
  public isInstancedMesh2 = true;
  /** 
   * An array storing individual InstancedEntity instances associated with this InstancedMesh2.
   * Each element represents a separate instance that can be managed individually.
   */
  public instances: Entity<T>[];
  /** TODO */
  public verbose: boolean;
  private _sortedInstances: Entity<T>[];
  /** @internal */ public readonly _perObjectFrustumCulled: boolean;
  /** @internal */ public _matricesUpdated = false;
  private _behaviour: number;
  private _instancedAttributes: InstancedBufferAttribute[];
  private _bvh: InstancedMeshBVH;

  /**
   * @param geometry The geometry for the instanced mesh.
   * @param material The material to apply to the instanced mesh.
   * @param count The number of instances to create.
   * @param config Configuration object.
   */
  constructor(geometry: G, material: M, count: number, config: InstancedMesh2Params<T>) {
    if (geometry === undefined) throw new Error("'geometry' is mandatory.");
    if (material === undefined) throw new Error("'material' is mandatory.");
    if (count === undefined) throw new Error("'count' is mandatory.");
    if (config?.behaviour === undefined) throw new Error("'behaviour' is mandatory.");
    if (config.behaviour === CullingStatic && config.onInstanceCreation === undefined) throw new Error("'onInstanceCreation' is mandatory if behaviour is 'CullingStatic'.");

    super(geometry, material, count);

    if (config.createEntities === true && config.behaviour === CullingDynamic) console.warn("'createEntities' is ignored if 'CullingDynamic'.");

    this.verbose = config.verbose === true;
    const color = config.color !== undefined ? _color.set(config.color) : undefined;
    this._behaviour = config.behaviour;
    this._perObjectFrustumCulled = this._behaviour !== CullingNone;

    this.verbose && console.time("Instancing");

    if (config.createEntities === false && this._behaviour === CullingNone) {
      this.updateMatrices(config.onInstanceCreation, color);
    } else {
      this.updateMatrices_createInstances(config.onInstanceCreation, color);
    }

    this.verbose && console.timeEnd("Instancing");

    this.updateInstancedAttributes();

    if (this._perObjectFrustumCulled) {
      this.frustumCulled = false; // TODO handle to true only when count is 0 and put bbox 

      if (this._behaviour === CullingStatic) {
        this._bvh = new InstancedMeshBVH(this).build(this.verbose, config.bvhParams);
        if (config.createEntities === false) this.deleteInstancesData();
      } else if (!this.geometry.boundingSphere) {
        this.geometry.computeBoundingSphere();
      }
    }
  }

  private updateMatrices_createInstances(onInstanceCreation: CreateEntityCallback<Entity<T>>, color: Color): void {
    const count = this.count;

    this.instances = new Array(count);
    this._sortedInstances = new Array(count);

    for (let i = 0; i < count; i++) {
      const instance = new InstancedEntity(this, i, color) as Entity<T>;

      if (onInstanceCreation) {
        onInstanceCreation(instance, i);
        instance.forceUpdateMatrix();
      }

      this._sortedInstances[i] = instance;
      this.instances[i] = instance;
    }
  }

  private updateMatrices(onInstanceCreation: CreateEntityCallback<Entity<T>>, color: Color): void {
    const count = this.count;
    const instance = new InstancedEntity(this, 0) as Entity<T>;

    for (let i = 0; i < count; i++) {
      instance._id = i;
      instance._internalId = i;
      if (color !== undefined) instance.setColor(color);

      if (onInstanceCreation) {
        onInstanceCreation(instance, i);
        instance.forceUpdateMatrix();
      }
    }
  }

  private deleteInstancesData(): void {
    const instances = this.instances;

    for (let i = 0, l = instances.length; i < l; i++) {
      const instance = instances[i];
      instance.position = undefined;
      instance.quaternion = undefined;
      instance.scale = undefined;
    }

    this.instances = undefined;
  }

  private updateInstancedAttributes(): void {
    const instancedAttributes = [this.instanceMatrix];
    this.instanceMatrix.setUsage(DynamicDrawUsage);

    if (this.instanceColor) {
      instancedAttributes.push(this.instanceColor);
      this.instanceColor.setUsage(DynamicDrawUsage);
    }

    const attributes = this.geometry.attributes;
    for (const key in attributes) {
      const attr = attributes[key] as InstancedBufferAttribute;
      if (attr.isInstancedBufferAttribute) {
        attr.setUsage(DynamicDrawUsage);
        instancedAttributes.push(attr);
      }
    }

    this._instancedAttributes = instancedAttributes;
  }

  /** @internal */
  public setInstanceVisibility(instance: Entity<T>, value: boolean): void {
    if (!instance._inFrustum) return;

    if (value) {
      this.swapInstances(instance, this.count);
      this.count++;
    } else {
      this.swapInstances(instance, this.count - 1);
      this.count--;
    }

    this.needsUpdate();
  }

  private setInstancesVisibility(show: Entity<T>[], hide: Entity<T>[]): void {
    const hideLengthMinus = hide.length - 1;
    const length = Math.min(show.length, hide.length);

    for (let i = 0; i < length; i++) {
      this.swapDifferentInstances(show[i], hide[hideLengthMinus - i]);
    }

    if (show.length > hide.length) this.showInstances(show, length);
    else if (show.length < hide.length) this.hideInstances(hide, hide.length - length);
  }

  private showInstances(entities: Entity<T>[], count: number): void {
    let startIndex = count;
    let endIndex = entities.length - 1;

    while (endIndex >= startIndex) {
      this.swapInstances(entities[endIndex], this.count);
      endIndex--;
      this.count++;
    }
  }

  private hideInstances(entities: Entity<T>[], count: number): void {
    let startIndex = 0;
    let endIndex = count - 1;

    while (endIndex >= startIndex) {
      this.swapInstances(entities[startIndex], this.count - 1);
      startIndex++;
      this.count--;
    }
  }

  private swapInstances(instanceFrom: Entity<T>, idTo: number): void {
    const instanceTo = this._sortedInstances[idTo];
    if (instanceFrom === instanceTo) return;
    const idFrom = instanceFrom._internalId;

    this.swapAttributes(idFrom, idTo);

    instanceTo._internalId = idFrom;
    instanceFrom._internalId = idTo;

    this._sortedInstances[idTo] = instanceFrom;
    this._sortedInstances[idFrom] = instanceTo;
  }

  private swapDifferentInstances(instanceFrom: Entity<T>, instanceTo: Entity<T>): void {
    const idFrom = instanceFrom._internalId;
    const idTo = instanceTo._internalId;

    this.swapAttributes(idFrom, idTo);

    instanceTo._internalId = idFrom;
    instanceFrom._internalId = idTo;

    this._sortedInstances[idTo] = instanceFrom;
    this._sortedInstances[idFrom] = instanceTo;
  }

  private swapAttributes(idFrom: number, idTo: number): void {
    for (const attr of this._instancedAttributes) {
      this.swapAttribute(attr, idTo, idFrom);
    }
  }

  private swapAttribute(attr: InstancedBufferAttribute, from: number, to: number): void {
    const array = attr.array;
    const size = attr.itemSize;
    const fromOffset = from * size;
    const toOffset = to * size;

    const temp = array[fromOffset];
    array[fromOffset] = array[toOffset];
    array[toOffset] = temp;

    for (let i = 1; i < size; i++) {
      const temp = array[fromOffset + i];
      array[fromOffset + i] = array[toOffset + i];
      array[toOffset + i] = temp;
    }
  }

  /** @internal @LASTREV 162 Matrix4 */
  public composeToArray(position: Vector3, scale: Vector3, quaternion: any, index: number): void {
    const te = this.instanceMatrix.array;
    const offset = index * 16;

    const x = quaternion._x,
      y = quaternion._y,
      z = quaternion._z,
      w = quaternion._w;
    const x2 = x + x,
      y2 = y + y,
      z2 = z + z;
    const xx = x * x2,
      xy = x * y2,
      xz = x * z2;
    const yy = y * y2,
      yz = y * z2,
      zz = z * z2;
    const wx = w * x2,
      wy = w * y2,
      wz = w * z2;

    const sx = scale.x,
      sy = scale.y,
      sz = scale.z;

    te[offset + 0] = (1 - (yy + zz)) * sx;
    te[offset + 1] = (xy + wz) * sx;
    te[offset + 2] = (xz - wy) * sx;
    te[offset + 3] = 0;

    te[offset + 4] = (xy - wz) * sy;
    te[offset + 5] = (1 - (xx + zz)) * sy;
    te[offset + 6] = (yz + wx) * sy;
    te[offset + 7] = 0;

    te[offset + 8] = (xz + wy) * sz;
    te[offset + 9] = (yz - wx) * sz;
    te[offset + 10] = (1 - (xx + yy)) * sz;
    te[offset + 11] = 0;

    te[offset + 12] = position.x;
    te[offset + 13] = position.y;
    te[offset + 14] = position.z;
    te[offset + 15] = 1;
  }

  /**
   * Updates the visibility of instances based on the camera's frustum.
   * This method is responsible for determining which instances are within the camera's view and should be rendered,
   * and which are outside and should be culled to improve performance.
   * @param camera Camera used for rendering.
   */
  public updateCulling(camera: Camera): void {
    //put it on beforeRenderer is not possibile

    if (this._perObjectFrustumCulled === false) return;

    if (this._behaviour === CullingStatic) {
      this._bvh.updateCulling(camera, _show, _hide);
    } else {
      this.updateDynamicCulling(camera);
    }

    if (_show.length > 0 || _hide.length > 0) {
      this.setInstancesVisibility(_show, _hide);
      this.needsUpdate();
    } else if (this._matricesUpdated) {
      this.needsUpdate();
    }

    this._matricesUpdated = false;
    _show.length = 0;
    _hide.length = 0;
  }

  private updateDynamicCulling(camera: Camera): void {
    _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
    _frustum.setFromProjectionMatrix(_projScreenMatrix);

    const radius = this.geometry.boundingSphere.radius;
    const center = this.geometry.boundingSphere.center;

    if (center.x === 0 && center.y === 0 && center.z === 0) {
      this.cullingDynamicOrigin(radius);
    } else {
      this.cullingDynamic(radius, center);
    }
  }

  private cullingDynamicOrigin(radius: number): void {
    const instances = this.instances;

    for (let i = 0, l = this.instances.length; i < l; i++) {
      const instance = instances[i];
      if (!instance._visible) continue;

      _sphere.center.copy(instance.position);
      _sphere.radius = radius * this.getMax(instance.scale);

      if (instance._inFrustum !== (instance._inFrustum = _frustum.intersectsSphere(_sphere))) {
        if (instance._inFrustum) _show.push(instance);
        else _hide.push(instance);
      }

      if (instance._inFrustum && instance._matrixNeedsUpdate) {
        instance.forceUpdateMatrix();
      }
    }
  }

  private cullingDynamic(radius: number, center: Vector3): void {
    const instances = this.instances;

    for (let i = 0, l = this.instances.length; i < l; i++) {
      const instance = instances[i];
      if (!instance._visible) continue;

      _sphere.center.copy(center).applyQuaternion(instance.quaternion).multiply(instance.scale).add(instance.position);
      _sphere.radius = radius * this.getMax(instance.scale);

      if (instance._inFrustum !== (instance._inFrustum = _frustum.intersectsSphere(_sphere))) {
        if (instance._inFrustum) _show.push(instance);
        else _hide.push(instance);
      }

      if (instance._inFrustum && instance._matrixNeedsUpdate) {
        instance.forceUpdateMatrix();
      }
    }
  }

  // this is faster than Math.max(scale.x, scale.y, scale.z)
  private getMax(scale: Vector3): number {
    if (scale.x > scale.y) return scale.x > scale.z ? scale.x : scale.z;
    return scale.y > scale.z ? scale.y : scale.z;
  }

  private needsUpdate(): void {
    for (const attr of this._instancedAttributes) {
      attr.clearUpdateRanges(); // TODO this can be improved updating only right data
      attr.needsUpdate = true;
      attr.addUpdateRange(0, this.count * attr.itemSize);
    }
  }

  public override raycast(raycaster: Raycaster, intersects: Intersection[]): void {
    if (this.material === undefined) return;

    if (this._behaviour === CullingStatic) {
      return this._bvh.raycast(raycaster, intersects);
    } 
    
    this.verbose && console.time("raycast");

    if (this.boundingSphere === null) this.computeBoundingSphere();

    const matrixWorld = this.matrixWorld;
    _sphere.copy(this.boundingSphere);
    _sphere.applyMatrix4(matrixWorld);

    if (!raycaster.ray.intersectsSphere(_sphere)) return;

    _mesh.geometry = this.geometry;
    _mesh.material = this.material;
    const instances = this.instances;

    for (let i = 0, l = instances.length; i < l; i++) {
      if (!instances[i]._visible) continue;

      _instanceWorldMatrix.multiplyMatrices(matrixWorld, instances[i].matrix);
      _mesh.matrixWorld = _instanceWorldMatrix;

      _mesh.raycast(raycaster, _instanceIntersects);

      for (let j = 0, l = _instanceIntersects.length; j < l; j++) { //todo opt this
        const intersect = _instanceIntersects[j];
        intersect.instanceId = i;
        intersect.object = this;
        intersects.push(intersect);
      }

      _instanceIntersects.length = 0;
    }

    this.verbose && console.timeEnd("raycast");
  }
}

const _color = new Color();
const _frustum = new Frustum();
const _projScreenMatrix = new Matrix4();
const _instanceWorldMatrix = new Matrix4();
const _sphere = new Sphere();
const _mesh = new Mesh();
const _instanceIntersects: Intersection[] = []; // remove
const _show: Entity<any>[] = [];
const _hide: Entity<any>[] = [];

// TODO not swap matrix if needsUpdate = true ?
