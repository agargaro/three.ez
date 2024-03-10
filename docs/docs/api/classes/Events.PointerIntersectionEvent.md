---
id: "Events.PointerIntersectionEvent"
title: "Class: PointerIntersectionEvent<T>"
sidebar_label: "PointerIntersectionEvent"
custom_edit_url: null
---

[Events](../namespaces/Events.md).PointerIntersectionEvent

Represents a pointer intersection event.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `Object3D` | The type of the primary target for the event (default is `Object3D`). |

## Hierarchy

- [`EventExt`](Events.EventExt.md)<`T`\>

  ↳ **`PointerIntersectionEvent`**

## Constructors

### constructor

• **new PointerIntersectionEvent**<`T`\>(`intersection`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Object3D`<`Object3DEventMap`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `intersection` | [`IntersectionExt`](../interfaces/Events.IntersectionExt.md) | The intersection information between the mouse event and 3D objects in the scene. |

#### Overrides

[EventExt](Events.EventExt.md).[constructor](Events.EventExt.md#constructor)

#### Defined in

[src/events/Events.ts:304](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L304)

## Properties

### cancelable

• `Readonly` **cancelable**: `any`

A boolean value indicating whether the event is cancelable.

#### Inherited from

[EventExt](Events.EventExt.md).[cancelable](Events.EventExt.md#cancelable)

#### Defined in

[src/events/Events.ts:116](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L116)

___

### currentTarget

• **currentTarget**: `T`

A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting.

#### Inherited from

[EventExt](Events.EventExt.md).[currentTarget](Events.EventExt.md#currenttarget)

#### Defined in

[src/events/Events.ts:118](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L118)

___

### intersection

• `Readonly` **intersection**: [`IntersectionExt`](../interfaces/Events.IntersectionExt.md)

Returns the intersection information between the mouse event and 3D objects in the scene.

#### Defined in

[src/events/Events.ts:299](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L299)

___

### timeStamp

• `Readonly` **timeStamp**: `number`

The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead.

#### Inherited from

[EventExt](Events.EventExt.md).[timeStamp](Events.EventExt.md#timestamp)

#### Defined in

[src/events/Events.ts:124](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L124)

## Accessors

### bubbles

• `get` **bubbles**(): `boolean`

A boolean value indicating whether or not the event bubbles up through the DOM.

#### Returns

`boolean`

#### Inherited from

EventExt.bubbles

#### Defined in

[src/events/Events.ts:114](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L114)

___

### defaultPrevented

• `get` **defaultPrevented**(): `boolean`

Indicates whether or not the call to event.preventDefault() canceled the event.

#### Returns

`boolean`

#### Inherited from

EventExt.defaultPrevented

#### Defined in

[src/events/Events.ts:120](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L120)

___

### target

• `get` **target**(): `T`

A reference to the object to which the event was originally dispatched.

#### Returns

`T`

#### Inherited from

EventExt.target

#### Defined in

[src/events/Events.ts:122](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L122)

___

### type

• `get` **type**(): keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md)

The case-insensitive name identifying the type of the event.

#### Returns

keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md)

#### Inherited from

EventExt.type

#### Defined in

[src/events/Events.ts:126](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L126)

## Methods

### preventDefault

▸ **preventDefault**(): `void`

Cancels the event.

#### Returns

`void`

#### Inherited from

[EventExt](Events.EventExt.md).[preventDefault](Events.EventExt.md#preventdefault)

#### Defined in

[src/events/Events.ts:142](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L142)

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance).

#### Returns

`void`

#### Inherited from

[EventExt](Events.EventExt.md).[stopImmediatePropagation](Events.EventExt.md#stopimmediatepropagation)

#### Defined in

[src/events/Events.ts:147](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L147)

___

### stopPropagation

▸ **stopPropagation**(): `void`

Stops the propagation of events further along in the Object3D hierarchy.

#### Returns

`void`

#### Inherited from

[EventExt](Events.EventExt.md).[stopPropagation](Events.EventExt.md#stoppropagation)

#### Defined in

[src/events/Events.ts:152](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L152)
