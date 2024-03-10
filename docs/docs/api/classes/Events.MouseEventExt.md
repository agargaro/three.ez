---
id: "Events.MouseEventExt"
title: "Class: MouseEventExt<T, R>"
sidebar_label: "MouseEventExt"
custom_edit_url: null
---

[Events](../namespaces/Events.md).MouseEventExt

Represents a custom extended mouse event.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `Object3D` | The type of the primary target for the event (default is `Object3D`). |
| `R` | `Object3D` | The type of the related target for the event (default is `Object3D`). |

## Hierarchy

- [`EventExt`](Events.EventExt.md)<`T`\>

  ↳ **`MouseEventExt`**

  ↳↳ [`PointerEventExt`](Events.PointerEventExt.md)

  ↳↳ [`WheelEventExt`](Events.WheelEventExt.md)

## Constructors

### constructor

• **new MouseEventExt**<`T`, `R`\>(`event`, `intersection`, `relatedTarget?`, `cancelable?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Object3D`<`Object3DEventMap`\> |
| `R` | `Object3D`<`Object3DEventMap`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `MouseEvent` | Original dom event. |
| `intersection` | [`IntersectionExt`](../interfaces/Events.IntersectionExt.md) | The intersection information between the mouse event and 3D objects in the scene. |
| `relatedTarget?` | `R` | The secondary target for the event. |
| `cancelable?` | `boolean` | A boolean value indicating whether the event is cancelable. |

#### Overrides

[EventExt](Events.EventExt.md).[constructor](Events.EventExt.md#constructor)

#### Defined in

[src/events/Events.ts:208](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L208)

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

### domEvent

• `Readonly` **domEvent**: `MouseEvent`

Original dom event.

#### Defined in

[src/events/Events.ts:164](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L164)

___

### intersection

• `Readonly` **intersection**: [`IntersectionExt`](../interfaces/Events.IntersectionExt.md)

Returns the intersection information between the mouse event and 3D objects in the scene.

#### Defined in

[src/events/Events.ts:200](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L200)

___

### relatedTarget

• `Readonly` **relatedTarget**: `R`

The secondary target for the event, if there is one.

#### Defined in

[src/events/Events.ts:192](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L192)

___

### timeStamp

• `Readonly` **timeStamp**: `number`

The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead.

#### Inherited from

[EventExt](Events.EventExt.md).[timeStamp](Events.EventExt.md#timestamp)

#### Defined in

[src/events/Events.ts:124](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L124)

## Accessors

### altKey

• `get` **altKey**(): `boolean`

Returns true if the alt key was down when the mouse event was fired.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:166](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L166)

___

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

### button

• `get` **button**(): `number`

The button number that was pressed (if applicable) when the mouse event was fired.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:168](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L168)

___

### buttons

• `get` **buttons**(): `number`

The buttons being pressed (if any) when the mouse event was fired.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:170](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L170)

___

### clientX

• `get` **clientX**(): `number`

The X coordinate of the mouse pointer in local (DOM content) coordinates.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:172](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L172)

___

### clientY

• `get` **clientY**(): `number`

The Y coordinate of the mouse pointer in local (DOM content) coordinates.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:174](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L174)

___

### ctrlKey

• `get` **ctrlKey**(): `boolean`

Returns true if the control key was down when the mouse event was fired.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:176](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L176)

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

### metaKey

• `get` **metaKey**(): `boolean`

Returns true if the meta key was down when the mouse event was fired.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:178](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L178)

___

### movementX

• `get` **movementX**(): `number`

The X coordinate of the pointer relative to the position of the last event.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:180](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L180)

___

### movementY

• `get` **movementY**(): `number`

The Y coordinate of the pointer relative to the position of the last event.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:182](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L182)

___

### offsetX

• `get` **offsetX**(): `number`

The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:184](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L184)

___

### offsetY

• `get` **offsetY**(): `number`

The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:186](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L186)

___

### pageX

• `get` **pageX**(): `number`

The X coordinate of the mouse pointer relative to the whole document.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:188](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L188)

___

### pageY

• `get` **pageY**(): `number`

The Y coordinate of the mouse pointer relative to the whole document.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:190](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L190)

___

### screenX

• `get` **screenX**(): `number`

The X coordinate of the mouse pointer in global (screen) coordinates.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:194](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L194)

___

### screenY

• `get` **screenY**(): `number`

The Y coordinate of the mouse pointer in global (screen) coordinates.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:196](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L196)

___

### shiftKey

• `get` **shiftKey**(): `boolean`

Returns true if the shift key was down when the mouse event was fired.

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:198](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L198)

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

### getModifierState

▸ **getModifierState**(`keyArg`): `boolean`

Returns the current state of the specified modifier key. See KeyboardEvent.getModifierState() for details.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyArg` | `string` |

#### Returns

`boolean`

#### Defined in

[src/events/Events.ts:216](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L216)

___

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
