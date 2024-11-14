---
sidebar:
  order: 10
title:  Binding
---

You can establish property bindings for an `Object3D` in two distinct manners:
- **Automatic Recalculation:** property values are automatically updated at the conclusion of each animate cycle
- **Manual Calculation:** property values must be manually computed and updated as needed

## How it works

To create a binding, you should use the `bindProperty` method. <br />
When the binding is created, its initial value is calculated, and at the end of each animation cycle, it will be recalculated.

```typescript
const box = new Mesh(new BoxGeometry(), new MeshLambertMaterial());
box.bindProperty('visible', () => box.parent?.enabled); // Visible only if parent is enabled
```
:::note
The `bindProperty` method has a third parameter that is useful when using the [smart rendering mode](./rendering/smart-rendering).
:::

:::caution
Exercise caution when using the `parent` property within a get callback, especially when the object may not have a parent yet.
:::
## Manual detection

In some cases, you may want more control over when the bound properties are recalculated. <br />
To achieve this, you can use the `setManualDetectionMode`. <br />
When you set manual detection mode, it prevents the automatic recalculation of bound properties at the end of each animation cycle.
You can then manually trigger the update of these properties by calling the `detectChanges` method when needed. 

```typescript
box.setManualDetectionMode(); // Enable manual detection mode
box.detectChanges(); // Calculate binding property values manually
```

## Live Examples

[⚡ Stackblitz - Binding](https://stackblitz.com/edit/three-ez-binding?file=src%2Fmain.ts) <br />
[⚡ Stackblitz - Binding Collisions](https://stackblitz.com/edit/three-ez-binding-collisions?file=src%2Fmain.ts)
