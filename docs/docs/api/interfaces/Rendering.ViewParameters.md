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

Background alpha value of the view (optional, default: 1).

#### Defined in

[src/rendering/RenderView.ts:37](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L37)

___

### backgroundColor

• `Optional` **backgroundColor**: `ColorRepresentation`

Background color of the view (optional, default: 'black').

#### Defined in

[src/rendering/RenderView.ts:35](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L35)

___

### camera

• **camera**: `Camera`

Camera used to view the scene (avoid using the same camera for different scenes).

#### Defined in

[src/rendering/RenderView.ts:25](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L25)

___

### composer

• `Optional` **composer**: `EffectComposer`

Effect composer used for post-processing (optional).

#### Defined in

[src/rendering/RenderView.ts:39](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L39)

___

### enabled

• `Optional` **enabled**: `boolean`

Determines whether InteractionEvents will be triggered for the view (optional, default: true).

#### Defined in

[src/rendering/RenderView.ts:33](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L33)

___

### onAfterRender

• `Optional` **onAfterRender**: () => `void`

#### Type declaration

▸ (): `void`

Function called after rendering the view (optional).

##### Returns

`void`

#### Defined in

[src/rendering/RenderView.ts:43](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L43)

___

### onBeforeRender

• `Optional` **onBeforeRender**: () => `void`

#### Type declaration

▸ (): `void`

Function called before rendering the view (optional).

##### Returns

`void`

#### Defined in

[src/rendering/RenderView.ts:41](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L41)

___

### scene

• **scene**: `Scene`

Scene rendered in the view.

#### Defined in

[src/rendering/RenderView.ts:23](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L23)

___

### tags

• `Optional` **tags**: `string`[]

Tags of the view (optional).

#### Defined in

[src/rendering/RenderView.ts:29](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L29)

___

### viewport

• `Optional` **viewport**: [`Viewport`](Rendering.Viewport.md)

Normalized viewport defining dimensions and position of the view (optional). Values range from 0 to 1.

#### Defined in

[src/rendering/RenderView.ts:27](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L27)

___

### visible

• `Optional` **visible**: `boolean`

Determines if the view is visible (optional, default: true).

#### Defined in

[src/rendering/RenderView.ts:31](https://github.com/agargaro/three.ez/blob/57919a6/src/rendering/RenderView.ts#L31)
