---
sidebar:
  order: 5
title: Animation
---

The most effective way to handle animations for various `Object3D` instances is by binding the `animate` event to each of them.

```typescript
const box = new Mesh(new BoxGeometry(), new MeshLambertMaterial());
box.on('animate', (e) => box.rotateX(e.delta));
```

:::note
There are also `beforeanimate` and `afteranimate` events. 
:::

You can assign an `animate` function to the `Main` instance, which will be called during each animation cycle. <br />
This is particularly useful when working with libraries or components that require a continuous update function.

```typescript
const main = new Main({ animate: () => library.update() });
// Or after it has been instantiated
main.animate = () => library.update();
```

Additionally, you can create animations using `tweening` functionality. <br />
For more details, please refer to the documentation on tweens available [here](tweening).
