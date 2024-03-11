---
id: "Utils.IntersectionUtils"
title: "Class: IntersectionUtils"
sidebar_label: "IntersectionUtils"
custom_edit_url: null
---

[Utils](../namespaces/Utils.md).IntersectionUtils

Class that provides a set of utilities for calculating intersections between 2D and 3D geometric objects.

## Methods

### line\_boxAABB

▸ `Static` **line_boxAABB**(`rayOrigin`, `rayDir`, `box`): `boolean`

Checks if a 3D line intersects an Axis-Aligned Bounding Box (AABB) defined by `box`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rayOrigin` | `Vector3` | The origin of the line. |
| `rayDir` | `Vector3` | The direction of the line. |
| `box` | `Box3` | The AABB to check for intersection with. |

#### Returns

`boolean`

`true` if the line intersects the AABB, otherwise `false`.

#### Defined in

[src/utils/IntersectionUtils.ts:103](https://github.com/agargaro/three.ez/blob/0027204/src/utils/IntersectionUtils.ts#L103)

___

### line\_line\_2D

▸ `Static` **line_line_2D**(`a1`, `a2`, `b1`, `b2`, `target?`): `Vector3`

Computes the intersection between two 2D lines defined by points `a1` and `a2`, and `b1` and `b2`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a1` | `VectorObject3D` | The first point of the first line. |
| `a2` | `VectorObject3D` | The second point of the first line. |
| `b1` | `VectorObject3D` | The first point of the second line. |
| `b2` | `VectorObject3D` | The second point of the second line. |
| `target` | `Vector3` | (Optional) The vector to store the intersection point. If omitted, a new vector will be created. |

#### Returns

`Vector3`

The intersection point of the two lines or `undefined` if the lines are parallel.

**`See`**

[https://paulbourke.net/geometry/pointlineplane/](https://paulbourke.net/geometry/pointlineplane/)

#### Defined in

[src/utils/IntersectionUtils.ts:22](https://github.com/agargaro/three.ez/blob/0027204/src/utils/IntersectionUtils.ts#L22)

___

### line\_line\_3D

▸ `Static` **line_line_3D**(`a1`, `a2`, `b1`, `b2`, `target?`, `tolerance?`): `Vector3`

Computes the intersection between two 3D lines defined by points `a1` and `a2`, and `b1` and `b2`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a1` | `ObjVec3` | The first point of the first line. |
| `a2` | `ObjVec3` | The second point of the first line. |
| `b1` | `ObjVec3` | The first point of the second line. |
| `b2` | `ObjVec3` | The second point of the second line. |
| `target` | `Vector3` | (Optional) The vector to store the intersection point. If omitted, a new vector will be created. |
| `tolerance` | `number` | (Optional) The tolerance for evaluating the intersection. The default value is 10^-6. |

#### Returns

`Vector3`

The intersection point of the two lines or `undefined` if the lines are parallel or do not intersect.

**`See`**

[https://paulbourke.net/geometry/pointlineplane/](https://paulbourke.net/geometry/pointlineplane/)

#### Defined in

[src/utils/IntersectionUtils.ts:65](https://github.com/agargaro/three.ez/blob/0027204/src/utils/IntersectionUtils.ts#L65)

___

### segment\_boxAABB

▸ `Static` **segment_boxAABB**(`p1`, `p2`, `box`): `boolean`

Checks if a 3D line segment defined by points `p1` and `p2` intersects an Axis-Aligned Bounding Box (AABB) defined by `box`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | `Vector3` | The first point of the segment. |
| `p2` | `Vector3` | The second point of the segment. |
| `box` | `Box3` | The AABB to check for intersection with. |

#### Returns

`boolean`

`true` if the segment intersects the AABB and is within the segment's length, otherwise `false`.

#### Defined in

[src/utils/IntersectionUtils.ts:160](https://github.com/agargaro/three.ez/blob/0027204/src/utils/IntersectionUtils.ts#L160)

___

### segment\_segment\_2D

▸ `Static` **segment_segment_2D**(`a1`, `a2`, `b1`, `b2`, `target?`): `Vector3`

Computes the intersection between two 2D line segments defined by points `a1` and `a2`, and `b1` and `b2`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a1` | `VectorObject3D` | The first point of the first segment. |
| `a2` | `VectorObject3D` | The second point of the first segment. |
| `b1` | `VectorObject3D` | The first point of the second segment. |
| `b2` | `VectorObject3D` | The second point of the second segment. |
| `target` | `Vector3` | (Optional) The vector to store the intersection point. If omitted, a new vector will be created. |

#### Returns

`Vector3`

The intersection point of the two segments or `undefined` if the segments do not intersect.

**`See`**

[https://paulbourke.net/geometry/pointlineplane/](https://paulbourke.net/geometry/pointlineplane/)

#### Defined in

[src/utils/IntersectionUtils.ts:42](https://github.com/agargaro/three.ez/blob/0027204/src/utils/IntersectionUtils.ts#L42)
