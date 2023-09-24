---
id: "InstancedMesh.InstancedMesh2"
title: "Class: InstancedMesh2"
sidebar_label: "InstancedMesh2"
custom_edit_url: null
---

[InstancedMesh](../namespaces/InstancedMesh.md).InstancedMesh2

Extends the InstancedMesh class to provide individual management of each instance, similar to an Object3D.

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

[src/instancedMesh/InstancedMesh2.ts:65](https://github.com/agargaro/three.ez/blob/a81f57c/src/instancedMesh/InstancedMesh2.ts#L65)

## Properties

### cursor

• **cursor**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when interacting with the object.

#### Inherited from

InstancedMesh.cursor

#### Defined in

[src/patch/Object3D.ts:53](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L53)

___

### cursorDrag

• **cursorDrag**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dragging the object.

#### Inherited from

InstancedMesh.cursorDrag

#### Defined in

[src/patch/Object3D.ts:55](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L55)

___

### cursorDrop

• **cursorDrop**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dropping an object onto this one.

#### Inherited from

InstancedMesh.cursorDrop

#### Defined in

[src/patch/Object3D.ts:57](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L57)

___

### dragTarget

• **dragTarget**: `Object3D`<`Object3DEventMap`\>

Indicates which object will be dragged instead of this one.

#### Inherited from

InstancedMesh.dragTarget

#### Defined in

[src/patch/Object3D.ts:43](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L43)

___

### draggable

• **draggable**: `boolean`

Indicates whether the object is draggable (default: false).

#### Inherited from

InstancedMesh.draggable

#### Defined in

[src/patch/Object3D.ts:47](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L47)

___

### enabled

• **enabled**: `boolean`

Determines if the object is enabled. (default: true).
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Inherited from

InstancedMesh.enabled

#### Defined in

[src/patch/Object3D.ts:37](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L37)

___

### findDropTarget

• **findDropTarget**: `boolean`

Determines when the object is dragged, whether it will have to search for any drop targets (default: false).

#### Inherited from

InstancedMesh.findDropTarget

#### Defined in

[src/patch/Object3D.ts:49](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L49)

___

### focusable

• **focusable**: `boolean`

Indicates whether the object can receive focus (default: true).

#### Inherited from

InstancedMesh.focusable

#### Defined in

[src/patch/Object3D.ts:45](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L45)

___

### hitboxes

• **hitboxes**: `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

Array of hitboxes for collision detection.

#### Inherited from

InstancedMesh.hitboxes

#### Defined in

[src/patch/Object3D.ts:41](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L41)

___

### instances

• **instances**: [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)[] = `[]`

An array storing individual InstancedMeshEntity instances associated with this InstancedMesh2.
Each element represents a separate instance that can be managed individually.

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:25](https://github.com/agargaro/three.ez/blob/a81f57c/src/instancedMesh/InstancedMesh2.ts#L25)

___

### interceptByRaycaster

• **interceptByRaycaster**: `boolean`

Determines if the object can be intercepted by a raycaster (default: true).

#### Inherited from

InstancedMesh.interceptByRaycaster

#### Defined in

[src/patch/Object3D.ts:39](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L39)

___

### isInstancedMesh2

• **isInstancedMesh2**: `boolean` = `true`

A flag indicating that this is an instance of InstancedMesh2.

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:20](https://github.com/agargaro/three.ez/blob/a81f57c/src/instancedMesh/InstancedMesh2.ts#L20)

___

### needsRender

• **needsRender**: `boolean`

Indicates whether the scene needs rendering.

#### Inherited from

InstancedMesh.needsRender

#### Defined in

[src/patch/Object3D.ts:59](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L59)

___

### scene

• **scene**: `Scene`

Reference to the scene the object belongs to.

#### Inherited from

InstancedMesh.scene

#### Defined in

[src/patch/Object3D.ts:51](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L51)

## Accessors

### clicking

• `get` **clicking**(): `boolean`

Indicates if the object is currently being clicked.

#### Returns

`boolean`

#### Inherited from

InstancedMesh.clicking

#### Defined in

[src/patch/Object3D.ts:65](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L65)

___

### clickingInstance

• `get` **clickingInstance**(): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Gets the currently clicking instance.

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:50](https://github.com/agargaro/three.ez/blob/a81f57c/src/instancedMesh/InstancedMesh2.ts#L50)

___

### dragging

• `get` **dragging**(): `boolean`

Indicates if the object is currently being dragged.

#### Returns

`boolean`

#### Inherited from

InstancedMesh.dragging

#### Defined in

[src/patch/Object3D.ts:67](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L67)

___

### draggingInstance

• `get` **draggingInstance**(): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Gets the currently dragging instance.

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:55](https://github.com/agargaro/three.ez/blob/a81f57c/src/instancedMesh/InstancedMesh2.ts#L55)

___

### enabledState

• `get` **enabledState**(): `boolean`

Retrieves the combined enabled state considering parent objects.

#### Returns

`boolean`

#### Inherited from

InstancedMesh.enabledState

#### Defined in

[src/patch/Object3D.ts:69](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L69)

___

### firstFocusable

• `get` **firstFocusable**(): `Object3D`<`Object3DEventMap`\>

Retrieves the first possible focusable object.

#### Returns

`Object3D`<`Object3DEventMap`\>

#### Inherited from

InstancedMesh.firstFocusable

#### Defined in

[src/patch/Object3D.ts:73](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L73)

___

### focused

• `get` **focused**(): `boolean`

Indicates if the object is currently focused.

#### Returns

`boolean`

#### Inherited from

InstancedMesh.focused

#### Defined in

[src/patch/Object3D.ts:63](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L63)

___

### focusedInstance

• `get` **focusedInstance**(): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Gets the currently focused instance.

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:45](https://github.com/agargaro/three.ez/blob/a81f57c/src/instancedMesh/InstancedMesh2.ts#L45)

___

### hovered

• `get` **hovered**(): `boolean`

Indicates if the primary pointer is over this object.

#### Returns

`boolean`

#### Inherited from

InstancedMesh.hovered

#### Defined in

[src/patch/Object3D.ts:61](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L61)

___

### hoveredInstance

• `get` **hoveredInstance**(): [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

Gets the currently hovered instance.

#### Returns

[`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:40](https://github.com/agargaro/three.ez/blob/a81f57c/src/instancedMesh/InstancedMesh2.ts#L40)

___

### visibilityState

• `get` **visibilityState**(): `boolean`

Retrieves the combined visibility state considering parent objects.

#### Returns

`boolean`

#### Inherited from

InstancedMesh.visibilityState

#### Defined in

[src/patch/Object3D.ts:71](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L71)

## Methods

### applyBlur

▸ **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Inherited from

InstancedMesh.applyBlur

#### Defined in

[src/patch/Object3D.ts:81](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L81)

___

### applyFocus

▸ **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Inherited from

InstancedMesh.applyFocus

#### Defined in

[src/patch/Object3D.ts:77](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L77)

___

### bindProperty

▸ **bindProperty**<`T`\>(`property`, `getCallback`, `renderOnChange?`): [`InstancedMesh2`](InstancedMesh.InstancedMesh2.md)

Binds a property to a callback function for updates.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`InstancedMesh2`](InstancedMesh.InstancedMesh2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `T` | The name of the property to bind. |
| `getCallback` | () => [`InstancedMesh2`](InstancedMesh.InstancedMesh2.md)[`T`] | A function that retrieves the property's value. |
| `renderOnChange?` | `boolean` | Indicates whether to render when the property changes (optional, default: false). |

#### Returns

[`InstancedMesh2`](InstancedMesh.InstancedMesh2.md)

The instance of the object with the binding applied.

#### Inherited from

InstancedMesh.bindProperty

#### Defined in

[src/patch/Object3D.ts:133](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L133)

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

#### Inherited from

InstancedMesh.detectChanges

#### Defined in

[src/patch/Object3D.ts:125](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L125)

___

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

[src/instancedMesh/InstancedMesh2.ts:100](https://github.com/agargaro/three.ez/blob/a81f57c/src/instancedMesh/InstancedMesh2.ts#L100)

___

### hasEvent

▸ **hasEvent**<`K`\>(`type`, `listener`): `boolean`

Checks if the object has a specific event listener.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to check for. |
| `listener` | (`event?`: `Events`[`K`]) => `void` | The callback function to check. |

#### Returns

`boolean`

`true` if the event listener is attached; otherwise, `false`.

#### Inherited from

InstancedMesh.hasEvent

#### Defined in

[src/patch/Object3D.ts:95](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L95)

___

### off

▸ **off**<`K`\>(`type`, `listener`): `void`

Removes an event listener from the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to remove the listener from. |
| `listener` | (`event?`: `Events`[`K`]) => `void` | The callback function to remove. |

#### Returns

`void`

#### Inherited from

InstancedMesh.off

#### Defined in

[src/patch/Object3D.ts:101](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L101)

___

### on

▸ **on**<`K`\>(`type`, `listener`): (`event?`: `Events`[`K`]) => `void`

Attaches an event listener to the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` \| `K`[] | The type of event to listen for. |
| `listener` | (`this`: [`InstancedMesh2`](InstancedMesh.InstancedMesh2.md), `event?`: `Events`[`K`]) => `void` | The callback function to execute when the event occurs. |

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

#### Inherited from

InstancedMesh.on

#### Defined in

[src/patch/Object3D.ts:88](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L88)

___

### setManualDetectionMode

▸ **setManualDetectionMode**(): `void`

Activates manual detection mode for bindings.
When this method is used, all bindings will no longer be calculated automatically.
Instead, they must be manually computed using the 'detectChanges' function.

#### Returns

`void`

#### Inherited from

InstancedMesh.setManualDetectionMode

#### Defined in

[src/patch/Object3D.ts:119](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L119)

___

### trigger

▸ **trigger**<`K`\>(`type`, `event?`): `void`

Triggers a specific event on the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to trigger. |
| `event?` | `Events`[`K`] | Optional event data to pass to the listeners. |

#### Returns

`void`

#### Inherited from

InstancedMesh.trigger

#### Defined in

[src/patch/Object3D.ts:107](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L107)

___

### triggerAncestor

▸ **triggerAncestor**<`K`\>(`type`, `event?`): `void`

Triggers a specific event on the object and all its ancestors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to trigger. |
| `event?` | [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\>[`K`] | Optional event data to pass to the listeners. |

#### Returns

`void`

#### Inherited from

InstancedMesh.triggerAncestor

#### Defined in

[src/patch/Object3D.ts:113](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L113)

___

### tween

▸ **tween**<`T`\>(`id?`): [`Tween`](Tweening.Tween.md)<`T`\>

Initiates a Tween animation for the object.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Object3D`<`Object3DEventMap`, `T`\> = `Object3D`<`Object3DEventMap`\> | The type of the target. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | `string` | Unique identifier. If you start a new tween, the old one with the same id (if specified) will be stopped. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

A Tween instance for further configuration.

#### Inherited from

InstancedMesh.tween

#### Defined in

[src/patch/Object3D.ts:146](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L146)

___

### unbindProperty

▸ **unbindProperty**<`T`\>(`property`): [`InstancedMesh2`](InstancedMesh.InstancedMesh2.md)

Unbinds a previously bound property from the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`InstancedMesh2`](InstancedMesh.InstancedMesh2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `T` | The name of the property to unbind. |

#### Returns

[`InstancedMesh2`](InstancedMesh.InstancedMesh2.md)

The instance of the object with the binding removed.

#### Inherited from

InstancedMesh.unbindProperty

#### Defined in

[src/patch/Object3D.ts:139](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Object3D.ts#L139)
