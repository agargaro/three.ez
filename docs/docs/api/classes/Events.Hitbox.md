---
id: "Events.Hitbox"
title: "Class: Hitbox"
sidebar_label: "Hitbox"
custom_edit_url: null
---

[Events](../namespaces/Events.md).Hitbox

Hitbox for collision detection.

## Hierarchy

- `Mesh`

  ↳ **`Hitbox`**

## Properties

### cursor

• **cursor**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when interacting with the object.

#### Inherited from

Mesh.cursor

#### Defined in

[src/patch/Object3D.ts:56](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L56)

___

### cursorDrag

• **cursorDrag**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dragging the object.

#### Inherited from

Mesh.cursorDrag

#### Defined in

[src/patch/Object3D.ts:58](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L58)

___

### cursorDrop

• **cursorDrop**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dropping an object onto this one.

#### Inherited from

Mesh.cursorDrop

#### Defined in

[src/patch/Object3D.ts:60](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L60)

___

### dragTarget

• **dragTarget**: `Object3D`<`Object3DEventMap`\>

Indicates which object will be dragged instead of this one.

#### Inherited from

Mesh.dragTarget

#### Defined in

[src/patch/Object3D.ts:46](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L46)

___

### draggable

• **draggable**: `boolean`

Indicates whether the object is draggable. Default is DEFAULT_DRAGGABLE (`false`).

#### Inherited from

Mesh.draggable

#### Defined in

[src/patch/Object3D.ts:50](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L50)

___

### enabled

• **enabled**: `boolean`

Determines if the object is enabled. Default is `true`.
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Inherited from

Mesh.enabled

#### Defined in

[src/patch/Object3D.ts:40](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L40)

___

### findDropTarget

• **findDropTarget**: `boolean`

Determines when the object is dragged, whether it will have to search for any drop targets. Default is `false`.

#### Inherited from

Mesh.findDropTarget

#### Defined in

[src/patch/Object3D.ts:52](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L52)

___

### focusable

• **focusable**: `boolean`

Indicates whether the object can receive focus. Default is DEFAULT_FOCUSABLE (`true`).

#### Inherited from

Mesh.focusable

#### Defined in

[src/patch/Object3D.ts:48](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L48)

___

### hitboxes

• **hitboxes**: [`Hitbox`](Events.Hitbox.md)[]

Array of hitboxes for collision detection.

#### Inherited from

Mesh.hitboxes

#### Defined in

[src/patch/Object3D.ts:44](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L44)

___

### interceptByRaycaster

• **interceptByRaycaster**: `boolean`

Determines if the object can be intercepted by the main raycaster. Default is DEFAULT_INTERCEPT_BY_RAYCASTER (`true`).

#### Inherited from

Mesh.interceptByRaycaster

#### Defined in

[src/patch/Object3D.ts:42](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L42)

___

### needsRender

• **needsRender**: `boolean`

Indicates whether the scene needs rendering.

#### Inherited from

Mesh.needsRender

#### Defined in

[src/patch/Object3D.ts:62](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L62)

___

### scene

• **scene**: `Scene`

Reference to the scene the object belongs to.

#### Inherited from

Mesh.scene

#### Defined in

[src/patch/Object3D.ts:54](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L54)

___

### tags

• **tags**: `Set`<`string`\>

Indicates the tags to be searched using the querySelector and `querySelectorAll` methods.

#### Inherited from

Mesh.tags

#### Defined in

[src/patch/Object3D.ts:64](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L64)

## Accessors

### clicking

• `get` **clicking**(): `boolean`

Indicates if the object is currently being clicked.

#### Returns

`boolean`

#### Inherited from

Mesh.clicking

#### Defined in

[src/patch/Object3D.ts:70](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L70)

___

### dragging

• `get` **dragging**(): `boolean`

Indicates if the object is currently being dragged.

#### Returns

`boolean`

#### Inherited from

Mesh.dragging

#### Defined in

[src/patch/Object3D.ts:72](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L72)

___

### enabledState

• `get` **enabledState**(): `boolean`

Retrieves the combined enabled state considering parent objects.

#### Returns

`boolean`

#### Inherited from

Mesh.enabledState

#### Defined in

[src/patch/Object3D.ts:74](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L74)

___

### firstFocusable

• `get` **firstFocusable**(): `Object3D`<`Object3DEventMap`\>

Retrieves the first possible focusable object.

#### Returns

`Object3D`<`Object3DEventMap`\>

#### Inherited from

Mesh.firstFocusable

#### Defined in

[src/patch/Object3D.ts:78](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L78)

___

### focused

• `get` **focused**(): `boolean`

Indicates if the object is currently focused.

#### Returns

`boolean`

#### Inherited from

Mesh.focused

#### Defined in

[src/patch/Object3D.ts:68](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L68)

___

### hovered

• `get` **hovered**(): `boolean`

Indicates if the primary pointer is over this object.

#### Returns

`boolean`

#### Inherited from

Mesh.hovered

#### Defined in

[src/patch/Object3D.ts:66](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L66)

___

### visibilityState

• `get` **visibilityState**(): `boolean`

Retrieves the combined visibility state considering parent objects.

#### Returns

`boolean`

#### Inherited from

Mesh.visibilityState

#### Defined in

[src/patch/Object3D.ts:76](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L76)

## Methods

### applyBlur

▸ **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Inherited from

Mesh.applyBlur

#### Defined in

[src/patch/Object3D.ts:86](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L86)

___

### applyFocus

▸ **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Inherited from

Mesh.applyFocus

#### Defined in

[src/patch/Object3D.ts:82](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L82)

___

### bindProperty

▸ **bindProperty**<`T`\>(`property`, `getCallback`, `renderOnChange?`): [`Hitbox`](Events.Hitbox.md)

Binds a property to a callback function for updates.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`Hitbox`](Events.Hitbox.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `T` | The name of the property to bind. |
| `getCallback` | () => [`Hitbox`](Events.Hitbox.md)[`T`] | A function that retrieves the property's value. |
| `renderOnChange?` | `boolean` | Indicates whether to render when the property changes (optional, default: `false`). |

#### Returns

[`Hitbox`](Events.Hitbox.md)

The instance of the object with the binding applied.

#### Inherited from

Mesh.bindProperty

#### Defined in

[src/patch/Object3D.ts:138](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L138)

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

Mesh.detectChanges

#### Defined in

[src/patch/Object3D.ts:130](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L130)

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

Mesh.hasEvent

#### Defined in

[src/patch/Object3D.ts:100](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L100)

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

Mesh.off

#### Defined in

[src/patch/Object3D.ts:106](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L106)

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
| `listener` | (`this`: [`Hitbox`](Events.Hitbox.md), `event?`: `Events`[`K`]) => `void` | The callback function to execute when the event occurs. |

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

Mesh.on

#### Defined in

[src/patch/Object3D.ts:93](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L93)

___

### querySelector

▸ **querySelector**(`query`): `Object3D`<`Object3DEventMap`\>

Finds and returns the first Object3D element that matches the specified query string.
This method follows a similar syntax to CSS selectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The query string to match against the Object3D elements. |

#### Returns

`Object3D`<`Object3DEventMap`\>

The first Object3D element that matches the query, or undefined if no match is found.

#### Inherited from

Mesh.querySelector

#### Defined in

[src/patch/Object3D.ts:158](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L158)

___

### querySelectorAll

▸ **querySelectorAll**(`query`): `Object3D`<`Object3DEventMap`\>[]

Finds and returns a list of Object3D elements that match the specified query string.
This method follows a similar syntax to CSS selectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The query string to match against the Object3D elements. |

#### Returns

`Object3D`<`Object3DEventMap`\>[]

An array of Object3D elements that match the query.

#### Inherited from

Mesh.querySelectorAll

#### Defined in

[src/patch/Object3D.ts:165](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L165)

___

### setManualDetectionMode

▸ **setManualDetectionMode**(): `void`

Activates manual detection mode for bindings.
When this method is used, all bindings will no longer be calculated automatically.
Instead, they must be manually computed using the 'detectChanges' function.

#### Returns

`void`

#### Inherited from

Mesh.setManualDetectionMode

#### Defined in

[src/patch/Object3D.ts:124](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L124)

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

Mesh.trigger

#### Defined in

[src/patch/Object3D.ts:112](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L112)

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

Mesh.triggerAncestor

#### Defined in

[src/patch/Object3D.ts:118](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L118)

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

Mesh.tween

#### Defined in

[src/patch/Object3D.ts:151](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L151)

___

### unbindProperty

▸ **unbindProperty**<`T`\>(`property`): [`Hitbox`](Events.Hitbox.md)

Unbinds a previously bound property from the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`Hitbox`](Events.Hitbox.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `T` | The name of the property to unbind. |

#### Returns

[`Hitbox`](Events.Hitbox.md)

The instance of the object with the binding removed.

#### Inherited from

Mesh.unbindProperty

#### Defined in

[src/patch/Object3D.ts:144](https://github.com/agargaro/three.ez/blob/0027204/src/patch/Object3D.ts#L144)
