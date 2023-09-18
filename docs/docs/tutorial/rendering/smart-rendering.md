---
sidebar_position: 1
---

# Smart Rendering

Smart rendering allows a frame to be rendered only when it is needed, which is especially useful when using mostly static scenes, optimizing performance and reducing unnecessary computational overhead.

## How does it work?

A `needRender` property is added to each `Scene` object. <br />
If the smart rendering mode is on, the `needRender` flag is reset after each rendering. <br />
This property is automatically set to **true** when specific events occur within the scene:

- Changes in object `position`, `scale`, and `rotation`
- Changes in object visibility
- Adding or removing objects
- Focus changes

> ⚠️ **Automatic change detection may introduce a minor overhead, so it is advisable to activate this mode only when it is required.**

## Manual detection


If it's not possible to automatically detect a change (such as modifications in geometry, material properties, etc.), you will need to set the flag to **true** manually. <br />
You can manually update the `needsRender` flag by changing it on any `Object3D` that has been added to the `Scene` object.

## How it is activated

The smart rendering mode is **disabled** by default. <br />
To enable it, you need to utilize the `activeSmartRendering` method on the `Scene` object.
> 💡 **Smart rendering is associated with a scene, meaning it doesn't need to be enabled for all of your scenes.**

## Example 

```typescript
const draggableBox = new Mesh(new BoxGeometry(), new MeshLambertMaterial({ color: 'green' }));
draggableBox.draggable = true;
draggableBox.on(['pointerenter', 'pointerleave'], function(e) {
  this.material.color.set(e.type === 'pointerenter' ? 'yellow' : 'green');
  this.needsRender = true; // necessary because color change cannot be automatically detected
});

const scene = new Scene();
scene.activeSmartRendering(); // in this case it automatically detects drag movements
scene.add(draggableBox);
```

## Live Examples

[⚡ Stackblitz - Smart Rendering](https://stackblitz.com/edit/three-ez-smart-rendering?file=src%2Fmain.ts)
