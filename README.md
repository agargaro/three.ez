# three.ez

[![npm version](https://badge.fury.io/js/@three.ez%2Fmain.svg)](https://badge.fury.io/js/@three.ez%2Fmain)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=agargaro_three.ez&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=agargaro_three.ez)
[![DeepScan grade](https://deepscan.io/api/teams/21196/projects/25445/branches/796375/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=21196&pid=25445&bid=796375)
[![CodeFactor](https://www.codefactor.io/repository/github/agargaro/three.ez/badge)](https://www.codefactor.io/repository/github/agargaro/three.ez)
[![BundlePhobia](https://badgen.net/bundlephobia/min/@three.ez/main)](https://bundlephobia.com/package/@three.ez/main)

`three.ez` is a library designed to simplify the development of a `three.js` application, enabling the easy creation of reusable and maintainable components and providing a range of other functionalities.
It offers high performance on desktops and mobile devices.

## Features

### Automatic Resize Handling

Automatically resizes `Renderer`, `Camera`, `EffectComposer`. Using `rendererResize` event is also possibile to set resolution for custom shaders.

### Smart Rendering

Smart rendering allows a frame to render only when it is needed, which is particularly useful when using mostly static scenes, optimizing performance and reducing unnecessary computational overhead. <br>
It is based on a `Scene` property called `needsRender`, which is changed automatically when there is a change in position, scale, rotation, visiblity, focus, removal or addition of `Object3D``.
It is also possible to change it manually, in cases where changes are not automatically identified.

### Simplified Rendering

The rendering of viewports is handled by the `Main` class, using the `createView` method, which returns an instance of `RenderView`. <br>
By modifying the various properties of this instance, various parameters can be changed, including: the size, position, background, interaction state, and visibility. 
It is also possible to specify an `EffectComposer` for each RenderView to handle post-processing effects.

### Object3D Property Binding

It is possible to bind to a property of an `Object3D` the result of a callback, using the `bindProperty` method. <br>
The bindings are computed automatically during each animate cycle.
To manually compute the various bindings using the `setManualDetectionMode` and `detectChanges` methods.

### Event Programming

It facilitates interaction with `Object3D` by adding a series of programmable events. <br>
Interaction events work similarly to those in the DOM, having the same method of propagation.

<details>
  <summary>Show events list</summary>
  
  ```typescript
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
    /** Event triggered when the enabledState of the object changes. The propagation of this event does not go to parents but to children. */
    enabledchange: PropertyChangeEvent<boolean>;
    /** Event triggered when the visibility of the object changes. The propagation of this event does not go to parents but to children. */
    visiblechange: PropertyChangeEvent<boolean>;
  }
  /**
   * Represents miscellaneous events. These events do not propagate to parents.
   */
  export interface MiscEvents {
    /** Event triggered on first render and every time an object is rendered with a different viewport size from the previous one. */
    rendererresize: RendererResizeEvent;
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
    /** Event triggered if pointer is on target. Triggers every frame and only works if the scene has 'continousRaycasting' equal to true. */
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
    /** Event triggered when dragging is canceled (Can be canceled pressing 'ESC'). This is triggered on target an dropTarget. */
    dragcancel: DragEventExt<T, RD>;
    /** Event triggered when a draggable object enters a drop target. */
    dragenter: DragEventExt<T, RD>;
    /**
     * Event triggered when a draggable object moves over the drop target.
     * Triggers every frame if the scene has 'continousRaycastingDropTarget' equal to true.
     */
    dragover: DragEventExt<T, RD>;
    /** Event triggered when a draggable object leaves a drop target. */
    dragleave: DragEventExt<T, RD>;
    /** Event triggered when a draggable object is dropped onto a drop target. */
    drop: DragEventExt<T, RD>;
  }
  ```
</details>

### Focus and Blur

Implements focus handling and related events to handle certain interactions more easily. <br>
By setting the value of the `focusable` property of an `Object3D` you can determine whether it can receive focus.

### Drag and Drop

Implements drag and drop handling and related events by adding two properties to each `Object3D`:
- **draggable**: makes an object draggable.
- **findDropTarget**: determines whether intersections with drop targets will be checked during dragging.

### Tweening

Implements smooth animations effortlessly with integrated tweening functionality.

### Raycasting Options

Choose between continuous raycasting or raycasting only during mouse movement, providing flexibility in optimizing raycasting operations based on your application's requirements. In addition, there is the possibility to choose which objects can be intersected.

### Hitbox Functionality

Hitboxes can be used to handle a different intersection area or to simplify intersection calculations. 

### Simplified InstancedMesh

Simplify the use of `InstancedMesh` by managing it as if each entity were an `Object3D`. This approach simplifies the creation and manipulation of InstancedMesh instances, providing a more intuitive and easy-to-develop workflow.

## How It Works

The `Main` class handles rendering, resizing, events and all other functionality. <br>
In addition, methods and properties have been added to the `Object3D` and `Scene` classes.

<details>
  <summary>Show Main properties and methods</summary>

  ```typescript
  /**
   * Represents the configuration parameters for initializing the Main class.
   */
  export interface MainParameters {
    /** A Boolean flag indicating whether to enable full-screen mode and perform automatic resizing of the canvas (default: true). */
    fullscreen?: boolean;
    /** A boolean flag indicating whether to display performance statistics (default: true). */
    showStats?: boolean;
    /** A boolean flag indicating whether to disable the context menu on right-click (default: true). */
    disableContextMenu?: boolean;
    /** The default background color (default: black). */
    backgroundColor?: ColorRepresentation;
    /** The default alpha (transparency) value for the background (default: 1). */
    backgroundAlpha?: number;
    /** A callback function executed for each frame. */
    animate?: XRFrameRequestCallback;
    /** Configuration parameters for the WebGLRenderer. */
    rendererParameters?: WebGLRendererParameters;
    /** A boolean flag indicating whether to enable cursor handling in the application (default: true). */
    enableCursor?: boolean;
    /** A boolean flag indicating whether to enable multitouch interactions (default: false). */
    multitouch?: boolean;
  }

  /**
   * The `Main` class serves as the core component for managing a 3D application.
   * It provides configuration options and methods for setting up and controlling the application's behavior.
   */
  export declare class Main {
    /** A static counter representing the number of animation frames elapsed. */
    static ticks: number;
    private _renderManager;
    private _interactionManager;
    private _stats;
    private _animate;
    private _clock;
    private _showStats;
    /**
     * The WebGLRenderer instance used for rendering the 3D scene.
     */
    get renderer(): WebGLRenderer;
    /**
     * An array of all RenderView instances managed by the application.
     * Lists all views created and managed by the application, each representing a separate viewport or scene.
     */
    get views(): RenderView[];
    /**
     * The currently active RenderView (activated by mouse position).
     */
    get activeView(): RenderView;
    /**
     * The Scene associated with the currently active RenderView.
     */
    get activeScene(): Scene;
    /**
     * The Camera associated with the currently active RenderView.
     */
    get activeCamera(): Camera;
    /**
     * The EffectComposer (used for post-processing) associated with the currently active RenderView.
     */
    get activeComposer(): EffectComposer;
    /**
     * A boolean flag indicating whether to display performance statistics.
     * If set to true, statistics will be shown; otherwise, they will be hidden.
     */
    get showStats(): boolean;
    set showStats(value: boolean);
    /**
     * A boolean flag indicating whether to enable multitouch interactions.
     */
    get multitouch(): boolean;
    set multitouch(value: boolean);
    /**
     * A boolean flag indicating whether to enable cursor handling in the application.
     */
    get enableCursor(): boolean;
    set enableCursor(value: boolean);
    /**
     * A custom sorting comparer function used to order intersections when performing raycasting.
     */
    get raycasterSortComparer(): RaycasterSortComparer;
    set raycasterSortComparer(value: RaycasterSortComparer);
    /**
     * A Raycaster instance responsible for handling raycasting operations in the application.
     */
    get raycaster(): Raycaster;
    /**
     * The default background color used in the application.
     */
    get backgroundColor(): ColorRepresentation;
    set backgroundColor(value: ColorRepresentation);
    /**
     * The default alpha (transparency) value for the background.
     */
    get backgroundAlpha(): number;
    set backgroundAlpha(value: number);
    /**
     * The current mouse position represented as a Vector2.
     * Provides the x and y coordinates of the mouse pointer within the application.
     */
    get mousePosition(): Vector2;
    /**
     * @param parameters Represents the configuration parameters for initializing the Main class.
     */
    constructor(parameters?: MainParameters);
    private handleContextMenu;
    private setAnimationLoop;
    private animate;
    /**
     * Creates a new RenderView and adds it to the RenderManager.
     * @param view The parameters for the new RenderView.
     * @returns The created RenderView instance.
     */
    createView(view: ViewParameters): RenderView;
    /**
     * Adds a RenderView to the RenderManager.
     * @param view The RenderView instance to add.
     */
    addView(view: RenderView): void;
    /**
     * Retrieves a RenderView by its tag.
     * @param tag The tag to search for.
     * @returns The RenderView with the specified tag, if found, otherwise, undefined.
     */
    getViewByTag(tag: string): RenderView;
    /**
     * Removes a RenderView from the RenderManager.
     * @param view The RenderView instance to remove.
     */
    removeView(view: RenderView): void;
    /**
     * Removes a RenderView from the RenderManager by its tag.
     * @param tag The tag of the RenderView to remove.
     */
    removeViewByTag(tag: string): void;
    /**
     * Clears all RenderViews from the RenderManager.
     */
    clearViews(): void;
    /**
    * Retrieves a RenderView by mouse position.
    * @param mouse The mouse position as a Vector2.
    */
    getViewByMouse(mouse: Vector2): void;
    /**
     * Sets active RenderViews by tag.
     * @param tag The tag of the RenderViews to set as active.
     */
    setActiveViewsByTag(tag: string): void;
  }
  ```
</details>

<details>
  <summary>Show Object3D properties and methods added</summary>

  ```typescript
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
  ```
</details>

<details>
  <summary>Show Scene properties and methods added</summary>

  ```typescript
  /**
   * Represents the prototype for extended Scene functionality.
   */
  export interface SceneExtPrototype {
    /**
     * Flag indicating whether continuous raycasting is enabled (default: false).
     * If set to true, raycasting will occur every frame, otherwise it will occur only upon mouse movement.
     * Also, if set to true, the 'pointerintersection' event will be triggered every frame.
     */
    continousRaycasting: boolean;
    /**
     * Flag indicating whether continuous raycasting when searching for drop targets is enabled (default: false).
     * If set to true, raycasting will occur every frame, otherwise it will occur only upon mouse movement.
     * Also, if set to true, the 'dragover' event will be triggered every frame.
     */
    continousRaycastingDropTarget: boolean;
    /** An array of intersections computed from the pointer (primary pointer only). */
    intersections: IntersectionExt[];
    /** An array of intersections computed from the pointer if an object is dragged and has 'findDropTarget' to true (primary pointer only). */
    intersectionsDropTarget: IntersectionExt[];
    /** A reference to the currently focused Object3D within the scene. */
    focusedObject: Object3D;
    /** Flag indicating whether to blur focused object3D when clicking outside of any object. */
    blurOnClickOut: boolean;
    /** The time scale for scene animations. */
    timeScale: number;
    /** The total time elapsed in the scene. */
    totalTime: number;
    /**
     * Activate smart rendering for the scene.
     * @returns The updated instance of the scene.
     */
    activeSmartRendering(): this;
    /**
     * Set the focus to the specified Object3D within the scene, or clears the focus if no target is provided.
     * @param target Optional. The Object3D to focus on. If not provided, the focus is cleared.
     */
    focus(target?: Object3D): void;
  }
  ```
</details>

## Installation

You can install `three.ez` via npm using the following command:

```bash
npm install @three.ez/main
```

## Usage

### Small example of a simple animated and draggable box:

```typescript
import { Scene, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
import { Main, PerspectiveCameraAuto } from '@three.ez/main';

const box = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());
box.draggable = true;
box.on('animate', (e) => box.rotateX(e.delta).rotateY(e.delta * 2));
const scene = new Scene().add(box);
const main = new Main();
main.createView({ scene, camera: new PerspectiveCameraAuto(70).translateZ(1) });
```

### Extended (recommended) example of a simple animated and draggable box:

```typescript
import { Scene as SceneBase, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
import { Main as MainBase, PerspectiveCameraAuto } from '@three.ez/main';

class DraggableBox extends Mesh {
  constructor() {
    super(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());
    this.draggable = true;
    this.on('animate', (e) => this.rotateX(e.delta).rotateY(e.delta * 2));
  }
}

class Scene extends SceneBase {
  constructor() {
    super();
    this.add(new DraggableBox());
  }
}

class Main extends MainBase {
  constructor() {
    super();
    this.createView({ scene: new Scene(), camera: new PerspectiveCameraAuto(70).translateZ(1) });
  }
}

const main = new Main();
```

## Override Typescript Type Definition

To extend the definitions of `three`, go into `ts.config` and add this path:

```javascript
"compilerOptions": {
  "paths": {
    "three": ["./node_modules/@three.ez/main/types"]
  }
}
```

## Live Examples

These examples use `vite` and some mobile devices may go out of memory. 
There is one example without vite.

[Examples Collection](https://stackblitz.com/@agargaro/collections/three-ez)

- [Template](https://stackblitz.com/edit/three-ez-template?file=src%2Fmain.ts)
— [Template Small](https://stackblitz.com/edit/three-ez-template-small?file=src%2Fmain.ts)
— [Template No Vite](https://stackblitz.com/edit/three-ez-template-no-vite?file=index.ts)
- [Smart Rendering](https://stackblitz.com/edit/three-ez-smart-rendering?file=src%2Fmain.ts)
- [Multiple Views](https://stackblitz.com/edit/three-ez-multiple-views?file=src%2Fmain.ts)
— [Multiple Views Wireframe](https://stackblitz.com/edit/three-ez-multiple-views-wireframe?file=src%2Fmain.ts)
- [Binding](https://stackblitz.com/edit/three-ez-binding?file=src%2Fmain.ts)
— [Binding Collisions](https://stackblitz.com/edit/three-ez-binding-collisions?file=src%2Fmain.ts)
- [Events](https://stackblitz.com/edit/three-ez-events?file=src%2Fmain.ts)
— [Click On Scene To Add Box](https://stackblitz.com/edit/three-ez-click-on-scene-to-add-box?file=src%2Fmain.ts)
- [Focus]()
— [Focus With Outline Post-Processing]()
- [Drag & Drop]()
— [LOD Draggable]()
- [Tweening]()
- [Hitbox]()
- [InstancedMeshEntity]()
— [InstancedMeshEntity Performance]()
- [Draggable Box OrbitControls]()

## Documentation

Work in progress...

## Contributing

Any help is highly appreciated. If you would like to contribute to this package or report problems, feel free to open a bug or pull request.

## Questions?

If you have questions or need assistance, you can create a post in the discussions section.
