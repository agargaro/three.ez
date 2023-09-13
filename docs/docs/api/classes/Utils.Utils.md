---
id: "Utils.Utils"
title: "Class: Utils"
sidebar_label: "Utils"
custom_edit_url: null
---

[Utils](../namespaces/Utils.md).Utils

A utility class providing helper methods.

## Methods

### getSceneIntersection

▸ `Static` **getSceneIntersection**(`ray`, `camera`, `distance`): `Vector3`

Calculates the intersection point of a ray with a plane in world coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ray` | `Ray` | The ray to intersect with the plane. |
| `camera` | `Camera` | The camera used as a reference for the plane's orientation. |
| `distance` | `number` | The distance from the camera to the plane. |

#### Returns

`Vector3`

The intersection point.

#### Defined in

[src/utils/Utils.ts:17](https://github.com/agargaro/three.ez/blob/46fae0a/src/utils/Utils.ts#L17)
