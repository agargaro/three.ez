---
sidebar_position: 0
---

# Installation

1. Create a `three.js` project by following the [official guide (option 1)](https://threejs.org/docs/#manual/en/introduction/Installation)
> ⚠️ **three.ez is compatible with three.js r151+.**

1. Install `three.ez`
  ```bash
  npm install @three.ez/main
  ```

1. If you are using **TypeScript**, you must follow the steps described in [TypeScript Support](https://agargaro.github.io/three.ez/docs/tutorial/getting-started/typescript-support), otherwise skip this step.

1. Open the **main.ts** file and copy this code:
  ```typescript
  import { Scene, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
  import { Main, PerspectiveCameraAuto } from '@three.ez/main';

  const box = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());
  box.on('animate', (e) => box.rotateX(e.delta).rotateY(e.delta * 2));
  const scene = new Scene().add(box);
  const main = new Main();
  main.createView({ scene, camera: new PerspectiveCameraAuto(70).translateZ(1) });
  ```

  Or copy this if you prefer to use classes, making it more readable and modular ***(recommended)***:

  ```typescript
  import { Scene as SceneBase, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
  import { Main as MainBase, PerspectiveCameraAuto } from '@three.ez/main';

  class DraggableBox extends Mesh {
    constructor() {
      super(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());
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

  > 💡 **In this documentation we will use `.ts` as the file extension. If you are not using TypeScript, consider `.js`.**
