import { Camera, Object3D, Plane, Ray, SkinnedMesh, Vector3 } from 'three';

/**
 * A type definition representing a collection of 3D nodes where each node is identified by a unique string key.
 */
export type Nodes = { [x: string]: Object3D };

const _plane = new Plane();
const _temp = new Vector3();

/**
 * Calculates the intersection point of a ray with a plane in world coordinates.
 * @param ray - The ray to intersect with the plane.
 * @param camera - The camera used as a reference for the plane's orientation.
 * @param distance - The distance from the camera to the plane.
 * @returns The intersection point as Vector3.
 */
export function getSceneIntersection(ray: Ray, camera: Camera, distance: number): Vector3 | null {
  _plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(_plane.normal), camera.getWorldPosition(_temp));
  _plane.translate(_temp.copy(_plane.normal).setLength(distance));
  return ray.intersectPlane(_plane, _temp);
}

/**
 * Set for all children of the target, the draggable flag to true and a dragTarget.
 * @param target - The Object3D whose children you want to enable as draggable elements.
 * @param dragTarget - The Object3D that will act as the drag target for the children.
 */
export function setChildrenDragTarget(target: Object3D, dragTarget: Object3D): void {
  target.traverse((obj) => {
    obj.draggable = true;
    obj.dragTarget = dragTarget;
  });
}

/**
 * Computes bounding spheres for child objects within the specified Object3D hierarchy.
 * @param target - The root Object3D from which to start computing bounding spheres for children.
 */
export function computeBoundingSphereChildren(target: Object3D): void {
  target.traverse((obj) => {
    obj.updateMatrixWorld();
    if ((obj as SkinnedMesh).computeBoundingSphere) {
      (obj as SkinnedMesh).computeBoundingSphere();
    }
  });
}

/**
 * Retrieves a map of objects in the scene graph (Object3D) starting from a root object.
 * Each object is mapped using its unique name as the key in the resulting object.
 * @param target - The root object to begin generating the object map from.
 * @returns An object containing objects mapped by their names.
 */
export function getNodes(target: Object3D): Nodes {
  return generateNodesFromObject(target, {}, {});
}

function generateNodesFromObject(object: Object3D, nodes: Nodes, nameCollision: { [x: string]: number }): Nodes {
  const name = getNodeName(object, nameCollision);
  nodes[name] = object;

  for (const child of object.children) {
    generateNodesFromObject(child, nodes, nameCollision);
  }

  return nodes;
}

function getNodeName(object: Object3D, nameCollision: { [x: string]: number }): string {
  const key = object.name;
  if (nameCollision[key] === undefined) {
    nameCollision[key] = 0;
    return key;
  }
  return `${key}_${++nameCollision[key]}`;
}
