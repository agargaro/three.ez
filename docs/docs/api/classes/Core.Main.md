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

[src/core/Main.ts:147](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L147)

## Properties

### ticks

▪ `Static` **ticks**: `number` = `0`

A static counter representing the number of animation frames elapsed.

#### Defined in

[src/core/Main.ts:42](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L42)

## Accessors

### activeCamera

• `get` **activeCamera**(): `Camera`

The Camera associated with the currently active RenderView.

#### Returns

`Camera`

#### Defined in

[src/core/Main.ts:74](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L74)

___

### activeComposer

• `get` **activeComposer**(): `EffectComposer`

The EffectComposer (used for post-processing) associated with the currently active RenderView.

#### Returns

`EffectComposer`

#### Defined in

[src/core/Main.ts:79](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L79)

___

### activeScene

• `get` **activeScene**(): `Scene`

The Scene associated with the currently active RenderView.

#### Returns

`Scene`

#### Defined in

[src/core/Main.ts:69](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L69)

___

### activeView

• `get` **activeView**(): [`RenderView`](Rendering.RenderView.md)

The currently active RenderView (activated by mouse position).

#### Returns

[`RenderView`](Rendering.RenderView.md)

#### Defined in

[src/core/Main.ts:64](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L64)

___

### backgroundAlpha

• `get` **backgroundAlpha**(): `number`

The default alpha (transparency) value for the background.

#### Returns

`number`

#### Defined in

[src/core/Main.ts:135](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L135)

___

### backgroundColor

• `get` **backgroundColor**(): `ColorRepresentation`

The default background color used in the application.

#### Returns

`ColorRepresentation`

#### Defined in

[src/core/Main.ts:129](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L129)

___

### dragButtons

• `get` **dragButtons**(): `number`[]

Defines the mouse buttons that can be used for dragging objects.
Specify the button values as an array of PointerEvent button values.

#### Returns

`number`[]

#### Defined in

[src/core/Main.ts:106](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L106)

___

### enableCursor

• `get` **enableCursor**(): `boolean`

Indicates whether to enable cursor handling in the application.

#### Returns

`boolean`

#### Defined in

[src/core/Main.ts:112](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L112)

___

### mousePosition

• `get` **mousePosition**(): `Vector2`

The current mouse position represented as a Vector2.
Provides the x and y coordinates of the mouse pointer within the application.

#### Returns

`Vector2`

#### Defined in

[src/core/Main.ts:142](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L142)

___

### multitouch

• `get` **multitouch**(): `boolean`

Indicates whether to enable multitouch interactions.

#### Returns

`boolean`

#### Defined in

[src/core/Main.ts:99](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L99)

___

### raycaster

• `get` **raycaster**(): `Raycaster`

A Raycaster instance responsible for handling raycasting operations in the application.

#### Returns

`Raycaster`

#### Defined in

[src/core/Main.ts:124](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L124)

___

### raycasterSortComparer

• `get` **raycasterSortComparer**(): [`RaycasterSortComparer`](../namespaces/Events.md#raycastersortcomparer)

A custom sorting comparer function used to order intersections when performing raycasting.

#### Returns

[`RaycasterSortComparer`](../namespaces/Events.md#raycastersortcomparer)

#### Defined in

[src/core/Main.ts:118](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L118)

___

### renderer

• `get` **renderer**(): `WebGLRenderer`

The WebGLRenderer instance used for rendering the 3D scene.

#### Returns

`WebGLRenderer`

#### Defined in

[src/core/Main.ts:53](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L53)

___

### showStats

• `get` **showStats**(): `boolean`

Indicates whether to display performance statistics.
If set to true, statistics will be shown; otherwise, they will be hidden.

#### Returns

`boolean`

#### Defined in

[src/core/Main.ts:85](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L85)

___

### views

• `get` **views**(): [`RenderView`](Rendering.RenderView.md)[]

An array of all RenderView instances managed by the application.
Lists all views created and managed by the application, each representing a separate viewport or scene.

#### Returns

[`RenderView`](Rendering.RenderView.md)[]

#### Defined in

[src/core/Main.ts:59](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L59)

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

[src/core/Main.ts:219](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L219)

___

### clearViews

▸ **clearViews**(): `void`

Clears all RenderViews from the RenderManager.

#### Returns

`void`

#### Defined in

[src/core/Main.ts:251](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L251)

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

[src/core/Main.ts:211](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L211)

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

[src/core/Main.ts:259](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L259)

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

[src/core/Main.ts:228](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L228)

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

[src/core/Main.ts:236](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L236)

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

[src/core/Main.ts:244](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L244)

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

[src/core/Main.ts:267](https://github.com/agargaro/three.ez/blob/cf5584f/src/core/Main.ts#L267)
