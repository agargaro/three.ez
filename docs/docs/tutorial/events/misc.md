---
sidebar_position: 1
title: Miscellaneous
---

This category encompasses animation and resize events. <br />
It's important to note that unlike `interaction events`, misc events do not follow a propagation system.

> ℹ️ **Note** <br />
> Animation events are exclusively triggered for **visible scenes**.

| Event            | Description                                                                                                   | Parameters                                                |
|------------------|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `viewportresize` | Triggered on first render and every time an object is rendered with a different viewport size than the previous one. | [ViewportResizeEvent](../../api/interfaces/Events.ViewportResizeEvent) |
| `beforeanimate`  | Triggered every frame just before `animate`.<br /> Typically used for preparing object animations.                 | [AnimateEvent](../../api/interfaces/Events.AnimateEvent) |
| `animate`        | Triggered every frame for animating objects.                                                                  | [AnimateEvent](../../api/interfaces/Events.AnimateEvent)   |
| `afteranimate`   | Triggered every frame immediately after `animate`.<br /> Often used for post-animation operations.                  | [AnimateEvent](../../api/interfaces/Events.AnimateEvent) |

## Example

```typescript
const box = new Mesh(new BoxGeometry(), new MeshLambertMaterial());

box.on('viewportresize', (e) => {
    console.log(`New viewport size: ${e.width} - ${e.height} / Camera: ${e.camera}`);
});

box.on('beforeanimate', (e) => {
    console.log(`Before animate - Delta: ${e.delta} - Total: ${e.total}`);
});

box.on('animate', (e) => {
    console.log(`Animate - Delta: ${e.delta} - Total: ${e.total}`);
});

box.on('afteranimate', (e) => {
    console.log(`After animate - Delta: ${e.delta} - Total: ${e.total}`);
});
```
