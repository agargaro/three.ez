---
sidebar_position: 2
title: Update
---

Update events are triggered when the value of a property or a state changes. <br />
It's important to note that unlike `interaction events`, update events do not follow a propagation system.

| Event             | Description                                           |Parameters                                                 |
|-------------------|-------------------------------------------------------|-----------------------------------------------------------|
| `positionchange`  | Triggered when the object's `position` changes.       |                                                           |
| `scalechange`     | Triggered when the object's `scale` changes.          |                                                           |
| `rotationchange`  | Triggered when the object's `rotation` changes.       |                                                           |
| `enabledchange`   | Triggered when the object's enabled state changes (either its own or the parent's `enabled` property). | [PropertyChangeEvent](../../api/interfaces/Events.PropertyChangeEvent) |
| `visiblechange`   | Triggered when the object's visibility changes (either its own or the parent's `visible` property). | [PropertyChangeEvent](../../api/interfaces/Events.PropertyChangeEvent) |


## Example

```typescript
const box = new Mesh(new BoxGeometry(), new MeshLambertMaterial());

box.on('positionchange', () => console.log('position changed'));

box.on('scalechange', () => console.log('scale changed'));

box.on('rotationchange', () => console.log('rotation changed'));

box.on('enabledchange', (e) => {
    console.log(`enabled state changed. Parent: ${e.target.name}, value: ${e.value}`)
});

box.on('visiblechange', (e) => {
    console.log(`visibility state changed. Parent: ${e.target.name}, value: ${e.value}`)
});
```
