# three.ez

[![npm version](https://badge.fury.io/js/@three.ez%2Fmain.svg)](https://badge.fury.io/js/@three.ez%2Fmain)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=agargaro_three.ez&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=agargaro_three.ez)
[![DeepScan grade](https://deepscan.io/api/teams/21196/projects/25445/branches/796375/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=21196&pid=25445&bid=796375)
[![CodeFactor](https://www.codefactor.io/repository/github/agargaro/three.ez/badge)](https://www.codefactor.io/repository/github/agargaro/three.ez)
[![BundlePhobia](https://badgen.net/bundlephobia/min/@three.ez/main)](https://bundlephobia.com/package/@three.ez/main)

**three.ez** is a library designed to simplify the development of a `three.js` application, allowing the easy creation of reusable and maintainable components and providing a host of other features.

## Features

### Automatic Resize Handling

Automatically resizes `Renderer`, `Camera`, `EffectComposer`. Using `rendererResize` event is also possibile to set resolution for custom shaders.

### Smart Rendering

Smart rendering allows a frame to render only when it is needed, which is particularly useful when using mostly static scenes, optimizing performance and reducing unnecessary computational overhead.

It is based on a `Scene` property called `needsRender`, which is changed automatically when there is a change in position, scale, rotation, visiblity, focus, removal or addition of object3D.
It is also possible to change it manually, in cases where changes are not automatically identified.

### Simplified Multiple Rendering

It simplifies the handling of multiple renderings of different scenes or viewports on the same canvas.

### Object3D Property Binding

Bind the properties of `Object3D` to simplify management.

### Event Programming

Facilitates interaction with `Object3D` by adding a series of programmable events. The interaction events are dom-like, so they have the same propagation mechanics.

### Focus and Blur

Implement focus and blur interactions to enhance user experience and interactivity.

### Drag and Drop

Integrate drag and drop functionality.

### Tweening

Implement smooth animations effortlessly with integrated tweening functionality.

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

Smaller version:

```javascript
import { Scene, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
import { Main, PerspectiveCameraAuto } from '@three.ez/main';

const box = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());
box.draggable = true;
box.on('animate', (e) => box.rotateX(e.delta).rotateY(e.delta * 2));
const scene = new Scene().add(box);
const main = new Main();
main.createView({ scene, camera: new PerspectiveCameraAuto(70).translateZ(1) });
```

Extended version (recommended):

```javascript
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

[Collection](https://stackblitz.com/@agargaro/collections/three-ez)

[Template](https://stackblitz.com/edit/three-ez-template?file=src%2Fmain.ts)

[Template Small](https://stackblitz.com/edit/three-ez-template-small?file=src%2Fmain.ts)

[Template No Vite](https://stackblitz.com/edit/three-ez-template-no-vite?file=index.ts)

[Smart Rendering](https://stackblitz.com/edit/three-ez-smart-rendering?file=src%2Fmain.ts)

[Multiple Views](https://stackblitz.com/edit/three-ez-multiple-views?file=src%2Fmain.ts)

[Binding](https://stackblitz.com/edit/vitejs-vite-j2uyxi?file=src%2Fmain.ts)

[Events](https://stackblitz.com/edit/vitejs-vite-ipfagt?file=src%2Fmain.ts)

[Focus and blur with outline effect](https://stackblitz.com/edit/vitejs-vite-san61c?file=src%2Fmain.ts)

[Drag and drop]()

[Tweening]()

[Hitbox]()

[InstancedMeshEntity stars](https://stackblitz.com/edit/vitejs-vite-qxsxdf?file=src%2Fmain.ts)

[InstancedMeshEntity performance](https://stackblitz.com/edit/vitejs-vite-fvhrfv?file=src%2Fmain.ts)

[Click on scene to add box](https://stackblitz.com/edit/vitejs-vite-13esvn?file=src%2Fmain.ts)

[LOD draggable](https://stackblitz.com/edit/vitejs-vite-za5n6a?file=src%2Fmain.ts)

[Draggable box and OrbitControls](https://stackblitz.com/edit/vitejs-vite-dvbzgt?file=src%2Fmain.ts)

## Documentation

Work in progress...

## Contributing

Any help is highly appreciated. If you would like to contribute to this package or report problems, feel free to open a bug or pull request.

## Questions?

If you have questions or need assistance, you can open an issue in the package's repository.
