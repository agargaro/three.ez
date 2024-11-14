---
sidebar:
  order: 2
title: Smart Rendering
---

Smart rendering allows frames to be rendered only when necessary, making it especially valuable for mostly static scenes. <br />
This optimization enhances performance and minimizes unnecessary computational overhead.

## How It Works

A `needRender` property is introduced for each `Scene` object. <br />
When smart rendering is enabled, the `needRender` flag is reset after each rendering. <br />
This property is automatically set to **true** when specific events occur within the scene:

- Changes in object `position`, `scale`, and `rotation`
- Changes in object visibility
- Adding or removing objects
- Focus changes

:::caution
Automatic change detection may introduce a minor overhead, so it is recommended to activate this mode only when necessary.
:::

## Manual Update

If automatic change detection isn't possible (e.g., modifications in geometry, material properties, etc.), you can manually set the flag to **true**.
You can manually update the `needsRender` flag by modifying it on any `Object3D` that has been added to the `Scene` object.

## Activation

Smart rendering mode is **disabled** by default. <br />
To enable it, use the `activeSmartRendering` method on the `Scene` object.

:::note
Smart rendering is specific to a scene, so it doesn't need to be enabled for all scenes.
:::

## Example 

```typescript
const draggableBox = new Mesh(new BoxGeometry(), new MeshLambertMaterial({ color: 'green' }));
draggableBox.draggable = true;
draggableBox.on(['pointerenter', 'pointerleave'], function(e) {
  this.material.color.set(e.type === 'pointerenter' ? 'yellow' : 'green');
  this.needsRender = true; // Necessary because color change cannot be automatically detected
});

const scene = new Scene();
scene.activeSmartRendering(); // In this case, it automatically detects drag movements
scene.add(draggableBox);
```

## Live Examples

[⚡ Stackblitz - Smart Rendering](https://stackblitz.com/edit/three-ez-smart-rendering?file=src%2Fmain.ts)
