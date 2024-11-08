---
editUrl: false
next: false
prev: false
title: "RenderView"
---

Represents a render view with specific parameters. 
Don't instantiate this manually.

## Implements

- [`ViewParameters`](/api/interfaces/viewparameters/)

## Constructors

### new RenderView()

> **new RenderView**(`parameters`, `rendererSize`): [`RenderView`](/api/classes/renderview/)

Don't instantiate this manually.

#### Parameters

• **parameters**: [`ViewParameters`](/api/interfaces/viewparameters/)

• **rendererSize**: `Vector2`

#### Returns

[`RenderView`](/api/classes/renderview/)

#### Defined in

[src/rendering/RenderView.ts:76](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L76)

## Properties

### backgroundAlpha

> **backgroundAlpha**: `number`

Background alpha value of the view (optional, default: 1).

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`backgroundAlpha`](/api/interfaces/viewparameters/#backgroundalpha)

#### Defined in

[src/rendering/RenderView.ts:59](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L59)

***

### backgroundColor

> **backgroundColor**: `Color`

Background color of the view (optional, default: 'black').

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`backgroundColor`](/api/interfaces/viewparameters/#backgroundcolor)

#### Defined in

[src/rendering/RenderView.ts:58](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L58)

***

### camera

> **camera**: `Camera`

Camera used to view the scene (avoid using the same camera for different scenes).

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`camera`](/api/interfaces/viewparameters/#camera)

#### Defined in

[src/rendering/RenderView.ts:52](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L52)

***

### composer

> **composer**: `EffectComposer`

Effect composer used for post-processing (optional).

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`composer`](/api/interfaces/viewparameters/#composer)

#### Defined in

[src/rendering/RenderView.ts:60](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L60)

***

### computedViewport

> **computedViewport**: `object`

The viewport defining the dimensions and position of the view.

#### bottom

> **bottom**: `number` = `0`

#### height

> **height**: `number` = `0`

#### left

> **left**: `number` = `0`

#### top

> **top**: `number` = `0`

#### width

> **width**: `number` = `0`

#### Defined in

[src/rendering/RenderView.ts:55](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L55)

***

### enabled

> **enabled**: `boolean`

Determines whether InteractionEvents will be triggered for the view (optional, default: true).

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`enabled`](/api/interfaces/viewparameters/#enabled)

#### Defined in

[src/rendering/RenderView.ts:57](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L57)

***

### scene

> **scene**: `Scene`

Scene rendered in the view.

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`scene`](/api/interfaces/viewparameters/#scene)

#### Defined in

[src/rendering/RenderView.ts:51](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L51)

***

### tags

> **tags**: `string`[]

Tags of the view (optional).

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`tags`](/api/interfaces/viewparameters/#tags)

#### Defined in

[src/rendering/RenderView.ts:56](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L56)

***

### viewport

> **viewport**: [`Viewport`](/api/interfaces/viewport/)

Normalized viewport defining dimensions and position of the view (optional). Values range from 0 to 1.

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`viewport`](/api/interfaces/viewparameters/#viewport)

#### Defined in

[src/rendering/RenderView.ts:53](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L53)

## Accessors

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Determines if the view is visible (optional, default: true).

##### Returns

`boolean`

#### Set Signature

> **set** **visible**(`value`): `void`

Determines if the view is visible (optional, default: true).

##### Parameters

• **value**: `boolean`

##### Returns

`void`

Determines if the view is visible (optional, default: true).

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`visible`](/api/interfaces/viewparameters/#visible)

#### Defined in

[src/rendering/RenderView.ts:66](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L66)

## Methods

### onAfterRender()

> **onAfterRender**(): `void`

Function called after rendering the view (optional).

#### Returns

`void`

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`onAfterRender`](/api/interfaces/viewparameters/#onafterrender)

#### Defined in

[src/rendering/RenderView.ts:116](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L116)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Function called before rendering the view (optional).

#### Returns

`void`

#### Implementation of

[`ViewParameters`](/api/interfaces/viewparameters/).[`onBeforeRender`](/api/interfaces/viewparameters/#onbeforerender)

#### Defined in

[src/rendering/RenderView.ts:112](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L112)

***

### update()

> **update**(): `void`

Updates the dimensions of the viewport based on the renderer size.

#### Returns

`void`

#### Defined in

[src/rendering/RenderView.ts:97](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/rendering/RenderView.ts#L97)
