# three.ez

[![npm](https://img.shields.io/npm/v/@three.ez/main)](https://img.shields.io/npm/v/@three.ez/main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=agargaro_three.ez&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=agargaro_three.ez)
[![DeepScan grade](https://deepscan.io/api/teams/21196/projects/25445/branches/796375/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=21196&pid=25445&bid=796375)
[![CodeFactor](https://www.codefactor.io/repository/github/agargaro/three.ez/badge)](https://www.codefactor.io/repository/github/agargaro/three.ez)

**three.ez** is a TypeScript library designed to streamline and enhance the development of `three.js` applications. <br /> 
It provides a comprehensive suite of user-friendly tools and high-performance features, making it accessible even to beginners. <br />
With **three.ez**, you'll discover an efficient and robust toolkit for your 3D projects.

This library has only one dependency: `three.js r151+`.

## Key Features

- **Automatic Resize Handling**
  - Automatically resizes the `Renderer`, `Camera`, and `EffectComposer`. <br />
  Using the `rendererResize` event, you can easily set the resolution for custom shaders.

- **Smart Rendering**
  - Optimize performance by rendering frames only when necessary, reducing computational overhead.

- **Simplified Multiple Rendering**
  - Effortlessly manage rendering for multiple scenes or viewports within a single canvas.

- **Object3D Property Binding**
  - Streamline the management of `Object3D` properties.

- **Event Programming**
  - Add interactions to `Object3D` through programmable events, similar to `DOM events`. <br />
  You can bind events for changes in position, scale, rotation, visibility, and enabled state.

- **Focus and Blur**
  - Enhance interactivity with focus and blur events.

- **Drag and Drop**
  - Seamlessly integrate drag-and-drop functionality.

- **Hitbox Functionality**
  - Leverage hitboxes for customized intersections or simplified calculations.

- **Raycasting Options**
  - Choose between continuous or mouse movement-based raycasting, optimizing intersection operations.

- **Tweening**
  - Create smooth animations effortlessly with built-in tweening.

- **Simplified InstancedMesh**
  - Manage `InstancedMesh` instances with the ease of working with `Object3D`, simplifying creation and manipulation.

## Installation

You can install **three.ez** via npm using the following command:

```bash
npm install @three.ez/main
```

## Usage

```typescript
import { Scene, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
import { Main, PerspectiveCameraAuto, TweenManager } from '@three.ez/main';

const box = new Mesh(new BoxGeometry(0.1, 0.1, 0.1), new MeshNormalMaterial());
box.draggable = true;
box.on('animate', (e) => box.rotateX(e.delta).rotateY(e.delta * 2));
box.on(['pointerover', 'pointerout'], (e) => {
  TweenManager.stopAll();
  box.tween().to(500, { scale: e.type === 'pointerover' ? 1.5 : 1 }, { easing: 'easeOutElastic' }).start();
});
const scene = new Scene().add(box);
const main = new Main();
main.createView({ scene, camera: new PerspectiveCameraAuto(70).translateZ(1) });
```
<a href='https://stackblitz.com/edit/three-ez-template-small?file=src%2Fmain.ts'>
  <img src='https://raw.githubusercontent.com/agargaro/three.ez/master/docs/static/img/demo.gif' />
</a>

## Override TypeScript Type Definition

To extend the definitions of `three`, go into `tsconfig.json` and add this path:

```javascript
"compilerOptions": {
  "paths": {
    "three": ["./node_modules/@three.ez/main/types"]
  }
}
```

## Live Examples

These examples use `vite`, and some mobile devices may run out of memory. However, there is one example without it.

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

The tutorial is available [here](https://agargaro.github.io/three.ez/docs/tutorial) (work in progress). <br />
The API documentation is available [here](https://agargaro.github.io/three.ez/docs/api). 

## Contributing

Any help is highly appreciated. If you would like to contribute to this package or report problems, feel free to open a bug or pull request.

## Questions?

If you have questions or need assistance, you can create a discussion in the appropriate section.
