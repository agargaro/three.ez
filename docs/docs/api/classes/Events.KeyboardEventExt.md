---
id: "Events.KeyboardEventExt"
title: "Class: KeyboardEventExt<T>"
sidebar_label: "KeyboardEventExt"
custom_edit_url: null
---

[Events](../namespaces/Events.md).KeyboardEventExt

Represents a custom extended keyboard event.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `Object3D` | The type of the primary target for the event (default is `Object3D`). |

## Hierarchy

- [`EventExt`](Events.EventExt.md)<`T`\>

  ↳ **`KeyboardEventExt`**

## Constructors

### constructor

• **new KeyboardEventExt**<`T`\>(`event`, `cancelable`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Object3D`<`Object3DEventMap`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `KeyboardEvent` | Original dom event. |
| `cancelable` | `boolean` | A boolean value indicating whether the event is cancelable. |

#### Overrides

[EventExt](Events.EventExt.md).[constructor](Events.EventExt.md#constructor)

#### Defined in

[src/events/Events.ts:338](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L338)

## Properties

### cancelable

• `Readonly` **cancelable**: `any`

A boolean value indicating whether the event is cancelable.

#### Inherited from

[EventExt](Events.EventExt.md).[cancelable](Events.EventExt.md#cancelable)

#### Defined in

[src/events/Events.ts:116](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L116)

___

### currentTarget

• **currentTarget**: `T`

A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting.

#### Inherited from

[EventExt](Events.EventExt.md).[currentTarget](Events.EventExt.md#currenttarget)

#### Defined in

[src/events/Events.ts:118](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L118)

___

### domEvent

• `Readonly` **domEvent**: `KeyboardEvent`

Original dom event.

#### Defined in

[src/events/Events.ts:316](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L316)

___

### timeStamp

• `Readonly` **timeStamp**: `number`

The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead.

#### Inherited from

[EventExt](Events.EventExt.md).[timeStamp](Events.EventExt.md#timestamp)

#### Defined in

[src/events/Events.ts:124](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L124)

## Accessors

### altKey

• `get` **altKey**(): `boolean`

Returns a boolean value that is true if the Alt (Option or ⌥ on macOS) key was active when the key event was generated.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:318](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L318)

___

### bubbles

• `get` **bubbles**(): `boolean`

A boolean value indicating whether or not the event bubbles up through the DOM.

#### Returns

`boolean`

#### Inherited from

EventExt.bubbles

#### Defined in

[src/events/Events.ts:114](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L114)

___

### code

• `get` **code**(): `string`

Returns a string with the code value of the physical key represented by the event.

#### Returns

`string`

#### Defined in

[src/events/Events.ts:320](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L320)

___

### ctrlKey

• `get` **ctrlKey**(): `boolean`

Returns a boolean value that is true if the Ctrl key was active when the key event was generated.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:322](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L322)

___

### defaultPrevented

• `get` **defaultPrevented**(): `boolean`

Indicates whether or not the call to event.preventDefault() canceled the event.

#### Returns

`boolean`

#### Inherited from

EventExt.defaultPrevented

#### Defined in

[src/events/Events.ts:120](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L120)

___

### key

• `get` **key**(): `string`

Returns a string representing the key value of the key represented by the event.

#### Returns

`string`

#### Defined in

[src/events/Events.ts:324](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L324)

___

### location

• `get` **location**(): `number`

Returns a number representing the location of the key on the keyboard or other input device. Visit https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location for more info.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:326](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L326)

___

### metaKey

• `get` **metaKey**(): `boolean`

Returns a boolean value that is true if the Meta key (on Mac keyboards, the ⌘ Command key; on Windows keyboards, the Windows key (⊞)) was active when the key event was generated.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:328](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L328)

___

### repeat

• `get` **repeat**(): `boolean`

Returns a boolean value that is true if the key is being held down such that it is automatically repeating.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:330](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L330)

___

### shiftKey

• `get` **shiftKey**(): `boolean`

Returns a boolean value that is true if the Shift key was active when the key event was generated.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:332](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L332)

___

### target

• `get` **target**(): `T`

A reference to the object to which the event was originally dispatched.

#### Returns

`T`

#### Inherited from

EventExt.target

#### Defined in

[src/events/Events.ts:122](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L122)

___

### type

• `get` **type**(): keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md)

The case-insensitive name identifying the type of the event.

#### Returns

keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md)

#### Inherited from

EventExt.type

#### Defined in

[src/events/Events.ts:126](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L126)

## Methods

### getModifierState

▸ **getModifierState**(`keyArg`): `boolean`

Returns a boolean value indicating if a modifier key such as Alt, Shift, Ctrl, or Meta, was pressed when the event was created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyArg` | `string` |

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:344](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L344)

___

### preventDefault

▸ **preventDefault**(): `void`

Cancels the event.

#### Returns

`void`

#### Inherited from

[EventExt](Events.EventExt.md).[preventDefault](Events.EventExt.md#preventdefault)

#### Defined in

[src/events/Events.ts:142](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L142)

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance).

#### Returns

`void`

#### Inherited from

[EventExt](Events.EventExt.md).[stopImmediatePropagation](Events.EventExt.md#stopimmediatepropagation)

#### Defined in

[src/events/Events.ts:147](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L147)

___

### stopPropagation

▸ **stopPropagation**(): `void`

Stops the propagation of events further along in the Object3D hierarchy.

#### Returns

`void`

#### Inherited from

[EventExt](Events.EventExt.md).[stopPropagation](Events.EventExt.md#stoppropagation)

#### Defined in

[src/events/Events.ts:152](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L152)
