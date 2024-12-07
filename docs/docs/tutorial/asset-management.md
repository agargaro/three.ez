---
sidebar_position: 4
title: Asset Management
---

The `Asset` class provides an efficient solution for loading and managing various resources, including 3D models, textures, and other assets in your applications.

## Resource Loading

To load a resource synchronously, use the **load** method.

```typescript
const audioBuffer = await Asset.load(AudioLoader, 'audio.mp3', onProgressCallback, onErrorCallback) as AudioBuffer;
// now the resource is also available using Asset.get('audio.mp3')
```

> ℹ️ **Note** <br />
> onProgressCallback and onErrorCallback are optional.

## Resource Preloading

Preloading resources is crucial before integrating them into your 3D scene to ensure they are readily available when needed. <br />
The `Asset` class enables you to define and preload resources, caching them for efficient use before proceeding with scene creation.

### Preloading in a single file

```typescript
await Asset.loadAll({ 
  onProgress: (e) => console.log(e * 100 + '%'),
  onError: (e) => console.error(e)
}, {
  loader: TextureLoader,
  paths: ['texture.jpg', 'texture2.jpg'],
}, {
  loader: AudioLoader,
  paths: ['assets/win.mp3'],
}, {
  loader: GLTFLoader,
  paths: ['model.glb'],
});

// now assets are loaded
const gltf = Asset.get<GLTF>('model.glb');
const texture = Asset.get<Texture>('texture.jpg');
```

### Preloading in multiple files

**soldier.ts**
```typescript
Asset.preload(GLTFLoader, 'https://threejs.org/examples/models/gltf/Soldier.glb');

export class Soldier extends Group {
  constructor() {
    super();
    const gltf = Asset.get<GLTF>('https://threejs.org/examples/models/gltf/Soldier.glb');
    this.add(...gltf.scene.children);
  }
}
```

**main.ts**
```typescript
await Asset.preloadAllPending({ onProgress: (e) => console.log(e * 100 + '%'), onError: (e) => console.error(e) });
// now assets are loaded
const main = new Main();
```

## Live Examples

[⚡ Stackblitz - Asset Management](https://stackblitz.com/edit/three-ez-asset-management?file=src%2Fmain.ts) <br />