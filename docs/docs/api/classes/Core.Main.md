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
| `parameters` | [`MainParameters`](../interfaces/Core.MainParameters.md) | Represents the configuration parameters for initializing the Main class. |

#### Defined in

[src/core/Main.ts:152](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L152)

## Properties

### ticks

▪ `Static` **ticks**: `number` = `0`

A static counter representing the number of animation frames elapsed.

#### Defined in

[src/core/Main.ts:54](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L54)

## Accessors

### activeCamera

• `get` **activeCamera**(): `Camera`

The Camera associated with the currently active RenderView.

#### Returns

`Camera`

#### Defined in

[src/core/Main.ts:86](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L86)

___

### activeComposer

• `get` **activeComposer**(): `EffectComposer`

The EffectComposer (used for post-processing) associated with the currently active RenderView.

#### Returns

`EffectComposer`

#### Defined in

[src/core/Main.ts:91](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L91)

___

### activeScene

• `get` **activeScene**(): `Scene`

The Scene associated with the currently active RenderView.

#### Returns

`Scene`

#### Defined in

[src/core/Main.ts:81](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L81)

___

### activeView

• `get` **activeView**(): [`RenderView`](Rendering.RenderView.md)

The currently active RenderView (activated by mouse position).

#### Returns

[`RenderView`](Rendering.RenderView.md)

#### Defined in

[src/core/Main.ts:76](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L76)

___

### backgroundAlpha

• `get` **backgroundAlpha**(): `number`

The default alpha (transparency) value for the background.

#### Returns

`number`

#### Defined in

[src/core/Main.ts:140](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L140)

___

### backgroundColor

• `get` **backgroundColor**(): `ColorRepresentation`

The default background color used in the application.

#### Returns

`ColorRepresentation`

#### Defined in

[src/core/Main.ts:134](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L134)

___

### enableCursor

• `get` **enableCursor**(): `boolean`

A boolean flag indicating whether to enable cursor handling in the application.

#### Returns

`boolean`

#### Defined in

[src/core/Main.ts:117](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L117)

___

### mousePosition

• `get` **mousePosition**(): `Vector2`

The current mouse position represented as a Vector2.
Provides the x and y coordinates of the mouse pointer within the application.

#### Returns

`Vector2`

#### Defined in

[src/core/Main.ts:147](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L147)

___

### multitouch

• `get` **multitouch**(): `boolean`

A boolean flag indicating whether to enable multitouch interactions.

#### Returns

`boolean`

#### Defined in

[src/core/Main.ts:111](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L111)

___

### raycaster

• `get` **raycaster**(): `Raycaster`

A Raycaster instance responsible for handling raycasting operations in the application.

#### Returns

`Raycaster`

#### Defined in

[src/core/Main.ts:129](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L129)

___

### raycasterSortComparer

• `get` **raycasterSortComparer**(): [`RaycasterSortComparer`](../namespaces/Events.md#raycastersortcomparer)

A custom sorting comparer function used to order intersections when performing raycasting.

#### Returns

[`RaycasterSortComparer`](../namespaces/Events.md#raycastersortcomparer)

#### Defined in

[src/core/Main.ts:123](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L123)

___

### renderer

• `get` **renderer**(): `WebGLRenderer`

The WebGLRenderer instance used for rendering the 3D scene.

#### Returns

`WebGLRenderer`

#### Defined in

[src/core/Main.ts:65](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L65)

___

### showStats

• `get` **showStats**(): `boolean`

A boolean flag indicating whether to display performance statistics.
If set to true, statistics will be shown; otherwise, they will be hidden.

#### Returns

`boolean`

#### Defined in

[src/core/Main.ts:97](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L97)

___

### views

• `get` **views**(): [`RenderView`](Rendering.RenderView.md)[]

An array of all RenderView instances managed by the application.
Lists all views created and managed by the application, each representing a separate viewport or scene.

#### Returns

[`RenderView`](Rendering.RenderView.md)[]

#### Defined in

[src/core/Main.ts:71](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L71)

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

[src/core/Main.ts:224](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L224)

___

### clearViews

▸ **clearViews**(): `void`

Clears all RenderViews from the RenderManager.

#### Returns

`void`

#### Defined in

[src/core/Main.ts:256](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L256)

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

[src/core/Main.ts:216](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L216)

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

[src/core/Main.ts:264](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L264)

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

[src/core/Main.ts:233](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L233)

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

[src/core/Main.ts:241](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L241)

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

[src/core/Main.ts:249](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L249)

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

[src/core/Main.ts:272](https://github.com/agargaro/three.ez/blob/3bc2c12/src/core/Main.ts#L272)
