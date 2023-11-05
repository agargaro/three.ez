import { Box3, Vector3 } from 'three';
import { ObjVec3, TEMP, VectorObject3D, VectorUtils } from './VectorUtils';

/**
 * Class that provides a set of utilities for calculating intersections between 2D and 3D geometric objects.
 */
export class IntersectionUtils {

    // https://paulbourke.net/geometry/pointlineplane/
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
    public static line_line_2D(a1: VectorObject3D, a2: VectorObject3D, b1: VectorObject3D, b2: VectorObject3D, target = new Vector3()): Vector3 {
        const [a1c, a2c, b1c, b2c] = VectorUtils.getPositionsFromObject3D([a1, a2, b1, b2]);
        const denominator = (b2c.y - b1c.y) * (a2c.x - a1c.x) - (b2c.x - b1c.x) * (a2c.y - a1c.y);
        if (denominator === 0) return; // parallel
        let ua = ((b2c.x - b1c.x) * (a1c.y - b1c.y) - (b2c.y - b1c.y) * (a1c.x - b1c.x)) / denominator;
        return target.set(a1c.x + ua * (a2c.x - a1c.x), a1c.y + ua * (a2c.y - a1c.y), 0);
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
    public static segment_segment_2D(a1: VectorObject3D, a2: VectorObject3D, b1: VectorObject3D, b2: VectorObject3D, target = new Vector3()): Vector3 {
        const [a1c, a2c, b1c, b2c] = VectorUtils.getPositionsFromObject3D([a1, a2, b1, b2]);
        const denominator = (b2c.y - b1c.y) * (a2c.x - a1c.x) - (b2c.x - b1c.x) * (a2c.y - a1c.y);
        if (denominator === 0) return; // parallel
        let ua = ((b2c.x - b1c.x) * (a1c.y - b1c.y) - (b2c.y - b1c.y) * (a1c.x - b1c.x)) / denominator;
        let ub = ((a2c.x - a1c.x) * (a1c.y - b1c.y) - (a2c.y - a1c.y) * (a1c.x - b1c.x)) / denominator;
        if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return;
        return target.set(a1c.x + ua * (a2c.x - a1c.x), a1c.y + ua * (a2c.y - a1c.y), 0);
    }

    /**
     * Computes the intersection between two 3D lines defined by points `a1` and `a2`, and `b1` and `b2`.
     *
     * @param a1 - The first point of the first line.
     * @param a2 - The second point of the first line.
     * @param b1 - The first point of the second line.
     * @param b2 - The second point of the second line.
     * @param target - (Optional) The vector to store the intersection point. If omitted, a new vector will be created.
     * @param tolerance - (Optional) The tolerance for evaluating the intersection. The default value is 10^-6.
     * @returns The intersection point of the two lines or `undefined` if the lines are parallel or do not intersect.
     * 
     * @see {@link https://paulbourke.net/geometry/pointlineplane/}
     */
    public static line_line_3D(a1: ObjVec3, a2: ObjVec3, b1: ObjVec3, b2: ObjVec3, target = new Vector3(), tolerance = 10 ** -6): Vector3 {
        const [p1c, p2c, p3c, p4c] = VectorUtils.getPositionsFromObject3D([a1, a2, b1, b2]);

        const p13 = TEMP[0].subVectors(p1c, p3c);
        const p43 = TEMP[1].subVectors(p4c, p3c);

        if (p43.lengthSq() < tolerance) return;
        const p21 = TEMP[2].subVectors(p2c, p1c);
        if (p21.lengthSq() < tolerance) return;

        const d1343 = p13.x * p43.x + p13.y * p43.y + p13.z * p43.z;
        const d4321 = p43.x * p21.x + p43.y * p21.y + p43.z * p21.z;
        const d1321 = p13.x * p21.x + p13.y * p21.y + p13.z * p21.z;
        const d4343 = p43.x * p43.x + p43.y * p43.y + p43.z * p43.z;
        const d2121 = p21.x * p21.x + p21.y * p21.y + p21.z * p21.z;

        const denom = d2121 * d4343 - d4321 * d4321;
        if (Math.abs(denom) < tolerance) return;

        const numer = d1343 * d4321 - d1321 * d4343;

        const mua = numer / denom;
        const Pa = target.set(p1c.x + mua * p21.x, p1c.y + mua * p21.y, p1c.z + mua * p21.z);

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
    public static line_boxAABB(rayOrigin: Vector3, rayDir: Vector3, box: Box3): boolean {
        const invdirx = 1 / rayDir.x, invdiry = 1 / rayDir.y, invdirz = 1 / rayDir.z;
        let tmin = 0, tmax = Infinity, bmin: number, bmax: number, dmin: number, dmax: number;

        if (invdirx >= 0) {
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
    public static segment_boxAABB(p1: Vector3, p2: Vector3, box: Box3): boolean {
        const rayDir = TEMP[0].subVectors(p2, p1).normalize();
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
}
