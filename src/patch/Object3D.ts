import { Object3D, Scene } from 'three';
import { Binding, BindingCallback } from '../binding/Binding.js';
import { Cursor } from '../events/CursorManager.js';
import { Default } from '../events/Default.js';
import { Events, InteractionEvents } from '../events/Events.js';
import { EventsDispatcher } from '../events/EventsDispatcher.js';
import { Hitbox } from '../events/Hitbox.js';
import { Tween } from '../tweening/Tween.js';
import { querySelector, querySelectorAll } from '../utils/Query.js';
import { applyEulerPatch } from './Euler.js';
import { applyMatrix4Patch } from './Matrix4.js';
import { applyQuaternionPatch } from './Quaternion.js';
import { removeSceneReference, setSceneReference } from './Scene.js';
import { applyVec3Patch } from './Vector3.js';

/**
 * Represents the prototype for extended Object3D functionality.
 */
export interface Object3DExtPrototype {
  /** @internal */ __boundCallbacks: BindingCallback[];
  /** @internal */ __manualDetection: boolean;
  /** @internal */ __eventsDispatcher: EventsDispatcher;
  /** @internal */ __vec3Patched: boolean;
  /** @internal */ __rotationPatched: boolean;
  /** @internal */ __smartRenderingPatched: boolean;
  /** @internal */ __enabled: boolean;
  /** @internal */ __visible: boolean;
  /** @internal */ __hovered: boolean;
  /** @internal */ __focused: boolean;
  /** @internal */ __clicking: boolean;
  /** @internal */ __dragging: boolean;
  /** @internal */ __isDropTarget: boolean;
  /** @internal */ __baseVisibleDescriptor: PropertyDescriptor;
  /** @internal */ __onChangeBaseEuler: () => void;
  /** @internal */ __onChangeBaseQuat: () => void;
  /**
   * Determines if the object is enabled. Default is `true`.
   * If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.
   */
  enabled: boolean;
  /**
   * Determines if the **object** and **all of its children** can be intercepted by the main raycaster.
   * @default DEFAULT_INTERCEPT_BY_RAYCASTER (true).
   */
  interceptByRaycaster: boolean;
  /** Array of hitboxes for collision detection. */
  hitboxes: Hitbox[];
  /** Indicates which object will be dragged instead of this one. */
  dragTarget: Object3D;
  /** Indicates whether the object can receive focus. Default is DEFAULT_FOCUSABLE (`true`). */
  focusable: boolean;
  /** Indicates whether the object is draggable. Default is DEFAULT_DRAGGABLE (`false`). */
  draggable: boolean;
  /** Determines when the object is dragged, whether it will have to search for any drop targets. Default is `false`. */
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
  /** Indicates the tags to be searched using the querySelector and `querySelectorAll` methods. */
  tags: Set<string>;
  /** Indicates if the primary pointer is over this object. */
  get hovered(): boolean;
  /** Indicates if the object is currently focused. */
  get focused(): boolean;
  /** Indicates if the object is currently being clicked. */
  get clicking(): boolean;
  /** Indicates if the object is currently being dragged. */
  get isDragging(): boolean;
  /** Retrieves the combined enabled state considering parent objects. */
  get enabledState(): boolean;
  /** Retrieves the combined visibility state considering parent objects. */
  get visibilityState(): boolean;
  /** Retrieves the first possible focusable object. */
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
  on<K extends keyof Events>(type: K | K[], listener: (this: this, event?: Events[K]) => void): (event?: Events[K]) => void;
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
   * @param recursive If true, calculate bindings for children as well (optional, default: `false`).
   */
  detectChanges(recursive?: boolean): void;
  /**
   * Binds a property to a callback function for updates.
   * @param property - The name of the property to bind.
   * @param getCallback - A function that retrieves the property's value.
   * @param renderOnChange - Indicates whether to render when the property changes (optional, default: `false`).
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
   * @param id - Unique identifier. If you start a new tween, the old one with the same id (if specified) will be stopped.
   * @template T - The type of the target.
   * @returns A Tween instance for further configuration.
   */
  tween<T extends Object3D = Object3D>(id?: string): Tween<T>;
  /**
   * Finds and returns the first Object3D element that matches the specified query string.
   * This method follows a similar syntax to CSS selectors.
   * @param query - The query string to match against the Object3D elements.
   * @returns The first Object3D element that matches the query, or undefined if no match is found.
   */
  querySelector(query: string): Object3D;
  /**
   * Finds and returns a list of Object3D elements that match the specified query string.
   * This method follows a similar syntax to CSS selectors.
   * @param query - The query string to match against the Object3D elements.
   * @returns An array of Object3D elements that match the query.
   */
  querySelectorAll(query: string): Object3D[];
}

Object3D.prototype.findDropTarget = false;
Object3D.prototype.__manualDetection = false;
Object3D.prototype.__focused = false;
Object3D.prototype.__clicking = false;
Object3D.prototype.__dragging = false;
Object3D.prototype.__hovered = false;

Object3D.prototype.__visible = true;
Object.defineProperty(Object3D.prototype, 'visible', {
  get: function (this: Object3D) { return this.__visible; },
  set: function (this: Object3D, value: boolean) {
    if (this.__visible !== value) {
      this.__visible = value;
      this.__eventsDispatcher.dispatchDescendant('visiblechange', { value, target: this });
    }
  },
  configurable: true
});

Object3D.prototype.__enabled = true;
Object.defineProperty(Object3D.prototype, 'enabled', {
  get: function (this: Object3D) { return this.__enabled; },
  set: function (this: Object3D, value: boolean) {
    if (this.__enabled !== value) {
      if (!value) {
        this.applyBlur();
      }
      this.__enabled = value;
      this.__eventsDispatcher.dispatchDescendant('enabledchange', { value, target: this });
    }
  },
  configurable: true
});

Object.defineProperty(Object3D.prototype, 'firstFocusable', {
  get: function (this: Object3D) {
    let obj = this;
    while (obj?.focusable === false) {
      obj = obj.parent;
    }
    return obj;
  }
});

Object.defineProperty(Object3D.prototype, 'enabledState', {
  get: function (this: Object3D) {
    let obj = this;
    do {
      if (!obj.enabled) return false;
    } while (obj = obj.parent);
    return true;
  }
});

Object.defineProperty(Object3D.prototype, 'visibilityState', {
  get: function (this: Object3D) {
    let obj = this;
    do {
      if (!obj.visible) return false;
    } while (obj = obj.parent);
    return true;
  }
});

Object.defineProperty(Object3D.prototype, 'needsRender', {
  get: function (this: Object3D) {
    return this.scene?.needsRender;
  },
  set: function (this: Object3D, value: boolean) {
    if (!this.scene) return;
    this.scene.needsRender = value;
  }
});

Object.defineProperty(Object3D.prototype, 'hovered', {
  get: function (this: Object3D) {
    return this.__hovered;
  }
});

Object.defineProperty(Object3D.prototype, 'focused', {
  get: function (this: Object3D) {
    return this.__focused;
  }
});

Object.defineProperty(Object3D.prototype, 'clicking', {
  get: function (this: Object3D) {
    return this.__clicking;
  }
});

Object.defineProperty(Object3D.prototype, 'isDragging', {
  get: function (this: Object3D) {
    return this.__dragging;
  }
});

Object3D.prototype.on = function <K extends keyof Events>(this: Object3D, types: K | K[], listener: (event: Events[K]) => void): (event: Events[K]) => void {
  if (typeof types === 'string') {
    return this.__eventsDispatcher.add(types, listener);
  }
  for (const type of types) {
    this.__eventsDispatcher.add(type, listener);
  }
  return listener;
};

Object3D.prototype.hasEvent = function <K extends keyof Events>(type: K, listener: (event: Events[K]) => void): boolean {
  return this.__eventsDispatcher.has(type, listener);
};

Object3D.prototype.off = function <K extends keyof Events>(type: K, listener: (event: Events[K]) => void): void {
  this.__eventsDispatcher.remove(type, listener);
};

Object3D.prototype.trigger = function <T extends keyof Events>(type: T, event?: Events[T]): void {
  this.__eventsDispatcher.dispatchManual(type, event);
};

Object3D.prototype.triggerAncestor = function <T extends keyof Events>(type: T, event?: Events[T]): void {
  this.__eventsDispatcher.dispatchAncestorManual(type, event);
};

Object.defineProperty(Object3D.prototype, 'userData', { // needed to inject code in constructor
  set: function (this: Object3D, value) {
    this.focusable = Default.focusable;
    this.draggable = Default.draggable;
    this.interceptByRaycaster = Default.interceptByRaycaster;
    this.tags = new Set();
    this.__boundCallbacks = [];
    this.__eventsDispatcher = new EventsDispatcher(this);

    Object.defineProperty(this, 'userData', {
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

Object3D.prototype.tween = function <T extends Object3D>(id?: string) {
  return new Tween(this as T).setId(id);
};

Object3D.prototype.querySelector = function (query: string) {
  return querySelector(this, query);
};

Object3D.prototype.querySelectorAll = function (query: string) {
  return querySelectorAll(this, query);
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
