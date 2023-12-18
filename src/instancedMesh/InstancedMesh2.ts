import { BufferGeometry, Color, ColorRepresentation, DynamicDrawUsage, InstancedMesh, Material, Matrix4 } from "three";
import { AnimateEvent, DragEventExt, FocusEventExt, IntersectionExt, KeyboardEventExt, PointerEventExt, PointerIntersectionEvent, WheelEventExt } from "../events/Events";
import { InstancedMeshEntity } from "./InstancedMeshEntity";

function overrideProperty(...names: (keyof InstancedMesh2)[]): void {
    for (const name of names) {
        Object.defineProperty(InstancedMesh2.prototype, name, {
            get: function (this: InstancedMesh2) { return this._hoveredInstance[name] },
            set: function () { /* console.warn(`Cannot set ${name} in InstancedMesh2. Set it in InstancedMeshEntity instead.`) */ },
            configurable: true
        });
    }
}

/**
 * Extends the InstancedMesh class to provide individual management of each instance, similar to an Object3D.
 */
export class InstancedMesh2 extends InstancedMesh {
    /** A flag indicating that this is an instance of InstancedMesh2. */
    public isInstancedMesh2 = true;
    /** 
     * An array storing individual InstancedMeshEntity instances associated with this InstancedMesh2.
     * Each element represents a separate instance that can be managed individually.
     */
    public instances: InstancedMeshEntity[] = [];
    /** @internal */ public _hoveredInstance: InstancedMeshEntity;
    /** @internal */ public _focusedInstance: InstancedMeshEntity;
    /** @internal */ public _clickingInstance: InstancedMeshEntity;
    /** @internal */ public _draggingInstance: InstancedMeshEntity;
    /** @internal */ public _tempMatrix = new Matrix4();
    /** @internal */ public _tempColor = new Color();
    /** @internal */ public _animate: boolean;
    /** @internal */ public get __enabledStateHovered(): boolean { return this._hoveredInstance.enabled && super.enabledState }
    private _lastPointerMove: PointerEventExt;
    private _lastClick: PointerEventExt;

    /**
     * Gets the currently hovered instance.
     */
    public get hoveredInstance(): InstancedMeshEntity { return this._hoveredInstance }

    /**
     * Gets the currently focused instance.
     */
    public get focusedInstance(): InstancedMeshEntity { return this._focusedInstance }

    /**
     * Gets the currently clicking instance.
     */
    public get clickingInstance(): InstancedMeshEntity { return this._clickingInstance }

    /**
     * Gets the currently dragging instance.
     */
    public get draggingInstance(): InstancedMeshEntity { return this._draggingInstance }

    /**
     * @param geometry The geometry for the instanced mesh.
     * @param material The material to apply to the instanced mesh.
     * @param count The number of instances to create.
     * @param singleInstanceType The type of individual instance to create.
     * @param animate A flag indicating whether the 'animate' event will be triggered for each instance (optional, default: false).
     * @param color The default color to apply to each instance (optional).
     */
    constructor(geometry: BufferGeometry, material: Material, count: number, singleInstanceType: typeof InstancedMeshEntity, animate = false, color?: ColorRepresentation) {
        super(geometry, material, count);
        color = this._tempColor.set(color);

        this._animate = animate;
        if (animate) {
            this.instanceMatrix.setUsage(DynamicDrawUsage);
        }

        for (let i = 0; i < count; i++) {
            this.instances.push(new singleInstanceType(this, i, color));
        }

        this.on("animate", this.animate.bind(this));
        this.on("pointerintersection", this.pointerIntersection.bind(this));
        this.on("pointermove", this.pointerMove.bind(this));
        this.on("pointerleave", this.pointerLeave.bind(this));
        this.on("focusin", this.focusIn.bind(this));
        this.on("focusout", this.focusOut.bind(this));
        this.on("click", this.click.bind(this));
        this.on("pointerdown", this.pointerDown.bind(this));
        this.on("pointerup", this.pointerUp.bind(this));
        this.on("keydown", this.keyDown.bind(this));
        this.on("keyup", this.keyUp.bind(this));
        this.on("wheel", this.wheel.bind(this));
        this.on("drag", this.drag.bind(this));
        this.on("dragstart", this.dragStart.bind(this));
        this.on("dragend", this.dragEnd.bind(this));
        this.on("dragcancel", this.dragCancel.bind(this));
    }

    /**
     * Set the focus to the specified instance, if focus is enabled for the InstancedMesh2, or clears the focus if no target is provided.
     * @param target Optional. The instance to focus on. If not provided, the focus is cleared.
     */
    public focus(target?: InstancedMeshEntity): void {
        if (!this.__focused) return;

        const focusableObj = target?.focusable ? target : undefined;
        if ((!target || focusableObj?.enabled) && this._focusedInstance !== focusableObj) {
            const oldFocusedObj = this._focusedInstance;
            this._focusedInstance = focusableObj;

            if (oldFocusedObj?.enabled) {
                oldFocusedObj.__focused = false;
                oldFocusedObj.__eventsDispatcher.dispatchDOM("blur", new FocusEventExt<InstancedMeshEntity, InstancedMeshEntity>(focusableObj));
            }

            if (focusableObj) {
                focusableObj.__focused = true
                focusableObj.__eventsDispatcher.dispatchDOM("focus", new FocusEventExt<InstancedMeshEntity, InstancedMeshEntity>(oldFocusedObj));
            }

            this.needsRender = true;
        }
    }

    private pointerOverOut(intersection: IntersectionExt, domEvent: PointerEvent): void {
        const hoveredInstance = this.instances[intersection.instanceId];
        if (this._hoveredInstance !== hoveredInstance) {
            const oldHoveredInstance = this._hoveredInstance;

            this._hoveredInstance = hoveredInstance;
            if (hoveredInstance.enabled) {
                hoveredInstance.__hovered = true;
            }

            if (oldHoveredInstance) {
                oldHoveredInstance.__hovered = false;
                if (oldHoveredInstance.enabled) {
                    const event = new PointerEventExt<InstancedMeshEntity, InstancedMeshEntity>(domEvent, intersection, hoveredInstance);
                    oldHoveredInstance.__eventsDispatcher.dispatchDOM("pointerout", event);
                }
            }

            if (hoveredInstance.enabled) {
                const event = new PointerEventExt<InstancedMeshEntity, InstancedMeshEntity>(domEvent, intersection, oldHoveredInstance);
                hoveredInstance.__eventsDispatcher.dispatchDOM("pointerover", event);
            }
        }
    }

    private animate(e: AnimateEvent): void {
        if (this._animate) {
            for (let i = 0; i < this.count; i++) {
                this.instances[i].__eventsDispatcher.dispatch("animate", e);
            }
        }
    }

    private pointerIntersection(e: PointerIntersectionEvent): void {
        this.pointerOverOut(e.intersection, this._lastPointerMove?.domEvent);
        if (this._hoveredInstance.enabled) {
            const event = new PointerIntersectionEvent<InstancedMeshEntity>(e.intersection);
            this._hoveredInstance.__eventsDispatcher.dispatchDOM("pointerintersection", event);
        }
    }

    private pointerMove(e: PointerEventExt): void {
        this._lastPointerMove = e;
        this.pointerOverOut(e.intersection, e.domEvent);
        if (this._hoveredInstance.enabled) {
            const event = new PointerEventExt<InstancedMeshEntity, InstancedMeshEntity>(e.domEvent, e.intersection);
            this._hoveredInstance.__eventsDispatcher.dispatchDOM("pointermove", event);
        }
    }

    private pointerLeave(e: PointerEventExt): void {
        const instance = this._hoveredInstance;
        instance.__hovered = false;
        this._hoveredInstance = undefined;
        if (instance.enabled) {
            const event = new PointerEventExt<InstancedMeshEntity, InstancedMeshEntity>(e.domEvent, e.intersection);
            instance.__eventsDispatcher.dispatchDOM("pointerout", event);
        }
    }

    private focusIn(): void {
        this.focus(this._hoveredInstance);
    }

    private focusOut(): void {
        this.focus();
    }

    private click(e: PointerEventExt): void {
        const target = this.instances[e.intersection.instanceId];
        if (target.enabled) {
            const event = new PointerEventExt<InstancedMeshEntity, InstancedMeshEntity>(e.domEvent, e.intersection);
            target.__eventsDispatcher.dispatchDOM("click", event);
            if (e.intersection.instanceId === this._lastClick?.intersection.instanceId && e.timeStamp - this._lastClick.timeStamp <= 300) {
                const event = new PointerEventExt<InstancedMeshEntity, InstancedMeshEntity>(e.domEvent, e.intersection);
                target.__eventsDispatcher.dispatchDOM("dblclick", event);
                this._lastClick = undefined;
            } else {
                this._lastClick = e;
            }
        }
    }

    private pointerDown(e: PointerEventExt): void {
        const target = this.instances[e.intersection.instanceId];
        if (target.enabled) {
            this._clickingInstance = target;
            target.__clicking = true;
            const event = new PointerEventExt<InstancedMeshEntity, InstancedMeshEntity>(e.domEvent, e.intersection, undefined, true);
            target.__eventsDispatcher.dispatchDOM("pointerdown", event);
            if (!event._defaultPrevented) {
                this.focus(target);
            } else {
                e.preventDefault();
            }
        }
    }

    private pointerUp(e: PointerEventExt): void {
        const instance = this._clickingInstance;
        if (instance) {
            instance.__clicking = false;
            if (this._clickingInstance.enabled) {
                const event = new PointerEventExt<InstancedMeshEntity, InstancedMeshEntity>(e.domEvent, e.intersection);
                instance.__eventsDispatcher.dispatchDOM("pointerup", event);
            }
            this._clickingInstance = undefined;
        }
    }

    private keyDown(e: KeyboardEventExt): void {
        if (this._focusedInstance.enabled) {
            const event = new KeyboardEventExt<InstancedMeshEntity>(e.domEvent, true);
            this._focusedInstance.__eventsDispatcher.dispatchDOM("keydown", event);
            if (event._defaultPrevented) {
                e.preventDefault();
            }
        }
    }

    private keyUp(e: KeyboardEventExt): void {
        if (this._focusedInstance.enabled) {
            const event = new KeyboardEventExt<InstancedMeshEntity>(e.domEvent, false);
            this._focusedInstance.__eventsDispatcher.dispatchDOM("keyup", event);
        }
    }

    private wheel(e: WheelEventExt): void {
        if (this._hoveredInstance.enabled) {
            const event = new WheelEventExt<InstancedMeshEntity>(e.domEvent, e.intersection);
            this._hoveredInstance.__eventsDispatcher.dispatchDOM("wheel", event);
        }
    }

    private drag(e: DragEventExt): void {
        const event = new DragEventExt<InstancedMeshEntity>(e.domEvent, true, e.dataTransfer, e.position, e.relatedTarget, e.intersection);
        this._draggingInstance.__eventsDispatcher.dispatchDOM("drag", event);
        if (event._defaultPrevented) {
            e.preventDefault();
        }
    }

    private dragStart(e: DragEventExt): void {
        this._draggingInstance = this.instances[e.intersection.instanceId];
        this._draggingInstance.__dragging = true;
        const event = new DragEventExt<InstancedMeshEntity>(e.domEvent, false, e.dataTransfer, e.position, e.relatedTarget, e.intersection);
        this._draggingInstance.__eventsDispatcher.dispatchDOM("dragstart", event);
    }

    private dragEnd(e: DragEventExt): void {
        const instance = this._draggingInstance;
        instance.__dragging = false;
        this._draggingInstance = undefined;
        const event = new DragEventExt<InstancedMeshEntity>(e.domEvent, false, e.dataTransfer, e.position, e.relatedTarget, e.intersection);
        instance.__eventsDispatcher.dispatchDOM("dragend", event);
        this.computeBoundingSphere();
    }

    private dragCancel(e: DragEventExt): void {
        const event = new DragEventExt<InstancedMeshEntity>(e.domEvent, e.cancelable, e.dataTransfer, e.position, e.relatedTarget, e.intersection);
        this._draggingInstance.__eventsDispatcher.dispatchDOM("dragcancel", event);
        if (event._defaultPrevented) {
            e.preventDefault();
        }
    }
}

overrideProperty("cursor", "cursorDrag", "cursorDrop", "draggable", "findDropTarget");

// TODO pointeridPrimary on focus and assign hovered, clicking, ecc.
