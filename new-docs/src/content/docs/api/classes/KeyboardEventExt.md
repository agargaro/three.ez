---
editUrl: false
next: false
prev: false
title: "KeyboardEventExt"
---

Represents a custom extended keyboard event.

## Extends

- [`EventExt`](/three.ez/api/classes/eventext/)\<`T`\>

## Type Parameters

• **T** = `Object3D`

The type of the primary target for the event (default is `Object3D`).

## Constructors

### new KeyboardEventExt()

> **new KeyboardEventExt**\<`T`\>(`event`, `cancelable`): [`KeyboardEventExt`](/three.ez/api/classes/keyboardeventext/)\<`T`\>

#### Parameters

• **event**: `KeyboardEvent`

Original dom event.

• **cancelable**: `boolean`

A boolean value indicating whether the event is cancelable.

#### Returns

[`KeyboardEventExt`](/three.ez/api/classes/keyboardeventext/)\<`T`\>

#### Overrides

[`EventExt`](/three.ez/api/classes/eventext/).[`constructor`](/three.ez/api/classes/eventext/#constructors)

#### Defined in

[src/events/Events.ts:338](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L338)

## Properties

### cancelable

> `readonly` **cancelable**: `any`

A boolean value indicating whether the event is cancelable.

#### Inherited from

[`EventExt`](/three.ez/api/classes/eventext/).[`cancelable`](/three.ez/api/classes/eventext/#cancelable)

#### Defined in

[src/events/Events.ts:116](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L116)

***

### currentTarget

> **currentTarget**: `T`

A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting.

#### Inherited from

[`EventExt`](/three.ez/api/classes/eventext/).[`currentTarget`](/three.ez/api/classes/eventext/#currenttarget)

#### Defined in

[src/events/Events.ts:118](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L118)

***

### domEvent

> `readonly` **domEvent**: `KeyboardEvent`

Original dom event.

#### Defined in

[src/events/Events.ts:316](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L316)

***

### timeStamp

> `readonly` **timeStamp**: `number`

The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead.

#### Inherited from

[`EventExt`](/three.ez/api/classes/eventext/).[`timeStamp`](/three.ez/api/classes/eventext/#timestamp)

#### Defined in

[src/events/Events.ts:124](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L124)

## Accessors

### altKey

#### Get Signature

> **get** **altKey**(): `boolean`

Returns a boolean value that is true if the Alt (Option or ⌥ on macOS) key was active when the key event was generated.

##### Returns

`boolean`

#### Defined in

[src/events/Events.ts:318](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L318)

***

### bubbles

#### Get Signature

> **get** **bubbles**(): `boolean`

A boolean value indicating whether or not the event bubbles up through the DOM.

##### Returns

`boolean`

#### Inherited from

[`EventExt`](/three.ez/api/classes/eventext/).[`bubbles`](/three.ez/api/classes/eventext/#bubbles)

#### Defined in

[src/events/Events.ts:114](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L114)

***

### code

#### Get Signature

> **get** **code**(): `string`

Returns a string with the code value of the physical key represented by the event.

##### Returns

`string`

#### Defined in

[src/events/Events.ts:320](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L320)

***

### ctrlKey

#### Get Signature

> **get** **ctrlKey**(): `boolean`

Returns a boolean value that is true if the Ctrl key was active when the key event was generated.

##### Returns

`boolean`

#### Defined in

[src/events/Events.ts:322](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L322)

***

### defaultPrevented

#### Get Signature

> **get** **defaultPrevented**(): `boolean`

Indicates whether or not the call to event.preventDefault() canceled the event.

##### Returns

`boolean`

#### Inherited from

[`EventExt`](/three.ez/api/classes/eventext/).[`defaultPrevented`](/three.ez/api/classes/eventext/#defaultprevented)

#### Defined in

[src/events/Events.ts:120](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L120)

***

### key

#### Get Signature

> **get** **key**(): `string`

Returns a string representing the key value of the key represented by the event.

##### Returns

`string`

#### Defined in

[src/events/Events.ts:324](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L324)

***

### location

#### Get Signature

> **get** **location**(): `number`

Returns a number representing the location of the key on the keyboard or other input device. Visit https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location for more info.

##### Returns

`number`

#### Defined in

[src/events/Events.ts:326](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L326)

***

### metaKey

#### Get Signature

> **get** **metaKey**(): `boolean`

Returns a boolean value that is true if the Meta key (on Mac keyboards, the ⌘ Command key; on Windows keyboards, the Windows key (⊞)) was active when the key event was generated.

##### Returns

`boolean`

#### Defined in

[src/events/Events.ts:328](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L328)

***

### repeat

#### Get Signature

> **get** **repeat**(): `boolean`

Returns a boolean value that is true if the key is being held down such that it is automatically repeating.

##### Returns

`boolean`

#### Defined in

[src/events/Events.ts:330](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L330)

***

### shiftKey

#### Get Signature

> **get** **shiftKey**(): `boolean`

Returns a boolean value that is true if the Shift key was active when the key event was generated.

##### Returns

`boolean`

#### Defined in

[src/events/Events.ts:332](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L332)

***

### target

#### Get Signature

> **get** **target**(): `T`

A reference to the object to which the event was originally dispatched.

##### Returns

`T`

#### Inherited from

[`EventExt`](/three.ez/api/classes/eventext/).[`target`](/three.ez/api/classes/eventext/#target)

#### Defined in

[src/events/Events.ts:122](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L122)

***

### type

#### Get Signature

> **get** **type**(): keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

The case-insensitive name identifying the type of the event.

##### Returns

keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Inherited from

[`EventExt`](/three.ez/api/classes/eventext/).[`type`](/three.ez/api/classes/eventext/#type)

#### Defined in

[src/events/Events.ts:126](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L126)

## Methods

### getModifierState()

> **getModifierState**(`keyArg`): `boolean`

Returns a boolean value indicating if a modifier key such as Alt, Shift, Ctrl, or Meta, was pressed when the event was created.

#### Parameters

• **keyArg**: `string`

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:344](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L344)

***

### preventDefault()

> **preventDefault**(): `void`

Cancels the event.

#### Returns

`void`

#### Inherited from

[`EventExt`](/three.ez/api/classes/eventext/).[`preventDefault`](/three.ez/api/classes/eventext/#preventdefault)

#### Defined in

[src/events/Events.ts:142](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L142)

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance).

#### Returns

`void`

#### Inherited from

[`EventExt`](/three.ez/api/classes/eventext/).[`stopImmediatePropagation`](/three.ez/api/classes/eventext/#stopimmediatepropagation)

#### Defined in

[src/events/Events.ts:147](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L147)

***

### stopPropagation()

> **stopPropagation**(): `void`

Stops the propagation of events further along in the Object3D hierarchy.

#### Returns

`void`

#### Inherited from

[`EventExt`](/three.ez/api/classes/eventext/).[`stopPropagation`](/three.ez/api/classes/eventext/#stoppropagation)

#### Defined in

[src/events/Events.ts:152](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L152)
