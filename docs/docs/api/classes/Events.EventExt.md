---
id: "Events.EventExt"
title: "Class: EventExt<T>"
sidebar_label: "EventExt"
custom_edit_url: null
---

[Events](../namespaces/Events.md).EventExt

Represents a custom extended event.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Object3D` |

## Hierarchy

- **`EventExt`**

  ↳ [`MouseEventExt`](Events.MouseEventExt.md)

  ↳ [`PointerIntersectionEvent`](Events.PointerIntersectionEvent.md)

  ↳ [`KeyboardEventExt`](Events.KeyboardEventExt.md)

  ↳ [`FocusEventExt`](Events.FocusEventExt.md)

## Constructors

### constructor

• **new EventExt**<`T`\>(`cancelable?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Object3D`<`Object3DEventMap`\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cancelable` | `boolean` | `false` | A boolean value indicating whether the event is cancelable. |

#### Defined in

[src/events/Events.ts:137](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L137)

## Properties

### cancelable

• `Readonly` **cancelable**: `any`

A boolean value indicating whether the event is cancelable.

#### Defined in

[src/events/Events.ts:116](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L116)

___

### currentTarget

• **currentTarget**: `T`

A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting.

#### Defined in

[src/events/Events.ts:118](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L118)

___

### timeStamp

• `Readonly` **timeStamp**: `number`

The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead.

#### Defined in

[src/events/Events.ts:124](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L124)

## Accessors

### bubbles

• `get` **bubbles**(): `boolean`

A boolean value indicating whether or not the event bubbles up through the DOM.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:114](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L114)

___

### defaultPrevented

• `get` **defaultPrevented**(): `boolean`

Indicates whether or not the call to event.preventDefault() canceled the event.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:120](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L120)

___

### target

• `get` **target**(): `T`

A reference to the object to which the event was originally dispatched.

#### Returns

`T`

#### Defined in

[src/events/Events.ts:122](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L122)

___

### type

• `get` **type**(): keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md)

The case-insensitive name identifying the type of the event.

#### Returns

keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md)

#### Defined in

[src/events/Events.ts:126](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L126)

## Methods

### preventDefault

▸ **preventDefault**(): `void`

Cancels the event.

#### Returns

`void`

#### Defined in

[src/events/Events.ts:142](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L142)

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance).

#### Returns

`void`

#### Defined in

[src/events/Events.ts:147](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L147)

___

### stopPropagation

▸ **stopPropagation**(): `void`

Stops the propagation of events further along in the Object3D hierarchy.

#### Returns

`void`

#### Defined in

[src/events/Events.ts:152](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L152)
