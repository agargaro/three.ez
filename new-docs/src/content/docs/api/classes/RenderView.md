---
editUrl: false
next: false
prev: false
title: "RenderView"
---

Represents a render view with specific parameters. 
Don't instantiate this manually.

## Implements

- [`ViewParameters`](/three.ez/api/interfaces/viewparameters/)

## Constructors

### new RenderView()

> **new RenderView**(`parameters`, `rendererSize`): [`RenderView`](/three.ez/api/classes/renderview/)

Don't instantiate this manually.

#### Parameters

• **parameters**: [`ViewParameters`](/three.ez/api/interfaces/viewparameters/)

• **rendererSize**: `Vector2`

#### Returns

[`RenderView`](/three.ez/api/classes/renderview/)

#### Defined in

[src/rendering/RenderView.ts:76](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L76)

## Properties

### backgroundAlpha

> **backgroundAlpha**: `number`

Background alpha value of the view (optional, default: 1).

#### Implementation of

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`backgroundAlpha`](/three.ez/api/interfaces/viewparameters/#backgroundalpha)

#### Defined in

[src/rendering/RenderView.ts:59](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L59)

***

### backgroundColor

> **backgroundColor**: `Color`

Background color of the view (optional, default: 'black').

#### Implementation of

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`backgroundColor`](/three.ez/api/interfaces/viewparameters/#backgroundcolor)

#### Defined in

[src/rendering/RenderView.ts:58](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L58)

***

### camera

> **camera**: `Camera`

Camera used to view the scene (avoid using the same camera for different scenes).

#### Implementation of

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`camera`](/three.ez/api/interfaces/viewparameters/#camera)

#### Defined in

[src/rendering/RenderView.ts:52](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L52)

***

### composer

> **composer**: `EffectComposer`

Effect composer used for post-processing (optional).

#### Implementation of

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`composer`](/three.ez/api/interfaces/viewparameters/#composer)

#### Defined in

[src/rendering/RenderView.ts:60](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L60)

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

[src/rendering/RenderView.ts:55](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L55)

***

### enabled

> **enabled**: `boolean`

Determines whether InteractionEvents will be triggered for the view (optional, default: true).

#### Implementation of

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`enabled`](/three.ez/api/interfaces/viewparameters/#enabled)

#### Defined in

[src/rendering/RenderView.ts:57](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L57)

***

### scene

> **scene**: `Scene`

Scene rendered in the view.

#### Implementation of

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`scene`](/three.ez/api/interfaces/viewparameters/#scene)

#### Defined in

[src/rendering/RenderView.ts:51](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L51)

***

### tags

> **tags**: `string`[]

Tags of the view (optional).

#### Implementation of

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`tags`](/three.ez/api/interfaces/viewparameters/#tags)

#### Defined in

[src/rendering/RenderView.ts:56](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L56)

***

### viewport

> **viewport**: [`Viewport`](/three.ez/api/interfaces/viewport/)

Normalized viewport defining dimensions and position of the view (optional). Values range from 0 to 1.

#### Implementation of

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`viewport`](/three.ez/api/interfaces/viewparameters/#viewport)

#### Defined in

[src/rendering/RenderView.ts:53](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L53)

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

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`visible`](/three.ez/api/interfaces/viewparameters/#visible)

#### Defined in

[src/rendering/RenderView.ts:66](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L66)

## Methods

### onAfterRender()

> **onAfterRender**(): `void`

Function called after rendering the view (optional).

#### Returns

`void`

#### Implementation of

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`onAfterRender`](/three.ez/api/interfaces/viewparameters/#onafterrender)

#### Defined in

[src/rendering/RenderView.ts:116](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L116)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Function called before rendering the view (optional).

#### Returns

`void`

#### Implementation of

[`ViewParameters`](/three.ez/api/interfaces/viewparameters/).[`onBeforeRender`](/three.ez/api/interfaces/viewparameters/#onbeforerender)

#### Defined in

[src/rendering/RenderView.ts:112](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L112)

***

### update()

> **update**(): `void`

Updates the dimensions of the viewport based on the renderer size.

#### Returns

`void`

#### Defined in

[src/rendering/RenderView.ts:97](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/rendering/RenderView.ts#L97)
