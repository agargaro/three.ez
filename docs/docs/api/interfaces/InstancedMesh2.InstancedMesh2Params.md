---
id: "InstancedMesh2.InstancedMesh2Params"
title: "Interface: InstancedMesh2Params<T>"
sidebar_label: "InstancedMesh2Params"
custom_edit_url: null
---

[InstancedMesh2](../namespaces/InstancedMesh2.md).InstancedMesh2Params

Configuration for creating an InstancedMesh2

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### behaviour

• **behaviour**: `number`

Determine which strategy to use for frustum culling (can be `CullingNone`, `CullingStatic`, `CullingDynamic`).

#### Defined in

[packages/InstancedMesh2/src/InstancedMesh2.ts:20](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedMesh2.ts#L20)

___

### color

• `Optional` **color**: `ColorRepresentation`

The default color to apply to each instance (optional).

#### Defined in

[packages/InstancedMesh2/src/InstancedMesh2.ts:24](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedMesh2.ts#L24)

___

### onInstanceCreation

• `Optional` **onInstanceCreation**: [`CreateEntityCallback`](../namespaces/InstancedMesh2.md#createentitycallback)<[`Entity`](../namespaces/InstancedMesh2.md#entity)<`T`\>\>

Callback invoked after creation of each instance (optional if behaviour is not `CullingStatic`).

#### Defined in

[packages/InstancedMesh2/src/InstancedMesh2.ts:22](https://github.com/agargaro/three.ez/blob/0027204/packages/InstancedMesh2/src/InstancedMesh2.ts#L22)
