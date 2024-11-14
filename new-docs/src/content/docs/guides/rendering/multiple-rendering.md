---
sidebar:
  order: 1
title: Multiple Rendering
---

In order to render multiple distinct views, you'll need to create multiple instances of `RenderView`.

```typescript
const viewA = main.createView({ scene: sceneA, camera: cameraA });
const viewB = main.createView({
  scene: sceneB,
  camera: cameraB,
  visible: false,
});
```

## Managing View Visibility

You have the option to manually control the visibility of a view by adjusting the `visible` property as follows:

```typescript
viewB.visible = true;
```

However, the recommended approach is to assign one or more tags to each view and use the `setActiveViewsByTag` method of the `Main` object.

```typescript
main.createView({ scene, camera: frontCamera, tags: ["front"] });

main.createView({ scene, camera: backCamera, tags: ["back"] });

main.createView({
  scene,
  camera: frontCamera,
  viewport: { left: 0, bottom: 0, width: 0.5, height: 1 },
  tags: ["multiple"],
});

main.createView({
  scene,
  camera: backCamera,
  viewport: { left: 0.5, bottom: 0, width: 0.5, height: 1 },
  tags: ["multiple"],
});

main.setActiveViewsByTag("multiple"); // Show 'multiple' views and hide 'front' and 'back' views
```

This approach provides a more organized and efficient way to control the visibility of multiple views within your application.

:::caution
Please exercise caution to prevent overlapping multiple views when managing their visibility.
:::

## Live Examples

[⚡ Stackblitz - Multiple Views Switch](https://stackblitz.com/edit/multiple-views-switch?file=src%2Fmain.ts)
