import { Plane, Matrix4, Vector3, Raycaster, Camera, Object3D } from "three";
import { DragEventExt, InteractionEvents, IntersectionExt } from "./Events";
import { InstancedMesh2 } from "../instancedMesh/InstancedMesh2";
import { InstancedMeshEntity } from "../instancedMesh/InstancedMeshEntity";

/** @internal */
export class DragAndDropManager {
    public isDragging = false;
    public dragButtons = [0];
    private _plane = new Plane();
    private _offset = new Vector3();
    private _intersection = new Vector3();
    private _worldPosition = new Vector3();
    private _inverseMatrix = new Matrix4();
    private _startPosition = new Vector3();
    private _originalIntersection = new Vector3();
    private _target: Object3D;
    private _targetInstanced: InstancedMeshEntity;
    private _targetMatrixWorld = new Matrix4();
    private _dataTransfer: { [x: string]: any };
    private _lastDropTarget: Object3D;
    private _raycaster: Raycaster;
    private _startIntersection: IntersectionExt;

    public get target(): Object3D { return this._target }
    public get findDropTarget(): boolean { return this._target.findDropTarget }

    constructor(raycaster: Raycaster) {
        this._raycaster = raycaster;
    }

    public needsDrag(event: PointerEvent, camera: Camera): boolean {
        if (this.isDragging) return true;
        if (this._target) {
            this.startDragging(event, camera);
            return true;
        }
        return false;
    }

    public performDrag(event: PointerEvent, camera: Camera, dropTargetIntersection: IntersectionExt): void {
        if (!event.isPrimary) return;

        this._plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(this._plane.normal), this._worldPosition.setFromMatrixPosition(this._targetMatrixWorld));
        this._raycaster.ray.intersectPlane(this._plane, this._intersection);
        this._intersection.sub(this._offset).applyMatrix4(this._inverseMatrix);
        this._originalIntersection.copy(this._intersection);

        const dragEvent = this.trigger("drag", event, this._target, true, this._intersection, dropTargetIntersection?.object, dropTargetIntersection);

        if (this._targetInstanced) {
            if (!dragEvent._defaultPrevented && !this._targetInstanced.position.equals(this._intersection)) {
                this._targetInstanced.position.copy(this._intersection);
                this._targetInstanced.updateMatrix();
            }
            this._offset.add(this._originalIntersection.sub(this._targetInstanced.position));
        } else {
            if (!dragEvent._defaultPrevented && !this._target.position.equals(this._intersection)) {
                this._target.position.copy(this._intersection);
            }
            this._offset.add(this._originalIntersection.sub(this._target.position));
        }

        this.dropTargetEvent(event, dropTargetIntersection);
    }

    public initDrag(event: PointerEvent, target: Object3D, instanceId: number, intersection: IntersectionExt): void {
        if (this.isDragButton(event) && target?.draggable) {
            if (instanceId >= 0) {
                if ((target as InstancedMesh2).isInstancedMesh2 && (target as InstancedMesh2).__enabledStateHovered) {
                    this._targetInstanced = (target as InstancedMesh2).instances[instanceId];
                    this._target = target;
                    this._startIntersection = intersection;
                }
            } else if (target.enabledState) {
                this._target = target.dragTarget ?? target;
                this._startIntersection = intersection;
            }
        }
    }

    public startDragging(event: PointerEvent, camera: Camera): void {
        const currentTarget = this._targetInstanced ?? this._target;
        this._target.__dragging = true;
        this.isDragging = true;
        this._startPosition.copy(currentTarget.position);
        this.trigger("dragstart", event, this._target, false, undefined, undefined, this._startIntersection);

        const matrixWorld = currentTarget.matrixWorld;
        this._plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(this._plane.normal), this._worldPosition.setFromMatrixPosition(matrixWorld));
        this._raycaster.ray.intersectPlane(this._plane, this._intersection);
        this._targetMatrixWorld.copy(matrixWorld);
        this._inverseMatrix.copy(currentTarget.parent.matrixWorld).invert();
        this._offset.copy(this._intersection).sub(this._worldPosition.setFromMatrixPosition(matrixWorld));

        if (currentTarget.findDropTarget) {
            this._dataTransfer = {};
        }
    }

    public cancelDragging(event: PointerEvent): boolean {
        if (this._target) {
            const cancelEvent = this.trigger("dragcancel", event, this._target, true, undefined, this._lastDropTarget);
            if (cancelEvent._defaultPrevented) return false;

            if (this._targetInstanced) {
                if (!this._targetInstanced.position.equals(this._startPosition)) {
                    this._targetInstanced.position.copy(this._startPosition);
                    this._targetInstanced.updateMatrix();
                }
            } else if (!this._target.position.equals(this._startPosition)) {
                this._target.position.copy(this._startPosition);
            }

            this.trigger("dragcancel", event, this._lastDropTarget, false, undefined, this._target);

            this.dragEnd(event);
            this.clear();
        }
        return true;
    }

    public stopDragging(event: PointerEvent): boolean {
        if (!event.isPrimary) return false;
        if (!this.isDragging) {
            this._target = undefined;
            this._targetInstanced = undefined;
            return false;
        }

        this.trigger("drop", event, this._lastDropTarget, false, undefined, this._target);

        this.dragEnd(event);
        this.clear();
        return true;
    }

    private dragEnd(event: PointerEvent): void {
        this.trigger("dragend", event, this._target, false, undefined, this._lastDropTarget);
    }

    private clear(): void {
        this.isDragging = false;
        this._target.__dragging = false;
        this._target = undefined;
        this._targetInstanced = undefined;
        this._dataTransfer = undefined;
        this._lastDropTarget = undefined;
    }

    private trigger(type: keyof InteractionEvents, event: PointerEvent, target: Object3D, cancelable: boolean, position?: Vector3, relatedTarget?: Object3D, intersection?: IntersectionExt): DragEventExt {
        if (target) {
            const dragEvent = new DragEventExt(event, cancelable, this._dataTransfer, position, relatedTarget, intersection);
            target.__eventsDispatcher.dispatchDOMAncestor(type, dragEvent);
            return dragEvent;
        }
    }

    public dropTargetEvent(event: PointerEvent, dropTargetIntersection: IntersectionExt): void {
        if (this.findDropTarget) {
            const dropTarget = dropTargetIntersection?.object;
            const lastDropTarget = this._lastDropTarget;
            const dropTargetPoint = dropTargetIntersection?.point;
            this._lastDropTarget = dropTarget;

            if (dropTarget !== lastDropTarget) {
                this.trigger("dragleave", event, lastDropTarget, false, dropTargetPoint, this._target, dropTargetIntersection);
                this.trigger("dragenter", event, dropTarget, false, dropTargetPoint, this._target, dropTargetIntersection);
            }

            this.trigger("dragover", event, dropTarget, false, dropTargetPoint, this._target, dropTargetIntersection);
        }
    }

    private isDragButton(event: PointerEvent): boolean {
        return event.isPrimary && ((event.pointerType === "mouse" && this.dragButtons.some(x => x === event.button)) || event.pointerType !== "mouse");
    }
}
