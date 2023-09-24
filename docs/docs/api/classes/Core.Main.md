---
id: "Core.Main"
title: "Class: Main"
sidebar_label: "Main"
custom_edit_url: null
---

[Core](../namespaces/Core.md).Main

The `Main` class serves as the core component for managing a 3D application.
It provides configuration options and methods for setting up and controlling the application's behavior.

## Constructors

### constructor

• **new Main**(`parameters?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`MainParameters`](../interfaces/Core.MainParameters.md) | Configuration parameters for initializing the Main class. |

#### Defined in

[src/core/Main.ts:140](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L140)

## Properties

### ticks

▪ `Static` **ticks**: `number` = `0`

A static counter representing the number of animation frames elapsed.

#### Defined in

[src/core/Main.ts:42](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L42)

## Accessors

### activeCamera

• `get` **activeCamera**(): `Camera`

The Camera associated with the currently active RenderView.

#### Returns

`Camera`

#### Defined in

[src/core/Main.ts:74](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L74)

___

### activeComposer

• `get` **activeComposer**(): `EffectComposer`

The EffectComposer (used for post-processing) associated with the currently active RenderView.

#### Returns

`EffectComposer`

#### Defined in

[src/core/Main.ts:79](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L79)

___

### activeScene

• `get` **activeScene**(): `Scene`

The Scene associated with the currently active RenderView.

#### Returns

`Scene`

#### Defined in

[src/core/Main.ts:69](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L69)

___

### activeView

• `get` **activeView**(): [`RenderView`](Rendering.RenderView.md)

The currently active RenderView (activated by mouse position).

#### Returns

[`RenderView`](Rendering.RenderView.md)

#### Defined in

[src/core/Main.ts:64](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L64)

___

### backgroundAlpha

• `get` **backgroundAlpha**(): `number`

The default alpha (transparency) value for the background.

#### Returns

`number`

#### Defined in

[src/core/Main.ts:128](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L128)

___

### backgroundColor

• `get` **backgroundColor**(): `ColorRepresentation`

The default background color used in the application.

#### Returns

`ColorRepresentation`

#### Defined in

[src/core/Main.ts:122](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L122)

___

### enableCursor

• `get` **enableCursor**(): `boolean`

Indicates whether to enable cursor handling in the application.

#### Returns

`boolean`

#### Defined in

[src/core/Main.ts:105](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L105)

___

### mousePosition

• `get` **mousePosition**(): `Vector2`

The current mouse position represented as a Vector2.
Provides the x and y coordinates of the mouse pointer within the application.

#### Returns

`Vector2`

#### Defined in

[src/core/Main.ts:135](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L135)

___

### multitouch

• `get` **multitouch**(): `boolean`

Indicates whether to enable multitouch interactions.

#### Returns

`boolean`

#### Defined in

[src/core/Main.ts:99](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L99)

___

### raycaster

• `get` **raycaster**(): `Raycaster`

A Raycaster instance responsible for handling raycasting operations in the application.

#### Returns

`Raycaster`

#### Defined in

[src/core/Main.ts:117](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L117)

___

### raycasterSortComparer

• `get` **raycasterSortComparer**(): [`RaycasterSortComparer`](../namespaces/Events.md#raycastersortcomparer)

A custom sorting comparer function used to order intersections when performing raycasting.

#### Returns

[`RaycasterSortComparer`](../namespaces/Events.md#raycastersortcomparer)

#### Defined in

[src/core/Main.ts:111](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L111)

___

### renderer

• `get` **renderer**(): `WebGLRenderer`

The WebGLRenderer instance used for rendering the 3D scene.

#### Returns

`WebGLRenderer`

#### Defined in

[src/core/Main.ts:53](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L53)

___

### showStats

• `get` **showStats**(): `boolean`

Indicates whether to display performance statistics.
If set to true, statistics will be shown; otherwise, they will be hidden.

#### Returns

`boolean`

#### Defined in

[src/core/Main.ts:85](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L85)

___

### views

• `get` **views**(): [`RenderView`](Rendering.RenderView.md)[]

An array of all RenderView instances managed by the application.
Lists all views created and managed by the application, each representing a separate viewport or scene.

#### Returns

[`RenderView`](Rendering.RenderView.md)[]

#### Defined in

[src/core/Main.ts:59](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L59)

## Methods

### addView

▸ **addView**(`view`): `void`

Adds a RenderView to the RenderManager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | [`RenderView`](Rendering.RenderView.md) | The RenderView instance to add. |

#### Returns

`void`

#### Defined in

[src/core/Main.ts:212](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L212)

___

### clearViews

▸ **clearViews**(): `void`

Clears all RenderViews from the RenderManager.

#### Returns

`void`

#### Defined in

[src/core/Main.ts:244](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L244)

___

### createView

▸ **createView**(`view`): [`RenderView`](Rendering.RenderView.md)

Creates a new RenderView and adds it to the RenderManager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | [`ViewParameters`](../interfaces/Rendering.ViewParameters.md) | The parameters for the new RenderView. |

#### Returns

[`RenderView`](Rendering.RenderView.md)

The created RenderView instance.

#### Defined in

[src/core/Main.ts:204](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L204)

___

### getViewByMouse

▸ **getViewByMouse**(`mouse`): `void`

Retrieves a RenderView by mouse position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouse` | `Vector2` | The mouse position as a Vector2. |

#### Returns

`void`

#### Defined in

[src/core/Main.ts:252](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L252)

___

### getViewByTag

▸ **getViewByTag**(`tag`): [`RenderView`](Rendering.RenderView.md)

Retrieves a RenderView by its tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag to search for. |

#### Returns

[`RenderView`](Rendering.RenderView.md)

The RenderView with the specified tag, if found, otherwise, undefined.

#### Defined in

[src/core/Main.ts:221](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L221)

___

### removeView

▸ **removeView**(`view`): `void`

Removes a RenderView from the RenderManager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | [`RenderView`](Rendering.RenderView.md) | The RenderView instance to remove. |

#### Returns

`void`

#### Defined in

[src/core/Main.ts:229](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L229)

___

### removeViewByTag

▸ **removeViewByTag**(`tag`): `void`

Removes a RenderView from the RenderManager by its tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag of the RenderView to remove. |

#### Returns

`void`

#### Defined in

[src/core/Main.ts:237](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L237)

___

### setActiveViewsByTag

▸ **setActiveViewsByTag**(`tag`): `void`

Sets active RenderViews by tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag of the RenderViews to set as active. |

#### Returns

`void`

#### Defined in

[src/core/Main.ts:260](https://github.com/agargaro/three.ez/blob/a81f57c/src/core/Main.ts#L260)
