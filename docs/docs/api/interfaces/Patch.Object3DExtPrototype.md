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

[src/patch/Object3D.ts:54](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L54)

___

### cursorDrag

• **cursorDrag**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dragging the object.

#### Defined in

[src/patch/Object3D.ts:56](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L56)

___

### cursorDrop

• **cursorDrop**: [`Cursor`](../namespaces/Events.md#cursor)

Cursor style when dropping an object onto this one.

#### Defined in

[src/patch/Object3D.ts:58](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L58)

___

### dragTarget

• **dragTarget**: `Object3D`<`Object3DEventMap`\>

Indicates which object will be dragged instead of this one.

#### Defined in

[src/patch/Object3D.ts:44](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L44)

___

### draggable

• **draggable**: `boolean`

Indicates whether the object is draggable. Default is DEFAULT_DRAGGABLE (`false`).

#### Defined in

[src/patch/Object3D.ts:48](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L48)

___

### enabled

• **enabled**: `boolean`

Determines if the object is enabled. Default is `true`.
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Defined in

[src/patch/Object3D.ts:38](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L38)

___

### findDropTarget

• **findDropTarget**: `boolean`

Determines when the object is dragged, whether it will have to search for any drop targets. Default is `false`.

#### Defined in

[src/patch/Object3D.ts:50](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L50)

___

### focusable

• **focusable**: `boolean`

Indicates whether the object can receive focus. Default is DEFAULT_FOCUSABLE (`true`).

#### Defined in

[src/patch/Object3D.ts:46](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L46)

___

### hitboxes

• **hitboxes**: `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

Array of hitboxes for collision detection.

#### Defined in

[src/patch/Object3D.ts:42](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L42)

___

### interceptByRaycaster

• **interceptByRaycaster**: `boolean`

Determines if the object can be intercepted by the main raycaster. Default is DEFAULT_INTERCEPT_BY_RAYCASTER (`true`).

#### Defined in

[src/patch/Object3D.ts:40](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L40)

___

### needsRender

• **needsRender**: `boolean`

Indicates whether the scene needs rendering.

#### Defined in

[src/patch/Object3D.ts:60](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L60)

___

### scene

• **scene**: `Scene`

Reference to the scene the object belongs to.

#### Defined in

[src/patch/Object3D.ts:52](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L52)

___

### tags

• **tags**: `Set`<`string`\>

Indicates the tags to be searched using the querySelector and `querySelectorAll` methods.

#### Defined in

[src/patch/Object3D.ts:62](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L62)

## Accessors

### clicking

• `get` **clicking**(): `boolean`

Indicates if the object is currently being clicked.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:68](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L68)

___

### dragging

• `get` **dragging**(): `boolean`

Indicates if the object is currently being dragged.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:70](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L70)

___

### enabledState

• `get` **enabledState**(): `boolean`

Retrieves the combined enabled state considering parent objects.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:72](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L72)

___

### firstFocusable

• `get` **firstFocusable**(): `Object3D`<`Object3DEventMap`\>

Retrieves the first possible focusable object.

#### Returns

`Object3D`<`Object3DEventMap`\>

#### Defined in

[src/patch/Object3D.ts:76](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L76)

___

### focused

• `get` **focused**(): `boolean`

Indicates if the object is currently focused.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:66](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L66)

___

### hovered

• `get` **hovered**(): `boolean`

Indicates if the primary pointer is over this object.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:64](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L64)

___

### visibilityState

• `get` **visibilityState**(): `boolean`

Retrieves the combined visibility state considering parent objects.

#### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:74](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L74)

## Methods

### applyBlur

▸ **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:84](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L84)

___

### applyFocus

▸ **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:80](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L80)

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
| `renderOnChange?` | `boolean` | Indicates whether to render when the property changes (optional, default: `false`). |

#### Returns

[`Object3DExtPrototype`](Patch.Object3DExtPrototype.md)

The instance of the object with the binding applied.

#### Defined in

[src/patch/Object3D.ts:136](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L136)

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

#### Defined in

[src/patch/Object3D.ts:128](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L128)

___

### hasEvent

▸ **hasEvent**<`K`\>(`type`, `listener`): `boolean`

Checks if the object has a specific event listener.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](Events.MiscEvents.md) \| keyof [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to check for. |
| `listener` | (`event?`: `Events`[`K`]) => `void` | The callback function to check. |

#### Returns

`boolean`

`true` if the event listener is attached; otherwise, `false`.

#### Defined in

[src/patch/Object3D.ts:98](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L98)

___

### off

▸ **off**<`K`\>(`type`, `listener`): `void`

Removes an event listener from the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](Events.MiscEvents.md) \| keyof [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to remove the listener from. |
| `listener` | (`event?`: `Events`[`K`]) => `void` | The callback function to remove. |

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:104](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L104)

___

### on

▸ **on**<`K`\>(`type`, `listener`): (`event?`: `Events`[`K`]) => `void`

Attaches an event listener to the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](Events.MiscEvents.md) \| keyof [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` \| `K`[] | The type of event to listen for. |
| `listener` | (`this`: [`Object3DExtPrototype`](Patch.Object3DExtPrototype.md), `event?`: `Events`[`K`]) => `void` | The callback function to execute when the event occurs. |

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

[src/patch/Object3D.ts:91](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L91)

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

#### Defined in

[src/patch/Object3D.ts:156](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L156)

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

#### Defined in

[src/patch/Object3D.ts:163](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L163)

___

### setManualDetectionMode

▸ **setManualDetectionMode**(): `void`

Activates manual detection mode for bindings.
When this method is used, all bindings will no longer be calculated automatically.
Instead, they must be manually computed using the 'detectChanges' function.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:122](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L122)

___

### trigger

▸ **trigger**<`K`\>(`type`, `event?`): `void`

Triggers a specific event on the object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MiscEvents`](Events.MiscEvents.md) \| keyof [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](Events.UpdateEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to trigger. |
| `event?` | `Events`[`K`] | Optional event data to pass to the listeners. |

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:110](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L110)

___

### triggerAncestor

▸ **triggerAncestor**<`K`\>(`type`, `event?`): `void`

Triggers a specific event on the object and all its ancestors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `K` | The type of event to trigger. |
| `event?` | [`InteractionEvents`](Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md)\>[`K`] | Optional event data to pass to the listeners. |

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:116](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L116)

___

### tween

▸ **tween**<`T`\>(`id?`): [`Tween`](../classes/Tweening.Tween.md)<`T`\>

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

[`Tween`](../classes/Tweening.Tween.md)<`T`\>

A Tween instance for further configuration.

#### Defined in

[src/patch/Object3D.ts:149](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L149)

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

[src/patch/Object3D.ts:142](https://github.com/agargaro/three.ez/blob/b355b0c/src/patch/Object3D.ts#L142)
