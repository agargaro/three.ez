---
editUrl: false
next: false
prev: false
title: "PointerEventExt"
---

Represents a custom extended pointer event.

## Extends

- [`MouseEventExt`](/api/classes/mouseeventext/)\<`T`, `R`\>

## Extended by

- [`DragEventExt`](/api/classes/drageventext/)

## Type Parameters

• **T** = `Object3D`

The type of the primary target for the event (default is `Object3D`).

• **R** = `Object3D`

The type of the related target for the event (default is `Object3D`).

## Constructors

### new PointerEventExt()

> **new PointerEventExt**\<`T`, `R`\>(`event`, `intersection`, `relatedTarget`?, `cancelable`?): [`PointerEventExt`](/api/classes/pointereventext/)\<`T`, `R`\>

#### Parameters

• **event**: `MouseEvent`

Original dom event.

• **intersection**: [`IntersectionExt`](/api/interfaces/intersectionext/)

The intersection information between the mouse event and 3D objects in the scene.

• **relatedTarget?**: `R`

The secondary target for the event.

• **cancelable?**: `boolean`

A boolean value indicating whether the event is cancelable.

#### Returns

[`PointerEventExt`](/api/classes/pointereventext/)\<`T`, `R`\>

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`constructor`](/api/classes/mouseeventext/#constructors)

#### Defined in

[src/events/Events.ts:208](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L208)

## Properties

### cancelable

> `readonly` **cancelable**: `any`

A boolean value indicating whether the event is cancelable.

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`cancelable`](/api/classes/mouseeventext/#cancelable)

#### Defined in

[src/events/Events.ts:116](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L116)

***

### currentTarget

> **currentTarget**: `T`

A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting.

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`currentTarget`](/api/classes/mouseeventext/#currenttarget)

#### Defined in

[src/events/Events.ts:118](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L118)

***

### domEvent

> `readonly` **domEvent**: `PointerEvent`

Original dom event.

#### Overrides

[`MouseEventExt`](/api/classes/mouseeventext/).[`domEvent`](/api/classes/mouseeventext/#domevent)

#### Defined in

[src/events/Events.ts:227](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L227)

***

### intersection

> `readonly` **intersection**: [`IntersectionExt`](/api/interfaces/intersectionext/)

Returns the intersection information between the mouse event and 3D objects in the scene.

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`intersection`](/api/classes/mouseeventext/#intersection)

#### Defined in

[src/events/Events.ts:200](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L200)

***

### relatedTarget

> `readonly` **relatedTarget**: `R`

The secondary target for the event, if there is one.

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`relatedTarget`](/api/classes/mouseeventext/#relatedtarget)

#### Defined in

[src/events/Events.ts:192](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L192)

***

### timeStamp

> `readonly` **timeStamp**: `number`

The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead.

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`timeStamp`](/api/classes/mouseeventext/#timestamp)

#### Defined in

[src/events/Events.ts:124](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L124)

## Accessors

### altKey

#### Get Signature

> **get** **altKey**(): `boolean`

Returns true if the alt key was down when the mouse event was fired.

##### Returns

`boolean`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`altKey`](/api/classes/mouseeventext/#altkey)

#### Defined in

[src/events/Events.ts:166](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L166)

***

### bubbles

#### Get Signature

> **get** **bubbles**(): `boolean`

A boolean value indicating whether or not the event bubbles up through the DOM.

##### Returns

`boolean`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`bubbles`](/api/classes/mouseeventext/#bubbles)

#### Defined in

[src/events/Events.ts:114](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L114)

***

### button

#### Get Signature

> **get** **button**(): `number`

The button number that was pressed (if applicable) when the mouse event was fired.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`button`](/api/classes/mouseeventext/#button)

#### Defined in

[src/events/Events.ts:168](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L168)

***

### buttons

#### Get Signature

> **get** **buttons**(): `number`

The buttons being pressed (if any) when the mouse event was fired.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`buttons`](/api/classes/mouseeventext/#buttons)

#### Defined in

[src/events/Events.ts:170](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L170)

***

### clientX

#### Get Signature

> **get** **clientX**(): `number`

The X coordinate of the mouse pointer in local (DOM content) coordinates.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`clientX`](/api/classes/mouseeventext/#clientx)

#### Defined in

[src/events/Events.ts:172](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L172)

***

### clientY

#### Get Signature

> **get** **clientY**(): `number`

The Y coordinate of the mouse pointer in local (DOM content) coordinates.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`clientY`](/api/classes/mouseeventext/#clienty)

#### Defined in

[src/events/Events.ts:174](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L174)

***

### ctrlKey

#### Get Signature

> **get** **ctrlKey**(): `boolean`

Returns true if the control key was down when the mouse event was fired.

##### Returns

`boolean`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`ctrlKey`](/api/classes/mouseeventext/#ctrlkey)

#### Defined in

[src/events/Events.ts:176](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L176)

***

### defaultPrevented

#### Get Signature

> **get** **defaultPrevented**(): `boolean`

Indicates whether or not the call to event.preventDefault() canceled the event.

##### Returns

`boolean`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`defaultPrevented`](/api/classes/mouseeventext/#defaultprevented)

#### Defined in

[src/events/Events.ts:120](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L120)

***

### height

#### Get Signature

> **get** **height**(): `number`

The height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer.

##### Returns

`number`

#### Defined in

[src/events/Events.ts:233](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L233)

***

### isPrimary

#### Get Signature

> **get** **isPrimary**(): `boolean`

Indicates if the pointer represents the primary pointer of this pointer type.

##### Returns

`boolean`

#### Defined in

[src/events/Events.ts:247](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L247)

***

### metaKey

#### Get Signature

> **get** **metaKey**(): `boolean`

Returns true if the meta key was down when the mouse event was fired.

##### Returns

`boolean`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`metaKey`](/api/classes/mouseeventext/#metakey)

#### Defined in

[src/events/Events.ts:178](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L178)

***

### movementX

#### Get Signature

> **get** **movementX**(): `number`

The X coordinate of the pointer relative to the position of the last event.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`movementX`](/api/classes/mouseeventext/#movementx)

#### Defined in

[src/events/Events.ts:180](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L180)

***

### movementY

#### Get Signature

> **get** **movementY**(): `number`

The Y coordinate of the pointer relative to the position of the last event.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`movementY`](/api/classes/mouseeventext/#movementy)

#### Defined in

[src/events/Events.ts:182](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L182)

***

### offsetX

#### Get Signature

> **get** **offsetX**(): `number`

The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`offsetX`](/api/classes/mouseeventext/#offsetx)

#### Defined in

[src/events/Events.ts:184](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L184)

***

### offsetY

#### Get Signature

> **get** **offsetY**(): `number`

The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`offsetY`](/api/classes/mouseeventext/#offsety)

#### Defined in

[src/events/Events.ts:186](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L186)

***

### pageX

#### Get Signature

> **get** **pageX**(): `number`

The X coordinate of the mouse pointer relative to the whole document.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`pageX`](/api/classes/mouseeventext/#pagex)

#### Defined in

[src/events/Events.ts:188](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L188)

***

### pageY

#### Get Signature

> **get** **pageY**(): `number`

The Y coordinate of the mouse pointer relative to the whole document.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`pageY`](/api/classes/mouseeventext/#pagey)

#### Defined in

[src/events/Events.ts:190](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L190)

***

### pointerId

#### Get Signature

> **get** **pointerId**(): `number`

A unique identifier for the pointer causing the event.

##### Returns

`number`

#### Defined in

[src/events/Events.ts:229](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L229)

***

### pointerType

#### Get Signature

> **get** **pointerType**(): `string`

Indicates the device type that caused the event (mouse, pen, touch, etc.).

##### Returns

`string`

#### Defined in

[src/events/Events.ts:245](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L245)

***

### pressure

#### Get Signature

> **get** **pressure**(): `number`

The normalized pressure of the pointer input in the range 0 to 1, where 0 and 1 represent the minimum and maximum pressure the hardware is capable of detecting, respectively.

##### Returns

`number`

#### Defined in

[src/events/Events.ts:235](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L235)

***

### screenX

#### Get Signature

> **get** **screenX**(): `number`

The X coordinate of the mouse pointer in global (screen) coordinates.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`screenX`](/api/classes/mouseeventext/#screenx)

#### Defined in

[src/events/Events.ts:194](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L194)

***

### screenY

#### Get Signature

> **get** **screenY**(): `number`

The Y coordinate of the mouse pointer in global (screen) coordinates.

##### Returns

`number`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`screenY`](/api/classes/mouseeventext/#screeny)

#### Defined in

[src/events/Events.ts:196](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L196)

***

### shiftKey

#### Get Signature

> **get** **shiftKey**(): `boolean`

Returns true if the shift key was down when the mouse event was fired.

##### Returns

`boolean`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`shiftKey`](/api/classes/mouseeventext/#shiftkey)

#### Defined in

[src/events/Events.ts:198](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L198)

***

### tangentialPressure

#### Get Signature

> **get** **tangentialPressure**(): `number`

The normalized tangential pressure of the pointer input (also known as barrel pressure or cylinder stress) in the range -1 to 1, where 0 is the neutral position of the control.

##### Returns

`number`

#### Defined in

[src/events/Events.ts:237](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L237)

***

### target

#### Get Signature

> **get** **target**(): `T`

A reference to the object to which the event was originally dispatched.

##### Returns

`T`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`target`](/api/classes/mouseeventext/#target)

#### Defined in

[src/events/Events.ts:122](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L122)

***

### tiltX

#### Get Signature

> **get** **tiltX**(): `number`

The plane angle (in degrees, in the range of -90 to 90) between the Y–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the Y axis.

##### Returns

`number`

#### Defined in

[src/events/Events.ts:239](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L239)

***

### tiltY

#### Get Signature

> **get** **tiltY**(): `number`

The plane angle (in degrees, in the range of -90 to 90) between the X–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the X axis.

##### Returns

`number`

#### Defined in

[src/events/Events.ts:241](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L241)

***

### twist

#### Get Signature

> **get** **twist**(): `number`

The clockwise rotation of the pointer (e.g. pen stylus) around its major axis in degrees, with a value in the range 0 to 359.

##### Returns

`number`

#### Defined in

[src/events/Events.ts:243](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L243)

***

### type

#### Get Signature

> **get** **type**(): keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

The case-insensitive name identifying the type of the event.

##### Returns

keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`type`](/api/classes/mouseeventext/#type)

#### Defined in

[src/events/Events.ts:126](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L126)

***

### width

#### Get Signature

> **get** **width**(): `number`

The width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer.

##### Returns

`number`

#### Defined in

[src/events/Events.ts:231](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L231)

## Methods

### getModifierState()

> **getModifierState**(`keyArg`): `boolean`

Returns the current state of the specified modifier key. See KeyboardEvent.getModifierState() for details.

#### Parameters

• **keyArg**: `string`

#### Returns

`boolean`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`getModifierState`](/api/classes/mouseeventext/#getmodifierstate)

#### Defined in

[src/events/Events.ts:216](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L216)

***

### preventDefault()

> **preventDefault**(): `void`

Cancels the event.

#### Returns

`void`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`preventDefault`](/api/classes/mouseeventext/#preventdefault)

#### Defined in

[src/events/Events.ts:142](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L142)

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance).

#### Returns

`void`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`stopImmediatePropagation`](/api/classes/mouseeventext/#stopimmediatepropagation)

#### Defined in

[src/events/Events.ts:147](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L147)

***

### stopPropagation()

> **stopPropagation**(): `void`

Stops the propagation of events further along in the Object3D hierarchy.

#### Returns

`void`

#### Inherited from

[`MouseEventExt`](/api/classes/mouseeventext/).[`stopPropagation`](/api/classes/mouseeventext/#stoppropagation)

#### Defined in

[src/events/Events.ts:152](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L152)
