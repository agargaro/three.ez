---
id: "Rendering.ViewParameters"
title: "Interface: ViewParameters"
sidebar_label: "ViewParameters"
custom_edit_url: null
---

[Rendering](../namespaces/Rendering.md).ViewParameters

Represents a set of parameters for configuring a view.

## Implemented by

- [`RenderView`](../classes/Rendering.RenderView.md)

## Properties

### backgroundAlpha

• `Optional` **backgroundAlpha**: `number`

The background alpha value of the view (optional, default: 1).

#### Defined in

[src/rendering/RenderView.ts:37](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L37)

___

### backgroundColor

• `Optional` **backgroundColor**: `ColorRepresentation`

The background color of the view (optional). It can be a Color object or a numeric value representing the color.

#### Defined in

[src/rendering/RenderView.ts:35](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L35)

___

### camera

• **camera**: `Camera`

The camera used to view the scene (Don't use the same camera for differents scenes).

#### Defined in

[src/rendering/RenderView.ts:25](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L25)

___

### composer

• `Optional` **composer**: `EffectComposer`

The effect composer used for post-processing (optional).

#### Defined in

[src/rendering/RenderView.ts:39](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L39)

___

### enabled

• `Optional` **enabled**: `boolean`

Determines whether InteractionEvents will be triggered for the view. (optional, default: true).

#### Defined in

[src/rendering/RenderView.ts:33](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L33)

___

### onAfterRender

• `Optional` **onAfterRender**: () => `void`

#### Type declaration

▸ (): `void`

Function to be called after rendering the view (optional).

##### Returns

`void`

#### Defined in

[src/rendering/RenderView.ts:43](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L43)

___

### onBeforeRender

• `Optional` **onBeforeRender**: () => `void`

#### Type declaration

▸ (): `void`

Function to be called before rendering the view (optional).

##### Returns

`void`

#### Defined in

[src/rendering/RenderView.ts:41](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L41)

___

### scene

• **scene**: `Scene`

The scene to be rendered in the view.

#### Defined in

[src/rendering/RenderView.ts:23](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L23)

___

### tags

• `Optional` **tags**: `string`[]

The tags of the view.

#### Defined in

[src/rendering/RenderView.ts:29](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L29)

___

### viewport

• `Optional` **viewport**: [`Viewport`](Rendering.Viewport.md)

The normalized viewport defining the dimensions and position of the view (optional). Values range from 0 to 1.

#### Defined in

[src/rendering/RenderView.ts:27](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L27)

___

### visible

• `Optional` **visible**: `boolean`

Determines if the view is visible (optional, default: true).

#### Defined in

[src/rendering/RenderView.ts:31](https://github.com/agargaro/three.ez/blob/ee63373/src/rendering/RenderView.ts#L31)
