import { Object3D, WebGLRenderer } from "three";
import { RenderManager } from "../rendering/RenderManager";
import { CursorHandler } from "./CursorManager";
import { DragAndDropManager } from "./DragAndDropManager";
import { InteractionEvents, IntersectionExt, KeyboardEventExt, PointerEventExt, PointerIntersectionEvent, WheelEventExt } from "./Events";
import { InteractionEventsQueue } from "./InteractionEventsQueue";
import { RaycasterManager } from "./RaycasterManager";

/** @internal */
export class InteractionManager {
    public raycasterManager: RaycasterManager;
    public cursorManager: CursorHandler;
    public queue = new InteractionEventsQueue();
    private _intersection: { [x: string]: IntersectionExt } = {};
    private _intersectionDropTarget: IntersectionExt;
    private _renderManager: RenderManager;
    private _dragManager: DragAndDropManager;
    private _primaryIdentifier: number;
    private _pointerDownTarget: { [x: string]: Object3D } = {};
    private _lastPointerDown: { [x: string]: PointerEvent } = {};
    private _lastPointerMove: { [x: string]: PointerEvent } = {};
    private _lastClickTarget: Object3D;
    private _lastClickTimeStamp: DOMHighResTimeStamp;
    private _lastHoveredTarget: { [x: string]: Object3D } = {};
    private _primaryRaycasted: boolean;
    private _mouseDetected = false;
    private _isTapping = false;

    constructor(renderManager: RenderManager) {
        this._renderManager = renderManager;
        const renderer = renderManager.renderer;
        this.registerRenderer(renderer);
        this.cursorManager = new CursorHandler(renderer.domElement);
        this.raycasterManager = new RaycasterManager(renderManager);
        this._dragManager = new DragAndDropManager(this.raycasterManager.raycaster);
    }

    public registerRenderer(renderer: WebGLRenderer): void {
        renderer.domElement.addEventListener("pointermove", (e) => this._mouseDetected = e.pointerType === "mouse");
        renderer.domElement.addEventListener("pointerdown", (e) => this._isTapping = e.pointerType !== "mouse" && e.isPrimary);
        renderer.domElement.addEventListener("pointerup", (e) => this._isTapping &&= !e.isPrimary);
        renderer.domElement.addEventListener("pointercancel", (e) => this._isTapping &&= !e.isPrimary);
        this.bindEvents(renderer);
    }

    private bindEvents(renderer: WebGLRenderer): void {
        const domElement = renderer.domElement;
        domElement.addEventListener("pointerleave", this.enqueue.bind(this));
        domElement.addEventListener("pointerdown", this.enqueue.bind(this));
        domElement.addEventListener("pointermove", this.enqueue.bind(this));
        domElement.addEventListener("pointerup", this.enqueue.bind(this));
        domElement.addEventListener("pointercancel", this.enqueue.bind(this));
        domElement.addEventListener("wheel", this.enqueue.bind(this), { passive: true });
        domElement.tabIndex = -1;
        domElement.addEventListener("keydown", this.enqueue.bind(this));
        domElement.addEventListener("keyup", this.enqueue.bind(this));
    }

    private enqueue(event: Event): void {
        this.queue.enqueue(event);
    }

    public update(): void {
        this._primaryRaycasted = false;
        for (const event of this.queue.dequeue()) {
            this.computeQueuedEvent(event);
        }
        this.pointerIntersection();
        const hoveredObj = this._intersection[this._primaryIdentifier]?.object ?? this._renderManager.activeScene;
        this.cursorManager.update(this._dragManager.target, hoveredObj, this._intersectionDropTarget?.object);
    }

    private raycastScene(event: PointerEvent): void {
        this.handlePrimaryIdentifier(event);
        if (this._dragManager.isDragging) {
            if (!event.isPrimary) return;
            const intersections = this.raycasterManager.getIntersections(event, true, this._dragManager.findDropTarget ? this._dragManager.target : undefined);
            this.setDropTarget(intersections);
        } else {
            const intersections = this.raycasterManager.getIntersections(event, false);
            this._intersection[event.pointerId] = intersections[0];
            const scene = this._renderManager.activeScene;
            if (scene && event.isPrimary) {
                scene.intersections = intersections;
            }
        }
    }

    private handlePrimaryIdentifier(event: PointerEvent): void {
        if (event.isPrimary) {
            this._primaryRaycasted = true;
            if (this._primaryIdentifier !== event.pointerId) {
                this.clearPointerId(this._primaryIdentifier);
                this._primaryIdentifier = event.pointerId;
            }
        }
    }

    private triggerPointer(type: keyof InteractionEvents, event: PointerEvent, target: Object3D, relatedTarget?: Object3D): void {
        if (target?.enabledState) {
            const pointerEvent = new PointerEventExt(event, this._intersection[event.pointerId], relatedTarget);
            target.__eventsDispatcher.dispatchDOM(type, pointerEvent);
        }
    }

    private triggerAncestorPointer(type: keyof InteractionEvents, event: PointerEvent, target: Object3D, relatedTarget?: Object3D, cancelable?: boolean): PointerEventExt {
        if (target?.enabledState) {
            const pointerEvent = new PointerEventExt(event, this._intersection[event.pointerId], relatedTarget, cancelable);
            target.__eventsDispatcher.dispatchDOMAncestor(type, pointerEvent);
            return pointerEvent;
        }
    }

    private triggerAncestorWheel(event: WheelEvent, intersection: IntersectionExt): void {
        const target = intersection?.object ?? this._renderManager.activeScene;
        if (target?.enabledState) {
            const wheelEvent = new WheelEventExt(event, intersection);
            target.__eventsDispatcher.dispatchDOMAncestor("wheel", wheelEvent);
        }
    }

    private triggerAncestorKeyboard(type: keyof InteractionEvents, event: KeyboardEvent, cancelable: boolean): KeyboardEventExt {
        const scene = this._renderManager.activeScene;
        const target = scene.focusedObject ?? scene;
        if (target.enabledState) {
            const keyboardEvent = new KeyboardEventExt(event, cancelable);
            target.__eventsDispatcher.dispatchDOMAncestor(type, keyboardEvent);
            return keyboardEvent;
        }
    }

    private computeQueuedEvent(event: Event): void {
        switch (event.type) {
            case "pointerleave": return this.pointerLeave(event as PointerEvent);
            case "pointermove": return this.pointerMove(event as PointerEvent);
            case "pointerdown": return this.pointerDown(event as PointerEvent);
            case "pointerup": return this.pointerUp(event as PointerEvent);
            case "pointercancel": return this.pointerUp(event as PointerEvent);
            case "wheel": return this.wheel(event as WheelEvent);
            case "keydown": return this.keyDown(event as KeyboardEvent);
            case "keyup": return this.keyUp(event as KeyboardEvent);
            default: console.error("Error: computeEvent failed.");
        }
    }

    public isMainClick(event: PointerEvent): boolean {
        return event.isPrimary && ((event.pointerType === "mouse" && event.button === 0) || event.pointerType !== "mouse");
    }

    private pointerDown(event: PointerEvent): void {
        if (event.pointerType !== "mouse") {
            this.pointerMove(event);
        }
        const intersection = this._intersection[event.pointerId];
        const target = intersection?.object ?? this._renderManager.activeScene;
        const pointerDownEvent = this.triggerAncestorPointer("pointerdown", event, target, undefined, true);
        this._lastPointerDown[event.pointerId] = event;
        this._pointerDownTarget[event.pointerId] = target;

        if (this.isMainClick(event)) {
            target.clicking = true;
        }

        if (!pointerDownEvent?._defaultPrevented && event.isPrimary) {
            const scene = this._renderManager.activeScene;
            const firstFocusable = target?.firstFocusable;
            if (firstFocusable || scene?.blurOnClickOut) {
                scene.focus(firstFocusable);
            }
        }

        this._dragManager.initDrag(event, target, intersection?.instanceId, intersection);
    }

    private pointerLeave(event: PointerEvent): void {
        this._lastPointerMove[event.pointerId] = event;
    }

    private pointerMove(event: PointerEvent): void {
        this._lastPointerMove[event.pointerId] = event;
        this.raycastScene(event);
        const camera = this._renderManager.activeView?.camera;
        if (this._dragManager.needsDrag(event, camera)) {
            this._dragManager.performDrag(event, camera, this._intersectionDropTarget);
        } else {
            this.pointerOutOver(event);
            const target = this._intersection[event.pointerId]?.object ?? this._renderManager.activeScene;
            this.triggerAncestorPointer("pointermove", event, target);
        }
    }

    private pointerIntersection(): void {
        if (this._dragManager.isDragging) {
            if (!this._primaryRaycasted && this._dragManager.findDropTarget && this._renderManager.activeScene?.continousRaycastingDropTarget) {
                const event = this._lastPointerMove[this._primaryIdentifier] || this._lastPointerDown[this._primaryIdentifier];
                this.raycastScene(event);
                this._dragManager.dropTargetEvent(event, this._intersectionDropTarget);
            }
        } else if (this._renderManager.hoveredScene?.continousRaycasting && (this._mouseDetected || this._isTapping)) {
            if (!this._primaryRaycasted) {
                const event = this._lastPointerMove[this._primaryIdentifier] || this._lastPointerDown[this._primaryIdentifier];
                this.raycastScene(event);
                this.pointerOutOver(event);
            }
            const intersection = this._intersection[this._primaryIdentifier];
            const target = intersection?.object ?? this._renderManager.hoveredScene;
            if (target?.enabledState) {
                target.__eventsDispatcher.dispatchDOMAncestor("pointerintersection", new PointerIntersectionEvent(intersection));
            }
        }
    }

    private wheel(event: WheelEvent): void {
        this.triggerAncestorWheel(event, this._intersection[this._primaryIdentifier]);
    }

    private pointerOutOver(event: PointerEvent): void {
        const target = this._intersection[event.pointerId]?.object ?? this._renderManager.activeScene;
        const lastHoveredTarget = this._lastHoveredTarget[event.pointerId];

        if (target !== lastHoveredTarget) {
            if (event.isPrimary) {
                if (lastHoveredTarget) {
                    lastHoveredTarget.hovered = false;
                }
                target.hovered = true;
            }
            this._lastHoveredTarget[event.pointerId] = target;
            this.triggerAncestorPointer("pointerout", event, lastHoveredTarget, target);
            this.triggerPointer("pointerleave", event, lastHoveredTarget, target);
            this.triggerAncestorPointer("pointerover", event, target, lastHoveredTarget);
            this.triggerPointer("pointerenter", event, target, lastHoveredTarget);
        }
    }

    private pointerUp(event: PointerEvent): void {
        const target = this._intersection[event.pointerId]?.object ?? this._renderManager.activeScene;
        const startTarget = this._pointerDownTarget[event.pointerId];

        if (event.pointerType !== "mouse") {
            target.hovered = false;
            this.triggerAncestorPointer("pointerout", event, target);
            this.triggerPointer("pointerleave", event, target);
        }

        if (this._dragManager.stopDragging(event)) {
            this.setDropTarget([]);
        } else {
            this.triggerAncestorPointer("pointerup", event, target, startTarget);
            if (target === startTarget) {
                this.triggerAncestorPointer("click", event, target);
            }
        }

        if (event.type === "pointerup") {
            this.dblClick(event, target);
        }

        if (startTarget && this.isMainClick(event)) {
            startTarget.clicking = false;
        }

        if (event.pointerId !== this._primaryIdentifier) {
            this.clearPointerId(event.pointerId);
        }
    }

    private clearPointerId(pointerId: number): void {
        delete this._intersection[pointerId];
        delete this._pointerDownTarget[pointerId];
        delete this._lastPointerDown[pointerId];
        delete this._lastPointerMove[pointerId];
        delete this._lastHoveredTarget[pointerId];
    }

    private dblClick(event: PointerEvent, target: Object3D): void {
        if (this.isMainClick(event)) {
            if (target === this._lastClickTarget && event.timeStamp - this._lastClickTimeStamp <= 300) {
                this.triggerAncestorPointer("dblclick", event, target);
                this._lastClickTimeStamp = undefined;
            } else {
                this._lastClickTarget = target;
                this._lastClickTimeStamp = event.timeStamp;
            }
        }
    }

    private keyDown(event: KeyboardEvent): void {
        const keyDownEvent = this.triggerAncestorKeyboard("keydown", event, true);
        if (!keyDownEvent?._defaultPrevented) {
            if (event.key === "Escape" || event.key === "Esc") {
                if (this._dragManager.cancelDragging(this._lastPointerMove[this._primaryIdentifier])) {
                    this.setDropTarget([]);
                }
            }
        }
    }

    private keyUp(event: KeyboardEvent): void {
        this.triggerAncestorKeyboard("keyup", event, false);
    }

    private setDropTarget(intersections: IntersectionExt[]): void {
        const int = intersections[0];
        this._intersectionDropTarget = (int?.object.__isDropTarget && int.object.enabledState) ? int : undefined;
        const scene = this._renderManager.activeScene;
        if (scene) {
            scene.intersectionsDropTarget = intersections;
        }
    }

}
