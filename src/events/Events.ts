import { Camera, Intersection, Object3D, Vector3, WebGLRenderer } from 'three';
import { Hitbox } from './Hitbox.js';

export type EzMiscUpdateEvents = EzMiscEvents & EzUpdateEvents;
export type EzEvents = EzInteractionEvents & EzMiscUpdateEvents;

/**
 * Represents events related to updates. These events do not propagate to parents.
 */
export interface EzUpdateEvents {
  /** Event triggered when the position of the object changes. */
  positionchange: never;
  /** Event triggered when the scale of the object changes. */
  scalechange: never;
  /** Event triggered when the rotation of the object changes. */
  rotationchange: never;
  /** Event triggered when the enabledState of the object changes (either its own or the parent's `enabled` property). */
  enabledchange: EzPropertyChangeEvent<boolean>;
  /** Event triggered when the visibilityState of the object changes (either its own or the parent's `visible` property). */
  visiblechange: EzPropertyChangeEvent<boolean>;
}

/**
 * Represents miscellaneous events. These events do not propagate to parents.
 */
export interface EzMiscEvents {
  /** Event triggered on first render and every time an object is rendered with a different viewport size from the previous one. */
  viewportresize: EzViewportResizeEvent;
  /** Event triggered every frame, before 'animate'. Usually used to prepare object animations. */
  beforeanimate: EzAnimateEvent;
  /** Event triggered every frame. Used to animate objects. */
  animate: EzAnimateEvent;
  /** Event triggered every frame, after 'animate'. Usually used if you want to operate after the animation is computed. */
  afteranimate: EzAnimateEvent;
}

/**
 * Represents interaction events. These events propagate to parents.
 */
export interface EzInteractionEvents {
  /** Event triggered when a pointer enters the target. */
  pointerover: EzPointerEvent;
  /** Event triggered when a pointer enters the target (no propagation). */
  pointerenter: EzPointerEvent;
  /** Event triggered when a pointer leaves the target. */
  pointerout: EzPointerEvent;
  /** Event triggered when a pointer leaves the target (no propagation). */
  pointerleave: EzPointerEvent;
  /** Event triggered when a pointer moves over the target. */
  pointermove: EzPointerEvent;
  /** Event triggered when a pointer button is pressed. */
  pointerdown: EzPointerEvent;
  /** Event triggered when a pointer button is released. */
  pointerup: EzPointerEvent;
  /** Event triggered if pointer is on target. Triggers every frame and only works if the scene has 'continuousRaycasting' equal to true. */
  pointerintersection: EzPointerIntersection;
  /** Event triggered when a click event occurs. */
  click: EzPointerEvent;
  /** Event triggered when a double click event occurs. */
  dblclick: EzPointerEvent;
  /** Event triggered when scrolling the mouse wheel. */
  wheel: EzPointerEvent<WheelEvent>;
  /** Event triggered when target gains focus (no propagation). */
  focusin: EzEvent<never>;
  /** Event triggered when target loses focus (no propagation). */
  focusout: EzEvent<never>;
  /** Event triggered when target gains focus. */
  focus: EzEvent<never>;
  /** Event triggered when target loses focus. */
  blur: EzEvent<never>;
  /** Event triggered on the focused object when a key is pressed. */
  keydown: EzEvent<KeyboardEvent>;
  /** Event triggered on the focused object when a key is released. */
  keyup: EzEvent<KeyboardEvent>;
  /** Event triggered when the target is dragged. */
  drag: EzDragEvent;
  /** Event triggered when dragging starts. */
  dragstart: EzDragEvent;
  /** Event triggered when dragging ends. */
  dragend: EzDragEvent;
  /** Event triggered when dragging is canceled (Can be canceled pressing 'ESC'). This is triggered on target and dropTarget. */
  dragcancel: EzDragEvent;
  /** Event triggered when a draggable object enters a drop target. */
  dragenter: EzDragEvent;
  /**
   * Event triggered when a draggable object moves over the drop target.
   * Triggers every frame if the scene has 'continuousRaycastingDropTarget' equal to true.
   */
  dragover: EzDragEvent;
  /** Event triggered when a draggable object leaves a drop target. */
  dragleave: EzDragEvent;
  /** Event triggered when a draggable object is dropped onto a drop target. */
  drop: EzDragEvent;
}

/**
 * Represents an extended intersection between a ray and 3D objects in a scene.
 */
export interface EzIntersection extends Intersection {
  /** The hitbox hit by the raycaster. */
  hitbox: Hitbox;
}

/**
 * Represents a custom extended event.
 */
export class EzEvent<Ev extends Event = Event> {
  /** Original dom event. */
  public readonly domEvent: Ev | null;
  /** The case-insensitive name identifying the type of the event. */
  public readonly type: keyof EzEvents;
  /** A reference to the object to which the event was originally dispatched. */
  public readonly target: Object3D;
  /** TODO */
  public readonly targetInstanceId?: number;
  /** A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting. */
  public readonly currentTarget: Object3D;
  /** TODO */
  public readonly currentTargetInstanceId?: number;
  /** The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead. */
  public readonly timeStamp = performance.now();
  /** A boolean value indicating whether the event is cancelable. */
  public readonly cancelable: boolean;
  /** A boolean value indicating whether or not the event bubbles up through the DOM. */
  public bubbles = true;
  /** Indicates whether or not the call to event.preventDefault() canceled the event. */
  public defaultPrevented = false;

  protected _stoppedImmediatePropagation = false;

  /**
   * TODO
   * @param domEvent Original dom event.
   * @param type The case-insensitive name identifying the type of the event.
   * @param target A reference to the object to which the event was originally dispatched.
   * @param targetInstanceId TODO
   * @param currentTarget A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting.
   * @param currentTargetInstanceId TODO
   * @param cancelable A boolean value indicating whether the event is cancelable. Default is `false`.
   */
  constructor(domEvent: Ev | null, type: keyof EzEvents, target: Object3D, targetInstanceId?: number, currentTarget = target, currentTargetInstanceId = targetInstanceId, cancelable = false) {
    this.domEvent = domEvent;
    this.type = type;
    this.target = target;
    this.targetInstanceId = targetInstanceId;
    this.currentTarget = currentTarget;
    this.currentTargetInstanceId = currentTargetInstanceId;
    this.cancelable = cancelable;
  }

  /** Cancels the event. */
  public preventDefault(): void {
    this.defaultPrevented = true;
  }

  /** For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance). */
  public stopImmediatePropagation(): void {
    this._stoppedImmediatePropagation = true;
  }

  /** Stops the propagation of events further along in the Object3D hierarchy. */
  public stopPropagation(): void {
    this.bubbles = false;
  }
}

/**
 * Represents a custom extended pointer event.
 */
export class EzPointerEvent<Ev extends MouseEvent = PointerEvent> extends EzEvent<Ev> {
  /** Returns the intersection information between the mouse event and 3D objects in the scene. */
  public readonly intersection: EzIntersection;
  /** The secondary target for the event, if there is one. */
  public readonly relatedTarget?: Object3D;
  /** TODO */
  public readonly relatedTargetInstanceId?: number;

  /**
   * @param intersection Returns the intersection information between the mouse event and 3D objects in the scene.
   * @param relatedTarget The secondary target for the event, if there is one.
   * @param relatedTargetInstanceId TODO
   */
  constructor(domEvent: Ev, type: keyof EzEvents, intersection: EzIntersection, target: Object3D, targetInstanceId?: number, currentTarget?: Object3D,
    currentTargetInstanceId?: number, relatedTarget?: Object3D, relatedTargetInstanceId?: number, cancelable?: boolean) {
    super(domEvent, type, target, targetInstanceId, currentTarget, currentTargetInstanceId, cancelable);
    this.relatedTarget = relatedTarget;
    this.relatedTargetInstanceId = relatedTargetInstanceId;
    this.intersection = intersection;
  }
}

/**
 * Represents a custom extended drag event.
 */
export class EzDragEvent extends EzPointerEvent {
  /** The data that is transferred during a drag and drop interaction. */
  public readonly dataTransfer: { [x: string]: any };
  /** Returns the new position of the dragged object. */
  public readonly position?: Vector3;

  /**
   * @param dataTransfer The data that is transferred during a drag and drop interaction.
   * @param position Returns the new position of the dragged object.
   */
  constructor(domEvent: PointerEvent, type: keyof EzEvents, target: Object3D, intersection: EzIntersection, dataTransfer: { [x: string]: any } = {},
    position?: Vector3, targetInstanceId?: number, currentTarget?: Object3D, currentTargetInstanceId?: number, relatedTarget?: Object3D,
    relatedTargetInstanceId?: number, cancelable?: boolean) {
    super(domEvent, type, intersection, target, targetInstanceId, currentTarget, currentTargetInstanceId, relatedTarget, relatedTargetInstanceId, cancelable);
    this.position = position;
    this.dataTransfer = dataTransfer;
  }
}

/**
 * Represents a pointer intersection event.
 */
export class EzPointerIntersection extends EzEvent<never> {
  /** Returns the intersection information between the mouse event and 3D objects in the scene. */
  public readonly intersection: EzIntersection;

  /**
   * @param intersection The intersection information between the mouse event and 3D objects in the scene.
   */
  constructor(type: keyof EzEvents, intersection: EzIntersection, target: Object3D, targetInstanceId?: number, currentTarget?: Object3D, currentTargetInstanceId?: number, cancelable?: boolean) {
    super(null, type, target, targetInstanceId, currentTarget, currentTargetInstanceId, cancelable);
    this.intersection = intersection;
  }
}

/**
 * Represents an event related to resizing of a renderer.
 */
export interface EzViewportResizeEvent {
  /** Returns new render width. */
  width: number;
  /** Returns the render height. */
  height: number;
  /** Returns renderer. */
  renderer: WebGLRenderer;
  /** Returns rendering camera. */
  camera: Camera;
}

/**
 * Represents an event related to animation.
 */
export interface EzAnimateEvent {
  /** The difference in time between the current animation frame and the previous one (in milliseconds). */
  delta: DOMHighResTimeStamp;
  /** The total amount of time that has passed since the animation started (in milliseconds). */
  total: DOMHighResTimeStamp;
}

/**
 * Represents a property change event.
 * @template V - The type of the new value associated with the property change.
 */
export interface EzPropertyChangeEvent<V> {
  /** A reference to the object to which the event was originally dispatched. */
  target: Object3D;
  /** The new value associated with the property change. */
  value: V;
}
