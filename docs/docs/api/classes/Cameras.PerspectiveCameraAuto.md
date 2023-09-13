---
id: "Cameras.PerspectiveCameraAuto"
title: "Class: PerspectiveCameraAuto"
sidebar_label: "PerspectiveCameraAuto"
custom_edit_url: null
---

[Cameras](../namespaces/Cameras.md).PerspectiveCameraAuto

Perspective camera that resizes automatically.

## Hierarchy

- `PerspectiveCamera`

  ↳ **`PerspectiveCameraAuto`**

## Constructors

### constructor

• **new PerspectiveCameraAuto**(`fov?`, `near?`, `far?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov?` | `number` | Camera frustum vertical field of view. Default `50`. |
| `near?` | `number` | Camera frustum near plane. Default `0.1`. |
| `far?` | `number` | Camera frustum far plane. Default `2000`. |

#### Overrides

PerspectiveCamera.constructor

#### Defined in

[src/cameras/PerspectiveCameraAuto.ts:13](https://github.com/agargaro/three.ez/blob/e7ff09c/src/cameras/PerspectiveCameraAuto.ts#L13)
