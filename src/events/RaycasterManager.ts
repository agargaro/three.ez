import { Object3D, PerspectiveCamera, Raycaster, Vector2 } from 'three';
import { RenderManager } from '../rendering/RenderManager.js';
import { EzIntersection } from './Events.js';
import { Hitbox } from './Hitbox.js';

/**
 * A custom sorting comparison function used for ordering intersections during raycasting.
 * @param a - The first intersection to compare.
 * @param b - The second intersection to compare.
 * @returns A negative value if `a` should precede `b`, a positive value if `b` should precede `a`, or zero if their order is indeterminate.
 */
export type RaycasterSortComparer = (a: EzIntersection, b: EzIntersection) => number;

/** @internal */
export class RaycasterManager {
  public raycaster = new Raycaster();
  public raycasterSortComparer: RaycasterSortComparer = (a: EzIntersection, b: EzIntersection) => a.distance - b.distance;
  public pointer = new Vector2();
  public pointerOnCanvas = false;
  private _computedPointer = new Vector2();
  private _renderManager: RenderManager;

  constructor(renderManager: RenderManager) {
    this._renderManager = renderManager;
  }

  public getIntersections(event: PointerEvent, isDragging: boolean, excluded?: Object3D): EzIntersection[] {
    const intersections: EzIntersection[] = [];
    const canvasBounds = this._renderManager.renderer.domElement.getBoundingClientRect();
    this.pointer.set(event.clientX - canvasBounds.left, event.clientY - canvasBounds.top);
    if (this.getComputedMousePosition(this.pointer, this._computedPointer, isDragging, event.isPrimary)) {
      const scene = this._renderManager.activeScene;
      const camera = this._renderManager.activeView.camera;
      this.raycaster.setFromCamera(this._computedPointer, camera);
      this.raycaster.far = (camera as PerspectiveCamera).far ?? Infinity;
      if (!isDragging || excluded) {
        this.raycastObjects(scene, intersections, excluded);
      }
      intersections.sort(this.raycasterSortComparer);
    }
    return intersections;
  }

  private getComputedMousePosition(mouse: Vector2, target: Vector2, isDragging: boolean, isPrimary: boolean): boolean {
    if (!isDragging && isPrimary) {
      this._renderManager.updateActiveView(mouse, this.pointerOnCanvas);
    }
    const activeView = this._renderManager.activeView;
    if (!activeView?.enabled || activeView !== this._renderManager.hoveredView) return false;
    const viewport = activeView.computedViewport;
    target.set((mouse.x - viewport.left) / viewport.width * 2 - 1, (mouse.y - viewport.top) / viewport.height * -2 + 1);
    return true;
  }

  private raycastObjects(object: Object3D, target: EzIntersection[], excluded?: Object3D): EzIntersection[] {
    if (object === excluded) return;

    if (object.interceptByRaycaster && object.visible) {
      for (const obj of object.children) {
        this.raycastObjects(obj, target, excluded);
      }

      let previousCount = target.length;

      if (object.hitboxes) {
        for (const hitbox of object.hitboxes) {
          hitbox.updateMatrix();
          hitbox.matrixWorld.multiplyMatrices(object.matrixWorld, hitbox.matrix);
          this.raycaster.intersectObject(hitbox, false, target);
        }
      } else {
        this.raycaster.intersectObject(object, false, target);
      }

      while (target.length > previousCount) {
        const intersection = target[previousCount];
        intersection.hitbox = intersection.object as Hitbox;
        intersection.object = object;
        previousCount++;
      }
    }

    return target;
  }
}
