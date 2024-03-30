---
id: "Events.WheelEventExt"
title: "Class: WheelEventExt<T, R>"
sidebar_label: "WheelEventExt"
custom_edit_url: null
---

[Events](../namespaces/Events.md).WheelEventExt

Represents a custom extended wheel event.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `Object3D` | The type of the primary target for the event (default is `Object3D`). |
| `R` | `Object3D` | The type of the related target for the event (default is `Object3D`). |

## Hierarchy

- [`MouseEventExt`](Events.MouseEventExt.md)<`T`, `R`\>

  ↳ **`WheelEventExt`**

## Constructors

### constructor

• **new WheelEventExt**<`T`, `R`\>(`event`, `intersection`, `relatedTarget?`, `cancelable?`)

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

#### Inherited from

[MouseEventExt](Events.MouseEventExt.md).[constructor](Events.MouseEventExt.md#constructor)

#### Defined in

[src/events/Events.ts:207](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L207)

## Properties

### cancelable

• `Readonly` **cancelable**: `any`

A boolean value indicating whether the event is cancelable.

#### Inherited from

[MouseEventExt](Events.MouseEventExt.md).[cancelable](Events.MouseEventExt.md#cancelable)

#### Defined in

[src/events/Events.ts:115](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L115)

___

### currentTarget

• **currentTarget**: `T`

A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting.

#### Inherited from

[MouseEventExt](Events.MouseEventExt.md).[currentTarget](Events.MouseEventExt.md#currenttarget)

#### Defined in

[src/events/Events.ts:117](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L117)

___

### intersection

• `Readonly` **intersection**: [`IntersectionExt`](../interfaces/Events.IntersectionExt.md)

Returns the intersection information between the mouse event and 3D objects in the scene.

#### Inherited from

[MouseEventExt](Events.MouseEventExt.md).[intersection](Events.MouseEventExt.md#intersection)

#### Defined in

[src/events/Events.ts:199](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L199)

___

### relatedTarget

• `Readonly` **relatedTarget**: `R`

The secondary target for the event, if there is one.

#### Inherited from

[MouseEventExt](Events.MouseEventExt.md).[relatedTarget](Events.MouseEventExt.md#relatedtarget)

#### Defined in

[src/events/Events.ts:191](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L191)

___

### timeStamp

• `Readonly` **timeStamp**: `number`

The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead.

#### Inherited from

[MouseEventExt](Events.MouseEventExt.md).[timeStamp](Events.MouseEventExt.md#timestamp)

#### Defined in

[src/events/Events.ts:123](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L123)

## Accessors

### altKey

• `get` **altKey**(): `boolean`

Returns true if the alt key was down when the mouse event was fired.

#### Returns

`boolean`

#### Inherited from

MouseEventExt.altKey

#### Defined in

[src/events/Events.ts:165](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L165)

___

### bubbles

• `get` **bubbles**(): `boolean`

A boolean value indicating whether or not the event bubbles up through the DOM.

#### Returns

`boolean`

#### Inherited from

MouseEventExt.bubbles

#### Defined in

[src/events/Events.ts:113](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L113)

___

### button

• `get` **button**(): `number`

The button number that was pressed (if applicable) when the mouse event was fired.

#### Returns

`number`

#### Inherited from

MouseEventExt.button

#### Defined in

[src/events/Events.ts:167](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L167)

___

### buttons

• `get` **buttons**(): `number`

The buttons being pressed (if any) when the mouse event was fired.

#### Returns

`number`

#### Inherited from

MouseEventExt.buttons

#### Defined in

[src/events/Events.ts:169](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L169)

___

### clientX

• `get` **clientX**(): `number`

The X coordinate of the mouse pointer in local (DOM content) coordinates.

#### Returns

`number`

#### Inherited from

MouseEventExt.clientX

#### Defined in

[src/events/Events.ts:171](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L171)

___

### clientY

• `get` **clientY**(): `number`

The Y coordinate of the mouse pointer in local (DOM content) coordinates.

#### Returns

`number`

#### Inherited from

MouseEventExt.clientY

#### Defined in

[src/events/Events.ts:173](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L173)

___

### ctrlKey

• `get` **ctrlKey**(): `boolean`

Returns true if the control key was down when the mouse event was fired.

#### Returns

`boolean`

#### Inherited from

MouseEventExt.ctrlKey

#### Defined in

[src/events/Events.ts:175](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L175)

___

### defaultPrevented

• `get` **defaultPrevented**(): `boolean`

Indicates whether or not the call to event.preventDefault() canceled the event.

#### Returns

`boolean`

#### Inherited from

MouseEventExt.defaultPrevented

#### Defined in

[src/events/Events.ts:119](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L119)

___

### deltaX

• `get` **deltaX**(): `number`

Returns a double representing the horizontal scroll amount.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:285](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L285)

___

### deltaY

• `get` **deltaY**(): `number`

Returns a double representing the vertical scroll amount.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:287](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L287)

___

### deltaZ

• `get` **deltaZ**(): `number`

Returns a double representing the scroll amount for the z-axis.

#### Returns

`number`

#### Defined in

[src/events/Events.ts:289](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L289)

___

### metaKey

• `get` **metaKey**(): `boolean`

Returns true if the meta key was down when the mouse event was fired.

#### Returns

`boolean`

#### Inherited from

MouseEventExt.metaKey

#### Defined in

[src/events/Events.ts:177](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L177)

___

### movementX

• `get` **movementX**(): `number`

The X coordinate of the pointer relative to the position of the last event.

#### Returns

`number`

#### Inherited from

MouseEventExt.movementX

#### Defined in

[src/events/Events.ts:179](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L179)

___

### movementY

• `get` **movementY**(): `number`

The Y coordinate of the pointer relative to the position of the last event.

#### Returns

`number`

#### Inherited from

MouseEventExt.movementY

#### Defined in

[src/events/Events.ts:181](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L181)

___

### offsetX

• `get` **offsetX**(): `number`

The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.

#### Returns

`number`

#### Inherited from

MouseEventExt.offsetX

#### Defined in

[src/events/Events.ts:183](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L183)

___

### offsetY

• `get` **offsetY**(): `number`

The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.

#### Returns

`number`

#### Inherited from

MouseEventExt.offsetY

#### Defined in

[src/events/Events.ts:185](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L185)

___

### pageX

• `get` **pageX**(): `number`

The X coordinate of the mouse pointer relative to the whole document.

#### Returns

`number`

#### Inherited from

MouseEventExt.pageX

#### Defined in

[src/events/Events.ts:187](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L187)

___

### pageY

• `get` **pageY**(): `number`

The Y coordinate of the mouse pointer relative to the whole document.

#### Returns

`number`

#### Inherited from

MouseEventExt.pageY

#### Defined in

[src/events/Events.ts:189](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L189)

___

### screenX

• `get` **screenX**(): `number`

The X coordinate of the mouse pointer in global (screen) coordinates.

#### Returns

`number`

#### Inherited from

MouseEventExt.screenX

#### Defined in

[src/events/Events.ts:193](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L193)

___

### screenY

• `get` **screenY**(): `number`

The Y coordinate of the mouse pointer in global (screen) coordinates.

#### Returns

`number`

#### Inherited from

MouseEventExt.screenY

#### Defined in

[src/events/Events.ts:195](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L195)

___

### shiftKey

• `get` **shiftKey**(): `boolean`

Returns true if the shift key was down when the mouse event was fired.

#### Returns

`boolean`

#### Inherited from

MouseEventExt.shiftKey

#### Defined in

[src/events/Events.ts:197](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L197)

___

### target

• `get` **target**(): `T`

A reference to the object to which the event was originally dispatched.

#### Returns

`T`

#### Inherited from

MouseEventExt.target

#### Defined in

[src/events/Events.ts:121](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L121)

___

### type

• `get` **type**(): keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md)

The case-insensitive name identifying the type of the event.

#### Returns

keyof [`MiscEvents`](../interfaces/Events.MiscEvents.md) \| keyof [`InteractionEvents`](../interfaces/Events.InteractionEvents.md)<`Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\>, `Object3D`<`Object3DEventMap`\> \| [`InstancedMeshEntity`](InstancedMesh.InstancedMeshEntity.md)\> \| keyof [`UpdateEvents`](../interfaces/Events.UpdateEvents.md)

#### Inherited from

MouseEventExt.type

#### Defined in

[src/events/Events.ts:125](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L125)

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

#### Inherited from

[MouseEventExt](Events.MouseEventExt.md).[getModifierState](Events.MouseEventExt.md#getmodifierstate)

#### Defined in

[src/events/Events.ts:215](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L215)

___

### preventDefault

▸ **preventDefault**(): `void`

Cancels the event.

#### Returns

`void`

#### Inherited from

[MouseEventExt](Events.MouseEventExt.md).[preventDefault](Events.MouseEventExt.md#preventdefault)

#### Defined in

[src/events/Events.ts:141](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L141)

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance).

#### Returns

`void`

#### Inherited from

[MouseEventExt](Events.MouseEventExt.md).[stopImmediatePropagation](Events.MouseEventExt.md#stopimmediatepropagation)

#### Defined in

[src/events/Events.ts:146](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L146)

___

### stopPropagation

▸ **stopPropagation**(): `void`

Stops the propagation of events further along in the Object3D hierarchy.

#### Returns

`void`

#### Inherited from

[MouseEventExt](Events.MouseEventExt.md).[stopPropagation](Events.MouseEventExt.md#stoppropagation)

#### Defined in

[src/events/Events.ts:151](https://github.com/agargaro/three.ez/blob/dc547c7/src/events/Events.ts#L151)
