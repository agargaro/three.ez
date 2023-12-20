import { BufferGeometry, Camera, Color, ColorRepresentation, DynamicDrawUsage, Frustum, InstancedBufferAttribute, InstancedMesh, Material, Matrix4, Sphere, Vector3 } from "three";
import { AnimateEvent, DragEventExt, FocusEventExt, IntersectionExt, KeyboardEventExt, PointerEventExt, PointerIntersectionEvent, WheelEventExt } from "../events/Events";
import { InstancedEntity, SharedData } from "./InstancedEntity";

type EntityCallback<T> = (obj: T, index: number) => void;

function overrideProperty(...names: (keyof InstancedMesh2)[]): void {
    for (const name of names) {
        Object.defineProperty(InstancedMesh2.prototype, name, {
            get: function (this: InstancedMesh2) { return this._hoveredInstance[name] },
            set: function () { /* console.warn(`Cannot set ${name} in InstancedMesh2. Set it in InstancedEntity instead.`) */ },
            configurable: true
        });
    }
}

const _color = new Color();
const _frustum = new Frustum();
const _projScreenMatrix = new Matrix4();
const _sphere = new Sphere();

/**
 * Extends the InstancedMesh class to provide individual management of each instance, similar to an Object3D.
 */
export class InstancedMesh2<T extends InstancedEntity = InstancedEntity, G extends BufferGeometry = BufferGeometry, M extends Material = Material> extends InstancedMesh<G, M> {
    /** A read-only string to check `this` object type. */
    public declare type: 'InstancedMesh2';
    /** A flag indicating that this is an instance of InstancedMesh2. */
    public isInstancedMesh2 = true;
    /** 
     * An array storing individual InstancedEntity instances associated with this InstancedMesh2.
     * Each element represents a separate instance that can be managed individually.
     */
    public instances: T[] = [];
    /** */
    public instancedAttributes: InstancedBufferAttribute[];
    /** @internal */ public _perObjectFrustumCulled = true;
    /** @internal */ public _internalInstances: T[];
    /** @internal */ public _hoveredInstance: InstancedEntity;
    /** @internal */ public _focusedInstance: InstancedEntity;
    /** @internal */ public _clickingInstance: InstancedEntity;
    /** @internal */ public _draggingInstance: InstancedEntity;
    /** @internal */ public _animate: boolean;
    /** @internal */ public get __enabledStateHovered(): boolean { return this._hoveredInstance.enabled && super.enabledState }
    private _sortComparer = (a: InstancedEntity, b: InstancedEntity) => a._internalId - b._internalId;
    private _lastPointerMove: PointerEventExt;
    private _lastClick: PointerEventExt;

    /**  */
    public get perObjectFrustumCulled(): boolean { return this._perObjectFrustumCulled }
    public set perObjectFrustumCulled(value: boolean) {
        if (this._perObjectFrustumCulled === value) return;
        if (value) {
            this.enablePerObjectFrustumCulled();
        } else {
            this.disablePerObjectFrustumCulled();
        }
        this._perObjectFrustumCulled = value;
    }

    /** Gets the currently hovered instance. */
    public get hoveredInstance(): InstancedEntity { return this._hoveredInstance }
    /** Gets the currently focused instance. */
    public get focusedInstance(): InstancedEntity { return this._focusedInstance }
    /** Gets the currently clicking instance. */
    public get clickingInstance(): InstancedEntity { return this._clickingInstance }
    /** Gets the currently dragging instance. */
    public get draggingInstance(): InstancedEntity { return this._draggingInstance }

    /**
     * @param geometry The geometry for the instanced mesh.
     * @param material The material to apply to the instanced mesh.
     * @param count The number of instances to create.
     * @param onCreateEntity 
     * @param animate 
     * @param color The default color to apply to each instance (optional).
     * @param shared 
     * @param visible
     */
    constructor(geometry: G, material: M, count: number, onCreateEntity?: EntityCallback<T>, animate = false, color?: ColorRepresentation, shared: SharedData[] = []/* , visible = true */) {
        super(geometry, material, count);
        if (color !== undefined) color = _color.set(color);
        // if (visible === false) this.count = 0;
        this.instances = new Array(count);
        this._internalInstances = new Array(count);

        for (let i = 0; i < count; i++) {
            const instance = new InstancedEntity(this, i, color, shared[i]/* , visible */) as T;
            if (onCreateEntity) onCreateEntity(instance, i);
            //handle visible in onCreateEntity.. fix
            this._internalInstances[i] = instance;
            this.instances[i] = instance;
        }

        this.updateInstancedAttributes();
        if (!this.geometry.boundingSphere) this.geometry.computeBoundingSphere();
        this.frustumCulled = false;

        this._animate = animate;
        if (animate) {
            this.instanceMatrix.setUsage(DynamicDrawUsage);
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

    private updateInstancedAttributes(): void {
        const array = [this.instanceMatrix];
        if (this.instanceColor) array.push(this.instanceColor);

        const attributes = this.geometry.attributes;
        for (const key in attributes) {
            if ((attributes[key] as InstancedBufferAttribute as any).isInstancedBufferAttribute === true)
                // FIX d.ts and remove any
                array.push(attributes[key] as InstancedBufferAttribute);
        }

        this.instancedAttributes = array;
    }

    /** @internal */
    public setInstanceVisibility(instance: T, value: boolean): void {
        if (value === (instance._visible && (!this._perObjectFrustumCulled || instance._inFrustum))) return;
        if (value === true) {
            this.swapInstance(instance, this.count);
            this.count++;
        } else {
            this.swapInstance(instance, this.count - 1);
            this.count--;
        }
    }

    private setInstancesVisibility(show: T[], hide: T[]): void {
        const hideLengthMinus = hide.length - 1;
        const length = Math.min(show.length, hide.length);

        console.log(show);
        console.log(hide);
        console.log("------");

        show = show.sort(this._sortComparer); // check if this sort is good
        hide = hide.sort(this._sortComparer);

        for (let i = 0; i < length; i++) {
            this.swapInstance2(show[i], hide[hideLengthMinus - i]);
        }

        this.needsUpdate();

        if (show.length === hide.length) return;

        if (show.length > hide.length) this.showInstances(show, length);
        else this.hideInstances(hide, hide.length - length);
    }

    private showInstances(entities: T[], count: number): void {
        // add opt if needs to show all?
        let startIndex = count;
        let endIndex = entities.length - 1;

        while (endIndex >= startIndex) {
            if (entities[startIndex]._internalId === this.count) {
                startIndex++;
            } else {
                this.swapInstance(entities[endIndex], this.count);
                endIndex--;
            }
            this.count++;
        }
    }

    private hideInstances(entities: T[], count: number): void {
        // add opt if needs to hide all?
        let startIndex = 0;
        let endIndex = count - 1;

        while (endIndex >= startIndex) {
            if (entities[endIndex]._internalId === this.count - 1) {
                endIndex--;
            } else {
                this.swapInstance(entities[startIndex], this.count - 1);
                startIndex++;
            }
            this.count--;
        }
    }

    private swapInstance(instanceFrom: T, idTo: number): void {
        const instanceTo = this._internalInstances[idTo];
        if (instanceFrom === instanceTo) return;
        const idFrom = instanceFrom._internalId;
        this.swapAttributes(idFrom, idTo);
        this._internalInstances[idTo] = instanceFrom;
        this._internalInstances[idFrom] = instanceTo;
        instanceTo._internalId = idFrom;
        instanceFrom._internalId = idTo;
    }

    private swapInstance2(instanceFrom: T, instanceTo: T): void {
        const idFrom = instanceFrom._internalId;
        const idTo = instanceTo._internalId;
        this.swapAttributes(idFrom, idTo);
        this._internalInstances[idTo] = instanceFrom;
        this._internalInstances[idFrom] = instanceTo;
        instanceTo._internalId = idFrom;
        instanceFrom._internalId = idTo;
    }

    private swapAttributes(idFrom: number, idTo: number): void {
        for (const attr of this.instancedAttributes) {
            this.swapAttribute(attr, idTo, idFrom);
        }
    }

    private swapAttribute(attr: InstancedBufferAttribute, from: number, to: number): void {
        const array = attr.array;
        const size = attr.itemSize;
        const fromOffset = from * size;
        const toOffset = to * size;

        const temp = array[fromOffset];
        array[fromOffset] = array[toOffset];
        array[toOffset] = temp;
        for (let i = 1; i < size; i++) {
            const temp = array[fromOffset + i];
            array[fromOffset + i] = array[toOffset + i];
            array[toOffset + i] = temp;
        }
    }

    public updateCulling(camera: Camera): void {
        //put it on beforeRenderer
        if (this._perObjectFrustumCulled === false) return;

        _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
        _frustum.setFromProjectionMatrix(_projScreenMatrix);

        const instances = this.instances;
        const bSphere = this.geometry.boundingSphere;
        const radius = bSphere.radius;
        const center = bSphere.center;

        const show: T[] = []; // opt memory allocation
        const hide: T[] = [];

        for (let i = 0, l = this.instances.length; i < l; i++) {
            const instance = instances[i];
            if (instance._visible === false) continue;

            // if center is not 0,0,0 should use _sphere.center.copy(center).applyQuaternion(instance.quaternion).add(instance.position);

            _sphere.center.addVectors(center, instance.position); // this works if geometry bsphere center is 0,0,0
            _sphere.radius = radius * this.getMax(instance.scale);

            if (instance._inFrustum !== (instance._inFrustum = _frustum.intersectsSphere(_sphere))) {
                if (instance._inFrustum === true) show[show.length] = instance;
                else hide[hide.length] = instance;
            }

            if (instance._inFrustum && instance._needsUpdate) {
                this.composeToArray(instance);
                instance._needsUpdate = false;
            }
        }

        if (show.length > 0 || hide.length > 0) this.setInstancesVisibility(show, hide);
    }

    private getMax(scale: Vector3): number {
        if (scale.x > scale.y) {
            return scale.x > scale.z ? scale.x : scale.z;
        }
        return scale.y > scale.z ? scale.y : scale.z;
    }

    private needsUpdate(): void {
        for (const attr of this.instancedAttributes) {
            attr.needsUpdate = true;
        }
    }

    public updateInstanceMatrix(instance: InstancedEntity): void {
        if (this._perObjectFrustumCulled === true || instance._visible === false) {
            instance._needsUpdate = true;
        } else {
            this.composeToArray(instance);
        }
    }

    public forceUpdateInstanceMatrix(instance: InstancedEntity): void {
        this.composeToArray(instance);
        instance._needsUpdate = false;
    }

    /** @internal updated to r159 Matrix4.ts */
    public composeToArray(instance: InstancedEntity): void {
        const te = this.instanceMatrix.array;
        const position = instance.position;
        const quaternion = instance.quaternion as any;
        const scale = instance.scale;
        const offset = instance._internalId * 16;

        const x = quaternion._x,
            y = quaternion._y,
            z = quaternion._z,
            w = quaternion._w;
        const x2 = x + x,
            y2 = y + y,
            z2 = z + z;
        const xx = x * x2,
            xy = x * y2,
            xz = x * z2;
        const yy = y * y2,
            yz = y * z2,
            zz = z * z2;
        const wx = w * x2,
            wy = w * y2,
            wz = w * z2;

        const sx = scale.x,
            sy = scale.y,
            sz = scale.z;

        te[offset] = (1 - (yy + zz)) * sx;
        te[offset + 1] = (xy + wz) * sx;
        te[offset + 2] = (xz - wy) * sx;
        te[offset + 3] = 0;

        te[offset + 4] = (xy - wz) * sy;
        te[offset + 5] = (1 - (xx + zz)) * sy;
        te[offset + 6] = (yz + wx) * sy;
        te[offset + 7] = 0;

        te[offset + 8] = (xz + wy) * sz;
        te[offset + 9] = (yz - wx) * sz;
        te[offset + 10] = (1 - (xx + yy)) * sz;
        te[offset + 11] = 0;

        te[offset + 12] = position.x;
        te[offset + 13] = position.y;
        te[offset + 14] = position.z;
        te[offset + 15] = 1;
    }

    public enablePerObjectFrustumCulled(): void {
        for (let i = 0, l = this.instances.length; i < l; i++) {
            this.instances[i]._inFrustum = true; // do it in other way
        }
    }

    public disablePerObjectFrustumCulled(): void {
        const show: T[] = [];
        for (let i = 0, l = this.instances.length; i < l; i++) {
            const instance = this.instances[i];
            if (!instance._inFrustum && instance.visible) show.push(instance);
        }
        this.setInstancesVisibility(show, []);
    }

    /**
     * Set the focus to the specified instance, if focus is enabled for the InstancedMesh2, or clears the focus if no target is provided.
     * @param target Optional. The instance to focus on. If not provided, the focus is cleared.
     */
    public focus(target?: InstancedEntity): void {
        if (!this.__focused) return;

        const focusableObj = target?.focusable ? target : undefined;
        if ((!target || focusableObj?.enabled) && this._focusedInstance !== focusableObj) {
            const oldFocusedObj = this._focusedInstance;
            this._focusedInstance = focusableObj;

            if (oldFocusedObj?.enabled) {
                oldFocusedObj.__focused = false;
                oldFocusedObj.__eventsDispatcher.dispatchDOM("blur", new FocusEventExt<InstancedEntity, InstancedEntity>(focusableObj));
            }

            if (focusableObj) {
                focusableObj.__focused = true
                focusableObj.__eventsDispatcher.dispatchDOM("focus", new FocusEventExt<InstancedEntity, InstancedEntity>(oldFocusedObj));
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
                    const event = new PointerEventExt<InstancedEntity, InstancedEntity>(domEvent, intersection, hoveredInstance);
                    oldHoveredInstance.__eventsDispatcher.dispatchDOM("pointerout", event);
                }
            }

            if (hoveredInstance.enabled) {
                const event = new PointerEventExt<InstancedEntity, InstancedEntity>(domEvent, intersection, oldHoveredInstance);
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
            const event = new PointerIntersectionEvent<InstancedEntity>(e.intersection);
            this._hoveredInstance.__eventsDispatcher.dispatchDOM("pointerintersection", event);
        }
    }

    private pointerMove(e: PointerEventExt): void {
        this._lastPointerMove = e;
        this.pointerOverOut(e.intersection, e.domEvent);
        if (this._hoveredInstance.enabled) {
            const event = new PointerEventExt<InstancedEntity, InstancedEntity>(e.domEvent, e.intersection);
            this._hoveredInstance.__eventsDispatcher.dispatchDOM("pointermove", event);
        }
    }

    private pointerLeave(e: PointerEventExt): void {
        const instance = this._hoveredInstance;
        instance.__hovered = false;
        this._hoveredInstance = undefined;
        if (instance.enabled) {
            const event = new PointerEventExt<InstancedEntity, InstancedEntity>(e.domEvent, e.intersection);
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
            const event = new PointerEventExt<InstancedEntity, InstancedEntity>(e.domEvent, e.intersection);
            target.__eventsDispatcher.dispatchDOM("click", event);
            if (e.intersection.instanceId === this._lastClick?.intersection.instanceId && e.timeStamp - this._lastClick.timeStamp <= 300) {
                const event = new PointerEventExt<InstancedEntity, InstancedEntity>(e.domEvent, e.intersection);
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
            const event = new PointerEventExt<InstancedEntity, InstancedEntity>(e.domEvent, e.intersection, undefined, true);
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
                const event = new PointerEventExt<InstancedEntity, InstancedEntity>(e.domEvent, e.intersection);
                instance.__eventsDispatcher.dispatchDOM("pointerup", event);
            }
            this._clickingInstance = undefined;
        }
    }

    private keyDown(e: KeyboardEventExt): void {
        if (this._focusedInstance.enabled) {
            const event = new KeyboardEventExt<InstancedEntity>(e.domEvent, true);
            this._focusedInstance.__eventsDispatcher.dispatchDOM("keydown", event);
            if (event._defaultPrevented) {
                e.preventDefault();
            }
        }
    }

    private keyUp(e: KeyboardEventExt): void {
        if (this._focusedInstance.enabled) {
            const event = new KeyboardEventExt<InstancedEntity>(e.domEvent, false);
            this._focusedInstance.__eventsDispatcher.dispatchDOM("keyup", event);
        }
    }

    private wheel(e: WheelEventExt): void {
        if (this._hoveredInstance.enabled) {
            const event = new WheelEventExt<InstancedEntity>(e.domEvent, e.intersection);
            this._hoveredInstance.__eventsDispatcher.dispatchDOM("wheel", event);
        }
    }

    private drag(e: DragEventExt): void {
        const event = new DragEventExt<InstancedEntity>(e.domEvent, true, e.dataTransfer, e.position, e.relatedTarget, e.intersection);
        this._draggingInstance.__eventsDispatcher.dispatchDOM("drag", event);
        if (event._defaultPrevented) {
            e.preventDefault();
        }
    }

    private dragStart(e: DragEventExt): void {
        this._draggingInstance = this.instances[e.intersection.instanceId];
        this._draggingInstance.__dragging = true;
        const event = new DragEventExt<InstancedEntity>(e.domEvent, false, e.dataTransfer, e.position, e.relatedTarget, e.intersection);
        this._draggingInstance.__eventsDispatcher.dispatchDOM("dragstart", event);
    }

    private dragEnd(e: DragEventExt): void {
        const instance = this._draggingInstance;
        instance.__dragging = false;
        this._draggingInstance = undefined;
        const event = new DragEventExt<InstancedEntity>(e.domEvent, false, e.dataTransfer, e.position, e.relatedTarget, e.intersection);
        instance.__eventsDispatcher.dispatchDOM("dragend", event);
        this.computeBoundingSphere();
    }

    private dragCancel(e: DragEventExt): void {
        const event = new DragEventExt<InstancedEntity>(e.domEvent, e.cancelable, e.dataTransfer, e.position, e.relatedTarget, e.intersection);
        this._draggingInstance.__eventsDispatcher.dispatchDOM("dragcancel", event);
        if (event._defaultPrevented) {
            e.preventDefault();
        }
    }
}

InstancedMesh2.prototype.isInstancedMesh2 = true;
InstancedMesh2.prototype.type = 'InstancedMesh2';

overrideProperty("cursor", "cursorDrag", "cursorDrop", "draggable", "findDropTarget");

// TODO not swap matrix if needsUpdate = true
// TODO pointeridPrimary on focus and assign hovered, clicking, ecc.
