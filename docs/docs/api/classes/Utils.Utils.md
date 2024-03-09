---
id: "Utils.Utils"
title: "Class: Utils"
sidebar_label: "Utils"
custom_edit_url: null
---

[Utils](../namespaces/Utils.md).Utils

A utility class providing helper methods for various operations.

## Methods

### computeBoundingSphereChildren

▸ `Static` **computeBoundingSphereChildren**(`target`): `void`

Computes bounding spheres for child objects within the specified Object3D hierarchy.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Object3D`<`Object3DEventMap`\> | The root Object3D from which to start computing bounding spheres for children. |

#### Returns

`void`

#### Defined in

[src/utils/Utils.ts:45](https://github.com/agargaro/three.ez/blob/935aabc/src/utils/Utils.ts#L45)

___

### getNodes

▸ `Static` **getNodes**(`target`): [`Nodes`](../namespaces/Utils.md#nodes)

Retrieves a map of objects in the scene graph (Object3D) starting from a root object.
Each object is mapped using its unique name as the key in the resulting object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Object3D`<`Object3DEventMap`\> | The root object to begin generating the object map from. |

#### Returns

[`Nodes`](../namespaces/Utils.md#nodes)

An object containing objects mapped by their names.

#### Defined in

[src/utils/Utils.ts:60](https://github.com/agargaro/three.ez/blob/935aabc/src/utils/Utils.ts#L60)

___

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

The intersection point as Vector3.

#### Defined in

[src/utils/Utils.ts:23](https://github.com/agargaro/three.ez/blob/935aabc/src/utils/Utils.ts#L23)

___

### setChildrenDragTarget

▸ `Static` **setChildrenDragTarget**(`target`, `dragTarget`): `void`

Set for all children of the target, the draggable flag to true and a dragTarget.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Object3D`<`Object3DEventMap`\> | The Object3D whose children you want to enable as draggable elements. * |
| `dragTarget` | `Object3D`<`Object3DEventMap`\> | The Object3D that will act as the drag target for the children. |

#### Returns

`void`

#### Defined in

[src/utils/Utils.ts:34](https://github.com/agargaro/three.ez/blob/935aabc/src/utils/Utils.ts#L34)
