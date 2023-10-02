---
sidebar_position: 1
---

# Misc Events

Misc events are triggered when the value of a property or a state changes. <br />
It's important to note that unlike `interaction events`, update events do not follow a propagation system.

| Event            | Description                                                                                                 |Parameters                                                |
|------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `rendererresize` | Triggered on first render and every time an object is rendered with a different viewport size from the previous one. | [RendererResizeEvent](../../api/interfaces/Events.RendererResizeEvent) |
| `beforeanimate`  | Triggered every frame, before 'animate'. Usually used to prepare object animations.                         | [AnimateEvent](../../api/interfaces/Events.AnimateEvent) |
| `animate`        | Triggered every frame. Used to animate objects. | [AnimateEvent](../../api/interfaces/Events.AnimateEvent)  | [AnimateEvent](../../api/interfaces/Events.AnimateEvent) |
| `afteranimate`   | riggered every frame, after 'animate'. Usually used if you want to operate after the animation is computed. | [AnimateEvent](../../api/interfaces/Events.AnimateEvent) |


## Example

```typescript
const box = new Mesh(new BoxGeometry(), new MeshLambertMaterial());

box.on('rendererresize', (e) => {
    console.log(`new viewport size: ${e.width} - ${e.height} / camera: ${e.camera}`)
});

box.on('beforeanimate', (e) => {
    console.log(`before animate - delta: ${e.delta} - total: ${e.total}`);
});

box.on('animate', (e) => {
    console.log(`animate - delta: ${e.delta} - total: ${e.total}`);
});

box.on('afteranimate', (e) => {
    console.log(`after animate - delta: ${e.delta} - total: ${e.total}`);
});
```
