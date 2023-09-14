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

Smart rendering allows a frame to render only when it is needed, which is particularly useful when using mostly static scenes, optimizing performance and reducing unnecessary computational overhead. <br />
It is based on a `Scene` property called `needsRender`, which is changed automatically when there is a change in position, scale, rotation, visiblity, focus, removal or addition of `Object3D`.
It is also possible to change it manually, in cases where changes are not automatically identified.

### Simplified Rendering

The rendering of viewports is handled by the `Main` class, using the `createView` method, which returns an instance of `RenderView`. <br />
By modifying the various properties of this instance, various parameters can be changed, including: the size, position, background, interaction state, and visibility. 
It is also possible to specify an `EffectComposer` for each RenderView to handle post-processing effects.

### Object3D Property Binding

It is possible to bind to a property of an `Object3D` the result of a callback, using the `bindProperty` method. <br />
The bindings are computed automatically during each animate cycle.
To manually compute the various bindings using the `setManualDetectionMode` and `detectChanges` methods.

### Event Programming

It facilitates interaction with `Object3D` by adding a series of programmable events. <br />
Interaction events work similarly to DOM events, with the same propagation and methods such as `preventDefault` or `stopPropagation`. <br />
Events list: 
[InteractionEvents](https://agargaro.github.io/three.ez/docs/api/interfaces/Events.InteractionEvents)
— [MiscEvents](https://agargaro.github.io/three.ez/docs/api/interfaces/Events.MiscEvents)
— [UpdateEvents](https://agargaro.github.io/three.ez/docs/api/interfaces/Events.UpdateEvents)

### Focus and Blur

Implements focus handling and related events to handle certain interactions more easily. <br />
By setting the value of the `focusable` property of an `Object3D` you can determine whether it can receive focus.

### Drag and Drop

Implements drag and drop handling and related events by adding two properties to each `Object3D`:
- `draggable`: makes an object draggable.
- `findDropTarget`: determines whether intersections with drop targets will be checked during dragging.

The drag can be cancelled by pressing 'Esc'.

### Hitbox Functionality

Hitboxes can be used to handle a different intersection area or to simplify intersection calculations. 

### Raycasting Options

It is possible to choose between continuous raycasting (every frame) or raycasting only during mouse movement, providing the flexibility to optimise raycasting operations according to application requirements. <br />
In addition, it is possible to choose which objects can be intersected, setting `interceptByRaycaster` property.

### Tweening

Implements smooth animations effortlessly with built-in tweening functionality. `Vector3`, `Euler`, `Quaternion`, `Color` are supported.

### Simplified InstancedMesh

With the class `InstancedMesh2` it is possible to handle each sub-entity of an `InstancedMesh` as if it were an `Object3D`. This makes development much simpler and more intuitive.

## How It Works

The `Main` class handles rendering, resizing, events and all other functionality. <br />
The Main class documentation is available [here](https://agargaro.github.io/three.ez/docs/api/classes/Core.Main). <br />
In addition, methods and properties have been added to the `Object3D` and `Scene` classes. <br />
List of properties and methods added: 
[Object3D](https://agargaro.github.io/three.ez/docs/api/interfaces/Patch.Object3DExtPrototype)
— [Scene](https://agargaro.github.io/three.ez/docs/api/interfaces/Patch.SceneExtPrototype)

## Installation

You can install `three.ez` via npm using the following command:

```bash
npm install @three.ez/main
```

## Usage

Example of a simple animated and draggable box:

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

<details>
  <summary>Show smaller version</summary>

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
</details>

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
- [Focus](https://stackblitz.com/edit/three-ez-focus?file=src%2Fmain.ts)
— [Focus Outline (post-processing)](https://stackblitz.com/edit/three-ez-focus-outline?file=src%2Fmain.ts)
- [Drag & Drop](https://stackblitz.com/edit/three-ez-drag-drop?file=src%2Fmain.ts)
— [LOD Draggable](https://stackblitz.com/edit/three-ez-lod-draggable?file=src%2Fmain.ts)
— [Drag Limits](https://stackblitz.com/edit/three-ez-drag-limits?file=src%2Fmain.ts)
- [Continuous Raycasting](https://stackblitz.com/edit/three-ez-continuous-raycasting?file=src%2Fmain.ts)
- [Hitbox](https://stackblitz.com/edit/three-ez-hitbox?file=src%2Fmain.ts)
- [Tweening](https://stackblitz.com/edit/three-ez-tweening?file=src%2Fmain.ts)
— [Tweening Custom Progress](https://stackblitz.com/edit/three-ez-tweening-custom-progress?file=src%2Fmain.ts)
- [InstancedMeshEntity](https://stackblitz.com/edit/three-ez-instancedmeshentity?file=src%2Fmain.ts)
— [InstancedMeshEntity Performance](https://stackblitz.com/edit/three-ez-instancedmeshentity-performance?file=src%2Fmain.ts)
- [Draggable Box OrbitControls](https://stackblitz.com/edit/three-ez-draggable-box-orbitcontrols?file=src%2Fmain.ts)
- [Textbox (troika-three-text)](https://stackblitz.com/edit/three-ez-textbox?file=src%2Fmain.ts)
- [Bubble Refraction](https://stackblitz.com/edit/three-ez-bubble-refraction?file=src%2Fmain.ts,src%2Ftext.ts,src%2Fparticles.ts,src%2Fbubble.ts,src%2FbubbleMaterial.ts,src%2Fscene.ts)

## Documentation

The API documentation is available [here](https://agargaro.github.io/three.ez/docs/api). <br />
If there is demand, comprehensive, guided tutorials will be written for each functionality.

## Contributing

Any help is highly appreciated. If you would like to contribute to this package or report problems, feel free to open a bug or pull request.

## Questions?

If you have questions or need assistance, you can create a discussion in the appropriate section.
