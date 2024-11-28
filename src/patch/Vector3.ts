import { BufferAttribute, Camera, Color, Cylindrical, Euler, MathUtils, Matrix3, Matrix4, Object3D, Quaternion, Spherical, Vector3, Vector3Tuple } from 'three';

/** @internal */
export function applyVec3Patch(target: Object3D): void {
  patchVector(target.position);
  patchVector(target.scale);
  if (target.scene?.__smartRendering) {
    setVec3ChangeCallbackSR(target);
  } else {
    setVec3ChangeCallback(target);
  }
}

/** @internal */
export function setVec3ChangeCallback(target: Object3D): void {
  (target.position as Vector3Ext)._onChangeCallback = () => target.__eventsDispatcher.dispatch('positionchange');
  (target.scale as Vector3Ext)._onChangeCallback = () => target.__eventsDispatcher.dispatch('scalechange');
}

/** @internal */
export function setVec3ChangeCallbackSR(target: Object3D): void {
  (target.position as Vector3Ext)._onChangeCallback = () => {
    target.needsRender = true;
    target.__eventsDispatcher.dispatch('positionchange');
  };
  (target.scale as Vector3Ext)._onChangeCallback = () => {
    target.needsRender = true;
    target.__eventsDispatcher.dispatch('scalechange');
  };
}

function patchVector(vec3: Vector3): void {
  (vec3 as Vector3Ext)._x = vec3.x;
  (vec3 as Vector3Ext)._y = vec3.y;
  (vec3 as Vector3Ext)._z = vec3.z;
  delete vec3.x;
  delete vec3.y;
  delete vec3.z;
  Object.setPrototypeOf(vec3, Vector3Ext.prototype);
}

/** @LASTREV 162 Vector3 */
class Vector3Ext {
  public _x: number;
  public _y: number;
  public _z: number;
  public _onChangeCallback: () => void;
  public isVector3: true;

  public get x(): number { return this._x; }
  public set x(value: number) {
    this._x = value;
    this._onChangeCallback();
  }

  public get y(): number { return this._y; }
  public set y(value: number) {
    this._y = value;
    this._onChangeCallback();
  }

  public get z(): number { return this._z; }
  public set z(value: number) {
    this._z = value;
    this._onChangeCallback();
  }

  public set(x: number, y: number, z: number): this {
    if (z === undefined) z = this._z;
    this._x = x;
    this._y = y;
    this._z = z;
    this._onChangeCallback();
    return this;
  }

  public setScalar(scalar: number): this {
    this._x = scalar;
    this._y = scalar;
    this._z = scalar;
    this._onChangeCallback();
    return this;
  }

  public setX(x: number): this {
    this._x = x;
    this._onChangeCallback();
    return this;
  }

  public setY(y: number): this {
    this._y = y;
    this._onChangeCallback();
    return this;
  }

  public setZ(z: number): this {
    this._z = z;
    this._onChangeCallback();
    return this;
  }

  public setComponent(index: number, value: number): this {
    switch (index) {
      case 0:
        this._x = value;
        break;
      case 1:
        this._y = value;
        break;
      case 2:
        this._z = value;
        break;
      default: throw new Error('index is out of range: ' + index);
    }

    this._onChangeCallback();
    return this;
  }

  public getComponent(index: number): number {
    switch (index) {
      case 0: return this._x;
      case 1: return this._y;
      case 2: return this._z;
      default: throw new Error('index is out of range: ' + index);
    }
  }

  public clone(): Vector3 {
    return new (Vector3.prototype as any).constructor(this._x, this._y, this._z);
  }

  public copy(v: Vector3, update?: boolean): this {
    this._x = v.x;
    this._y = v.y;
    this._z = v.z;
    if (update !== false) this._onChangeCallback();
    return this;
  }

  public add(v: Vector3): this {
    this._x += v.x;
    this._y += v.y;
    this._z += v.z;
    this._onChangeCallback();
    return this;
  }

  public addScalar(s: number): this {
    this._x += s;
    this._y += s;
    this._z += s;
    this._onChangeCallback();
    return this;
  }

  public addVectors(a: Vector3, b: Vector3): this {
    this._x = a.x + b.x;
    this._y = a.y + b.y;
    this._z = a.z + b.z;
    this._onChangeCallback();
    return this;
  }

  public addScaledVector(v: Vector3, s: number): this {
    this._x += v.x * s;
    this._y += v.y * s;
    this._z += v.z * s;
    this._onChangeCallback();
    return this;
  }

  public sub(v: Vector3): this {
    this._x -= v.x;
    this._y -= v.y;
    this._z -= v.z;
    this._onChangeCallback();
    return this;
  }

  public subScalar(s: number): this {
    this._x -= s;
    this._y -= s;
    this._z -= s;
    this._onChangeCallback();
    return this;
  }

  public subVectors(a: Vector3, b: Vector3): this {
    this._x = a.x - b.x;
    this._y = a.y - b.y;
    this._z = a.z - b.z;
    this._onChangeCallback();
    return this;
  }

  public multiply(v: Vector3): this {
    this._x *= v.x;
    this._y *= v.y;
    this._z *= v.z;
    this._onChangeCallback();
    return this;
  }

  public multiplyScalar(scalar: number, update?: boolean): this {
    this._x *= scalar;
    this._y *= scalar;
    this._z *= scalar;
    if (update !== false) this._onChangeCallback();
    return this;
  }

  public multiplyVectors(a: Vector3, b: Vector3): this {
    this._x = a.x * b.x;
    this._y = a.y * b.y;
    this._z = a.z * b.z;
    this._onChangeCallback();
    return this;
  }

  public applyEuler(euler: Euler): this {
    return this.applyQuaternion(_quaternion.setFromEuler(euler));
  }

  public applyAxisAngle(axis: Vector3, angle: number): this {
    return this.applyQuaternion(_quaternion.setFromAxisAngle(axis, angle));
  }

  public applyMatrix3(m: Matrix3, update?: boolean): this {
    const x = this._x, y = this._y, z = this._z;
    const e = m.elements;
    this._x = e[0] * x + e[3] * y + e[6] * z;
    this._y = e[1] * x + e[4] * y + e[7] * z;
    this._z = e[2] * x + e[5] * y + e[8] * z;
    if (update !== false) this._onChangeCallback();
    return this;
  }

  public applyNormalMatrix(m: Matrix3): this {
    return this.applyMatrix3(m, false).normalize();
  }

  public applyMatrix4(m: Matrix4, update?: boolean): this {
    const x = this._x, y = this._y, z = this._z;
    const e = m.elements;
    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
    this._x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    this._y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    this._z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
    if (update !== false) this._onChangeCallback();
    return this;
  }

  public applyQuaternion(q: Quaternion): this {
    const vx = this._x, vy = this._y, vz = this._z;
    const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
    const tx = 2 * (qy * vz - qz * vy);
    const ty = 2 * (qz * vx - qx * vz);
    const tz = 2 * (qx * vy - qy * vx);
    this._x = vx + qw * tx + qy * tz - qz * ty;
    this._y = vy + qw * ty + qz * tx - qx * tz;
    this._z = vz + qw * tz + qx * ty - qy * tx;
    this._onChangeCallback();
    return this;
  }

  public project(camera: Camera): this {
    return this.applyMatrix4(camera.matrixWorldInverse, false).applyMatrix4(camera.projectionMatrix);
  }

  public unproject(camera: Camera): this {
    return this.applyMatrix4(camera.projectionMatrixInverse, false).applyMatrix4(camera.matrixWorld);
  }

  public transformDirection(m: Matrix4): this {
    const x = this._x, y = this._y, z = this._z;
    const e = m.elements;
    this._x = e[0] * x + e[4] * y + e[8] * z;
    this._y = e[1] * x + e[5] * y + e[9] * z;
    this._z = e[2] * x + e[6] * y + e[10] * z;
    return this.normalize();
  }

  public divide(v: Vector3): this {
    this._x /= v.x;
    this._y /= v.y;
    this._z /= v.z;
    this._onChangeCallback();
    return this;
  }

  public divideScalar(scalar: number, update?: boolean): this {
    return this.multiplyScalar(1 / scalar, update);
  }

  public min(v: Vector3): this {
    this._x = Math.min(this._x, v.x);
    this._y = Math.min(this._y, v.y);
    this._z = Math.min(this._z, v.z);
    this._onChangeCallback();
    return this;
  }

  public max(v: Vector3): this {
    this._x = Math.max(this._x, v.x);
    this._y = Math.max(this._y, v.y);
    this._z = Math.max(this._z, v.z);
    this._onChangeCallback();
    return this;
  }

  public clamp(min: Vector3, max: Vector3): this {
    this._x = Math.max(min.x, Math.min(max.x, this._x));
    this._y = Math.max(min.y, Math.min(max.y, this._y));
    this._z = Math.max(min.z, Math.min(max.z, this._z));
    this._onChangeCallback();
    return this;
  }

  public clampScalar(minVal: number, maxVal: number): this {
    this._x = Math.max(minVal, Math.min(maxVal, this._x));
    this._y = Math.max(minVal, Math.min(maxVal, this._y));
    this._z = Math.max(minVal, Math.min(maxVal, this._z));
    this._onChangeCallback();
    return this;
  }

  public clampLength(min: number, max: number): this {
    const length = this.length();
    return this.divideScalar(length || 1, false).multiplyScalar(Math.max(min, Math.min(max, length)));
  }

  public floor(): this {
    this._x = Math.floor(this._x);
    this._y = Math.floor(this._y);
    this._z = Math.floor(this._z);
    this._onChangeCallback();
    return this;
  }

  public ceil(): this {
    this._x = Math.ceil(this._x);
    this._y = Math.ceil(this._y);
    this._z = Math.ceil(this._z);
    this._onChangeCallback();
    return this;
  }

  public round(): this {
    this._x = Math.round(this._x);
    this._y = Math.round(this._y);
    this._z = Math.round(this._z);
    this._onChangeCallback();
    return this;
  }

  public roundToZero(): this {
    this._x = Math.trunc(this._x);
    this._y = Math.trunc(this._y);
    this._z = Math.trunc(this._z);
    this._onChangeCallback();
    return this;
  }

  public negate(): this {
    this._x = -this._x;
    this._y = -this._y;
    this._z = -this._z;
    this._onChangeCallback();
    return this;
  }

  public dot(v: Vector3): number {
    return this._x * v.x + this._y * v.y + this._z * v.z;
  }

  public lengthSq(): number {
    return this._x * this._x + this._y * this._y + this._z * this._z;
  }

  public length(): number {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
  }

  public manhattanLength(): number {
    return Math.abs(this._x) + Math.abs(this._y) + Math.abs(this._z);
  }

  public normalize(update?: boolean): this {
    return this.divideScalar(this.length() || 1, update);
  }

  public setLength(length: number): this {
    return this.normalize(false).multiplyScalar(length);
  }

  public lerp(v: Vector3, alpha: number): this {
    this._x += (v.x - this._x) * alpha;
    this._y += (v.y - this._y) * alpha;
    this._z += (v.z - this._z) * alpha;
    this._onChangeCallback();
    return this;
  }

  public lerpVectors(v1: Vector3, v2: Vector3, alpha: number): this {
    this._x = v1.x + (v2.x - v1.x) * alpha;
    this._y = v1.y + (v2.y - v1.y) * alpha;
    this._z = v1.z + (v2.z - v1.z) * alpha;
    this._onChangeCallback();
    return this;
  }

  public cross(v: Vector3): this {
    return this.crossVectors(this as Vector3, v);
  }

  public crossVectors(a: Vector3, b: Vector3): this {
    const ax = a.x, ay = a.y, az = a.z;
    const bx = b.x, by = b.y, bz = b.z;
    this._x = ay * bz - az * by;
    this._y = az * bx - ax * bz;
    this._z = ax * by - ay * bx;
    this._onChangeCallback();
    return this;
  }

  public projectOnVector(v: Vector3): this {
    const denominator = v.lengthSq();
    if (denominator === 0) return this.set(0, 0, 0);
    const scalar = v.dot(this) / denominator;
    return this.copy(v, false).multiplyScalar(scalar);
  }

  public projectOnPlane(planeNormal: Vector3): this {
    _vector.copy(this).projectOnVector(planeNormal);
    return this.sub(_vector);
  }

  public reflect(normal: Vector3): this {
    return this.sub(_vector.copy(normal).multiplyScalar(2 * this.dot(normal)));
  }

  public angleTo(v: Vector3): number {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0) return Math.PI / 2;
    const theta = this.dot(v) / denominator;
    return Math.acos(MathUtils.clamp(theta, -1, 1));
  }

  public distanceTo(v: Vector3): number {
    return Math.sqrt(this.distanceToSquared(v));
  }

  public distanceToSquared(v: Vector3): number {
    const dx = this._x - v.x, dy = this._y - v.y, dz = this._z - v.z;
    return dx * dx + dy * dy + dz * dz;
  }

  public manhattanDistanceTo(v: Vector3): number {
    return Math.abs(this._x - v.x) + Math.abs(this._y - v.y) + Math.abs(this._z - v.z);
  }

  public setFromSpherical(s: Spherical): this {
    return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
  }

  public setFromSphericalCoords(radius: number, phi: number, theta: number): this {
    const sinPhiRadius = Math.sin(phi) * radius;
    this._x = sinPhiRadius * Math.sin(theta);
    this._y = Math.cos(phi) * radius;
    this._z = sinPhiRadius * Math.cos(theta);
    this._onChangeCallback();
    return this;
  }

  public setFromCylindrical(c: Cylindrical): this {
    return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
  }

  public setFromCylindricalCoords(radius: number, theta: number, y: number): this {
    this._x = radius * Math.sin(theta);
    this._y = y;
    this._z = radius * Math.cos(theta);
    this._onChangeCallback();
    return this;
  }

  public setFromMatrixPosition(m: Matrix4): this {
    const e = m.elements;
    this._x = e[12];
    this._y = e[13];
    this._z = e[14];
    this._onChangeCallback();
    return this;
  }

  public setFromMatrixScale(m: Matrix4): this {
    const sx = this.setFromMatrixColumn(m, 0).length();
    const sy = this.setFromMatrixColumn(m, 1).length();
    const sz = this.setFromMatrixColumn(m, 2).length();
    this._x = sx;
    this._y = sy;
    this._z = sz;
    this._onChangeCallback();
    return this;
  }

  public setFromMatrixColumn(m: Matrix4, index: number): this {
    return this.fromArray(m.elements, index * 4);
  }

  public setFromMatrix3Column(m: Matrix3, index: number): this {
    return this.fromArray(m.elements, index * 3);
  }

  public setFromEuler(e: any): this {
    this._x = e._x;
    this._y = e._y;
    this._z = e._z;
    this._onChangeCallback();
    return this;
  }

  public setFromColor(c: Color): this {
    this._x = c.r;
    this._y = c.g;
    this._z = c.b;
    this._onChangeCallback();
    return this;
  }

  public equals(v: Vector3): boolean {
    return ((v.x === this._x) && (v.y === this._y) && (v.z === this._z));
  }

  public fromArray(array: number[], offset = 0): this {
    this._x = array[offset];
    this._y = array[offset + 1];
    this._z = array[offset + 2];
    this._onChangeCallback();
    return this;
  }

  public toArray(array?: Vector3Tuple, offset?: 0): Vector3Tuple;
  public toArray(array: number[] = [], offset = 0): number[] {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    return array;
  }

  public fromBufferAttribute(attribute: BufferAttribute, index: number): this {
    this._x = attribute.getX(index);
    this._y = attribute.getY(index);
    this._z = attribute.getZ(index);
    this._onChangeCallback();
    return this;
  }

  public random(): this {
    this._x = Math.random();
    this._y = Math.random();
    this._z = Math.random();
    this._onChangeCallback();
    return this;
  }

  public randomDirection(): this {
    const theta = Math.random() * Math.PI * 2;
    const u = Math.random() * 2 - 1;
    const c = Math.sqrt(1 - u * u);
    this.x = c * Math.cos(theta);
    this.y = u;
    this.z = c * Math.sin(theta);
    this._onChangeCallback();
    return this;
  }

  *[Symbol.iterator](): Generator<unknown, any, number> {
    yield this._x;
    yield this._y;
    yield this._z;
  }
}

Vector3Ext.prototype.isVector3 = true;

const _vector = new Vector3();
const _quaternion = new Quaternion();
