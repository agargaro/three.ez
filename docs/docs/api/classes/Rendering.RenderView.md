---
id: "Rendering.RenderView"
title: "Class: RenderView"
sidebar_label: "RenderView"
custom_edit_url: null
---

[Rendering](../namespaces/Rendering.md).RenderView

Represents a render view with specific parameters. 
Don't instance this manually.

## Implements

- [`ViewParameters`](../interfaces/Rendering.ViewParameters.md)

## Constructors

### constructor

• **new RenderView**(`parameters`, `rendererSize`)

Don't instance this manually.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`ViewParameters`](../interfaces/Rendering.ViewParameters.md) |
| `rendererSize` | `Vector2` |

#### Defined in

[src/rendering/RenderView.ts:76](https://github.com/agargaro/three.ez/blob/ba52259/src/rendering/RenderView.ts#L76)

## Properties

### computedViewport

• **computedViewport**: `Object`

The viewport defining the dimensions and position of the view.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bottom` | `number` |
| `height` | `number` |
| `left` | `number` |
| `top` | `number` |
| `width` | `number` |

#### Defined in

[src/rendering/RenderView.ts:55](https://github.com/agargaro/three.ez/blob/ba52259/src/rendering/RenderView.ts#L55)

## Methods

### update

▸ **update**(): `void`

Updates the dimensions of the viewport based on the renderer size.

#### Returns

`void`

#### Defined in

[src/rendering/RenderView.ts:97](https://github.com/agargaro/three.ez/blob/ba52259/src/rendering/RenderView.ts#L97)
