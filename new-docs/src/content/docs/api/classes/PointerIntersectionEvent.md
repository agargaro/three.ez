---
editUrl: false
next: false
prev: false
title: "PointerIntersectionEvent"
---

Represents a pointer intersection event.

## Extends

- [`EventExt`](/api/classes/eventext/)\<`T`\>

## Type Parameters

• **T** = `Object3D`

The type of the primary target for the event (default is `Object3D`).

## Constructors

### new PointerIntersectionEvent()

> **new PointerIntersectionEvent**\<`T`\>(`intersection`): [`PointerIntersectionEvent`](/api/classes/pointerintersectionevent/)\<`T`\>

#### Parameters

• **intersection**: [`IntersectionExt`](/api/interfaces/intersectionext/)

The intersection information between the mouse event and 3D objects in the scene.

#### Returns

[`PointerIntersectionEvent`](/api/classes/pointerintersectionevent/)\<`T`\>

#### Overrides

[`EventExt`](/api/classes/eventext/).[`constructor`](/api/classes/eventext/#constructors)

#### Defined in

[src/events/Events.ts:304](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L304)

## Properties

### cancelable

> `readonly` **cancelable**: `any`

A boolean value indicating whether the event is cancelable.

#### Inherited from

[`EventExt`](/api/classes/eventext/).[`cancelable`](/api/classes/eventext/#cancelable)

#### Defined in

[src/events/Events.ts:116](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L116)

***

### currentTarget

> **currentTarget**: `T`

A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting.

#### Inherited from

[`EventExt`](/api/classes/eventext/).[`currentTarget`](/api/classes/eventext/#currenttarget)

#### Defined in

[src/events/Events.ts:118](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L118)

***

### intersection

> `readonly` **intersection**: [`IntersectionExt`](/api/interfaces/intersectionext/)

Returns the intersection information between the mouse event and 3D objects in the scene.

#### Defined in

[src/events/Events.ts:299](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L299)

***

### timeStamp

> `readonly` **timeStamp**: `number`

The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead.

#### Inherited from

[`EventExt`](/api/classes/eventext/).[`timeStamp`](/api/classes/eventext/#timestamp)

#### Defined in

[src/events/Events.ts:124](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L124)

## Accessors

### bubbles

#### Get Signature

> **get** **bubbles**(): `boolean`

A boolean value indicating whether or not the event bubbles up through the DOM.

##### Returns

`boolean`

#### Inherited from

[`EventExt`](/api/classes/eventext/).[`bubbles`](/api/classes/eventext/#bubbles)

#### Defined in

[src/events/Events.ts:114](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L114)

***

### defaultPrevented

#### Get Signature

> **get** **defaultPrevented**(): `boolean`

Indicates whether or not the call to event.preventDefault() canceled the event.

##### Returns

`boolean`

#### Inherited from

[`EventExt`](/api/classes/eventext/).[`defaultPrevented`](/api/classes/eventext/#defaultprevented)

#### Defined in

[src/events/Events.ts:120](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L120)

***

### target

#### Get Signature

> **get** **target**(): `T`

A reference to the object to which the event was originally dispatched.

##### Returns

`T`

#### Inherited from

[`EventExt`](/api/classes/eventext/).[`target`](/api/classes/eventext/#target)

#### Defined in

[src/events/Events.ts:122](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L122)

***

### type

#### Get Signature

> **get** **type**(): keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

The case-insensitive name identifying the type of the event.

##### Returns

keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Inherited from

[`EventExt`](/api/classes/eventext/).[`type`](/api/classes/eventext/#type)

#### Defined in

[src/events/Events.ts:126](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L126)

## Methods

### preventDefault()

> **preventDefault**(): `void`

Cancels the event.

#### Returns

`void`

#### Inherited from

[`EventExt`](/api/classes/eventext/).[`preventDefault`](/api/classes/eventext/#preventdefault)

#### Defined in

[src/events/Events.ts:142](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L142)

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance).

#### Returns

`void`

#### Inherited from

[`EventExt`](/api/classes/eventext/).[`stopImmediatePropagation`](/api/classes/eventext/#stopimmediatepropagation)

#### Defined in

[src/events/Events.ts:147](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L147)

***

### stopPropagation()

> **stopPropagation**(): `void`

Stops the propagation of events further along in the Object3D hierarchy.

#### Returns

`void`

#### Inherited from

[`EventExt`](/api/classes/eventext/).[`stopPropagation`](/api/classes/eventext/#stoppropagation)

#### Defined in

[src/events/Events.ts:152](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/events/Events.ts#L152)
