# three.ez

[![npm version](https://badge.fury.io/js/@three.ez%2Fmain.svg)](https://badge.fury.io/js/@three.ez%2Fmain)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=agargaro_three.ez&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=agargaro_three.ez)
[![DeepScan grade](https://deepscan.io/api/teams/21196/projects/25445/branches/796375/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=21196&pid=25445&bid=796375)
[![CodeFactor](https://www.codefactor.io/repository/github/agargaro/three.ez/badge)](https://www.codefactor.io/repository/github/agargaro/three.ez)
[![BundlePhobia](https://badgen.net/bundlephobia/min/@three.ez/main)](https://bundlephobia.com/package/@three.ez/main)

**three.ez** is a library designed to simplify the development of a `three.js` application, enabling the easy creation of reusable and maintainable components and providing a range of other functionalities.
It offers high performance on desktops and mobile devices.

## How It Works

The `Main` class handles rendering, resizing, events and all other functionality. <br>
In addition, methods and properties have been added to the `Object3D` and `Scene` classes.

<details>
  <summary>Show Object3D properties and methods added</summary>

  ```typescript
  interface Object3DExtPrototype {
    enabled: boolean;
    interceptByRaycaster: boolean;
    hitboxes: Mesh[];
    focusable: boolean;
    draggable: boolean;
    findDropTarget: boolean;
    scene: Scene;
    cursor: Cursor;
    cursorDrag: Cursor;
    cursorDrop: Cursor;
    needsRender: boolean;
    get hovered(): boolean;
    get focused(): boolean;
    get clicking(): boolean;
    get dragging(): boolean;
    get enabledState(): boolean;
    get firstFocusable(): Object3D;
    applyFocus(): void;
    applyBlur(): void;
    on(type: string | string[], listener: (args?: any) => void): (args?: any) => void;
    hasEvent(type: string, listener: (args?: any) => void): boolean;
    off(type: string, listener: (args?: any) => void): void;
    trigger(type: string, args?: any): void;
    triggerAncestor(type: string, args?: any): void;
    setManualDetectionMode(): void;
    detectChanges(recursive?: boolean): void;
    bindProperty(property: string, getCallback: () => any, renderOnChange?: boolean): this;
    unbindProperty(property: string): this;
    tween(): Tween<Object3D>;
  }
  ```
</details>

<details>
  <summary>Show Scene properties and methods added</summary>

  ```typescript
  interface SceneExtPrototype {
    continousRaycasting: boolean;
    continousRaycastingDropTarget: boolean;
    intersections: IntersectionExt[];
    intersectionsDropTarget: IntersectionExt[];
    focusedObject: Object3D;
    blurOnClickOut: boolean;
    timeScale: number;
    totalTime: number;
    activeSmartRendering(): this;
    focus(target?: Object3D): void;
  }
  ```
</details>

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
  <table>
    <tr>
      <th colspan="9" width="1000">Interaction Events</th>
    </tr>
    <tr>
      <td>pointerover</td>
      <td>pointerenter</td>
      <td>pointerout</td>
      <td>pointerleave</td>
      <td>pointermove</td>
      <td>pointerdown</td>
      <td>pointerup</td>
      <td>click</td>
      <td>dblclick</td>
    </tr>
    <tr>
      <td>pointerintersection</td>
      <td>wheel</td>
      <td>focusin</td>
      <td>focusout</td>
      <td>focus</td>
      <td>blur</td>
      <td>keydown</td>
      <td>keyup</td>
      <td></td>
    </tr>
    <tr>
      <td>drag</td>
      <td>dragstart</td>
      <td>dragend</td>
      <td>dragcancel</td>
      <td>dragenter</td>
      <td>dragover</td>
      <td>dragleave</td>
      <td>drop</td>
      <td></td>
    </tr>
  </table>

  <table>
    <tr>
      <th colspan="5" width="1000">Update Events</th>
    </tr>
    <tr>
      <td>positionchange</td>
      <td>scalechange</td>
      <td>rotationchange</td>
      <td>enabledchange</td>
      <td>visiblechange</td>
    </tr>
  </table>

  <table>
    <tr>
      <th colspan="4" width="1000">Misc Events</th>
    </tr>
    <tr>
      <td>rendererresize</td>
      <td>beforeanimate</td>
      <td>animate</td>
      <td>afteranimate</td>
    </tr>
  </table>
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

### Extended example of a simple animated and draggable box:

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

- [Collection](https://stackblitz.com/@agargaro/collections/three-ez)
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

If you have questions or need assistance, you can open a post in the discussion section.
