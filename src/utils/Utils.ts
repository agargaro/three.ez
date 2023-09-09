import { Camera, Plane, Ray, Vector3 } from "three";

/**
 * A utility class providing helper methods.
 */
export class Utils {
	private static _plane = new Plane();
	private static _temp = new Vector3();

	/**
     * Calculates the intersection point of a ray with a plane in world coordinates.
     * @param ray - The ray to intersect with the plane.
     * @param camera - The camera used as a reference for the plane's orientation.
     * @param distance - The distance from the camera to the plane.
     * @returns The intersection point.
     */
	public static getSceneIntersection(ray: Ray, camera: Camera, distance: number): Vector3 {
		this._plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(this._plane.normal), camera.getWorldPosition(this._temp));
		this._plane.translate(this._temp.copy(this._plane.normal).setLength(distance));
		return ray.intersectPlane(this._plane, this._temp);
	}
}
