# three.ez - Interaction

[![npm](https://img.shields.io/npm/v/@three.ez/interaction)](https://www.npmjs.com/package/@three.ez/interaction)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=agargaro_three.ez&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=agargaro_three.ez)
[![DeepScan grade](https://deepscan.io/api/teams/21196/projects/25445/branches/796375/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=21196&pid=25445&bid=796375)
[![Stars](https://badgen.net/github/stars/agargaro/three.ez)](https://github.com/agargaro/three.ez)
[![BundlePhobia](https://badgen.net/bundlephobia/min/@three.ez/interaction)](https://bundlephobia.com/package/@three.ez/interaction)
[![Discord](https://img.shields.io/discord/1150091562227859457)](https://discord.gg/MVTwrdX3JM)

Simplify your **three.js** application development with **three.ez**! 

Enhance 3D scene interactions with **events, drag & drop, and focus management**. Simplify **three.js** development with ease.

### Example using three.ez/main

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

### Example using three.js vanilla

```typescript
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { InteractionManager } from '@three.ez/interaction';

const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 2;

const scene = new Scene();

const renderer = new WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add interactionManager to the scene
const interactionManager = new InteractionManager(renderer, scene, camera);

camera.on('viewportresize', (e) => {
  camera.aspect = e.width / e.height;
  camera.updateProjectionMatrix();
});

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const mesh = new Mesh(new BoxGeometry(), new MeshBasicMaterial({ color: 'white' }));
scene.add(mesh);

mesh.draggable = true;

mesh.on('animate', (e) => {
  if (mesh.hovered) return;
  mesh.rotation.z += e.delta;
});

renderer.setAnimationLoop((time) => {
  // Update interactions
  interactionManager.update(time);

  renderer.render(scene, camera);
});
```

This library has two dependency: 
- `three.js r123+`
- `@three.ez/view-manager`

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

### ✂️ Resize Handling
Utilize the `viewportResize` event to easily set the resolution for custom shaders.

```typescript
const line = new Line2(geometry, material);
line.on('viewportresize', (e) => material.resolution.set(e.width, e.height));
```

<!-- ### 💡 [Smart Rendering](https://agargaro.github.io/three.ez/docs/tutorial/rendering/smart-rendering) 
Optimize performance by rendering frames only when necessary, reducing computational overhead. <br />
Automatically identifies changes in *position, scale, rotation, visibility, focus, blurring and addition or removal of objects*.

```typescript
const scene = new Scene();
scene.activeSmartRendering();

const box = new Mesh(new BoxGeometry(), new MeshLambertMaterial({ color: 'green' }));
box.draggable = true; // if you drag the frame, it automatically detects changes and renders the frame

box.material.color.set('yellow');
box.needsRender = true; // necessary because color change cannot be automatically detected
``` -->

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

## ⬇️ Installation

You can install it via npm using the following command:

```bash
npm install @three.ez/interaction
```

Or can import it from CDN:

```html
<script type="importmap">
{
  "imports": {
    "three": "https://unpkg.com/three@0.162.0/build/three.module.js",
    "three/examples/jsm": "https://unpkg.com/three@0.162.0/examples/jsm/",
    "@three.ez/view-manager": "https://unpkg.com/@three.ez/view-manager@0.0.2/bundle.js",
    "@three.ez/interaction": "https://unpkg.com/@three.ez/interaction@0.0.1/bundle.js"
  }
}
</script>
```

## 🧑‍💻 Live Examples

These examples use `vite`, and some mobile devices may run out of memory. However, there is one example without it.

### Three.js vanilla

- [Template](https://stackblitz.com/edit/three-ez-interaction-template-vanilla?file=src%2Fmain.ts)

### Three.ez/main

[Examples Collection](https://stackblitz.com/@agargaro/collections/three-ez)

- [Template](https://stackblitz.com/edit/three-ez-template?file=src%2Fmain.ts)
— [Template Extended](https://stackblitz.com/edit/three-ez-template-extended?file=src%2Fmain.ts)
— [Template No Vite](https://stackblitz.com/edit/three-ez-template-no-vite?file=index.ts)
- [Smart Rendering](https://stackblitz.com/edit/three-ez-smart-rendering?file=src%2Fmain.ts)
- [Events](https://stackblitz.com/edit/three-ez-events?file=src%2Fmain.ts)
— [Click On Scene To Add Box](https://stackblitz.com/edit/three-ez-click-on-scene-to-add-box?file=src%2Fmain.ts)
- [Focus](https://stackblitz.com/edit/three-ez-focus?file=src%2Fmain.ts)
— [Focus Outline (post-processing)](https://stackblitz.com/edit/three-ez-focus-outline?file=src%2Fmain.ts)
- [Drag & Drop](https://stackblitz.com/edit/three-ez-drag-drop?file=src%2Fmain.ts)
— [LOD Draggable](https://stackblitz.com/edit/three-ez-lod-draggable?file=src%2Fmain.ts)
— [Drag Limits](https://stackblitz.com/edit/three-ez-drag-limits?file=src%2Fmain.ts)
- [Continuous Raycasting](https://stackblitz.com/edit/three-ez-continuous-raycasting?file=src%2Fmain.ts)
- [Hitbox](https://stackblitz.com/edit/three-ez-hitbox?file=src%2Fmain.ts)
- [Draggable Box OrbitControls](https://stackblitz.com/edit/three-ez-draggable-box-orbitcontrols?file=src%2Fmain.ts)

## 📚 Documentation

The tutorial is available [here](https://agargaro.github.io/three.ez/docs/tutorial) *(work in progress)*. <br />
The API documentation is available [here](https://agargaro.github.io/three.ez/docs/api). 

## 🤝 Contributing

Any help is highly appreciated. If you would like to contribute to this package or report problems, feel free to open a bug or pull request.

## ❔ Questions?

If you have questions or need assistance, you can ask on our [discord server](https://discord.gg/MVTwrdX3JM).

## 👀 Future Work

- Evaluate if pointerup event needs rework.
- Raycasting optimization on static scene.
- Raycasting optimization if there are no events on pointer movement.

## ⭐ Like it?

If you find this project helpful, I would greatly appreciate it if you could leave a star on this repository! <br />
This helps me know that you appreciate my work and encourages me to continue improving it. <br />
Thank you so much for your support! 🌟
