---
editUrl: false
next: false
prev: false
title: "InstancedMeshEntity"
---

Represents an individual instance within an InstancedMesh2, providing properties and methods for interaction and transformation.

## Extends

- `EventDispatcher`

## Constructors

### new InstancedMeshEntity()

> **new InstancedMeshEntity**(`parent`, `index`, `color`?): [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

#### Parameters

• **parent**: [`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)

The parent InstancedMesh2 that contains this instance.

• **index**: `number`

The index of this instance within the parent InstancedMesh2.

• **color?**: `ColorRepresentation`

The initial color representation for this instance (optional).

#### Returns

[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

#### Overrides

`EventDispatcher.constructor`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:74](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L74)

## Properties

### cursor

> **cursor**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when interacting with the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:37](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L37)

***

### cursorDrag

> **cursorDrag**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when dragging the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:39](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L39)

***

### cursorDrop

> **cursorDrop**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when dropping an object onto this one.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:41](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L41)

***

### draggable

> **draggable**: `boolean` = `false`

Indicates whether the object is draggable (default: false).

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:33](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L33)

***

### enabled

> **enabled**: `boolean` = `true`

Determines if the object is enabled. (default: true).
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:29](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L29)

***

### findDropTarget

> **findDropTarget**: `boolean` = `false`

Determines when the object is dragged, whether it will have to search for any drop targets (default: false).

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:35](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L35)

***

### focusable

> **focusable**: `boolean` = `true`

Indicates whether the object can receive focus (default: true).

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:31](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L31)

***

### instanceId

> **instanceId**: `number`

An identifier for this individual instance within an InstancedMesh2.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:18](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L18)

***

### isInstancedMeshEntity

> **isInstancedMeshEntity**: `boolean` = `true`

A flag indicating that this is an instance of InstancedMeshEntity.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:14](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L14)

***

### parent

> **parent**: [`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)

The parent InstancedMesh2 that contains this instance.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:16](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L16)

***

### position

> `readonly` **position**: `Vector3`

A Vector3 representing the object's local position. Default is (0, 0, 0).

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:20](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L20)

***

### quaternion

> `readonly` **quaternion**: `Quaternion`

Object's local rotation as a Quaternion.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:24](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L24)

***

### scale

> `readonly` **scale**: `Vector3`

The object's local scale. Default is Vector3(1, 1, 1).

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:22](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L22)

## Accessors

### clicking

#### Get Signature

> **get** **clicking**(): `boolean`

Indicates if the object is currently being clicked.

##### Returns

`boolean`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:53](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L53)

***

### dragging

#### Get Signature

> **get** **dragging**(): `boolean`

Indicates if the object is currently being dragged.

##### Returns

`boolean`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:55](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L55)

***

### enabledState

#### Get Signature

> **get** **enabledState**(): `boolean`

Retrieves the combined enabled state considering parent objects.

##### Returns

`boolean`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:57](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L57)

***

### focused

#### Get Signature

> **get** **focused**(): `boolean`

Indicates if the object is currently focused.

##### Returns

`boolean`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:51](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L51)

***

### hovered

#### Get Signature

> **get** **hovered**(): `boolean`

Indicates if the primary pointer is over this object.

##### Returns

`boolean`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:49](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L49)

***

### matrixWorld

#### Get Signature

> **get** **matrixWorld**(): `Matrix4`

The global transform of the object.

##### Returns

`Matrix4`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:62](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L62)

## Methods

### addEventListener()

> **addEventListener**\<`T`\>(`type`, `listener`): `void`

Adds a listener to an event type.

#### Type Parameters

• **T** *extends* `never`

#### Parameters

• **type**: `T`

The type of event to listen to.

• **listener**: `EventListener`\<`object`\[`T`\], `T`, [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)\>

The function that gets called when the event is fired.

#### Returns

`void`

#### Inherited from

`EventDispatcher.addEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:52

***

### applyBlur()

> **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:175](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L175)

***

### applyFocus()

> **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:168](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L168)

***

### applyMatrix4()

> **applyMatrix4**(`m`): `this`

Applies the matrix transform to the object and updates the object's position, rotation, and scale.

#### Parameters

• **m**: `Matrix4`

Matrix to apply.

#### Returns

`this`

The instance of the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:120](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L120)

***

### applyQuaternion()

> **applyQuaternion**(`q`): `this`

Applies the rotation represented by the quaternion to the object.

#### Parameters

• **q**: `Quaternion`

Quaternion to apply.

#### Returns

`this`

The instance of the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:136](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L136)

***

### dispatchEvent()

> **dispatchEvent**\<`T`\>(`event`): `void`

Fire an event type.

#### Type Parameters

• **T** *extends* `never`

#### Parameters

• **event**: `BaseEvent`\<`T`\> & `object`\[`T`\]

The event that gets fired.

#### Returns

`void`

#### Inherited from

`EventDispatcher.dispatchEvent`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:81

***

### getColor()

> **getColor**(`color`): `Color`

Gets the color of this instance.

#### Parameters

• **color**: `Color` = `...`

An optional target Color object to store the result (optional).

#### Returns

`Color`

The color representation of this instance.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:99](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L99)

***

### hasEvent()

> **hasEvent**\<`K`\>(`type`, `listener`): `boolean`

Checks if the object has a specific event listener.

#### Type Parameters

• **K** *extends* `"animate"` \| `"blur"` \| `"click"` \| `"dblclick"` \| `"drag"` \| `"dragend"` \| `"dragstart"` \| `"focus"` \| `"keydown"` \| `"keyup"` \| `"pointerdown"` \| `"pointermove"` \| `"pointerout"` \| `"pointerover"` \| `"pointerup"` \| `"wheel"` \| `"pointerintersection"` \| `"dragcancel"`

#### Parameters

• **type**: `K`

The type of event to check for.

• **listener**

The callback function to check.

#### Returns

`boolean`

`true` if the event listener is attached; otherwise, `false`.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:203](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L203)

***

### hasEventListener()

> **hasEventListener**\<`T`\>(`type`, `listener`): `boolean`

Checks if listener is added to an event type.

#### Type Parameters

• **T** *extends* `never`

#### Parameters

• **type**: `T`

The type of event to listen to.

• **listener**: `EventListener`\<`object`\[`T`\], `T`, [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)\>

The function that gets called when the event is fired.

#### Returns

`boolean`

#### Inherited from

`EventDispatcher.hasEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:62

***

### off()

> **off**\<`K`\>(`type`, `listener`): `void`

Removes an event listener from the object.

#### Type Parameters

• **K** *extends* `"animate"` \| `"blur"` \| `"click"` \| `"dblclick"` \| `"drag"` \| `"dragend"` \| `"dragstart"` \| `"focus"` \| `"keydown"` \| `"keyup"` \| `"pointerdown"` \| `"pointermove"` \| `"pointerout"` \| `"pointerover"` \| `"pointerup"` \| `"wheel"` \| `"pointerintersection"` \| `"dragcancel"`

#### Parameters

• **type**: `K`

The type of event to remove the listener from.

• **listener**

The callback function to remove.

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:212](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L212)

***

### on()

> **on**\<`K`\>(`types`, `listener`): (`event`?) => `void`

Attaches an event listener to the object.

#### Type Parameters

• **K** *extends* `"animate"` \| `"blur"` \| `"click"` \| `"dblclick"` \| `"drag"` \| `"dragend"` \| `"dragstart"` \| `"focus"` \| `"keydown"` \| `"keyup"` \| `"pointerdown"` \| `"pointermove"` \| `"pointerout"` \| `"pointerover"` \| `"pointerup"` \| `"wheel"` \| `"pointerintersection"` \| `"dragcancel"`

#### Parameters

• **types**: `K` \| `K`[]

• **listener**

The callback function to execute when the event occurs.

#### Returns

`Function`

A function to remove the event listener.

##### Parameters

• **event?**: [`InstancedEvents`](/three.ez/api/type-aliases/instancedevents/)\[`K`\]

##### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:187](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L187)

***

### removeEventListener()

> **removeEventListener**\<`T`\>(`type`, `listener`): `void`

Removes a listener from an event type.

#### Type Parameters

• **T** *extends* `never`

#### Parameters

• **type**: `T`

The type of the listener that gets removed.

• **listener**: `EventListener`\<`object`\[`T`\], `T`, [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)\>

The listener function that gets removed.

#### Returns

`void`

#### Inherited from

`EventDispatcher.removeEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:72

***

### rotateOnAxis()

> **rotateOnAxis**(`axis`, `angle`): `this`

Rotate an object along an axis in object space. The axis is assumed to be normalized.

#### Parameters

• **axis**: `Vector3`

A normalized vector in object space.

• **angle**: `number`

The angle in radians.

#### Returns

`this`

The instance of the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:147](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L147)

***

### rotateOnWorldAxis()

> **rotateOnWorldAxis**(`axis`, `angle`): `this`

Rotate an object along an axis in world space. The axis is assumed to be normalized. Method Assumes no rotated parent.

#### Parameters

• **axis**: `Vector3`

A normalized vector in world space.

• **angle**: `number`

The angle in radians.

#### Returns

`this`

The instance of the object.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:159](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L159)

***

### setColor()

> **setColor**(`color`): `void`

Sets the color of this instance.

#### Parameters

• **color**: `ColorRepresentation`

The color representation to set.

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:88](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L88)

***

### trigger()

> **trigger**\<`K`\>(`type`, `event`?): `void`

Triggers a specific event on the object.

#### Type Parameters

• **K** *extends* `"animate"` \| `"blur"` \| `"click"` \| `"dblclick"` \| `"drag"` \| `"dragend"` \| `"dragstart"` \| `"focus"` \| `"keydown"` \| `"keyup"` \| `"pointerdown"` \| `"pointermove"` \| `"pointerout"` \| `"pointerover"` \| `"pointerup"` \| `"wheel"` \| `"pointerintersection"` \| `"dragcancel"`

#### Parameters

• **type**: `K`

The type of event to trigger.

• **event?**: [`InstancedEvents`](/three.ez/api/type-aliases/instancedevents/)\[`K`\]

Optional event data to pass to the listeners.

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:221](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L221)

***

### tween()

> **tween**(): [`Tween`](/three.ez/api/classes/tween/)\<[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)\>

Initiates a Tween animation for the object.

#### Returns

[`Tween`](/three.ez/api/classes/tween/)\<[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)\>

A Tween instance for further configuration.

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:229](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L229)

***

### updateMatrix()

> **updateMatrix**(): `void`

Updates the local transform.

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMeshEntity.ts:107](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMeshEntity.ts#L107)
