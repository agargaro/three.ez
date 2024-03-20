import { Object3D, Raycaster, Vector2 } from "three";
import { IntersectionExt } from "./Events";
import { Hitbox } from "./Hitbox";
import { ViewManager } from "../../ViewManager/src/View";

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
    public pointerOnCanvas = false;
    private _computedPointer = new Vector2();
    private _viewManager: ViewManager;

    constructor(viewManager: ViewManager) {
        this._viewManager = viewManager;
    }

    public getIntersections(event: PointerEvent, isDragging: boolean, excluded?: Object3D): IntersectionExt[] {
        const intersections: IntersectionExt[] = [];
        
        this.pointer.set(event.offsetX, event.offsetY);
        
        if (this.getComputedMousePosition(this.pointer, this._computedPointer, isDragging, event.isPrimary)) {
            const scene = this._viewManager.activeScene;
            const camera = this._viewManager.activeView.camera;
            
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
            this._viewManager.updateActiveView(mouse, this.pointerOnCanvas);
        }

        const activeView = this._viewManager.activeView;
        
        if (!activeView?.enabled || activeView !== this._viewManager.hoveredView) return false;
        
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
                intersection.hitbox = intersection.object as Hitbox;
                intersection.object = object;
                previousCount++;
            }
        }

        return target;
    }
}
