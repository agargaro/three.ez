---
editUrl: false
next: false
prev: false
title: "Main"
---

The `Main` class serves as the core component for managing a 3D application.
It provides configuration options and methods for setting up and controlling the application's behavior.

## Constructors

### new Main()

> **new Main**(`params`): [`Main`](/three.ez/api/classes/main/)

#### Parameters

• **params**: [`MainParameters`](/three.ez/api/interfaces/mainparameters/) = `{}`

Configuration parameters for initializing the Main class.

#### Returns

[`Main`](/three.ez/api/classes/main/)

#### Defined in

[src/core/Main.ts:160](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L160)

## Properties

### ticks

> **ticks**: `number` = `0`

A static counter representing the number of animation frames elapsed.

#### Defined in

[src/core/Main.ts:50](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L50)

## Accessors

### activeCamera

#### Get Signature

> **get** **activeCamera**(): `Camera`

The Camera associated with the currently active RenderView.

##### Returns

`Camera`

#### Defined in

[src/core/Main.ts:82](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L82)

***

### activeComposer

#### Get Signature

> **get** **activeComposer**(): `EffectComposer`

The EffectComposer (used for post-processing) associated with the currently active RenderView.

##### Returns

`EffectComposer`

#### Defined in

[src/core/Main.ts:87](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L87)

***

### activeScene

#### Get Signature

> **get** **activeScene**(): `Scene`

The Scene associated with the currently active RenderView.

##### Returns

`Scene`

#### Defined in

[src/core/Main.ts:77](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L77)

***

### activeView

#### Get Signature

> **get** **activeView**(): [`RenderView`](/three.ez/api/classes/renderview/)

The currently active RenderView (activated by mouse position).

##### Returns

[`RenderView`](/three.ez/api/classes/renderview/)

#### Defined in

[src/core/Main.ts:72](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L72)

***

### backgroundAlpha

#### Get Signature

> **get** **backgroundAlpha**(): `number`

The default alpha (transparency) value for the background.

##### Returns

`number`

#### Set Signature

> **set** **backgroundAlpha**(`value`): `void`

##### Parameters

• **value**: `number`

##### Returns

`void`

#### Defined in

[src/core/Main.ts:143](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L143)

***

### backgroundColor

#### Get Signature

> **get** **backgroundColor**(): `ColorRepresentation`

The default background color used in the application.

##### Returns

`ColorRepresentation`

#### Set Signature

> **set** **backgroundColor**(`value`): `void`

##### Parameters

• **value**: `ColorRepresentation`

##### Returns

`void`

#### Defined in

[src/core/Main.ts:137](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L137)

***

### dragButtons

#### Get Signature

> **get** **dragButtons**(): `number`[]

Defines the mouse buttons that can be used for dragging objects.
Specify the button values as an array of PointerEvent button values.

##### Returns

`number`[]

#### Set Signature

> **set** **dragButtons**(`value`): `void`

##### Parameters

• **value**: `number`[]

##### Returns

`void`

#### Defined in

[src/core/Main.ts:114](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L114)

***

### enableCursor

#### Get Signature

> **get** **enableCursor**(): `boolean`

Indicates whether to enable cursor handling in the application.

##### Returns

`boolean`

#### Set Signature

> **set** **enableCursor**(`value`): `void`

##### Parameters

• **value**: `boolean`

##### Returns

`void`

#### Defined in

[src/core/Main.ts:120](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L120)

***

### mousePosition

#### Get Signature

> **get** **mousePosition**(): `Vector2`

The current mouse position represented as a Vector2.
Provides the x and y coordinates of the mouse pointer within the application.

##### Returns

`Vector2`

#### Defined in

[src/core/Main.ts:150](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L150)

***

### multitouch

#### Get Signature

> **get** **multitouch**(): `boolean`

Indicates whether to enable multitouch interactions.

##### Returns

`boolean`

#### Set Signature

> **set** **multitouch**(`value`): `void`

##### Parameters

• **value**: `boolean`

##### Returns

`void`

#### Defined in

[src/core/Main.ts:107](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L107)

***

### pointerOnCanvas

#### Get Signature

> **get** **pointerOnCanvas**(): `boolean`

Indicates if the pointer is over the canvas.

##### Returns

`boolean`

#### Defined in

[src/core/Main.ts:155](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L155)

***

### raycaster

#### Get Signature

> **get** **raycaster**(): `Raycaster`

A Raycaster instance responsible for handling raycasting operations in the application.

##### Returns

`Raycaster`

#### Defined in

[src/core/Main.ts:132](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L132)

***

### raycasterSortComparer

#### Get Signature

> **get** **raycasterSortComparer**(): [`RaycasterSortComparer`](/three.ez/api/type-aliases/raycastersortcomparer/)

A custom sorting comparer function used to order intersections when performing raycasting.

##### Returns

[`RaycasterSortComparer`](/three.ez/api/type-aliases/raycastersortcomparer/)

#### Set Signature

> **set** **raycasterSortComparer**(`value`): `void`

##### Parameters

• **value**: [`RaycasterSortComparer`](/three.ez/api/type-aliases/raycastersortcomparer/)

##### Returns

`void`

#### Defined in

[src/core/Main.ts:126](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L126)

***

### renderer

#### Get Signature

> **get** **renderer**(): `WebGLRenderer`

The WebGLRenderer instance used for rendering the 3D scene.

##### Returns

`WebGLRenderer`

#### Defined in

[src/core/Main.ts:61](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L61)

***

### showStats

#### Get Signature

> **get** **showStats**(): `boolean`

Indicates whether to display performance statistics.
If set to true, statistics will be shown; otherwise, they will be hidden.

##### Returns

`boolean`

#### Set Signature

> **set** **showStats**(`value`): `void`

##### Parameters

• **value**: `boolean`

##### Returns

`void`

#### Defined in

[src/core/Main.ts:93](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L93)

***

### views

#### Get Signature

> **get** **views**(): [`RenderView`](/three.ez/api/classes/renderview/)[]

An array of all RenderView instances managed by the application.
Lists all views created and managed by the application, each representing a separate viewport or scene.

##### Returns

[`RenderView`](/three.ez/api/classes/renderview/)[]

#### Defined in

[src/core/Main.ts:67](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L67)

## Methods

### addView()

> **addView**(`view`): `void`

Adds a RenderView to the RenderManager.

#### Parameters

• **view**: [`RenderView`](/three.ez/api/classes/renderview/)

The RenderView instance to add.

#### Returns

`void`

#### Defined in

[src/core/Main.ts:249](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L249)

***

### animate()

> **animate**(`delta`, `total`): `void`

#### Parameters

• **delta**: `number`

• **total**: `number`

#### Returns

`void`

#### Defined in

[src/core/Main.ts:229](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L229)

***

### clearViews()

> **clearViews**(): `void`

Clears all RenderViews from the RenderManager.

#### Returns

`void`

#### Defined in

[src/core/Main.ts:275](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L275)

***

### createView()

> **createView**(`view`): [`RenderView`](/three.ez/api/classes/renderview/)

Creates a new RenderView and adds it to the RenderManager.

#### Parameters

• **view**: [`ViewParameters`](/three.ez/api/interfaces/viewparameters/)

The parameters for the new RenderView.

#### Returns

[`RenderView`](/three.ez/api/classes/renderview/)

The created RenderView instance.

#### Defined in

[src/core/Main.ts:240](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L240)

***

### getViewByMouse()

> **getViewByMouse**(`mouse`): `void`

Retrieves a RenderView by mouse position.

#### Parameters

• **mouse**: `Vector2`

The mouse position as a Vector2.

#### Returns

`void`

#### Defined in

[src/core/Main.ts:293](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L293)

***

### getViewByTag()

> **getViewByTag**(`tag`): [`RenderView`](/three.ez/api/classes/renderview/)

Retrieves a RenderView by its tag.

#### Parameters

• **tag**: `string`

The tag to search for.

#### Returns

[`RenderView`](/three.ez/api/classes/renderview/)

The RenderView with the specified tag, if found, otherwise, undefined.

#### Defined in

[src/core/Main.ts:285](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L285)

***

### removeView()

> **removeView**(`view`): `void`

Removes a RenderView from the RenderManager.

#### Parameters

• **view**: [`RenderView`](/three.ez/api/classes/renderview/)

The RenderView instance to remove.

#### Returns

`void`

#### Defined in

[src/core/Main.ts:258](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L258)

***

### removeViewByTag()

> **removeViewByTag**(`tag`): `void`

Removes a RenderView from the RenderManager by its tag.

#### Parameters

• **tag**: `string`

The tag of the RenderView to remove.

#### Returns

`void`

#### Defined in

[src/core/Main.ts:267](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L267)

***

### setActiveViewsByTag()

> **setActiveViewsByTag**(`tag`): `void`

Sets active RenderViews by tag.

#### Parameters

• **tag**: `string`

The tag of the RenderViews to set as active.

#### Returns

`void`

#### Defined in

[src/core/Main.ts:301](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/core/Main.ts#L301)
