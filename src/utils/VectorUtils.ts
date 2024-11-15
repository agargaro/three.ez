import { Vector3 } from 'three';

const _v1 = new Vector3();
const _v2 = new Vector3();
const _origin = new Vector3();

export function computeSign(point: Vector3, origin: Vector3, normal: Vector3): number {
  _v1.subVectors(point, origin);
  return Math.sign(_v1.dot(normal));
}

export function haveSameDirection(v1: Vector3, v2: Vector3, tolerance = 1e-2): boolean {
  _v1.copy(v1).normalize();
  _v2.copy(v2).normalize();
  return _v1.dot(_v2) > 1 - tolerance;
}

export function haveOppositeDirection(v1: Vector3, v2: Vector3, tolerance = 1e-2): boolean {
  _v1.copy(v1).normalize();
  _v2.copy(v2).normalize();
  return _v1.dot(_v2) < tolerance - 1;
}

export function perpendicular(dir: Vector3, normal: Vector3, target = new Vector3()) {
  return target.crossVectors(dir, normal);
}

export function perpendicularSigned(dir: Vector3, signPoint: Vector3, normal: Vector3, target = new Vector3()) {
  target.crossVectors(dir, normal);
  return computeSign(signPoint, _origin, target) >= 0 ? target : target.multiplyScalar(-1);
}

export function perpendicularByPoints(p1: Vector3, p2: Vector3, normal: Vector3, target = new Vector3()) {
  _v1.subVectors(p1, p2);
  return target.crossVectors(_v1, normal);
}

export function perpendicularSignedByPoints(p1: Vector3, p2: Vector3, signPoint: Vector3, normal: Vector3, target = new Vector3()) {
  _v1.subVectors(p1, p2);
  return perpendicularSigned(_v1, signPoint, normal, target);
}

export function bisector(v1: Vector3, v2: Vector3, target = new Vector3()) {
  _v1.copy(v1).normalize();
  _v2.copy(v2).normalize();
  return target.addVectors(_v1, _v2).normalize();
}

export function bisectorByPoints(p1: Vector3, p2: Vector3, center: Vector3, target = new Vector3()) {
  return bisector(_v1.subVectors(p1, center), _v2.subVectors(p2, center), target);
}

export function arePointsOnSameSide(origin: Vector3, dir: Vector3, ...points: Vector3[]): boolean {
  const sign = computeSign(points[0], origin, dir);

  for (let i = 1, l = points.length; i < l; i++) {
    if (sign !== computeSign(points[i], origin, dir)) return false;
  }

  return true;
}

export function arePointsOnSameSideByPoints(p1: Vector3, p2: Vector3, normal: Vector3, ...points: Vector3[]): boolean {
  const dir = perpendicularByPoints(p1, p2, normal, _v1);
  const sign = computeSign(points[0], p1, dir);

  for (let i = 1, l = points.length; i < l; i++) {
    if (sign !== computeSign(points[i], p1, dir)) return false;
  }

  return true;
}

// normal must be normalized
export function angleSignedFromOrigin(a: Vector3, b: Vector3, normal: Vector3): number {
  _v1.crossVectors(a, b);
  return Math.atan2(_v1.dot(normal), a.dot(b));
}

// normal must be normalized
export function angleSignedByPoints(p1: Vector3, p2: Vector3, center: Vector3, normal: Vector3): number {
  _v1.subVectors(p1, center);
  _v2.subVectors(p2, center);
  const dotAB = _v1.dot(_v2);
  _v1.crossVectors(_v1, _v2);
  return Math.atan2(_v1.dot(normal), dotAB);
}

export function projectOnLine(point: Vector3, lineA: Vector3, lineB: Vector3, target = new Vector3()): Vector3 {
  _v1.subVectors(lineA, lineB);
  return target.subVectors(point, lineA).projectOnVector(_v1).add(lineA);
}
