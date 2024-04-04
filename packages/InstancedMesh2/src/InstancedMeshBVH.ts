import { Box3, Camera, Intersection, Matrix4, Mesh, Raycaster } from 'three';
import { intersectRayBox } from './BoxIntersection';
import { Frustum } from './Frustum';
import { InstancedEntity } from './InstancedEntity';
import { InstancedMesh2 } from './InstancedMesh2';

export interface BVHParams {
  maxLeaves?: number;
  maxDepth?: number;
  // strategy: SplitType;
}

/** @internal */
export interface Node {
  bbox: Float32Array;
  visibilityMask: number; // -1 = OUT, 0 = IN, > 0 = INTERSECT.
  left?: Node;
  right?: Node;
  leaves?: InstancedEntity[];
}

/** @internal */
export enum SplitType {
  center,
  average,
  SAH,
}

/** @internal */
export class InstancedMeshBVH {
  public root: Node;
  public verbose: boolean;
  protected _target: InstancedMesh2;
  protected _maxLeaves: number;
  protected _maxDepth: number;
  protected _indexes: Uint32Array;
  protected _bboxData: Float32Array;
  protected _frustum = new Frustum();
  protected _show: InstancedEntity[];
  protected _hide: InstancedEntity[];
  protected _projScreenMatrixCache = new Matrix4();

  constructor(instancedMesh: InstancedMesh2) {
    this._target = instancedMesh;
  }

  public build(verbose: boolean, params: BVHParams = {}): this {
    this.verbose = verbose;
    this._maxLeaves = params.maxLeaves ?? 5;
    this._maxDepth = params.maxDepth ?? 30;

    verbose && console.time("Setup BVH data");
    const bbox = this.setup();
    verbose && console.timeEnd("Setup BVH data");

    this.root = { bbox, visibilityMask: 0 }; // 0 = in

    verbose && console.time("Building BVH");
    this.buildNode(this.root, 0, this._target.instances.length, 0);
    verbose && console.timeEnd("Building BVH");

    delete this._bboxData;
    delete this._indexes; // todo remove delete

    return this;
  }

  private setup(): Float32Array {
    const instances = this._target.instances;
    const count = instances.length;
    const indexes = new Uint32Array(count);
    const bboxData = new Float32Array(count * 6);

    if (!this._target.boundingBox) this._target.computeBoundingBox();
    const bboxGeometry = this._target.geometry.boundingBox;

    let xMinBBox = Infinity;
    let yMinBBox = Infinity;
    let zMinBBox = Infinity;
    let xMaxBBox = -Infinity;
    let yMaxBBox = -Infinity;
    let zMaxBBox = -Infinity;

    for (let i = 0; i < count; i++) {
      indexes[i] = i;

      const bbox = _box.copy(bboxGeometry).applyMatrix4(instances[i].matrix);
      const min = bbox.min;
      const max = bbox.max;

      const i6 = i * 6;
      const xMin = min.x;
      const yMin = min.y;
      const zMin = min.z;
      const xMax = max.x;
      const yMax = max.y;
      const zMax = max.z;

      bboxData[i6] = (xMax + xMin) / 2; // center
      bboxData[i6 + 1] = (xMax - xMin) / 2; // size
      bboxData[i6 + 2] = (yMax + yMin) / 2;
      bboxData[i6 + 3] = (yMax - yMin) / 2;
      bboxData[i6 + 4] = (zMax + zMin) / 2;
      bboxData[i6 + 5] = (zMax - zMin) / 2;

      if (xMinBBox > xMin) xMinBBox = xMin;
      if (yMinBBox > yMin) yMinBBox = yMin;
      if (zMinBBox > zMin) zMinBBox = zMin;
      if (xMaxBBox < xMax) xMaxBBox = xMax;
      if (yMaxBBox < yMax) yMaxBBox = yMax;
      if (zMaxBBox < zMax) zMaxBBox = zMax;
    }

    this._bboxData = bboxData;
    this._indexes = indexes;

    return new Float32Array([xMinBBox, yMinBBox, zMinBBox, xMaxBBox, yMaxBBox, zMaxBBox]);
  }

  private buildNode(node: Node, offset: number, count: number, depth: number): void {
    if (count <= this._maxLeaves) {
      node.leaves = this.getLeaves(offset, count);
      return;
    }
    
    if (depth++ >= this._maxDepth) {
      if (this.verbose) console.warn("Maximum depth reached. It is recommended to increase 'maxDepth'.");
      node.leaves = this.getLeaves(offset, count);
      return;
    }

    const bbox = node.bbox;
    const axis = this.getLongestAxis(bbox);
    const bboxLeft = new Float32Array(6);
    const bboxRight = new Float32Array(6);
    const center = (bbox[axis] + bbox[axis + 3]) / 2; // opt location?

    this.createNodes(bboxLeft, bboxRight);

    const leftEndOffset = this.split(axis, offset, count, center, bboxLeft, bboxRight);

    if (leftEndOffset === offset || leftEndOffset === offset + count) {
      node.leaves = this.getLeaves(offset, count);
      return;
    }

    node.left = { bbox: bboxLeft, visibilityMask: 0 }; // 0 = in
    node.right = { bbox: bboxRight, visibilityMask: 0 }; // 0 = in

    this.buildNode(node.left, offset, leftEndOffset - offset, depth);
    this.buildNode(node.right, leftEndOffset, count - leftEndOffset + offset, depth);
  }

  private getLeaves(offset: number, count: number): InstancedEntity[] {
    const array = new Array(count);
    const instances = this._target.instances;

    for (let i = 0; i < count; i++) {
      array[i] = instances[this._indexes[offset + i]];
    }

    return array;
  }

  private getLongestAxis(bbox: Float32Array): number {
    const xSize = bbox[3] - bbox[0]; //todo set min and max near
    const ySize = bbox[4] - bbox[1];
    const zSize = bbox[5] - bbox[2];
    if (xSize > ySize) return xSize > zSize ? 0 : 2;
    return ySize > zSize ? 1 : 2;
  }

  private createNodes(bboxLeft: Float32Array, bboxRight: Float32Array): void {
    bboxLeft[0] = Infinity;
    bboxLeft[1] = Infinity;
    bboxLeft[2] = Infinity;
    bboxLeft[3] = -Infinity;
    bboxLeft[4] = -Infinity;
    bboxLeft[5] = -Infinity;

    bboxRight[0] = Infinity;
    bboxRight[1] = Infinity;
    bboxRight[2] = Infinity;
    bboxRight[3] = -Infinity;
    bboxRight[4] = -Infinity;
    bboxRight[5] = -Infinity;
  }

  private split(axis: number, offset: number, count: number, center: number, bboxLeft: Float32Array, bboxRight: Float32Array) {
    const bboxData = this._bboxData;
    const axis2 = axis * 2;
    let left = offset;
    let right = offset + count - 1;

    while (left <= right) {
      if (bboxData[left * 6 + axis2] > center) {
        while (true) {
          if (bboxData[right * 6 + axis2] < center) {
            this.swap(left, right);
            this.unionBBox(right, bboxRight);
            right--;
            break;
          }
          this.unionBBox(right, bboxRight);
          right--;
          if (right < left) return left;
        }
      }
      this.unionBBox(left, bboxLeft);
      left++;
    }

    return left;
  }

  private swap(left: number, right: number): void {
    const bboxData = this._bboxData;
    const index = this._indexes;

    let temp = index[left];
    index[left] = index[right];
    index[right] = temp;

    const left6 = left * 6;
    const right6 = right * 6;

    for (let i = 0; i < 6; i++) {
      temp = bboxData[left6 + i];
      bboxData[left6 + i] = bboxData[right6 + i];
      bboxData[right6 + i] = temp;
    }
  }

  private unionBBox(index: number, bboxSide: Float32Array): void {
    const bbox = this._bboxData;
    const index6 = index * 6;

    const xMin = bbox[index6] - bbox[index6 + 1];
    const xMax = bbox[index6] + bbox[index6 + 1];
    const yMin = bbox[index6 + 2] - bbox[index6 + 3];
    const yMax = bbox[index6 + 2] + bbox[index6 + 3];
    const zMin = bbox[index6 + 4] - bbox[index6 + 5];
    const zMax = bbox[index6 + 4] + bbox[index6 + 5];

    if (bboxSide[0] > xMin) bboxSide[0] = xMin;
    if (bboxSide[1] > yMin) bboxSide[1] = yMin;
    if (bboxSide[2] > zMin) bboxSide[2] = zMin;
    if (bboxSide[3] < xMax) bboxSide[3] = xMax;
    if (bboxSide[4] < yMax) bboxSide[4] = yMax;
    if (bboxSide[5] < zMax) bboxSide[5] = zMax;
  }

  public updateCulling(camera: Camera, show: InstancedEntity[], hide: InstancedEntity[]): void {
    _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);

    if (this._projScreenMatrixCache.equals(_projScreenMatrix)) return;
    this._projScreenMatrixCache.copy(_projScreenMatrix);
    this.verbose && console.time("Culling");

    this._show = show;
    this._hide = hide;

    this._frustum.setFromProjectionMatrix(_projScreenMatrix);
    this.traverseVisibility(this.root, 0b111111);

    this._show = undefined;
    this._hide = undefined;
    this.verbose && console.timeEnd("Culling");
  }

  private traverseVisibility(node: Node, mask: number): void {
    mask = this._frustum.intesectsBoxMask(node.bbox, mask);

    if (mask >= 1) { // 1+ = intersect
      if (node.leaves === undefined) {
        node.visibilityMask = 1;
        this.traverseVisibility(node.left, mask);
        this.traverseVisibility(node.right, mask);
      } else {
        this.setIntersectionVisibility(node);
      }
    } else if (mask === 0) { // 0 = in
      this.showAll(node);
    } else { // -1 = out
      this.hideAll(node);
    }
  }

  private setIntersectionVisibility(node: Node): void {
    if (node.visibilityMask === -1) { // -1 = out
      const leaves = node.leaves;
      for (let i = 0, l = leaves.length; i < l; i++) {
        if (leaves[i]._visible) this._show.push(leaves[i]);
      }

      node.visibilityMask = 0; // 0 = in
    }
  }

  private showAll(node: Node): void {
    if (node.visibilityMask === 0) return; // 0 = in

    if (node.leaves !== undefined) {
      const leaves = node.leaves;
      for (let i = 0, l = leaves.length; i < l; i++) {
        if (leaves[i]._visible) this._show.push(leaves[i]);
      }
    } else {
      this.showAll(node.left);
      this.showAll(node.right);
    }

    node.visibilityMask = 0; // 0 = in
  }

  private hideAll(node: Node): void {
    if (node.visibilityMask === -1) return; // -1 = out

    if (node.leaves !== undefined) {
      const leaves = node.leaves;
      for (let i = 0, l = leaves.length; i < l; i++) {
        if (leaves[i]._visible) this._hide.push(leaves[i]);
      }
    } else {
      this.hideAll(node.left);
      this.hideAll(node.right);
    }

    node.visibilityMask = -1; // -1 = out
  }

  public raycast(raycaster: Raycaster, intersects: Intersection[]): void {
    this.verbose && console.time("raycast");

    const origin = new Float32Array(3); // cache it?
    const dirInv = new Float32Array(3); // cache it?
    const sign = new Uint8Array(3);

    const ray = raycaster.ray;
    const distance = raycaster.far;

    origin[0] = ray.origin.x;
    origin[1] = ray.origin.y;
    origin[2] = ray.origin.z;

    dirInv[0] = 1 / ray.direction.x;
    dirInv[1] = 1 / ray.direction.y;
    dirInv[2] = 1 / ray.direction.z;

    sign[0] = dirInv[0] < 0 ? 1 : 0;
    sign[1] = dirInv[1] < 0 ? 1 : 0;
    sign[2] = dirInv[2] < 0 ? 1 : 0;

    _mesh.geometry = this._target.geometry;
    _mesh.material = this._target.material;

    this.checkIntersection(raycaster, this.root, origin, dirInv, sign, distance, intersects);
  
    this.verbose && console.timeEnd("raycast");
  }

  private checkIntersection(raycaster: Raycaster, node: Node, origin: Float32Array, dirInv: Float32Array, sign: Uint8Array, distance: number, intersects: Intersection[]): void {
    if (!intersectRayBox(node.bbox, origin, dirInv, sign, distance)) return;
    
    if (node.leaves !== undefined) {
      const leaves = node.leaves;
      const matrixWorld = this._target.matrixWorld;

      for (let i = 0, l = leaves.length; i < l; i++) {
        if (!leaves[i]._visible) continue;

        _instanceWorldMatrix.multiplyMatrices(matrixWorld, leaves[i].matrix);
        _mesh.matrixWorld = _instanceWorldMatrix;

        _mesh.raycast(raycaster, _instanceIntersects);

        for (let j = 0, l = _instanceIntersects.length; j < l; j++) {
          const intersect = _instanceIntersects[j];
          intersect.instanceId = leaves[i]._id;
          intersect.object = this._target;
          intersects.push(intersect);
        }

        _instanceIntersects.length = 0;
      }
    } else {
      this.checkIntersection(raycaster, node.left, origin, dirInv, sign, distance, intersects);
      this.checkIntersection(raycaster, node.right, origin, dirInv, sign, distance, intersects);
    }
  }
}

const _box = new Box3();
const _projScreenMatrix = new Matrix4();
const _instanceWorldMatrix = new Matrix4();
const _mesh = new Mesh();
const _instanceIntersects: Intersection[] = []; // remove?
