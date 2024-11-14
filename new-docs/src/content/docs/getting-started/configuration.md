---
sidebar:
  order: 1
title: Configuration
---

When transitioning from a traditional `three.js` application to `three.ez`, you'll immediately notice the central role played by the `Main` class.

The `Main` class serves as the core of your application, enabling all of `three.ez`'s features and simplifying scene and viewport rendering through convenient methods.

Within the `Main` class constructor, you can provide an optional configuration object with the following optional properties:

| Name             | Type                 | Description                                                                             |
| ---------------- | -------------------- | --------------------------------------------------------------------------------------- |
| **animate**       | XRFrameRequestCallback | A callback function executed for each frame.                                          |
| **backgroundAlpha** | number             | The default alpha (transparency) value for the background (default: 1).                |
| **backgroundColor** | ColorRepresentation | The default background color (default: 'black').                                          |
| **disableContextMenu** | boolean         | A boolean flag indicating whether to disable the context menu on right-click (default: true). |
| **enableCursor** | boolean              | A boolean flag indicating whether to enable cursor handling in the application (default: true). |
| **fullscreen**    | boolean              | A boolean flag indicating whether to enable full-screen mode and automatic canvas resizing (default: true). |
| **multitouch**    | boolean              | A boolean flag indicating whether to enable multitouch interactions (default: false).   |
| **rendererParameters** | WebGLRendererParameters | Configuration parameters for the [WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer). |
| **showStats**     | boolean              | A boolean flag indicating whether to display performance statistics (default: true).    |

:::note
You can access the documentation for the `Main` class [here](../../api/classes/Core.Main).
:::

## Example

```typescript

const main = new Main({
  animate: () => {
    /** If you use external libraries that require cyclic updates, perform them here. */
  },
  backgroundAlpha: 1,
  backgroundColor: 'black',
  disableContextMenu: true,
  enableCursor: true,
  fullscreen: true,
  multitouch: false,
  rendererParameters: { antialias: true },
  showStats: true
});
```

## Live Examples

[⚡ Stackblitz - Template](https://stackblitz.com/edit/three-ez-template?file=src%2Fmain.ts) <br />
[⚡ Stackblitz - Template Small](https://stackblitz.com/edit/three-ez-template-small?file=src%2Fmain.ts) <br />
[⚡ Stackblitz - Template No Vite](https://stackblitz.com/edit/three-ez-template-no-vite?file=index.ts)
