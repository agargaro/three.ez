import { Object3D, Scene, Mesh } from "three";
import { Binding, BindingCallback } from "../binding/Binding";
import { Cursor } from "../events/CursorManager";
import { Events, InteractionEvents } from "../events/Events";
import { EventsDispatcher } from "../events/EventsDispatcher";
import { applyEulerPatch } from "./Euler";
import { applyMatrix4Patch } from "./Matrix4";
import { applyQuaternionPatch } from "./Quaternion";
import { removeSceneReference, setSceneReference } from "./Scene";
import { applyVec3Patch } from "./Vector3";
import { Tween } from "../tweening/Tween";

/** @internal */
export interface Object3DExtPrototypeInternal extends Object3DExtPrototype {
    hovered: boolean;
    focused: boolean;
    clicking: boolean;
    dragging: boolean;
    __boundCallbacks: BindingCallback[];
    __manualDetection: boolean;
    __eventsDispatcher: EventsDispatcher;
    __vec3Patched: boolean;
    __rotationPatched: boolean;
    __smartRenderingPatched: boolean;
    __enabled: boolean;
    __visible: boolean;
    __isDropTarget: boolean;
    __baseVisibleDescriptor: PropertyDescriptor;
}

/**
 * Represents the prototype for extended Object3D functionality.
 */
export interface Object3DExtPrototype {
    /**
     * Determines if the object is enabled. (default: true).
     * If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.
     */
    enabled: boolean;
    /** Determines if the object can be intercepted by a raycaster (default: true). */
    interceptByRaycaster: boolean;
    /** Array of hitboxes for collision detection. */
    hitboxes: Mesh[];
    /** Indicates whether the object can receive focus (default: true). */
    focusable: boolean;
    /** Indicates whether the object is draggable (default: false). */
    draggable: boolean;
    /** Determines when the object is dragged, whether it will have to search for any drop targets (default: false). */
    findDropTarget: boolean;
    /** Reference to the scene the object belongs to. */
    scene: Scene;
    /** Cursor style when interacting with the object. */
    cursor: Cursor;
    /** Cursor style when dragging the object. */
    cursorDrag: Cursor;
    /** Cursor style when dropping an object onto this one. */
    cursorDrop: Cursor;
    /** Indicates whether the scene needs rendering. */
    needsRender: boolean;
    /** Indicates if the primary pointer is over this object. */
    get hovered(): boolean;
    /** Indicates if the object is currently focused. */
    get focused(): boolean;
    /** Indicates if the object is currently being clicked. */
    get clicking(): boolean;
    /** Indicates if the object is currently being dragged. */
    get dragging(): boolean;
    /** Retrieves the combined enabled state considering parent objects. */
    get enabledState(): boolean;
    /** Retrieves the first possibile focusable object. */
    get firstFocusable(): Object3D;
    /**
     * Applies focus to the object.
     */
    applyFocus(): void;
    /**
     * Applies blur (removes focus) from the object.
     */
    applyBlur(): void;
    /**
     * Attaches an event listener to the object.
     * @param type - The type of event to listen for.
     * @param listener - The callback function to execute when the event occurs.
     * @returns A function to remove the event listener.
     */
    on<K extends keyof Events>(type: K | K[], listener: (event?: Events[K]) => void): (event?: Events[K]) => void;
    /**
     * Checks if the object has a specific event listener.
     * @param type - The type of event to check for.
     * @param listener - The callback function to check.
     * @returns `true` if the event listener is attached; otherwise, `false`.
     */
    hasEvent<K extends keyof Events>(type: K, listener: (event?: Events[K]) => void): boolean;
    /**
     * Removes an event listener from the object.
     * @param type - The type of event to remove the listener from.
     * @param listener - The callback function to remove.
     */
    off<K extends keyof Events>(type: K, listener: (event?: Events[K]) => void): void;
    /**
     * Triggers a specific event on the object.
     * @param type - The type of event to trigger.
     * @param event - Optional event data to pass to the listeners.
     */
    trigger<K extends keyof Events>(type: K, event?: Events[K]): void;
    /**
     * Triggers a specific event on the object and all its ancestors.
     * @param type - The type of event to trigger.
     * @param event - Optional event data to pass to the listeners.
     */
    triggerAncestor<K extends keyof InteractionEvents>(type: K, event?: InteractionEvents[K]): void;
    /**
     * Activates manual detection mode for bindings.
     * When this method is used, all bindings will no longer be calculated automatically.
     * Instead, they must be manually computed using the 'detectChanges' function.
     */
    setManualDetectionMode(): void;
    /**
     * Calculates all bindings on the current object.
     * If 'recursive' is set to true, it will also calculate bindings for all children.
     * @param recursive Optional. If true, calculate bindings for children as well.
     */
    detectChanges(recursive?: boolean): void;
    /**
     * Binds a property to a callback function for updates.
     * @param property - The name of the property to bind.
     * @param getCallback - A function that retrieves the property's value.
     * @param renderOnChange - Indicates whether to render when the property changes (optional, default: false).
     * @returns The instance of the object with the binding applied.
     */
    bindProperty<T extends keyof this>(property: T, getCallback: () => this[T], renderOnChange?: boolean): this;
    /**
     * Unbinds a previously bound property from the object.
     * @param property - The name of the property to unbind.
     * @returns The instance of the object with the binding removed.
     */
    unbindProperty<T extends keyof this>(property: T): this;
    /**
     * Initiates a Tween animation for the object.
     * @returns A Tween instance for further configuration.
     */
    tween(): Tween<Object3D>;
}

Object3D.prototype.focusable = true;
Object3D.prototype.focused = false;
Object3D.prototype.clicking = false;
Object3D.prototype.dragging = false;
Object3D.prototype.draggable = false;
Object3D.prototype.hovered = false;
Object3D.prototype.interceptByRaycaster = true;
Object3D.prototype.findDropTarget = false;
Object3D.prototype.__manualDetection = false;
Object3D.prototype.__boundCallbacks = [];

Object3D.prototype.__visible = true;
Object.defineProperty(Object3D.prototype, "visible", {
    get: function (this: Object3D) { return this.__visible },
    set: function (this: Object3D, value: boolean) {
        if (this.__visible !== value) {
            this.__visible = value;
            this.__eventsDispatcher.dispatchDescendant("visiblechange", { value, target: this });
        }
    },
    configurable: true
});

Object3D.prototype.__enabled = true;
Object.defineProperty(Object3D.prototype, "enabled", {
    get: function (this: Object3D) { return this.__enabled },
    set: function (this: Object3D, value: boolean) {
        if (this.__enabled !== value) {
            if (!value) {
                this.applyBlur();
            }
            this.__enabled = value;
            this.__eventsDispatcher.dispatchDescendant("enabledchange", { value, target: this });
        }
    },
    configurable: true
});

Object.defineProperty(Object3D.prototype, "firstFocusable", {
    get: function (this: Object3D) {
        let obj = this;
        while (obj?.focusable === false) {
            obj = obj.parent;
        }
        return obj;
    }
});

Object.defineProperty(Object3D.prototype, "enabledState", {
    get: function (this: Object3D) {
        let obj = this;
        do {
            if (!obj.enabled) return false;
        } while (obj = obj.parent);
        return true;
    }
});

Object.defineProperty(Object3D.prototype, "needsRender", {
    get: function (this: Object3D) {
        return this.scene?.needsRender;
    },
    set: function (this: Object3D, value: boolean) {
        if (!this.scene) return;
        this.scene.needsRender = value;
    }
});

Object3D.prototype.on = function <K extends keyof Events>(this: Object3D, types: K | K[], listener: (event: Events[K]) => void): (event: Events[K]) => void {
    if (typeof types === "string") {
        return this.__eventsDispatcher.add(types, listener);
    }
    for (const type of types) {
        this.__eventsDispatcher.add(type, listener);
    }
    return listener;
};

Object3D.prototype.hasEvent = function <K extends keyof Events>(type: K, listener: (event: Events[K]) => void): boolean {
    return this.__eventsDispatcher.has(type, listener);
}

Object3D.prototype.off = function <K extends keyof Events>(type: K, listener: (event: Events[K]) => void): void {
    this.__eventsDispatcher.remove(type, listener);
}

Object3D.prototype.trigger = function <T extends keyof Events>(type: T, event?: Events[T]): void {
    this.__eventsDispatcher.dispatchManual(type, event);
}

Object3D.prototype.triggerAncestor = function <T extends keyof Events>(type: T, event?: Events[T]): void {
    this.__eventsDispatcher.dispatchAncestorManual(type, event);
}

Object.defineProperty(Object3D.prototype, "userData", { // needed to inject code in constructor
    set: function (value) {
        this.__eventsDispatcher = new EventsDispatcher(this);
        Object.defineProperty(this, "userData", {
            value, writable: true, configurable: true
        });
    },
    configurable: true
});

Object3D.prototype.applyFocus = function () {
    this.scene?.focus(this);
};

Object3D.prototype.applyBlur = function () {
    if (this === this.scene?.focusedObject) {
        this.scene.focus();
    }
};

Object3D.prototype.setManualDetectionMode = function () {
    Binding.setManualDetectionMode(this);
};

Object3D.prototype.detectChanges = function (recursive = false) {
    Binding.detectChanges(this, recursive);
};

Object3D.prototype.bindProperty = function (property, getValue, renderOnChange) {
    Binding.bindProperty(property, this, getValue, renderOnChange);
    return this;
};

Object3D.prototype.unbindProperty = function (property) {
    Binding.unbindProperty(this, property);
    return this;
};

Object3D.prototype.tween = function () {
    return new Tween(this);
};

/** @internal */
export const addBase = Object3D.prototype.add;
Object3D.prototype.add = function (object: Object3D) {
    addBase.call(this, ...arguments);
    if (arguments.length === 1 && object?.isObject3D && object !== this && this.scene) {
        setSceneReference(object, this.scene);
        this.scene.needsRender = true;
    }
    return this;
};

/** @internal */
export const removeBase = Object3D.prototype.remove;
Object3D.prototype.remove = function (object: Object3D) {
    if (arguments.length === 1 && this.children.indexOf(object) > -1) {
        if (this.scene) {
            removeSceneReference(object);
            this.scene.needsRender = true;
        }
    }
    removeBase.call(this, ...arguments);
    return this;
};

/** @internal */
export function applyObject3DVector3Patch(target: Object3D): void {
    if (!target.__vec3Patched) {
        applyVec3Patch(target);
        applyMatrix4Patch(target);
        target.__vec3Patched = true;
    }
}

/** @internal */
export function applyObject3DRotationPatch(target: Object3D): void {
    if (!target.__rotationPatched) {
        applyQuaternionPatch(target);
        applyEulerPatch(target);
        target.__rotationPatched = true;
    }
}