import { Camera, Object3D, Plane, Ray, Vector3 } from "three";

/**
 * A utility class providing helper methods for various operations.
 */
export class Utils {
	private static _plane = new Plane();
	private static _temp = new Vector3();

	/**
	 * Calculates the intersection point of a ray with a plane in world coordinates.
	 * @param ray - The ray to intersect with the plane.
	 * @param camera - The camera used as a reference for the plane's orientation.
	 * @param distance - The distance from the camera to the plane.
	 * @returns The intersection point as Vector3.
	 */
	public static getSceneIntersection(ray: Ray, camera: Camera, distance: number): Vector3 {
		this._plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(this._plane.normal), camera.getWorldPosition(this._temp));
		this._plane.translate(this._temp.copy(this._plane.normal).setLength(distance));
		return ray.intersectPlane(this._plane, this._temp);
	}

	/**
	 * Set for all children of the target, the draggable flag to true and a dragTarget.
	 * @param target - The Object3D whose children you want to enable as draggable elements.
 	 * @param dragTarget - The Object3D that will act as the drag target for the children.
	 */
	public static setAllChildrenDragTarget(target: Object3D, dragTarget: Object3D): void {
		target.traverse((obj) => {
			obj.draggable = true;
			obj.dragTarget = dragTarget;
		});
	}
}
