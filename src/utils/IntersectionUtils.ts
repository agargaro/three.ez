import { Box3, Vector2, Vector2Like, Vector3, Vector3Like } from 'three';

const _v1 = new Vector3();
const _v2 = new Vector3();
const _v3 = new Vector3();
const abs = Math.abs;

/**
  * Computes the intersection between two 2D lines defined by points `a1` and `a2`, and `b1` and `b2`.
  *
  * @param a1 - The first point of the first line.
  * @param a2 - The second point of the first line.
  * @param b1 - The first point of the second line.
  * @param b2 - The second point of the second line.
  * @param target - (Optional) The vector to store the intersection point. If omitted, a new vector will be created.
  * @returns The intersection point of the two lines or `undefined` if the lines are parallel.
  *
  * @see {@link https://paulbourke.net/geometry/pointlineplane/}
  */
export function lineLine2D(a1: Vector2Like, a2: Vector2Like, b1: Vector2Like, b2: Vector2Like, target: Vector2Like = new Vector2()): Vector2Like {
  const x1 = a1.x, y1 = a1.y, x2 = a2.x, y2 = a2.y, x3 = b1.x, y3 = b1.y, x4 = b2.x, y4 = b2.y;
  const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
  if (denominator === 0) return; // parallel
  const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
  return (target as Vector2).set(x1 + ua * (x2 - x1), y1 + ua * (y2 - y1));
}

/**
  * Computes the intersection between two 2D line segments defined by points `a1` and `a2`, and `b1` and `b2`.
  *
  * @param a1 - The first point of the first segment.
  * @param a2 - The second point of the first segment.
  * @param b1 - The first point of the second segment.
  * @param b2 - The second point of the second segment.
  * @param target - (Optional) The vector to store the intersection point. If omitted, a new vector will be created.
  * @returns The intersection point of the two segments or `undefined` if the segments do not intersect.
  *
  * @see {@link https://paulbourke.net/geometry/pointlineplane/}
  */
export function segmentSegment2D(a1: Vector2Like, a2: Vector2Like, b1: Vector2Like, b2: Vector2Like, target: Vector2Like = new Vector2()): Vector2Like {
  const x1 = a1.x, y1 = a1.y, x2 = a2.x, y2 = a2.y, x3 = b1.x, y3 = b1.y, x4 = b2.x, y4 = b2.y;
  const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
  if (denominator === 0) return; // parallel
  const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
  const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return; // intersection is not on segment
  return (target as Vector2).set(x1 + ua * (x2 - x1), y1 + ua * (y2 - y1));
}

/**
  * Computes the intersection between two 3D lines defined by points `a1` and `a2`, and `b1` and `b2`.
  *
  * @param a1 - The first point of the first line.
  * @param a2 - The second point of the first line.
  * @param b1 - The first point of the second line.
  * @param b2 - The second point of the second line.
  * @param target - (Optional) The vector to store the intersection point. If omitted, a new vector will be created.
  * @param EPS - (Optional) The tolerance for evaluating the intersection. The default value is 10^-6.
  * @returns The intersection point of the two lines or `undefined` if the lines are parallel or do not intersect.
  *
  * @see {@link https://paulbourke.net/geometry/pointlineplane/}
  */
export function lineLine3D(a1: Vector3Like, a2: Vector3Like, b1: Vector3Like, b2: Vector3Like, target: Vector3Like = new Vector3(), EPS = 1e-6): Vector3Like {
  _v1.subVectors(a1, b1);
  _v2.subVectors(b2, b1);

  if (abs(_v2.x) < EPS && abs(_v2.y) < EPS && abs(_v2.z) < EPS) return;
  _v3.subVectors(a2, a1);
  if (abs(_v3.x) < EPS && abs(_v3.y) < EPS && abs(_v3.z) < EPS) return;

  const d1343 = _v1.dot(_v2);
  const d4321 = _v2.dot(_v3);
  const d1321 = _v1.dot(_v3);
  const d4343 = _v2.dot(_v2);
  const d2121 = _v3.dot(_v3);

  const denom = d2121 * d4343 - d4321 * d4321;
  if (Math.abs(denom) < EPS) return;
  const numer = d1343 * d4321 - d1321 * d4343;

  const mua = numer / denom;
  const Pa = (target as Vector3).set(a1.x + mua * _v3.x, a1.y + mua * _v3.y, a1.z + mua * _v3.z);

  // const mub = (d1343 + d4321 * mua) / d4343;
  // const Pb = new Vector3(p3.x + mub * p43.x, p3.y + mub * p43.y, p3.z + mub * p43.z);

  return Pa;
}

/**
  * Checks if a 3D line intersects an Axis-Aligned Bounding Box (AABB) defined by `box`.
  *
  * @param rayOrigin - The origin of the line.
  * @param rayDir - The direction of the line.
  * @param box - The AABB to check for intersection with.
  * @returns `true` if the line intersects the AABB, otherwise `false`.
  */
export function lineBox(rayOrigin: Vector3, rayDir: Vector3, box: Box3): boolean {
  const invdirx = 1 / rayDir.x, invdiry = 1 / rayDir.y, invdirz = 1 / rayDir.z;
  let tmin = 0, tmax = Infinity, bmin: number, bmax: number, dmin: number, dmax: number;

  if (invdirx >= 0) { // TODO align this with bvh.js
    bmin = box.min.x;
    bmax = box.max.x;
  } else {
    bmin = box.max.x;
    bmax = box.min.x;
  }

  dmin = (bmin - rayOrigin.x) * invdirx;
  dmax = (bmax - rayOrigin.x) * invdirx;

  tmin = dmin > tmin ? dmin : tmin; // in this order ignore NaN error
  tmax = dmax < tmax ? dmax : tmax;

  if (invdiry >= 0) {
    bmin = box.min.y;
    bmax = box.max.y;
  } else {
    bmin = box.max.y;
    bmax = box.min.y;
  }

  dmin = (bmin - rayOrigin.y) * invdiry;
  dmax = (bmax - rayOrigin.y) * invdiry;

  tmin = dmin > tmin ? dmin : tmin;
  tmax = dmax < tmax ? dmax : tmax;

  if (invdirz >= 0) {
    bmin = box.min.z;
    bmax = box.max.z;
  } else {
    bmin = box.max.z;
    bmax = box.min.z;
  }

  dmin = (bmin - rayOrigin.z) * invdirz;
  dmax = (bmax - rayOrigin.z) * invdirz;

  tmin = dmin > tmin ? dmin : tmin;
  tmax = dmax < tmax ? dmax : tmax;

  return tmin <= tmax;
}

/**
  * Checks if a 3D line segment defined by points `p1` and `p2` intersects an Axis-Aligned Bounding Box (AABB) defined by `box`.
  *
  * @param p1 - The first point of the segment.
  * @param p2 - The second point of the segment.
  * @param box - The AABB to check for intersection with.
  * @returns `true` if the segment intersects the AABB and is within the segment's length, otherwise `false`.
  */
export function segmentBox(p1: Vector3, p2: Vector3, box: Box3): boolean {
  const rayDir = _v1.subVectors(p2, p1).normalize();
  const distance = p1.distanceTo(p2);
  const invdirx = 1 / rayDir.x, invdiry = 1 / rayDir.y, invdirz = 1 / rayDir.z;
  let tmin = 0, tmax = Infinity, bmin: number, bmax: number, dmin: number, dmax: number;

  if (invdirx >= 0) {
    bmin = box.min.x;
    bmax = box.max.x;
  } else {
    bmin = box.max.x;
    bmax = box.min.x;
  }

  dmin = (bmin - p1.x) * invdirx;
  dmax = (bmax - p1.x) * invdirx;

  tmin = dmin > tmin ? dmin : tmin; // in this order ignore NaN error
  tmax = dmax < tmax ? dmax : tmax;

  if (invdiry >= 0) {
    bmin = box.min.y;
    bmax = box.max.y;
  } else {
    bmin = box.max.y;
    bmax = box.min.y;
  }

  dmin = (bmin - p1.y) * invdiry;
  dmax = (bmax - p1.y) * invdiry;

  tmin = dmin > tmin ? dmin : tmin;
  tmax = dmax < tmax ? dmax : tmax;

  if (invdirz >= 0) {
    bmin = box.min.z;
    bmax = box.max.z;
  } else {
    bmin = box.max.z;
    bmax = box.min.z;
  }

  dmin = (bmin - p1.z) * invdirz;
  dmax = (bmax - p1.z) * invdirz;

  tmin = dmin > tmin ? dmin : tmin;
  tmax = dmax < tmax ? dmax : tmax;

  return tmin <= tmax && distance >= tmin;
}
