---
id: "InstancedMesh.InstancedMesh2"
title: "Class: InstancedMesh2"
sidebar_label: "InstancedMesh2"
custom_edit_url: null
---

[InstancedMesh](../namespaces/InstancedMesh.md).InstancedMesh2

An extension of the InstancedMesh class that allows individual management of each instance in a similar manner to an Object3D.

## Hierarchy

- `InstancedMesh`

  ↳ **`InstancedMesh2`**

## Constructors

### constructor

• **new InstancedMesh2**(`geometry`, `material`, `count`, `singleInstanceType`, `animate?`, `color?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `geometry` | `BufferGeometry`<`NormalBufferAttributes`\> | `undefined` | The geometry for the instanced mesh. |
| `material` | `Material` | `undefined` | The material to apply to the instanced mesh. |
| `count` | `number` | `undefined` | The number of instances to create. |
| `singleInstanceType` | typeof [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md) | `undefined` | The type of individual instance to create. |
| `animate` | `boolean` | `false` | A flag indicating whether the 'animate' event will be triggered for each instance (optional, default: false). |
| `color?` | `ColorRepresentation` | `undefined` | The default color to apply to each instance (optional). |

#### Overrides

InstancedMesh.constructor

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:65](https://github.com/agargaro/three.ez/blob/74f01c4/src/instancedMesh/InstancedMesh2.ts#L65)

## Properties

### instances

• **instances**: [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)[] = `[]`

An array that stores individual InstancedMeshEntity instances associated with this InstancedMesh2.
Each element represents a separate instance that can be managed individually.

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:25](https://github.com/agargaro/three.ez/blob/74f01c4/src/instancedMesh/InstancedMesh2.ts#L25)

___

### isInstancedMesh2

• **isInstancedMesh2**: `boolean` = `true`

A flag indicating that this is an instance of InstancedMesh2.

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:20](https://github.com/agargaro/three.ez/blob/74f01c4/src/instancedMesh/InstancedMesh2.ts#L20)

## Accessors

### clickingInstance

• `get` **clickingInstance**(): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Gets the currently clicking instance.

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:50](https://github.com/agargaro/three.ez/blob/74f01c4/src/instancedMesh/InstancedMesh2.ts#L50)

___

### draggingInstance

• `get` **draggingInstance**(): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Gets the currently dragging instance.

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:55](https://github.com/agargaro/three.ez/blob/74f01c4/src/instancedMesh/InstancedMesh2.ts#L55)

___

### focusedInstance

• `get` **focusedInstance**(): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Gets the currently focused instance.

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:45](https://github.com/agargaro/three.ez/blob/74f01c4/src/instancedMesh/InstancedMesh2.ts#L45)

___

### hoveredInstance

• `get` **hoveredInstance**(): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Gets the currently hovered instance.

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:40](https://github.com/agargaro/three.ez/blob/74f01c4/src/instancedMesh/InstancedMesh2.ts#L40)

## Methods

### focus

▸ **focus**(`target?`): `void`

Set the focus to the specified instance, if focus is enabled for the InstancedMesh2, or clears the focus if no target is provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target?` | [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md) | Optional. The instance to focus on. If not provided, the focus is cleared. |

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:100](https://github.com/agargaro/three.ez/blob/74f01c4/src/instancedMesh/InstancedMesh2.ts#L100)
