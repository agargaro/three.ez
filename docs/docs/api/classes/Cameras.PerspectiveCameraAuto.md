---
id: "Cameras.PerspectiveCameraAuto"
title: "Class: PerspectiveCameraAuto"
sidebar_label: "PerspectiveCameraAuto"
custom_edit_url: null
---

[Cameras](../namespaces/Cameras.md).PerspectiveCameraAuto

Extends the PerspectiveCamera to automatically adjust its aspect ratio on renderer resize.

## Hierarchy

- `PerspectiveCamera`

  ↳ **`PerspectiveCameraAuto`**

## Constructors

### constructor

• **new PerspectiveCameraAuto**(`fov?`, `near?`, `far?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov?` | `number` | Camera frustum vertical field of view in degrees. Default `50`. |
| `near?` | `number` | Camera frustum near plane distance. Default `0.1`. |
| `far?` | `number` | Camera frustum far plane distance. Default `2000`. |

#### Overrides

PerspectiveCamera.constructor

#### Defined in

[src/cameras/PerspectiveCameraAuto.ts:13](https://github.com/agargaro/three.ez/blob/3b2406b/src/cameras/PerspectiveCameraAuto.ts#L13)

## Properties

### cursor

• **cursor**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when interacting with the object.

#### Inherited from

PerspectiveCamera.cursor

#### Defined in

[src/patch/Object3D.ts:53](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L53)

___

### cursorDrag

• **cursorDrag**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dragging the object.

#### Inherited from

PerspectiveCamera.cursorDrag

#### Defined in

[src/patch/Object3D.ts:55](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L55)

___

### cursorDrop

• **cursorDrop**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dropping an object onto this one.

#### Inherited from

PerspectiveCamera.cursorDrop

#### Defined in

[src/patch/Object3D.ts:57](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L57)

___

### dragTarget

• **dragTarget**: `Object3D`<`Object3DEventMap`\>

Indicates which object will be dragged instead of this one.

#### Inherited from

PerspectiveCamera.dragTarget

#### Defined in

[src/patch/Object3D.ts:43](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L43)

___

### draggable

• **draggable**: `boolean`

Indicates whether the object is draggable. Default is DEFAULT_DRAGGABLE (`false`).

#### Inherited from

PerspectiveCamera.draggable

#### Defined in

[src/patch/Object3D.ts:47](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L47)

___

### enabled

• **enabled**: `boolean`

Determines if the object is enabled. Default is `true`.
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Inherited from

PerspectiveCamera.enabled

#### Defined in

[src/patch/Object3D.ts:37](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L37)

___

### findDropTarget

• **findDropTarget**: `boolean`

Determines when the object is dragged, whether it will have to search for any drop targets. Default is `false`.

#### Inherited from

PerspectiveCamera.findDropTarget

#### Defined in

[src/patch/Object3D.ts:49](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L49)

___

### focusable

• **focusable**: `boolean`

Indicates whether the object can receive focus. Default is DEFAULT_FOCUSABLE (`true`).

#### Inherited from

PerspectiveCamera.focusable

#### Defined in

[src/patch/Object3D.ts:45](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L45)

___

### hitboxes

• **hitboxes**: `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

Array of hitboxes for collision detection.

#### Inherited from

PerspectiveCamera.hitboxes

#### Defined in

[src/patch/Object3D.ts:41](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L41)

___

### interceptByRaycaster

• **interceptByRaycaster**: `boolean`

Determines if the object can be intercepted by the main raycaster. Default is DEFAULT_INTERCEPT_BY_RAYCASTER (`true`).

#### Inherited from

PerspectiveCamera.interceptByRaycaster

#### Defined in

[src/patch/Object3D.ts:39](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L39)

___

### needsRender

• **needsRender**: `boolean`

Indicates whether the scene needs rendering.

#### Inherited from

PerspectiveCamera.needsRender

#### Defined in

[src/patch/Object3D.ts:59](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L59)

___

### scene

• **scene**: `Scene`

Reference to the scene the object belongs to.

#### Inherited from

PerspectiveCamera.scene

#### Defined in

[src/patch/Object3D.ts:51](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L51)

## Accessors

### clicking

• `get` **clicking**(): `boolean`

Indicates if the object is currently being clicked.

#### Returns

`boolean`

#### Inherited from

PerspectiveCamera.clicking

#### Defined in

[src/patch/Object3D.ts:65](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L65)

___

### dragging

• `get` **dragging**(): `boolean`

Indicates if the object is currently being dragged.

#### Returns

`boolean`

#### Inherited from

PerspectiveCamera.dragging

#### Defined in

[src/patch/Object3D.ts:67](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L67)

___

### enabledState

• `get` **enabledState**(): `boolean`

Retrieves the combined enabled state considering parent objects.

#### Returns

`boolean`

#### Inherited from

PerspectiveCamera.enabledState

#### Defined in

[src/patch/Object3D.ts:69](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L69)

___

### firstFocusable

• `get` **firstFocusable**(): `Object3D`<`Object3DEventMap`\>

Retrieves the first possible focusable object.

#### Returns

`Object3D`<`Object3DEventMap`\>

#### Inherited from

PerspectiveCamera.firstFocusable

#### Defined in

[src/patch/Object3D.ts:73](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L73)

___

### focused

• `get` **focused**(): `boolean`

Indicates if the object is currently focused.

#### Returns

`boolean`

#### Inherited from

PerspectiveCamera.focused

#### Defined in

[src/patch/Object3D.ts:63](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L63)

___

### hovered

• `get` **hovered**(): `boolean`

Indicates if the primary pointer is over this object.

#### Returns

`boolean`

#### Inherited from

PerspectiveCamera.hovered

#### Defined in

[src/patch/Object3D.ts:61](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L61)

___

### visibilityState

• `get` **visibilityState**(): `boolean`

Retrieves the combined visibility state considering parent objects.

#### Returns

`boolean`

#### Inherited from

PerspectiveCamera.visibilityState

#### Defined in

[src/patch/Object3D.ts:71](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L71)

## Methods

### applyBlur

▸ **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Inherited from

PerspectiveCamera.applyBlur

#### Defined in

[src/patch/Object3D.ts:81](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L81)

___

### applyFocus

▸ **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Inherited from

PerspectiveCamera.applyFocus

#### Defined in

[src/patch/Object3D.ts:77](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L77)

___

### bindProperty

▸ **bindProperty**<`T`\>(`property`, `getCallback`, `renderOnChange?`): [`PerspectiveCameraAuto`](Cameras.PerspectiveCameraAuto.md)

Binds a property to a callback function for updates.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`PerspectiveCameraAuto`](Cameras.PerspectiveCameraAuto.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `T` | The name of the property to bind. |
| `getCallback` | () => [`PerspectiveCameraAuto`](Cameras.PerspectiveCameraAuto.md)[`T`] | A function that retrieves the property's value. |
| `renderOnChange?` | `boolean` | Indicates whether to render when the property changes (optional, default: `false`). |

#### Returns

[`PerspectiveCameraAuto`](Cameras.PerspectiveCameraAuto.md)

The instance of the object with the binding applied.

#### Inherited from

PerspectiveCamera.bindProperty

#### Defined in

[src/patch/Object3D.ts:133](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L133)

___

### detectChanges

▸ **detectChanges**(`recursive?`): `void`

Calculates all bindings on the current object.
If 'recursive' is set to true, it will also calculate bindings for all children.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recursive?` | `boolean` | If true, calculate bindings for children as well (optional, default: `false`). |

#### Returns

`void`

#### Inherited from

PerspectiveCamera.detectChanges

#### Defined in

[src/patch/Object3D.ts:125](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L125)

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

PerspectiveCamera.hasEvent

#### Defined in

[src/patch/Object3D.ts:95](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L95)

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

PerspectiveCamera.off

#### Defined in

[src/patch/Object3D.ts:101](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L101)

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
| `listener` | (`this`: [`PerspectiveCameraAuto`](Cameras.PerspectiveCameraAuto.md), `event?`: `Events`[`K`]) => `void` | The callback function to execute when the event occurs. |

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

PerspectiveCamera.on

#### Defined in

[src/patch/Object3D.ts:88](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L88)

___

### setManualDetectionMode

▸ **setManualDetectionMode**(): `void`

Activates manual detection mode for bindings.
When this method is used, all bindings will no longer be calculated automatically.
Instead, they must be manually computed using the 'detectChanges' function.

#### Returns

`void`

#### Inherited from

PerspectiveCamera.setManualDetectionMode

#### Defined in

[src/patch/Object3D.ts:119](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L119)

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

PerspectiveCamera.trigger

#### Defined in

[src/patch/Object3D.ts:107](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L107)

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

PerspectiveCamera.triggerAncestor

#### Defined in

[src/patch/Object3D.ts:113](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L113)

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

PerspectiveCamera.tween

#### Defined in

[src/patch/Object3D.ts:146](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L146)

___

### unbindProperty

▸ **unbindProperty**<`T`\>(`property`): [`PerspectiveCameraAuto`](Cameras.PerspectiveCameraAuto.md)

Unbinds a previously bound property from the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`PerspectiveCameraAuto`](Cameras.PerspectiveCameraAuto.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `T` | The name of the property to unbind. |

#### Returns

[`PerspectiveCameraAuto`](Cameras.PerspectiveCameraAuto.md)

The instance of the object with the binding removed.

#### Inherited from

PerspectiveCamera.unbindProperty

#### Defined in

[src/patch/Object3D.ts:139](https://github.com/agargaro/three.ez/blob/3b2406b/src/patch/Object3D.ts#L139)
