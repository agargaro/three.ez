---
id: "InstancedMesh2.InstancedEntity"
title: "Class: InstancedEntity"
sidebar_label: "InstancedEntity"
custom_edit_url: null
---

[InstancedMesh2](../namespaces/InstancedMesh2.md).InstancedEntity

Represents an individual instance within an InstancedMesh2, similar to an Object3D.

## Constructors

### constructor

• **new InstancedEntity**(`parent`, `index`, `color?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`InstancedMesh2`](InstancedMesh2.InstancedMesh2.md)<{}, `BufferGeometry`<`NormalBufferAttributes`\>, `Material`\> | The parent InstancedMesh2 that contains this instance. |
| `index` | `number` | The index of this instance within the parent InstancedMesh2. |
| `color?` | `ColorRepresentation` | The initial color representation for this instance (optional). |

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:49](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L49)

## Properties

### id

• `Readonly` **id**: `number`

An identifier for this individual instance within an InstancedMesh2.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:13](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L13)

___

### isInstanceEntity

• **isInstanceEntity**: `boolean` = `true`

A flag indicating that this is an instance of InstancedMeshEntity.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:9](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L9)

___

### parent

• `Readonly` **parent**: [`InstancedMesh2`](InstancedMesh2.InstancedMesh2.md)<{}, `BufferGeometry`<`NormalBufferAttributes`\>, `Material`\>

The parent InstancedMesh2 that contains this instance.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:11](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L11)

___

### position

• `Readonly` **position**: `Vector3`

Object's local position.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:15](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L15)

___

### quaternion

• `Readonly` **quaternion**: `Quaternion`

Object's local rotation as a Quaternion.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:19](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L19)

___

### scale

• `Readonly` **scale**: `Vector3`

Object's local scale.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:17](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L17)

## Accessors

### internalId

• `get` **internalId**(): `number`

Index in the array of InstanceMatrix.

#### Returns

`number`

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:26](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L26)

___

### matrix

• `get` **matrix**(): `Matrix4`

The local transform matrix.

#### Returns

`Matrix4`

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:38](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L38)

___

### visible

• `get` **visible**(): `boolean`

Object gets rendered if `true`.

#### Returns

`boolean`

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:29](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L29)

## Methods

### applyMatrix4

▸ **applyMatrix4**(`m`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Applies the matrix transform to the object and updates the object's position, rotation, and scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `Matrix4` | Matrix to apply. |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:104](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L104)

___

### applyQuaternion

▸ **applyQuaternion**(`q`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Applies the rotation represented by the quaternion to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `Quaternion` | Quaternion to apply. |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:114](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L114)

___

### forceUpdateMatrix

▸ **forceUpdateMatrix**(): `void`

Force local transformation update.

#### Returns

`void`

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:76](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L76)

___

### getColor

▸ **getColor**(`color?`): `Color`

Gets the color of this instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | `Color` | `_c` | An optional target Color object to store the result (optional). |

#### Returns

`Color`

The color representation of this instance.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:94](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L94)

___

### rotateOnAxis

▸ **rotateOnAxis**(`axis`, `angle`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Rotate an object along an axis in object space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vector3` | A normalized vector in object space. |
| `angle` | `number` | The angle in radians. |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

**`Remarks`**

The axis is assumed to be normalized.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:126](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L126)

___

### rotateOnWorldAxis

▸ **rotateOnWorldAxis**(`axis`, `angle`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Rotate an object along an axis in world space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vector3` | A normalized vector in world space. |
| `angle` | `number` | The angle in radians. |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

**`Remarks`**

The axis is assumed to be normalized

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:140](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L140)

___

### rotateX

▸ **rotateX**(`angle`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Rotates the object around _x_ axis in local space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:151](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L151)

___

### rotateY

▸ **rotateY**(`angle`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Rotates the object around _y_ axis in local space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:160](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L160)

___

### rotateZ

▸ **rotateZ**(`angle`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Rotates the object around _z_ axis in local space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:169](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L169)

___

### setColor

▸ **setColor**(`color`): `void`

Sets the color of this instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `ColorRepresentation` | The color representation to set. |

#### Returns

`void`

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:85](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L85)

___

### translateOnAxis

▸ **translateOnAxis**(`axis`, `distance`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Translate an object by distance along an axis in object space

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vector3` | A normalized vector in object space. |
| `distance` | `number` | The distance to translate. Expects a `Float` |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

**`Remarks`**

The axis is assumed to be normalized.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:180](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L180)

___

### translateX

▸ **translateX**(`distance`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Translates object along x axis in object space by distance units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distance` | `number` | Expects a `Float`. |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:191](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L191)

___

### translateY

▸ **translateY**(`distance`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Translates object along _y_ axis in object space by distance units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distance` | `number` | Expects a `Float`. |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:200](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L200)

___

### translateZ

▸ **translateZ**(`distance`): [`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

Translates object along _z_ axis in object space by distance units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distance` | `number` | Expects a `Float`. |

#### Returns

[`InstancedEntity`](InstancedMesh2.InstancedEntity.md)

The instance of the object.

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:209](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L209)

___

### updateMatrix

▸ **updateMatrix**(): `void`

Updates the local transform. 
If `CullingDynamic` will update only when it is in the frustum camera.

#### Returns

`void`

#### Defined in

[packages/InstancedMesh2/src/InstancedEntity.ts:65](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedEntity.ts#L65)
