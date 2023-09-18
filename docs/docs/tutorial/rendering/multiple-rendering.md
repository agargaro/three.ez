---
sidebar_position: 0
---

# Multiple Rendering

Within the `Main` class, scenes and viewports are rendered using the internal `RenderManager` class and objects of type `RenderView`.

The `RenderManager` maintains an internal list of `RenderViews` that can be manipulated using methods provided by the `Main` object.

To create instances of `RenderView`, use the `createView` method, which accepts the following parameters:

| Parameter              | Type                  | Description                                           |
| -----------------------| ----------------------| ----------------------------------------------------- |
| **backgroundAlpha**    | number                | The background alpha value of the view (optional, default: 1). |
| **backgroundColor**    | ColorRepresentation   | The background color of the view (optional, default: 'black'). |
| **camera**             | Camera                | The camera used to view the scene (don't use the same camera for different scenes). |
| **composer**           | EffectComposer        | The effect composer used for post-processing (optional). |
| **enabled**            | boolean               | Determines whether InteractionEvents will be triggered for the view. (optional, default: true). |
| **onAfterRender**      | () => void            | Function to be called after rendering the view (optional). |
| **onBeforeRender**     | () => void            | Function to be called before rendering the view (optional). |
| **scene**              | Scene                 | The scene rendered in the view. |
| **tags**               | string[]              | The tags of the view (optional). |
| **viewport**           | Viewport              | The normalized viewport defining the dimensions and position of the view. Values range from 0 to 1 (optional). |
| **visible**            | boolean               | Determines if the view is visible (optional, default: true). |

