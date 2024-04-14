<h1 align="center">Three.ez</h1>
<p align="center">
  <!-- <img src="docs/static/images/logos/logo.png" alt="tree-ez-logo" width="120px" height="120px"/>  -->
  <em>
  Simplify your <b>three.js</b> application development with <b>three.ez</b>!</em>
</p>
<div align="center">

[![three.ez on npm](https://img.shields.io/npm/v/@three.ez/main.svg?logo=npm&label=NPM+package&color=ligthgeen)](https://www.npmjs.com/package/@three.ez/main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=agargaro_three.ez&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=agargaro_three.ez)
[![DeepScan grade](https://deepscan.io/api/teams/21196/projects/25445/branches/796375/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=21196&pid=25445&bid=796375)
![GitHub Repo stars](https://img.shields.io/github/stars/agargaro/three.ez?style=flat&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyBoZWlnaHQ9IjgwMHB4IiB3aWR0aD0iODAwcHgiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgDQoJIHZpZXdCb3g9IjAgMCA0Ny45NCA0Ny45NCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTsiIGQ9Ik0yNi4yODUsMi40ODZsNS40MDcsMTAuOTU2YzAuMzc2LDAuNzYyLDEuMTAzLDEuMjksMS45NDQsMS40MTJsMTIuMDkxLDEuNzU3DQoJYzIuMTE4LDAuMzA4LDIuOTYzLDIuOTEsMS40MzEsNC40MDNsLTguNzQ5LDguNTI4Yy0wLjYwOCwwLjU5My0wLjg4NiwxLjQ0OC0wLjc0MiwyLjI4NWwyLjA2NSwxMi4wNDINCgljMC4zNjIsMi4xMDktMS44NTIsMy43MTctMy43NDYsMi43MjJsLTEwLjgxNC01LjY4NWMtMC43NTItMC4zOTUtMS42NTEtMC4zOTUtMi40MDMsMGwtMTAuODE0LDUuNjg1DQoJYy0xLjg5NCwwLjk5Ni00LjEwOC0wLjYxMy0zLjc0Ni0yLjcyMmwyLjA2NS0xMi4wNDJjMC4xNDQtMC44MzctMC4xMzQtMS42OTItMC43NDItMi4yODVsLTguNzQ5LTguNTI4DQoJYy0xLjUzMi0xLjQ5NC0wLjY4Ny00LjA5NiwxLjQzMS00LjQwM2wxMi4wOTEtMS43NTdjMC44NDEtMC4xMjIsMS41NjgtMC42NSwxLjk0NC0xLjQxMmw1LjQwNy0xMC45NTYNCglDMjIuNjAyLDAuNTY3LDI1LjMzOCwwLjU2NywyNi4yODUsMi40ODZ6Ii8+DQo8L3N2Zz4=)
[![BundlePhobia](https://badgen.net/bundlephobia/min/@three.ez/main)](https://bundlephobia.com/package/@three.ez/main)
[![Discord conversation](https://img.shields.io/discord/1150091562227859457.svg?logo=discord&logoColor=fff&label=Discord&color=7389d8)](https://discord.gg/MVTwrdX3JM)

</div>

 <!-- <p align="center">
  <a href="https://agargaro.github.io/three.ez/docs"><strong>three.ez docs</strong></a>
  <br>
</p> -->

<p align="center">

 <span>With three.ez, turn complexity into creativity. This <b>lightweight</b> yet <b>powerful</b>
 library allows you to make the most of Three.js with a <b>reduced learning curve</b>, making the creation of interactive 3D scenes a breeze. Perfect for developers of all levels.

</p>


Extend the functionalities of `Object3D` and `Scene` classes, making their usage more straightforward, and introduce utility classes.

The **only** one dependency is `three.js r151+`.

```typescript
import { Scene, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
import { Main, PerspectiveCameraAuto } from '@three.ez/main';

const box = new Mesh(new BoxGeometry(), new MeshNormalMaterial());
box.draggable = true; // make it draggable
box.on('animate', (e) => box.rotateX(e.delta).rotateY(e.delta * 2)); // animate it every frame
box.on(['pointerover', 'pointerout'], (e) => box.scale.setScalar(e.type === 'pointerover' ? 1.5 : 1));

const scene = new Scene().add(box);
const main = new Main(); // init inside the renderer, and handle events, resize, etc
main.createView({ scene, camera: new PerspectiveCameraAuto(70).translateZ(1) }); // create the view to be rendered
```

## ✅ Why three.ez?

- Program the logic of your `Object3D` more quickly and intuitively
- Less code and cleaner
- Streamlined rendering
- Declarative and imperative programming
- Compatible with your three.js code and external libraries
- Easy to learn
- High performance

## 🔑 Key Features

### ✨ [Event Programming](https://stackblitz.com/edit/three-ez-events?file=src%2Fmain.ts)

Add interactions to `Object3D` through programmable events, similar to `DOM events`, including a propagation system. <br />
See events list here: [Interaction](https://agargaro.github.io/three.ez/docs/tutorial/events/interaction), [Miscellaneous](https://agargaro.github.io/three.ez/docs/tutorial/events/misc), [Update](https://agargaro.github.io/three.ez/docs/tutorial/events/update).

```typescript
const box = new Mesh(geometry, material);
box.on('click', (e) => e.stopPropagation());
box.on('animate', (e) => console.log('animate'));
box.on('positionchange', () => console.log('position changed'));
```

### 🔥 Drag and Drop

Integrate drag and drop functionality. The drag is cancelled by pressing *ESC*.

```typescript
const box = new Mesh(geometry, material);
box.draggable = true;
box.findDropTarget = true;
box.on('drag', (e) => console.log(`new position: ${e.position}`));

const plane = new Mesh(geometry, material);
plane.on('drop', (e) => console.log(`obj dropped on this: ${e.relatedTarget}`));
```

### 🚀 Focus and Blur

Enhance interactivity with focus and blur events.

```typescript
const box = new Mesh(geometry, material);
box.focusable = true; // default is true
box.on('focus', (e) => console.log('focused'));
box.on('blur', (e) => console.log('focus lost'));
```

### 🏅 [Object3D Property Binding](https://agargaro.github.io/three.ez/docs/tutorial/binding)

Streamline the management of `Object3D` properties.

```typescript
const box = new Mesh(geometry, material);
box.bindProperty('visible', () => box.parent?.enabled); 
```

### ✂️ Automatic Resize Handling

Automatically resizes the `Renderer`, `Camera`, and `EffectComposer`. <br />
Utilize the `viewportResize` event to easily set the resolution for custom shaders.

```typescript
const line = new Line2(geometry, material);
line.on('viewportresize', (e) => material.resolution.set(e.width, e.height));
```

### 💡 [Smart Rendering](https://agargaro.github.io/three.ez/docs/tutorial/rendering/smart-rendering)

Optimize performance by rendering frames only when necessary, reducing computational overhead. <br />
Automatically identifies changes in *position, scale, rotation, visibility, focus, blurring and addition or removal of objects*.

```typescript
const scene = new Scene();
scene.activeSmartRendering();

const box = new Mesh(new BoxGeometry(), new MeshLambertMaterial({ color: 'green' }));
box.draggable = true; // if you drag the frame, it automatically detects changes and renders the frame

box.material.color.set('yellow');
box.needsRender = true; // necessary because color change cannot be automatically detected
```

### 🏆 [Simplified Multiple Rendering](https://agargaro.github.io/three.ez/docs/tutorial/rendering/multiple-rendering)

Effortlessly manage rendering for multiple scenes or viewports within a single canvas.

```typescript
const main = new Main(); 
main.createView({ scene, camera, viewport: { left: 0, bottom: 0, width: 0.5, height: 1 } });
main.createView({ scene, camera, viewport: { left: 0.5, bottom: 0, width: 0.5, height: 1 } });
```

### 🛠️ [Asset Management](https://agargaro.github.io/three.ez/docs/tutorial/asset-management)

Efficiently load and preload the assets for your 3D projects.

*load:*

```typescript
const audioBuffer = await Asset.load(AudioLoader, 'audio.mp3', onProgressCallback, onErrorCallback);
```

*preload:*

```typescript
// soldier.js
Asset.preload(GLTFLoader, 'https://threejs.org/examples/models/gltf/Soldier.glb');

export class Soldier extends Group {
  constructor() {
    super();
    const gltf = Asset.get('https://threejs.org/examples/models/gltf/Soldier.glb');
    this.add(...gltf.scene.children);
  }
}

// main.js
await Asset.preloadAllPending({ onProgress: (e) => console.log(e * 100 + '%'), onError: (e) => console.error(e) });
const main = new Main();
const soldier = new Soldier();
```

### 🎥 Tweening

Create smooth animations effortlessly with built-in tweening.

```typescript
box.tween().by(1000, { position: new Vector3(0, 0.5, 0) }, { easing: 'easeInOutBack' }).yoyoForever().start();

new Tween(box)
  .by(2000, { scale: 1, rotation: new Euler(Math.PI * 2, Math.PI, 0) }, { easing: 'easeOutElastic' })
  .delay(200)
  .to(1000, { scale: 1 }, { easing: 'easeOutBounce' })
  .start();
```

### ⚙️ Raycasting Customisable

Choose between continuous or mouse movement-based raycasting, optimizing intersection operations. <br />
Set which objects to intersect from the main raycasting.

```typescript
const scene = new Scene();
scene.continuousRaycasting = true; // default is false

const box = new Mesh(geometry, material);
box.interceptByRaycaster = false; // default is true
```

### 🎯 Hitbox Functionality

Leverage hitboxes for customized intersections or simplified calculations.

```typescript
const ring = new Mesh(new RingGeometry(1, 1.5), new MeshBasicMaterial());
ring.hitboxes = [new Hitbox(new CircleGeometry(1.5))]; // intercept also inside the ring
```

### 💯 Simplified InstancedMesh

Manage `InstancedMesh` instances with the ease of working with `Object3D`, simplifying creation and manipulation, including frustum culling.

```typescript
const myInstancedMesh = new InstancedMesh2(geometry, material, count, (obj, index) => {
  obj.position.x += index;
  obj.scale.setScalar(2);
  obj.quaternion.random();
  obj.forceUpdateMatrix();
});

// How to handle instances
myInstancedMesh.instances[0].visible = false;
myInstancedMesh.instances[1].draggable = true;
myInstancedMesh.instances[2].rotateOnWorldAxis(xAxis, Math.PI);
myInstancedMesh.instances[2].updateMatrix();
```

### 🔍 Query

Find and select `Object3D` using powerful query selectors.

```typescript
scene.querySelectorAll('Mesh'); // Selects all the meshes in the scene.
scene.querySelectorAll('[name=box]'); // Selects all Object3D that have 'box' as their name.
scene.querySelectorAll('[name*=box]'); // Selects all Object3D that have 'box' anywhere in their name.
scene.querySelectorAll('Mesh.even'); // Selects meshes with both 'Mesh' type and 'even' tag.
scene.querySelectorAll('Group .even'); // Selects all Object3D with 'even' tag that are children of a 'Group'.
scene.querySelectorAll('Group > .even'); // Selects all direct children with 'even' tag under a 'Group'.
scene.querySelectorAll('Mesh, SkinnedMesh'); // Selects all meshes and skinned meshes in the scene.
```

## ⬇️ Installation

You can install it via npm using the following command:

```bash
npm install @three.ez/main
```

Or can import it from CDN:

```html
<script type="importmap">
{
  "imports": {
    "three": "https://unpkg.com/three@0.162.0/build/three.module.js",
    "three/examples/jsm": "https://unpkg.com/three@0.162.0/examples/jsm/",
    "@three.ez/main": "https://unpkg.com/@three.ez/main@0.5.3/bundle.js"
  }
}
</script>
```

## 🧑‍💻 Live Examples

These examples use `vite`, and some mobile devices may run out of memory. However, there is one example without it.

[Examples Collection](https://stackblitz.com/@agargaro/collections/three-ez)

- [Template](https://stackblitz.com/edit/three-ez-template?file=src%2Fmain.ts)
— [Template Extended](https://stackblitz.com/edit/three-ez-template-extended?file=src%2Fmain.ts)
— [Template No Vite](https://stackblitz.com/edit/three-ez-template-no-vite?file=index.ts)
- [Smart Rendering](https://stackblitz.com/edit/three-ez-smart-rendering?file=src%2Fmain.ts)
- [Multiple Views](https://stackblitz.com/edit/three-ez-multiple-views?file=src%2Fmain.ts)
— [Multiple Views Wireframe](https://stackblitz.com/edit/three-ez-multiple-views-wireframe?file=src%2Fmain.ts)
— [Multiple Views Switch](https://stackblitz.com/edit/three-ez-multiple-views-switch?file=src%2Fmain.ts)
- [Asset Management](https://stackblitz.com/edit/three-ez-asset-management?file=src%2Fmain.ts)
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

## 📚 Documentation

The tutorial is available [here](https://agargaro.github.io/three.ez/docs/tutorial) *(work in progress)*. <br />
The API documentation is available [here](https://agargaro.github.io/three.ez/docs/api).

## 🤝 Contributing

Any help is highly appreciated. If you would like to contribute to this package or report problems, feel free to open a bug or pull request.

## ❔ Questions?

If you have questions or need assistance, you can ask on our [discord server](https://discord.gg/MVTwrdX3JM).

## ⭐ Like it?

If you find this project helpful, I would greatly appreciate it if you could leave a star on this repository! <br />
This helps me know that you appreciate my work and encourages me to continue improving it. <br />
Thank you so much for your support! 🌟
