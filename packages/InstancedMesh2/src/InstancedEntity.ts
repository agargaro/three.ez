import { Color, ColorRepresentation, Matrix4, Quaternion, Vector3 } from 'three';
import { InstancedMesh2 } from './InstancedMesh2';

/**
 * Represents an individual instance within an InstancedMesh2, similar to an Object3D.
 */
export class InstancedEntity {
  /** A flag indicating that this is an instance of InstancedMeshEntity. */
  public isInstanceEntity = true;
  /** The parent InstancedMesh2 that contains this instance. */
  public readonly parent: InstancedMesh2;
  /** An identifier for this individual instance within an InstancedMesh2. */
  public readonly id: number;
  /** Object's local position. */
  public readonly position: Vector3;
  /** Object's local scale. */
  public readonly scale: Vector3;
  /** Object's local rotation as a Quaternion. */
  public readonly quaternion: Quaternion;
  /** @internal */ public _internalId: number;
  /** @internal */ public _visible = true;
  /** @internal */ public _inFrustum = true;
  /** @internal */ public _matrixNeedsUpdate = false;

  /** Index in the array of InstanceMatrix. */
  public get internalId(): number { return this._internalId }

  /** Object gets rendered if `true`. */
  public get visible(): boolean { return this._visible }
  public set visible(value: boolean) {
    if (value !== this._visible) {
      this.parent.setInstanceVisibility(this, value);
      this._visible = value;
    }
  }

  /** The local transform matrix. */
  public get matrix(): Matrix4 {
    if (this._matrixNeedsUpdate) this.forceUpdateMatrix();
    this.parent.getMatrixAt(this._internalId, _m);
    return _m;
  }

  /**
   * @param parent The parent InstancedMesh2 that contains this instance.
   * @param index The index of this instance within the parent InstancedMesh2.
   * @param color The initial color representation for this instance (optional).
   */
  constructor(parent: InstancedMesh2, index: number, color?: ColorRepresentation) {
    this.id = index;
    this._internalId = index;
    this.parent = parent;

    if (color !== undefined) this.setColor(color);

    this.position = new Vector3();
    this.scale = new Vector3(1, 1, 1);
    this.quaternion = new Quaternion();
  }

  /** 
   * Updates the local transform. 
   * If `CullingDynamic` will update only when it is in the frustum camera.
   */
  public updateMatrix(): void { //TODO this can be improved checking also visibility === false
    if (this.parent._perObjectFrustumCulled === true) {
      this._matrixNeedsUpdate = true;
    } else {
      this.forceUpdateMatrix();
    }
  }

  /** 
   * Force local transformation update.
   */
  public forceUpdateMatrix(): void {
    this.parent.composeToArray(this.position, this.scale, this.quaternion, this._internalId);
    this._matrixNeedsUpdate = false;
  }

  /**
   * Sets the color of this instance.
   * @param color - The color representation to set.
   */
  public setColor(color: ColorRepresentation): void {
    this.parent.setColorAt(this._internalId, _c.set(color));
  }

  /**
   * Gets the color of this instance.
   * @param color - An optional target Color object to store the result (optional).
   * @returns The color representation of this instance.
   */
  public getColor(color = _c): Color {
    this.parent.getColorAt(this._internalId, color);
    return color;
  }

  /**
   * Applies the matrix transform to the object and updates the object's position, rotation, and scale.
   * @param m Matrix to apply.
   * @returns The instance of the object.
   */
  public applyMatrix4(m: Matrix4): this {
    this.matrix.premultiply(m).decompose(this.position, this.quaternion, this.scale);
    return this;
  }

  /**
   * Applies the rotation represented by the quaternion to the object.
   * @param q Quaternion to apply.
   * @returns The instance of the object.
   */
  public applyQuaternion(q: Quaternion): this {
    this.quaternion.premultiply(q);
    return this;
  }

  /**
   * Rotate an object along an axis in object space.
   * @remarks The axis is assumed to be normalized.
   * @param axis A normalized vector in object space.
   * @param angle The angle in radians.
   * @returns The instance of the object.
   */
  public rotateOnAxis(axis: Vector3, angle: number): this {
    _q.setFromAxisAngle(axis, angle);
    this.quaternion.multiply(_q);
    return this;
  }

  /**
   * Rotate an object along an axis in world space.
   * @remarks The axis is assumed to be normalized
   * @remarks Method Assumes no rotated parent.
   * @param axis A normalized vector in world space.
   * @param angle The angle in radians.
   * @returns The instance of the object.
   */
  public rotateOnWorldAxis(axis: Vector3, angle: number): this {
    _q.setFromAxisAngle(axis, angle);
    this.quaternion.premultiply(_q);
    return this;
  }

  /**
   * Rotates the object around _x_ axis in local space.
   * @param rad The angle to rotate in radians. Expects a `Float`.
   * @returns The instance of the object.
   */
  public rotateX(angle: number): this {
    return this.rotateOnAxis(_xAxis, angle);
  }

  /**
   * Rotates the object around _y_ axis in local space.
   * @param rad The angle to rotate in radians. Expects a `Float`.
   * @returns The instance of the object.
   */
  public rotateY(angle: number): this {
    return this.rotateOnAxis(_yAxis, angle);
  }

  /**
   * Rotates the object around _z_ axis in local space.
   * @param rad The angle to rotate in radians. Expects a `Float`.
   * @returns The instance of the object.
   */
  public rotateZ(angle: number): this {
    return this.rotateOnAxis(_zAxis, angle);
  }

  /**
   * Translate an object by distance along an axis in object space
   * @remarks The axis is assumed to be normalized.
   * @param axis A normalized vector in object space.
   * @param distance The distance to translate. Expects a `Float`
   * @returns The instance of the object.
   */
  public translateOnAxis(axis: Vector3, distance: number): this {
    _v1.copy(axis).applyQuaternion(this.quaternion);
    this.position.add(_v1.multiplyScalar(distance));
    return this;
  }

  /**
   * Translates object along x axis in object space by {@link distance} units.
   * @param distance Expects a `Float`.
   * @returns The instance of the object.
   */
  public translateX(distance: number): this {
    return this.translateOnAxis(_xAxis, distance);
  }

  /**
   * Translates object along _y_ axis in object space by {@link distance} units.
   * @param distance Expects a `Float`.
   * @returns The instance of the object.
   */
  public translateY(distance: number): this {
    return this.translateOnAxis(_yAxis, distance);
  }

  /**
   * Translates object along _z_ axis in object space by {@link distance} units.
   * @param distance Expects a `Float`.
   * @returns The instance of the object.
   */
  public translateZ(distance: number): this {
    return this.translateOnAxis(_zAxis, distance);
  }

  // add other Object3D methods
}

const _q = new Quaternion();
const _m = new Matrix4();
const _c = new Color();
const _v1 = new Vector3();
const _xAxis = new Vector3(1, 0, 0);
const _yAxis = new Vector3(0, 1, 0);
const _zAxis = new Vector3(0, 0, 1);
