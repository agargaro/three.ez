import { Color, ColorRepresentation, EventDispatcher, Matrix4, Quaternion, Vector3 } from "three";
import { Cursor } from "../events/CursorManager";
import { EventsDispatcherInstanced, InstancedEvents } from "./EventsDispatcherInstanced";
import { Tween } from "../tweening/Tween";
import { InstancedMesh2 } from "./InstancedMesh2";

export interface SharedData {
    position: Vector3;
    scale: Vector3;
    quaternion: Quaternion;
    index: number;
}

const _q = new Quaternion();
const _m = new Matrix4();
const _c = new Color();

/**
 * Represents an individual instance within an InstancedMesh2, providing properties and methods for interaction and transformation.
 */
export class InstancedEntity extends EventDispatcher {
    /** A read-only string to check `this` object type. */
    public declare type: 'InstancedEntity';
    /** A flag indicating that this is an instance of InstancedEntity. */
    public declare isInstancedEntity: true;
    /** The parent InstancedMesh2 that contains this instance. */
    public parent: InstancedMesh2;
    /** A Vector3 representing the object's local position. Default is (0, 0, 0). */
    public readonly position: Vector3;
    /** The object's local scale. Default is Vector3(1, 1, 1). */
    public readonly scale: Vector3;
    /** Object's local rotation as a Quaternion. */
    public readonly quaternion: Quaternion;
    /**
     * Determines if the object is enabled. (default: true).
     * If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.
    */
    public enabled = true;
    /** Indicates whether the object can receive focus (default: true). */
    public focusable = true;
    /** Indicates whether the object is draggable (default: false). */
    public draggable = false;
    /** Determines when the object is dragged, whether it will have to search for any drop targets (default: false). */
    public findDropTarget = false;
    /** Cursor style when interacting with the object. */
    public cursor: Cursor;
    /** Cursor style when dragging the object. */
    public cursorDrag: Cursor;
    /** Cursor style when dropping an object onto this one. */
    public cursorDrop: Cursor;
    /** @internal */ public _internalId: number;
    /** @internal */ public _visible: boolean;
    /** @internal */ public _inFrustum = true;
    /** @internal */ public _needsUpdate = false;
    /** @internal */ public __eventsDispatcher: EventsDispatcherInstanced;
    /** @internal */ public __hovered = false;
    /** @internal */ public __focused = false;
    /** @internal */ public __clicking = false;
    /** @internal */ public __dragging = false;

    /**  */
    public get visible(): boolean { return this._visible }
    public set visible(value: boolean) {
        this.parent.setInstanceVisibility(this, value);
        this._visible = value;
    }

    /** Indicates if the primary pointer is over this object. */
    public get hovered(): boolean { return this.__hovered }
    /** Indicates if the object is currently focused. */
    public get focused(): boolean { return this.__focused }
    /** Indicates if the object is currently being clicked. */
    public get clicking(): boolean { return this.__clicking }
    /** Indicates if the object is currently being dragged. */
    public get dragging(): boolean { return this.__dragging }
    /** Retrieves the combined enabled state considering parent objects. */
    public get enabledState(): boolean { return this.enabled && this.parent.enabledState }

    /**
     * @param parent - The parent InstancedMesh2 that contains this instance.
     * @param index - The index of this instance within the parent InstancedMesh2.
     * @param color - The initial color representation for this instance (optional).
     * @param sharedData - 
     * @param visible - 
     */
    constructor(parent: InstancedMesh2, index: number, color?: ColorRepresentation, sharedData?: SharedData, visible = true) {
        super();
        this.parent = parent;
        this._internalId = index;
        this._visible = visible;
        this.__eventsDispatcher = new EventsDispatcherInstanced(this);
        if (color !== undefined) this.setColor(color);

        if (sharedData) {
            // used by InstancedLOD
            this.position = sharedData.position;
            this.scale = sharedData.scale;
            this.quaternion = sharedData.quaternion;
        } else {
            this.position = new Vector3();
            this.scale = new Vector3(1, 1, 1);
            this.quaternion = new Quaternion();
        }
    }

    /**
     * Updates the local transform.
     */
    public updateMatrix(): void {
        this.parent.updateInstanceMatrix(this);
    }

    /**
     * 
     */
    public forceUpdateMatrix(): void {
        this.parent.forceUpdateInstanceMatrix(this);
    }

    /**
     * Sets the color of this instance.
     * @param color - The color representation to set.
     */
    public setColor(color: ColorRepresentation): void {
        const parent = this.parent;
        parent.setColorAt(this._internalId, _c.set(color));
    }

    /**
     * Gets the color of this instance.
     * @param color - An optional target Color object to store the result (optional).
     * @returns The color representation of this instance.
     */
    public getColor(color = _c): Color {
        this.parent.getColorAt(this._internalId, color);
        return color;
    }

    /**
     * Applies the matrix transform to the object and updates the object's position, rotation, and scale.
     * @param m Matrix to apply.
     * @returns The instance of the object.
     */
    public applyMatrix4(m: Matrix4): this {
        _m.compose(this.position, this.quaternion, this.scale); // or get it from array but is not updated
        _m.premultiply(m);
        _m.decompose(this.position, this.quaternion, this.scale);
        this.parent.setMatrixAt(this._internalId, _m);
        return this;
    }

    /**
     * Applies the rotation represented by the quaternion to the object.
     * @param q Quaternion to apply.
     * @returns The instance of the object.
     */
    public applyQuaternion(q: Quaternion): this {
        this.quaternion.premultiply(q);
        return this;
    }

    /**
     * Rotate an object along an axis in object space. The axis is assumed to be normalized.
     * @param axis A normalized vector in object space.
     * @param angle The angle in radians.
     * @returns The instance of the object.
     */
    public rotateOnAxis(axis: Vector3, angle: number): this {
        _q.setFromAxisAngle(axis, angle);
        this.quaternion.multiply(_q);
        return this;
    }

    /**
     * Rotate an object along an axis in world space. The axis is assumed to be normalized. Method Assumes no rotated parent.
     * @param axis A normalized vector in world space.
     * @param angle The angle in radians.
     * @returns The instance of the object.
     */
    public rotateOnWorldAxis(axis: Vector3, angle: number): this {
        _q.setFromAxisAngle(axis, angle);
        this.quaternion.premultiply(_q);
        return this;
    }

    /**
     * Applies focus to the object.
     */
    public applyFocus(): void {
        this.parent.focus(this);
    }

    /**
     * Applies blur (removes focus) from the object.
     */
    public applyBlur(): void {
        if (this.parent.focusedInstance === this) {
            this.parent.focus();
        }
    }

    /**
     * Attaches an event listener to the object.
     * @param type - The type of event to listen for.
     * @param listener - The callback function to execute when the event occurs.
     * @returns A function to remove the event listener.
     */
    public on<K extends keyof InstancedEvents>(types: K | K[], listener: (event?: InstancedEvents[K]) => void): (event?: InstancedEvents[K]) => void {
        if (typeof types === "string") {
            return this.__eventsDispatcher.add(types, listener) as (event?: InstancedEvents[K]) => void;
        }
        for (const type of types) {
            this.__eventsDispatcher.add(type, listener);
        }
        return listener;
    }

    /**
     * Checks if the object has a specific event listener.
     * @param type - The type of event to check for.
     * @param listener - The callback function to check.
     * @returns `true` if the event listener is attached; otherwise, `false`.
     */
    public hasEvent<K extends keyof InstancedEvents>(type: K, listener: (event?: InstancedEvents[K]) => void): boolean {
        return this.__eventsDispatcher.has(type, listener);
    }

    /**
     * Removes an event listener from the object.
     * @param type - The type of event to remove the listener from.
     * @param listener - The callback function to remove.
     */
    public off<K extends keyof InstancedEvents>(type: K, listener: (event?: InstancedEvents[K]) => void): void {
        this.__eventsDispatcher.remove(type, listener);
    }

    /**
     * Triggers a specific event on the object.
     * @param type - The type of event to trigger.
     * @param event - Optional event data to pass to the listeners.
     */
    public trigger<K extends keyof InstancedEvents>(type: K, event?: InstancedEvents[K]): void {
        this.__eventsDispatcher.dispatchManual(type, event);
    }

    /**
     * Initiates a Tween animation for the object.
     * @returns A Tween instance for further configuration.
     */
    public tween(): Tween<InstancedEntity> {
        return new Tween(this);
    }
}

InstancedEntity.prototype.isInstancedEntity = true;
InstancedEntity.prototype.type = 'InstancedEntity';
