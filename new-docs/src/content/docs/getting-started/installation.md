---
sidebar:
  order: 0
title: Installation
---

1. Begin by creating a `three.js` project, which can be done by following the [official guide (option 1)](https://threejs.org/docs/#manual/en/introduction/Installation).

   :::caution
   Please note that `three.ez` is compatible with `three.js r151+`.
   :::

1. Install `three.ez`

```bash
npm install @three.ez/main
```

1. Open your `main.ts` file and insert the provided code:

```typescript
import { Scene, Mesh, BoxGeometry, MeshNormalMaterial } from "three";
import { Main, PerspectiveCameraAuto } from "@three.ez/main";

const box = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());
box.on("animate", (e) => box.rotateX(e.delta).rotateY(e.delta * 2));
const scene = new Scene().add(box);
const main = new Main();
main.createView({ scene, camera: new PerspectiveCameraAuto(70).translateZ(1) });
```

Alternatively, if you prefer a more structured and modular approach using classes **_(which is recommended for large project)_**, you can use the following code snippet:

```typescript
import {
  Scene as SceneBase,
  Mesh,
  BoxGeometry,
  MeshNormalMaterial,
} from "three";
import { Main as MainBase, PerspectiveCameraAuto } from "@three.ez/main";

class DraggableBox extends Mesh {
  constructor() {
    super(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());
    this.on("animate", (e) => this.rotateX(e.delta).rotateY(e.delta * 2));
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
    this.createView({
      scene: new Scene(),
      camera: new PerspectiveCameraAuto(70).translateZ(1),
    });
  }
}

const main = new Main();
```

:::note
Throughout this documentation, we use the `.ts` file extension. If you're not using TypeScript, feel free to use `.js` instead.
:::