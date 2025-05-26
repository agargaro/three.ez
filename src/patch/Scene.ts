import { Object3D, Scene } from 'three';
import { EventsCache } from '../events/MiscEventsManager.js';
import { activeSmartRendering, applySmartRenderingPatch, removeSmartRenderingPatch } from './SmartRendering.js';
import { EzFocusEvent, EzIntersection } from '../events/Events.js';
import { addBase, removeBase } from './Object3D.js';
import { EventsDispatcher } from '../events/EventsDispatcher.js';
import { INTERACTION_DEFAULT } from '../events/InteractionDefault.js';

/**
 * Represents the prototype for extending Scene functionality.
 */
export interface SceneExtPrototype {
  /** @internal */ __registeredEventsObjects: { [x: string]: Set<Object3D> } | undefined;
  /** @internal */ __boundObjects: Set<Object3D> | undefined;
  /** @internal */ __smartRendering: boolean | undefined;
  /**
     * A flag indicating whether continuous raycasting is enabled (default: false).
     * When set to true, main raycasting occurs every frame, while false triggers raycasting only upon mouse movement.
     * Additionally, if set to true, the 'pointerintersection' event will be fired every frame.
     */
  continuousRaycasting: boolean;
  /**
     * A flag indicating whether continuous raycasting is enabled when searching for drop targets (default: false).
     * When set to true, main raycasting for drop targets occurs every frame, while false triggers it only upon mouse movement.
     * Additionally, if set to true, the 'dragover' event will be fired every frame.
     */
  continuousRaycastingDropTarget: boolean;
  /** An array of intersections computed from the pointer (primary pointer only). */
  intersections: EzIntersection[];
  /** An array of intersections computed from the pointer if an object is dragged and has 'findDropTarget' set to true (primary pointer only). */
  intersectionsDropTarget: EzIntersection[];
  /** A reference to the currently focused Object3D within the scene. */
  focusedObject: Object3D;
  /**
     * A flag indicating whether to blur the focused Object3D when clicking outside of any object.
     */
  blurOnClickOut: boolean;
  /** The time scale for scene animations. */
  timeScale: number;
  /** The total time elapsed in the scene. */
  totalTime: number;
  /**
     * Activates smart rendering for the scene.
     * @returns The updated instance of the scene.
     */
  activeSmartRendering(): this;
  /**
     * Sets the focus to the specified Object3D within the scene, or clears the focus if no target is provided.
     * @param target Optional. The Object3D to focus on. If not provided, the focus is cleared.
     */
  focus(target?: Object3D): void;
}

Scene.prototype.continuousRaycasting = false;
Scene.prototype.continuousRaycastingDropTarget = false;
Scene.prototype.needsRender = true;
Scene.prototype.blurOnClickOut = false;
Scene.prototype.timeScale = 1;
Scene.prototype.totalTime = 0;
Scene.prototype.__smartRendering = false;
Scene.prototype.cursor = 'default';

Scene.prototype.activeSmartRendering = function () {
  activeSmartRendering(this);
  return this;
};

Scene.prototype.focus = function (target?: Object3D): void {
  const focusableObj = target?.firstFocusable;
  if ((!target || focusableObj?.enabledState) && this.focusedObject !== focusableObj) {
    const oldFocusedObj = this.focusedObject;
    this.focusedObject = focusableObj;

    if (oldFocusedObj?.enabledState) {
      oldFocusedObj.__focused = false;
      oldFocusedObj.__eventsDispatcher.dispatchDOMAncestor('blur', new EzFocusEvent(focusableObj));
      oldFocusedObj.__eventsDispatcher.dispatchDOM('focusout', new EzFocusEvent(focusableObj));
    }

    if (focusableObj) {
      focusableObj.__focused = true;
      focusableObj.__eventsDispatcher.dispatchDOMAncestor('focus', new EzFocusEvent(oldFocusedObj));
      focusableObj.__eventsDispatcher.dispatchDOM('focusin', new EzFocusEvent(oldFocusedObj));
    }

    this.needsRender = true;
  }
};

Scene.prototype.add = function (object: Object3D) {
  addBase.call(this, ...arguments);
  if (arguments.length === 1 && object?.isObject3D && object !== this) {
    setSceneReference(object, this);
    this.needsRender = true;
  }
  return this;
};

Scene.prototype.remove = function (object: Object3D) {
  if (arguments.length === 1 && this.children.indexOf(object) > -1) {
    removeSceneReference(object);
    this.needsRender = true;
  }
  removeBase.call(this, ...arguments);
  return this;
};

Object.defineProperty(Scene.prototype, 'userData', { // needed to inject code in constructor
  set: function (this: Scene, value) {
    this.focusable = false;
    this.draggable = INTERACTION_DEFAULT.draggable;
    this.interceptByRaycaster = INTERACTION_DEFAULT.interceptByRaycaster;
    this.tags = new Set();
    this.__boundCallbacks = [];
    this.__eventsDispatcher = new EventsDispatcher(this);

    this.intersections = [];
    this.intersectionsDropTarget = [];
    this.scene = this;
    this.__boundObjects = new Set();

    Object.defineProperty(this, 'userData', {
      value, writable: true, configurable: true
    });
  },
  configurable: true
});

/** @internal */
export function setSceneReference(target: Object3D, scene: Scene): void {
  target.scene = scene;
  EventsCache.update(target);
  applySmartRenderingPatch(target);
  Binding.bindToScene(target);

  for (const object of target.children) {
    setSceneReference(object, scene);
  }
}

/** @internal */
export function removeSceneReference(target: Object3D): void {
  EventsCache.removeAll(target);
  removeSmartRenderingPatch(target);
  Binding.unbindFromScene(target);
  target.scene = undefined;

  for (const object of target.children) {
    removeSceneReference(object);
  }
}
