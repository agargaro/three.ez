---
id: "Cameras.OrthographicCameraAuto"
title: "Class: OrthographicCameraAuto"
sidebar_label: "OrthographicCameraAuto"
custom_edit_url: null
---

[Cameras](../namespaces/Cameras.md).OrthographicCameraAuto

Orthographic camera that resizes automatically.

## Hierarchy

- `OrthographicCamera`

  ↳ **`OrthographicCameraAuto`**

## Constructors

### constructor

• **new OrthographicCameraAuto**(`size?`, `fixedWidth?`, `near?`, `far?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `size` | `number` | `2` | Fixed width or height dimension based on the 'fixedWidth' property. Default `2`. |
| `fixedWidth` | `boolean` | `true` | If true, the 'size' property will refer to the width. If not, to the height. Default `true`. |
| `near?` | `number` | `undefined` | Camera frustum near plane. Default `0.1`. |
| `far?` | `number` | `undefined` | Camera frustum far plane. Default `2000`. |

#### Overrides

OrthographicCamera.constructor

#### Defined in

[src/cameras/OrthographicCameraAuto.ts:36](https://github.com/agargaro/three.ez/blob/4f6b61c/src/cameras/OrthographicCameraAuto.ts#L36)

## Accessors

### fixedWidth

• `get` **fixedWidth**(): `boolean`

If true, the 'size' property will refer to the width. If not, to the height.

#### Returns

`boolean`

#### Defined in

[src/cameras/OrthographicCameraAuto.ts:24](https://github.com/agargaro/three.ez/blob/4f6b61c/src/cameras/OrthographicCameraAuto.ts#L24)

___

### size

• `get` **size**(): `number`

Fixed width or height dimension based on the 'fixedWidth' property.

#### Returns

`number`

#### Defined in

[src/cameras/OrthographicCameraAuto.ts:15](https://github.com/agargaro/three.ez/blob/4f6b61c/src/cameras/OrthographicCameraAuto.ts#L15)
