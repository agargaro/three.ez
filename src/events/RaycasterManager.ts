import { Mesh, Object3D, Raycaster, Vector2 } from "three";
import { RenderManager } from "../rendering/RenderManager";
import { IntersectionExt } from "./Events";

/**
 * A custom sorting comparison function used for ordering intersections during raycasting.
 * @param a - The first intersection to compare.
 * @param b - The second intersection to compare.
 * @returns A negative value if `a` should precede `b`, a positive value if `b` should precede `a`, or zero if their order is indeterminate.
 */
export type RaycasterSortComparer = (a: IntersectionExt, b: IntersectionExt) => number;

/** @internal */
export class RaycasterManager {
    public raycaster = new Raycaster();
    public raycasterSortComparer: RaycasterSortComparer = (a: IntersectionExt, b: IntersectionExt) => a.distance - b.distance;
    public pointer = new Vector2();
    private _computedPointer = new Vector2();
    private _renderManager: RenderManager;

    constructor(renderManager: RenderManager) {
        this._renderManager = renderManager;
    }

    public getIntersections(event: PointerEvent, isDragging: boolean, excluded?: Object3D): IntersectionExt[] {
        const intersections: IntersectionExt[] = [];
        this.pointer.set(event.offsetX, event.offsetY);
        if (this.getComputedMousePosition(this.pointer, this._computedPointer, isDragging, event.isPrimary)) {
            const scene = this._renderManager.activeScene;
            const camera = this._renderManager.activeView.camera;
            this.raycaster.setFromCamera(this._computedPointer, camera);
            if (!isDragging || excluded) {
                this.raycastObjects(scene, intersections, excluded);
            }
            intersections.sort(this.raycasterSortComparer);
        }
        return intersections;
    }

    private getComputedMousePosition(mouse: Vector2, target: Vector2, isDragging: boolean, isPrimary: boolean): boolean {
        if (!isDragging && isPrimary) {
            this._renderManager.updateActiveView(mouse);
        }
        const activeView = this._renderManager.activeView;
        if (!activeView?.enabled || activeView !== this._renderManager.hoveredView) return false;
        const viewport = activeView.computedViewport;
        target.set((mouse.x - viewport.left) / viewport.width * 2 - 1, (mouse.y - viewport.top) / viewport.height * -2 + 1);
        return true;
    }

    private raycastObjects(object: Object3D, target: IntersectionExt[], excluded?: Object3D): IntersectionExt[] {
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
                intersection.hitbox = intersection.object as Mesh;
                intersection.object = object;
                previousCount++;
            }
        }

        return target;
    }

}
