---
id: "InstancedMesh.InstancedMeshEntity"
title: "Class: InstancedMeshEntity"
sidebar_label: "InstancedMeshEntity"
custom_edit_url: null
---

[InstancedMesh](../namespaces/InstancedMesh.md).InstancedMeshEntity

Represents an individual instance within an InstancedMesh2, providing properties and methods for interaction and transformation.

## Hierarchy

- `EventDispatcher`

  ↳ **`InstancedMeshEntity`**

## Constructors

### constructor

• **new InstancedMeshEntity**(`parent`, `index`, `color?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`InstancedMesh2`](InstancedMesh.InstancedMesh2.md) | The parent InstancedMesh2 that contains this instance. |
| `index` | `number` | The index of this instance within the parent InstancedMesh2. |
| `color?` | `ColorRepresentation` | The initial color representation for this instance (optional). |

#### Overrides

EventDispatcher.constructor

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:74](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L74)

## Properties

### cursor

• **cursor**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when interacting with the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:37](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L37)

___

### cursorDrag

• **cursorDrag**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dragging the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:39](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L39)

___

### cursorDrop

• **cursorDrop**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dropping an object onto this one.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:41](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L41)

___

### draggable

• **draggable**: `boolean` = `false`

Indicates whether the object is draggable (default: false).

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:33](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L33)

___

### enabled

• **enabled**: `boolean` = `true`

Determines if the object is enabled. (default: true).
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:29](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L29)

___

### findDropTarget

• **findDropTarget**: `boolean` = `false`

Determines when the object is dragged, whether it will have to search for any drop targets (default: false).

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:35](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L35)

___

### focusable

• **focusable**: `boolean` = `true`

Indicates whether the object can receive focus (default: true).

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:31](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L31)

___

### instanceId

• **instanceId**: `number`

An identifier for this individual instance within an InstancedMesh2.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:18](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L18)

___

### isInstancedMeshEntity

• **isInstancedMeshEntity**: `boolean` = `true`

A flag indicating that this is an instance of InstancedMeshEntity.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:14](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L14)

___

### parent

• **parent**: [`InstancedMesh2`](InstancedMesh.InstancedMesh2.md)

Object's parent in the scene graph. An object can have at most one parent.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:16](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L16)

___

### position

• `Readonly` **position**: `Vector3`

A Vector3 representing the object's local position. Default is (0, 0, 0).

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:20](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L20)

___

### quaternion

• `Readonly` **quaternion**: `Quaternion`

Object's local rotation as a Quaternion.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:24](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L24)

___

### scale

• `Readonly` **scale**: `Vector3`

The object's local scale. Default is Vector3(1, 1, 1).

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:22](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L22)

## Accessors

### clicking

• `get` **clicking**(): `boolean`

Indicates if the object is currently being clicked.

#### Returns

`boolean`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:53](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L53)

___

### dragging

• `get` **dragging**(): `boolean`

Indicates if the object is currently being dragged.

#### Returns

`boolean`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:55](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L55)

___

### enabledState

• `get` **enabledState**(): `boolean`

Retrieves the combined enabled state considering parent objects.

#### Returns

`boolean`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:57](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L57)

___

### focused

• `get` **focused**(): `boolean`

Indicates if the object is currently focused.

#### Returns

`boolean`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:51](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L51)

___

### hovered

• `get` **hovered**(): `boolean`

Indicates if the primary pointer is over this object.

#### Returns

`boolean`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:49](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L49)

___

### matrixWorld

• `get` **matrixWorld**(): `Matrix4`

The global transform of the object.

#### Returns

`Matrix4`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:62](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L62)

## Methods

### applyBlur

▸ **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:175](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L175)

___

### applyFocus

▸ **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:168](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L168)

___

### applyMatrix4

▸ **applyMatrix4**(`m`): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Applies the matrix transform to the object and updates the object's position, rotation and scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `Matrix4` | Matrix to apply. |

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

The instance of the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:120](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L120)

___

### applyQuaternion

▸ **applyQuaternion**(`q`): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Applies the rotation represented by the quaternion to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `Quaternion` | Quaternion to apply. |

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

The instance of the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:136](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L136)

___

### getColor

▸ **getColor**(`color?`): `Color`

Gets the color of this instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `Color` | An optional target Color object to store the result (optional). |

#### Returns

`Color`

The color representation of this instance.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:99](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L99)

___

### hasEvent

▸ **hasEvent**<`K`\>(`type`, `listener`): `boolean`

Checks if the object has a specific event listener.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"animate"`` \| ``"blur"`` \| ``"click"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragstart"`` \| ``"focus"`` \| ``"keydown"`` \| ``"keyup"`` \| ``"pointerdown"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"wheel"`` \| ``"pointerintersection"`` \| ``"dragcancel"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to check for. |
| `listener` | (`event?`: `InstancedEvents`[`K`]) => `void` | The callback function to check. |

#### Returns

`boolean`

`true` if the event listener is attached; otherwise, `false`.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:203](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L203)

___

### off

▸ **off**<`K`\>(`type`, `listener`): `void`

Removes an event listener from the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"animate"`` \| ``"blur"`` \| ``"click"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragstart"`` \| ``"focus"`` \| ``"keydown"`` \| ``"keyup"`` \| ``"pointerdown"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"wheel"`` \| ``"pointerintersection"`` \| ``"dragcancel"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to remove the listener from. |
| `listener` | (`event?`: `InstancedEvents`[`K`]) => `void` | The callback function to remove. |

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:212](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L212)

___

### on

▸ **on**<`K`\>(`types`, `listener`): (`event?`: `InstancedEvents`[`K`]) => `void`

Attaches an event listener to the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"animate"`` \| ``"blur"`` \| ``"click"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragstart"`` \| ``"focus"`` \| ``"keydown"`` \| ``"keyup"`` \| ``"pointerdown"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"wheel"`` \| ``"pointerintersection"`` \| ``"dragcancel"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `types` | `K` \| `K`[] | - |
| `listener` | (`event?`: `InstancedEvents`[`K`]) => `void` | The callback function to execute when the event occurs. |

#### Returns

`fn`

A function to remove the event listener.

▸ (`event?`): `void`

Attaches an event listener to the object.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InstancedEvents`[`K`] |

##### Returns

`void`

A function to remove the event listener.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:187](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L187)

___

### rotateOnAxis

▸ **rotateOnAxis**(`axis`, `angle`): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Rotate an object along an axis in object space. The axis is assumed to be normalized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vector3` | A normalized vector in object space. |
| `angle` | `number` | The angle in radians. |

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

The instance of the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:147](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L147)

___

### rotateOnWorldAxis

▸ **rotateOnWorldAxis**(`axis`, `angle`): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Rotate an object along an axis in world space. The axis is assumed to be normalized. Method Assumes no rotated parent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vector3` | A normalized vector in world space. |
| `angle` | `number` | The angle in radians. |

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

The instance of the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:159](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L159)

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

[src/instancedMesh/InstancedMeshEntity.ts:88](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L88)

___

### trigger

▸ **trigger**<`K`\>(`type`, `event?`): `void`

Triggers a specific event on the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"animate"`` \| ``"blur"`` \| ``"click"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragstart"`` \| ``"focus"`` \| ``"keydown"`` \| ``"keyup"`` \| ``"pointerdown"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"wheel"`` \| ``"pointerintersection"`` \| ``"dragcancel"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to trigger. |
| `event?` | `InstancedEvents`[`K`] | Optional event data to pass to the listeners. |

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:221](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L221)

___

### tween

▸ **tween**(): [`Tween`](Tweening.Tween.md)<[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\>

Initiates a Tween animation for the object.

#### Returns

[`Tween`](Tweening.Tween.md)<[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\>

A Tween instance for further configuration.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:229](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L229)

___

### updateMatrix

▸ **updateMatrix**(): `void`

Updates the local transform.

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:107](https://github.com/agargaro/three.ez/blob/ee63373/src/instancedMesh/InstancedMeshEntity.ts#L107)
