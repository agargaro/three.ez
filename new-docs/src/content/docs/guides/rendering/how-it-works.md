---
sidebar:
  order: 0
title: How It Works
---

Rendering is managed through a collection of `RenderView` instances, which are internally handled within the `Main` class.

:::note
You can access the `WebGLRenderer` instance using the `renderer` property of the `Main` class.
:::

## RenderView

To create and add instances of `RenderView` to this collection, you can utilize the `createView` method of the `Main` object. This method accepts the following parameters:

| Parameter           | Type                | Description                                                                                            |
| ------------------- | ------------------- | ------------------------------------------------------------------------------------------------------ |
| **backgroundAlpha** | number              | Background alpha value of the view (optional, default: 1).                                             |
| **backgroundColor** | ColorRepresentation | Background color of the view (optional, default: 'black').                                             |
| **camera**          | Camera              | Camera used to view the scene (avoid using the same camera for different scenes).                      |
| **composer**        | EffectComposer      | Effect composer used for post-processing (optional).                                                   |
| **enabled**         | boolean             | Determines whether InteractionEvents will be triggered for the view (optional, default: true).         |
| **onAfterRender**   | () => void          | Function called after rendering the view (optional).                                                   |
| **onBeforeRender**  | () => void          | Function called before rendering the view (optional).                                                  |
| **scene**           | Scene               | Scene rendered in the view.                                                                            |
| **tags**            | string[]            | Tags of the view (optional).                                                                           |
| **viewport**        | Viewport            | Normalized viewport defining dimensions and position of the view (optional). Values range from 0 to 1. |
| **visible**         | boolean             | Determines if the view is visible (optional, default: true).                                           |

:::note
You can access the documentation for the `RenderView` class [here](../../api/classes/Rendering.RenderView).
:::

:::caution
Manually creating instances of `RenderView` is not recommended.
:::

## Viewport

The `Viewport` object has the following properties:

| Parameter  | Type   | Description                        |
| ---------- | ------ | ---------------------------------- |
| **bottom** | number | Bottom coordinate of the viewport. |
| **height** | number | Height of the viewport.            |
| **left**   | number | Left coordinate of the viewport.   |
| **width**  | number | Width of the viewport.             |

## Example

```typescript
const main = new Main();
main.createView({
  scene: sceneObj, // Mandatory
  camera: cameraObj, // Mandatory
  backgroundAlpha: 1,
  backgroundColor: "black",
  composer: composerObj,
  enabled: true,
  onAfterRender: () => {
    /** Code */
  },
  onBeforeRender: () => {
    /** Code */
  },
  tags: ["A", "B"],
  visible: true,
  viewport: {
    bottom: 0,
    height: 1,
    left: 0,
    width: 1,
  },
});
```

## Live Examples

[⚡ Stackblitz - Template](https://stackblitz.com/edit/three-ez-template?file=src%2Fmain.ts) <br />
[⚡ Stackblitz - Multiple Views](https://stackblitz.com/edit/three-ez-multiple-views?file=src%2Fmain.ts) <br />
[⚡ Stackblitz - Focus Outline (EffectComposer)](https://stackblitz.com/edit/three-ez-focus-outline?file=src%2Fmain.ts)
