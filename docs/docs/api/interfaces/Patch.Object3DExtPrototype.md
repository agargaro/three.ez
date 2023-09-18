---
id: "Patch.Object3DExtPrototype"
title: "Interface: Object3DExtPrototype"
sidebar_label: "Object3DExtPrototype"
custom_edit_url: null
---

[Patch](../namespaces/Patch.md).Object3DExtPrototype

Represents the prototype for extended Object3D functionality.

## Properties

### cursor

• **cursor**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when interacting with the object.

#### Defined in

[src/patch/Object3D.ts:53](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L53)

___

### cursorDrag

• **cursorDrag**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dragging the object.

#### Defined in

[src/patch/Object3D.ts:55](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L55)

___

### cursorDrop

• **cursorDrop**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dropping an object onto this one.

#### Defined in

[src/patch/Object3D.ts:57](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L57)

___

### draggable

• **draggable**: `boolean`

Indicates whether the object is draggable (default: false).

#### Defined in

[src/patch/Object3D.ts:47](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L47)

___

### enabled

• **enabled**: `boolean`

Determines if the object is enabled. (default: true).
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Defined in

[src/patch/Object3D.ts:39](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L39)

___

### findDropTarget

• **findDropTarget**: `boolean`

Determines when the object is dragged, whether it will have to search for any drop targets (default: false).

#### Defined in

[src/patch/Object3D.ts:49](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L49)

___

### focusable

• **focusable**: `boolean`

Indicates whether the object can receive focus (default: true).

#### Defined in

[src/patch/Object3D.ts:45](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L45)

___

### hitboxes

• **hitboxes**: `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[]

Array of hitboxes for collision detection.

#### Defined in

[src/patch/Object3D.ts:43](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L43)

___

### interceptByRaycaster

• **interceptByRaycaster**: `boolean`

Determines if the object can be intercepted by a raycaster (default: true).

#### Defined in

[src/patch/Object3D.ts:41](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L41)

___

### needsRender

• **needsRender**: `boolean`

Indicates whether the scene needs rendering.

#### Defined in

[src/patch/Object3D.ts:59](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L59)

___

### scene

• **scene**: `Scene`

Reference to the scene the object belongs to.

#### Defined in

[src/patch/Object3D.ts:51](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L51)

## Accessors

### clicking

• `get` **clicking**(): `boolean`

Indicates if the object is currently being clicked.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:65](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L65)

___

### dragging

• `get` **dragging**(): `boolean`

Indicates if the object is currently being dragged.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:67](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L67)

___

### enabledState

• `get` **enabledState**(): `boolean`

Retrieves the combined enabled state considering parent objects.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:69](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L69)

___

### firstFocusable

• `get` **firstFocusable**(): `Object3D`

Retrieves the first possibile focusable object.

#### Returns

`Object3D`

#### Defined in

[src/patch/Object3D.ts:71](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L71)

___

### focused

• `get` **focused**(): `boolean`

Indicates if the object is currently focused.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:63](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L63)

___

### hovered

• `get` **hovered**(): `boolean`

Indicates if the primary pointer is over this object.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:61](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L61)

## Methods

### applyBlur

▸ **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:79](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L79)

___

### applyFocus

▸ **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:75](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L75)

___

### bindProperty

▸ **bindProperty**<`T`\>(`property`, `getCallback`, `renderOnChange?`): [`Object3DExtPrototype`](Patch.Object3DExtPrototype.md)

Binds a property to a callback function for updates.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`Object3DExtPrototype`](Patch.Object3DExtPrototype.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `T` | The name of the property to bind. |
| `getCallback` | () => [`Object3DExtPrototype`](Patch.Object3DExtPrototype.md)[`T`] | A function that retrieves the property's value. |
| `renderOnChange?` | `boolean` | Indicates whether to render when the property changes (optional, default: false). |

#### Returns

[`Object3DExtPrototype`](Patch.Object3DExtPrototype.md)

The instance of the object with the binding applied.

#### Defined in

[src/patch/Object3D.ts:131](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L131)

___

### detectChanges

▸ **detectChanges**(`recursive?`): `void`

Calculates all bindings on the current object.
If 'recursive' is set to true, it will also calculate bindings for all children.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recursive?` | `boolean` | Optional. If true, calculate bindings for children as well. |

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:123](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L123)

___

### hasEvent

▸ **hasEvent**<`K`\>(`type`, `listener`): `boolean`

Checks if the object has a specific event listener.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](Events.MiscEvents.md) \| keyof [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`, `Object3D`, `Object3D` \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to check for. |
| `listener` | (`event?`: `Events`[`K`]) => `void` | The callback function to check. |

#### Returns

`boolean`

`true` if the event listener is attached; otherwise, `false`.

#### Defined in

[src/patch/Object3D.ts:93](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L93)

___

### off

▸ **off**<`K`\>(`type`, `listener`): `void`

Removes an event listener from the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](Events.MiscEvents.md) \| keyof [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`, `Object3D`, `Object3D` \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to remove the listener from. |
| `listener` | (`event?`: `Events`[`K`]) => `void` | The callback function to remove. |

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:99](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L99)

___

### on

▸ **on**<`K`\>(`type`, `listener`): (`event?`: `Events`[`K`]) => `void`

Attaches an event listener to the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](Events.MiscEvents.md) \| keyof [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`, `Object3D`, `Object3D` \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` \| `K`[] | The type of event to listen for. |
| `listener` | (`event?`: `Events`[`K`]) => `void` | The callback function to execute when the event occurs. |

#### Returns

`fn`

A function to remove the event listener.

▸ (`event?`): `void`

Attaches an event listener to the object.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Events`[`K`] |

##### Returns

`void`

A function to remove the event listener.

#### Defined in

[src/patch/Object3D.ts:86](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L86)

___

### setManualDetectionMode

▸ **setManualDetectionMode**(): `void`

Activates manual detection mode for bindings.
When this method is used, all bindings will no longer be calculated automatically.
Instead, they must be manually computed using the 'detectChanges' function.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:117](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L117)

___

### trigger

▸ **trigger**<`K`\>(`type`, `event?`): `void`

Triggers a specific event on the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](Events.MiscEvents.md) \| keyof [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`, `Object3D`, `Object3D` \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to trigger. |
| `event?` | `Events`[`K`] | Optional event data to pass to the listeners. |

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:105](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L105)

___

### triggerAncestor

▸ **triggerAncestor**<`K`\>(`type`, `event?`): `void`

Triggers a specific event on the object and all its ancestors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`, `Object3D`, `Object3D` \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to trigger. |
| `event?` | [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`, `Object3D`, `Object3D` \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\>[`K`] | Optional event data to pass to the listeners. |

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:111](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L111)

___

### tween

▸ **tween**<`T`\>(): [`Tween`](../classes/Tweening.Tween.md)<`T`\>

Initiates a Tween animation for the object.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Object3D`<`T`\> | The type of the target. |

#### Returns

[`Tween`](../classes/Tweening.Tween.md)<`T`\>

A Tween instance for further configuration.

#### Defined in

[src/patch/Object3D.ts:143](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L143)

___

### unbindProperty

▸ **unbindProperty**<`T`\>(`property`): [`Object3DExtPrototype`](Patch.Object3DExtPrototype.md)

Unbinds a previously bound property from the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`Object3DExtPrototype`](Patch.Object3DExtPrototype.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `T` | The name of the property to unbind. |

#### Returns

[`Object3DExtPrototype`](Patch.Object3DExtPrototype.md)

The instance of the object with the binding removed.

#### Defined in

[src/patch/Object3D.ts:137](https://github.com/agargaro/three.ez/blob/ba52259/src/patch/Object3D.ts#L137)
