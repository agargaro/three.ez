---
id: "Rendering.RenderView"
title: "Class: RenderView"
sidebar_label: "RenderView"
custom_edit_url: null
---

[Rendering](../namespaces/Rendering.md).RenderView

Represents a render view with specific parameters. 
Don't instantiate this manually.

## Implements

- [`ViewParameters`](../interfaces/Rendering.ViewParameters.md)

## Constructors

### constructor

• **new RenderView**(`parameters`, `rendererSize`): [`RenderView`](Rendering.RenderView.md)

Don't instantiate this manually.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`ViewParameters`](../interfaces/Rendering.ViewParameters.md) |
| `rendererSize` | `Vector2` |

#### Returns

[`RenderView`](Rendering.RenderView.md)

#### Defined in

[src/rendering/RenderView.ts:76](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/rendering/RenderView.ts#L76)

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

[src/rendering/RenderView.ts:55](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/rendering/RenderView.ts#L55)

## Methods

### update

▸ **update**(): `void`

Updates the dimensions of the viewport based on the renderer size.

#### Returns

`void`

#### Defined in

[src/rendering/RenderView.ts:97](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/rendering/RenderView.ts#L97)
