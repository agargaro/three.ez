---
id: "InstancedMesh2"
title: "Namespace: InstancedMesh2"
sidebar_label: "InstancedMesh2"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [InstancedEntity](../classes/InstancedMesh2.InstancedEntity.md)
- [InstancedMesh2](../classes/InstancedMesh2.InstancedMesh2.md)

## Interfaces

- [InstancedMesh2Params](../interfaces/InstancedMesh2.InstancedMesh2Params.md)

## Type Aliases

### CreateEntityCallback

Ƭ **CreateEntityCallback**<`T`\>: (`obj`: [`Entity`](InstancedMesh2.md#entity)<`T`\>, `index`: `number`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`obj`, `index`): `void`

Type of callback invoked after creation of each instance.

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Entity`](InstancedMesh2.md#entity)<`T`\> |
| `index` | `number` |

##### Returns

`void`

#### Defined in

[packages/InstancedMesh2/src/InstancedMesh2.ts:8](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedMesh2.ts#L8)

___

### Entity

Ƭ **Entity**<`T`\>: [`InstancedEntity`](../classes/InstancedMesh2.InstancedEntity.md) & `T`

InstancedEntity with custom T data.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/InstancedMesh2/src/InstancedMesh2.ts:6](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedMesh2.ts#L6)

## Variables

### CullingDynamic

• `Const` **CullingDynamic**: ``2``

Individual frustum culling for each instance, necessary for animated meshes.

#### Defined in

[packages/InstancedMesh2/src/InstancedMesh2.ts:15](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedMesh2.ts#L15)

___

### CullingNone

• `Const` **CullingNone**: ``0``

Frustum culling is disabled, suitable if all instances are always visible in the camera's frustum.

#### Defined in

[packages/InstancedMesh2/src/InstancedMesh2.ts:11](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedMesh2.ts#L11)

___

### CullingStatic

• `Const` **CullingStatic**: ``1``

Fast frustum culling using a BVH, ideal for static objects (you can only modify instances in `onInstanceCreation` callback).

#### Defined in

[packages/InstancedMesh2/src/InstancedMesh2.ts:13](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedMesh2.ts#L13)
