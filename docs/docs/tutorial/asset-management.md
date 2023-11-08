---
sidebar_position: 4
---

# Asset Management

The Asset class in three.ez provides an efficient solution for loading and managing resources, including 3D models, textures, and other assets, in your three.js applications.

## Resource Loading



## Resource Preloading

It's essential to preload resources before using them in your 3D scene to ensure they are available when needed. <br />
The Asset class allows you to define resources to load, and it caches them, waiting for the loading to complete before proceeding with scene creation.

**soldier.ts**
```typescript
Asset.preload(GLTFLoader, 'https://threejs.org/examples/models/gltf/Soldier.glb');

export class Soldier extends Group {
  constructor() {
    super();
    const gltf = Asset.get<GLTF>('https://threejs.org/examples/models/gltf/Soldier.glb');
    this.add(gltf.scene.children);
  }
}

```

**main.ts**
```typescript
Asset.preload(AudioLoader, 'audio.mp3');
const main = new Main();
await Asset.preloadAllPending({ onProgress: (e) => console.log(e * 100 + '%') });
// gltf and audio are now loaded
const scene = new Scene().add(new model()); 
```

[⚡ Stackblitz - Asset](https://stackblitz.com/edit/three-ez-asset?file=src%2Fmain.ts) <br />