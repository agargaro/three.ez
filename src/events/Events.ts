import { Camera, Intersection, Object3D, Vector3, WebGLRenderer } from 'three';
import { InstancedMeshEntity } from '../instancedMesh/InstancedMeshEntity.js';
import { Hitbox } from './Hitbox.js';

export type MiscUpdateEvents = MiscEvents & UpdateEvents;
export type Events = InteractionEvents & MiscUpdateEvents;

/**
 * Represents events related to updates. These events do not propagate to parents.
 */
export interface UpdateEvents {
  /** Event triggered when the position of the object changes. */
  positionchange: never;
  /** Event triggered when the scale of the object changes. */
  scalechange: never;
  /** Event triggered when the rotation of the object changes. */
  rotationchange: never;
  /** Event triggered when the enabledState of the object changes (either its own or the parent's `enabled` property). */
  enabledchange: PropertyChangeEvent<boolean>;
  /** Event triggered when the visibilityState of the object changes (either its own or the parent's `visible` property). */
  visiblechange: PropertyChangeEvent<boolean>;
}

/**
 * Represents miscellaneous events. These events do not propagate to parents.
 */
export interface MiscEvents {
  /** Event triggered on first render and every time an object is rendered with a different viewport size from the previous one. */
  viewportresize: ViewportResizeEvent;
  /** Event triggered every frame, before 'animate'. Usually used to prepare object animations. */
  beforeanimate: AnimateEvent;
  /** Event triggered every frame. Used to animate objects. */
  animate: AnimateEvent;
  /** Event triggered every frame, after 'animate'. Usually used if you want to operate after the animation is computed. */
  afteranimate: AnimateEvent;
}

/**
 * Represents interaction events. These events propagate to parents.
 * @typeparam T - The primary target type.
 * @typeparam R - The related target type.
 * @typeparam RD - The related target type on drag events.
 */
export interface InteractionEvents<T = Object3D, R = Object3D, RD = Object3D | InstancedMeshEntity> {
  /** Event triggered when a pointer enters the target. */
  pointerover: PointerEventExt<T, R>;
  /** Event triggered when a pointer enters the target (no propagation). */
  pointerenter: PointerEventExt<T, R>;
  /** Event triggered when a pointer leaves the target. */
  pointerout: PointerEventExt<T, R>;
  /** Event triggered when a pointer leaves the target (no propagation). */
  pointerleave: PointerEventExt<T, R>;
  /** Event triggered when a pointer moves over the target. */
  pointermove: PointerEventExt<T, R>;
  /** Event triggered when a pointer button is pressed. */
  pointerdown: PointerEventExt<T, R>;
  /** Event triggered when a pointer button is released. */
  pointerup: PointerEventExt<T, R>;
  /** Event triggered if pointer is on target. Triggers every frame and only works if the scene has 'continuousRaycasting' equal to true. */
  pointerintersection: PointerIntersectionEvent<T>;
  /** Event triggered when a click event occurs. */
  click: PointerEventExt<T, R>;
  /** Event triggered when a double click event occurs. */
  dblclick: PointerEventExt<T, R>;
  /** Event triggered when scrolling the mouse wheel. */
  wheel: WheelEventExt<T>;
  /** Event triggered when target gains focus (no propagation). */
  focusin: FocusEventExt<T, R>;
  /** Event triggered when target loses focus (no propagation). */
  focusout: FocusEventExt<T, R>;
  /** Event triggered when target gains focus. */
  focus: FocusEventExt<T, R>;
  /** Event triggered when target loses focus. */
  blur: FocusEventExt<T, R>;
  /** Event triggered on the focused object when a key is pressed. */
  keydown: KeyboardEventExt<T>;
  /** Event triggered on the focused object when a key is released. */
  keyup: KeyboardEventExt<T>;
  /** Event triggered when the target is dragged. */
  drag: DragEventExt<T, RD>;
  /** Event triggered when dragging starts. */
  dragstart: DragEventExt<T, RD>;
  /** Event triggered when dragging ends. */
  dragend: DragEventExt<T, RD>;
  /** Event triggered when dragging is canceled (Can be canceled pressing 'ESC'). This is triggered on target and dropTarget. */
  dragcancel: DragEventExt<T, RD>;
  /** Event triggered when a draggable object enters a drop target. */
  dragenter: DragEventExt<T, RD>;
  /**
   * Event triggered when a draggable object moves over the drop target.
   * Triggers every frame if the scene has 'continuousRaycastingDropTarget' equal to true.
   */
  dragover: DragEventExt<T, RD>;
  /** Event triggered when a draggable object leaves a drop target. */
  dragleave: DragEventExt<T, RD>;
  /** Event triggered when a draggable object is dropped onto a drop target. */
  drop: DragEventExt<T, RD>;
}

/**
 * Represents an extended intersection between a ray and 3D objects in a scene.
 */
export interface IntersectionExt extends Intersection {
  object: Object3D;
  /** The hitbox hit by the raycaster. */
  hitbox: Hitbox;
}

/**
 * Represents a custom extended event.
 */
export class EventExt<T = Object3D> {
  /** A boolean value indicating whether or not the event bubbles up through the DOM. */
  public get bubbles(): boolean { return this._bubbles; }
  /** A boolean value indicating whether the event is cancelable. */
  public readonly cancelable: boolean;
  /** A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting. */
  public currentTarget: T;
  /** Indicates whether or not the call to event.preventDefault() canceled the event. */
  public get defaultPrevented(): boolean { return this._defaultPrevented; }
  /** A reference to the object to which the event was originally dispatched. */
  public get target(): T { return this._target; }
  /** The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead. */
  public readonly timeStamp = performance.now();
  /** The case-insensitive name identifying the type of the event. */
  public get type(): keyof Events { return this._type; }

  /** @internal */ public _defaultPrevented: boolean;
  /** @internal */ public _stoppedImmediatePropagation: boolean;
  /** @internal */ public _bubbles: boolean;
  /** @internal */ public _type: keyof Events;
  /** @internal */ public _target: T;

  /**
   * @param cancelable A boolean value indicating whether the event is cancelable.
   */
  constructor(cancelable = false) {
    this.cancelable = cancelable;
  }

  /** Cancels the event. */
  public preventDefault(): void {
    this._defaultPrevented = true;
  }

  /** For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance). */
  public stopImmediatePropagation(): void {
    this._stoppedImmediatePropagation = true;
  }

  /** Stops the propagation of events further along in the Object3D hierarchy. */
  public stopPropagation(): void {
    this._bubbles = false;
  }
}

/**
 * Represents a custom extended mouse event.
 * @template T - The type of the primary target for the event (default is `Object3D`).
 * @template R - The type of the related target for the event (default is `Object3D`).
 */
export class MouseEventExt<T = Object3D, R = Object3D> extends EventExt<T> {
  /** Original dom event. */
  public readonly domEvent: MouseEvent;
  /** Returns true if the alt key was down when the mouse event was fired. */
  public get altKey(): boolean { return this.domEvent.altKey; }
  /** The button number that was pressed (if applicable) when the mouse event was fired. */
  public get button(): number { return this.domEvent.button; }
  /** The buttons being pressed (if any) when the mouse event was fired. */
  public get buttons(): number { return this.domEvent.buttons; }
  /** The X coordinate of the mouse pointer in local (DOM content) coordinates. */
  public get clientX(): number { return this.domEvent.clientX; }
  /** The Y coordinate of the mouse pointer in local (DOM content) coordinates. */
  public get clientY(): number { return this.domEvent.clientY; }
  /** Returns true if the control key was down when the mouse event was fired. */
  public get ctrlKey(): boolean { return this.domEvent.ctrlKey; }
  /** Returns true if the meta key was down when the mouse event was fired. */
  public get metaKey(): boolean { return this.domEvent.metaKey; }
  /** The X coordinate of the pointer relative to the position of the last event. */
  public get movementX(): number { return this.domEvent.movementX; }
  /** The Y coordinate of the pointer relative to the position of the last event. */
  public get movementY(): number { return this.domEvent.movementY; }
  /** The X coordinate of the mouse pointer relative to the position of the padding edge of the target node. */
  public get offsetX(): number { return this.domEvent.offsetX; }
  /** The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node. */
  public get offsetY(): number { return this.domEvent.offsetY; }
  /** The X coordinate of the mouse pointer relative to the whole document. */
  public get pageX(): number { return this.domEvent.pageX; }
  /** The Y coordinate of the mouse pointer relative to the whole document. */
  public get pageY(): number { return this.domEvent.pageY; }
  /** The secondary target for the event, if there is one. */
  public readonly relatedTarget: R;
  /** The X coordinate of the mouse pointer in global (screen) coordinates. */
  public get screenX(): number { return this.domEvent.screenX; }
  /** The Y coordinate of the mouse pointer in global (screen) coordinates. */
  public get screenY(): number { return this.domEvent.screenY; }
  /** Returns true if the shift key was down when the mouse event was fired. */
  public get shiftKey(): boolean { return this.domEvent.shiftKey; }
  /** Returns the intersection information between the mouse event and 3D objects in the scene. */
  public readonly intersection: IntersectionExt;

  /**
   * @param event Original dom event.
   * @param intersection The intersection information between the mouse event and 3D objects in the scene.
   * @param relatedTarget The secondary target for the event.
   * @param cancelable A boolean value indicating whether the event is cancelable.
   */
  constructor(event: MouseEvent, intersection: IntersectionExt, relatedTarget?: R, cancelable?: boolean) {
    super(cancelable);
    this.domEvent = event;
    this.intersection = intersection;
    this.relatedTarget = relatedTarget;
  }

  /** Returns the current state of the specified modifier key. See KeyboardEvent.getModifierState() for details. */
  public getModifierState(keyArg: string): boolean {
    return this.domEvent.getModifierState(keyArg);
  }
}

/**
 * Represents a custom extended pointer event.
 * @template T - The type of the primary target for the event (default is `Object3D`).
 * @template R - The type of the related target for the event (default is `Object3D`).
 */
export class PointerEventExt<T = Object3D, R = Object3D> extends MouseEventExt<T, R> {
  declare public readonly domEvent: PointerEvent;
  /** A unique identifier for the pointer causing the event. */
  public get pointerId(): number { return this.domEvent.pointerId; }
  /** The width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer. */
  public get width(): number { return this.domEvent.width; }
  /** The height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer. */
  public get height(): number { return this.domEvent.height; }
  /** The normalized pressure of the pointer input in the range 0 to 1, where 0 and 1 represent the minimum and maximum pressure the hardware is capable of detecting, respectively. */
  public get pressure(): number { return this.domEvent.pressure; }
  /** The normalized tangential pressure of the pointer input (also known as barrel pressure or cylinder stress) in the range -1 to 1, where 0 is the neutral position of the control. */
  public get tangentialPressure(): number { return this.domEvent.tangentialPressure; }
  /** The plane angle (in degrees, in the range of -90 to 90) between the Y–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the Y axis. */
  public get tiltX(): number { return this.domEvent.tiltX; }
  /** The plane angle (in degrees, in the range of -90 to 90) between the X–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the X axis. */
  public get tiltY(): number { return this.domEvent.tiltY; }
  /** The clockwise rotation of the pointer (e.g. pen stylus) around its major axis in degrees, with a value in the range 0 to 359. */
  public get twist(): number { return this.domEvent.twist; }
  /** Indicates the device type that caused the event (mouse, pen, touch, etc.). */
  public get pointerType(): string { return this.domEvent.pointerType; }
  /** Indicates if the pointer represents the primary pointer of this pointer type. */
  public get isPrimary(): boolean { return this.domEvent.isPrimary; }
}

/**
 * Represents a custom extended drag event.
 * @template T - The type of the primary target for the event (default is `Object3D`).
 * @template R - The type of the related target for the event (default is `Object3D` or `InstancedMeshEntity`).
 */
export class DragEventExt<T = Object3D, R = Object3D | InstancedMeshEntity> extends PointerEventExt<T, R> {
  /** The data that is transferred during a drag and drop interaction. */
  public readonly dataTransfer: { [x: string]: any };
  /** Returns the new position of the dragged object.' */
  public readonly position: Vector3;

  /**
   * @param event Original dom event.
   * @param cancelable A boolean value indicating whether the event is cancelable.
   * @param dataTransfer The data that is transferred during a drag and drop interaction.
   * @param position The new position of the dragged object.
   * @param relatedTarget The secondary target for the event.
   * @param intersection The intersection information between the mouse event and 3D objects in the scene.
   */
  constructor(event?: PointerEvent, cancelable?: boolean, dataTransfer: { [x: string]: any } = {}, position?: Vector3, relatedTarget?: R, intersection?: IntersectionExt) {
    super(event, intersection, relatedTarget, cancelable);
    this.position = position;
    this.dataTransfer = dataTransfer;
  }
}

/**
 * Represents a custom extended wheel event.
 * @template T - The type of the primary target for the event (default is `Object3D`).
 * @template R - The type of the related target for the event (default is `Object3D`).
 */
export class WheelEventExt<T = Object3D, R = Object3D> extends MouseEventExt<T, R> {
  declare public readonly domEvent: WheelEvent;
  /*  Returns an unsigned long representing the unit of the delta* values' scroll amount. Permitted values are: 0 = pixels, 1 = lines, 2 = pages. */
  public get deltaMode(): number { return this.domEvent.deltaMode; }
  /** Returns a double representing the horizontal scroll amount. */
  public get deltaX(): number { return this.domEvent.deltaX; }
  /** Returns a double representing the vertical scroll amount. */
  public get deltaY(): number { return this.domEvent.deltaY; }
  /** Returns a double representing the scroll amount for the z-axis. */
  public get deltaZ(): number { return this.domEvent.deltaZ; }
}

/**
 * Represents a pointer intersection event.
 * @template T - The type of the primary target for the event (default is `Object3D`).
 */
export class PointerIntersectionEvent<T = Object3D> extends EventExt<T> {
  /** Returns the intersection information between the mouse event and 3D objects in the scene. */
  public readonly intersection: IntersectionExt;

  /**
   * @param intersection The intersection information between the mouse event and 3D objects in the scene.
   */
  constructor(intersection: IntersectionExt) {
    super();
    this.intersection = intersection;
  }
}

/**
 * Represents a custom extended keyboard event.
 * @template T - The type of the primary target for the event (default is `Object3D`).
 */
export class KeyboardEventExt<T = Object3D> extends EventExt<T> {
  /** Original dom event. */
  public readonly domEvent: KeyboardEvent;
  /** Returns a boolean value that is true if the Alt (Option or ⌥ on macOS) key was active when the key event was generated. */
  public get altKey(): boolean { return this.domEvent.altKey; }
  /** Returns a string with the code value of the physical key represented by the event. */
  public get code(): string { return this.domEvent.code; }
  /** Returns a boolean value that is true if the Ctrl key was active when the key event was generated. */
  public get ctrlKey(): boolean { return this.domEvent.ctrlKey; }
  /** Returns a string representing the key value of the key represented by the event. */
  public get key(): string { return this.domEvent.key; }
  /** Returns a number representing the location of the key on the keyboard or other input device. Visit https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location for more info. */
  public get location(): number { return this.domEvent.location; }
  /** Returns a boolean value that is true if the Meta key (on Mac keyboards, the ⌘ Command key; on Windows keyboards, the Windows key (⊞)) was active when the key event was generated. */
  public get metaKey(): boolean { return this.domEvent.metaKey; }
  /** Returns a boolean value that is true if the key is being held down such that it is automatically repeating. */
  public get repeat(): boolean { return this.domEvent.repeat; }
  /** Returns a boolean value that is true if the Shift key was active when the key event was generated. */
  public get shiftKey(): boolean { return this.domEvent.shiftKey; }

  /**
   * @param event Original dom event.
   * @param cancelable A boolean value indicating whether the event is cancelable.
   */
  constructor(event: KeyboardEvent, cancelable: boolean) {
    super(cancelable);
    this.domEvent = event;
  }

  /** Returns a boolean value indicating if a modifier key such as Alt, Shift, Ctrl, or Meta, was pressed when the event was created. */
  public getModifierState(keyArg: string): boolean {
    return this.domEvent.getModifierState(keyArg);
  }
}

/**
 * Represents a custom extended focus event.
 * @template T - The type of the primary target for the event (default is `Object3D`).
 * @template R - The type of the related target for the event (default is `Object3D`).
 */
export class FocusEventExt<T = Object3D, R = Object3D> extends EventExt<T> {
  /** The secondary target for the event. */
  public relatedTarget: R;

  /**
   * @param relatedTarget The secondary target for the event.
   */
  constructor(relatedTarget: R) {
    super();
    this.relatedTarget = relatedTarget;
  }
}

/**
 * Represents an event related to resizing of a renderer.
 */
export interface ViewportResizeEvent {
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
export interface AnimateEvent {
  /** The difference in time between the current animation frame and the previous one (in milliseconds). */
  delta: DOMHighResTimeStamp;
  /** The total amount of time that has passed since the animation started (in milliseconds). */
  total: DOMHighResTimeStamp;
}

/**
 * Represents a property change event.
 * @template V - The type of the new value associated with the property change.
 */
export interface PropertyChangeEvent<V> {
  /** A reference to the object to which the event was originally dispatched. */
  target: Object3D;
  /** The new value associated with the property change. */
  value: V;
}
