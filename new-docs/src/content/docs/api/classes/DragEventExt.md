---
editUrl: false
next: false
prev: false
title: "DragEventExt"
---

Represents a custom extended drag event.

## Extends

- [`PointerEventExt`](/three.ez/api/classes/pointereventext/)\<`T`, `R`\>

## Type Parameters

• **T** = `Object3D`

The type of the primary target for the event (default is `Object3D`).

• **R** = `Object3D` \| [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

The type of the related target for the event (default is `Object3D` or `InstancedMeshEntity`).

## Constructors

### new DragEventExt()

> **new DragEventExt**\<`T`, `R`\>(`event`?, `cancelable`?, `dataTransfer`?, `position`?, `relatedTarget`?, `intersection`?): [`DragEventExt`](/three.ez/api/classes/drageventext/)\<`T`, `R`\>

#### Parameters

• **event?**: `PointerEvent`

Original dom event.

• **cancelable?**: `boolean`

A boolean value indicating whether the event is cancelable.

• **dataTransfer?** = `{}`

The data that is transferred during a drag and drop interaction.

• **position?**: `Vector3`

The new position of the dragged object.

• **relatedTarget?**: `R`

The secondary target for the event.

• **intersection?**: [`IntersectionExt`](/three.ez/api/interfaces/intersectionext/)

The intersection information between the mouse event and 3D objects in the scene.

#### Returns

[`DragEventExt`](/three.ez/api/classes/drageventext/)\<`T`, `R`\>

#### Overrides

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`constructor`](/three.ez/api/classes/pointereventext/#constructors)

#### Defined in

[src/events/Events.ts:269](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L269)

## Properties

### cancelable

> `readonly` **cancelable**: `any`

A boolean value indicating whether the event is cancelable.

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`cancelable`](/three.ez/api/classes/pointereventext/#cancelable)

#### Defined in

[src/events/Events.ts:116](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L116)

***

### currentTarget

> **currentTarget**: `T`

A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting.

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`currentTarget`](/three.ez/api/classes/pointereventext/#currenttarget)

#### Defined in

[src/events/Events.ts:118](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L118)

***

### dataTransfer

> `readonly` **dataTransfer**: `object`

The data that is transferred during a drag and drop interaction.

#### Index Signature

 \[`x`: `string`\]: `any`

#### Defined in

[src/events/Events.ts:257](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L257)

***

### domEvent

> `readonly` **domEvent**: `PointerEvent`

Original dom event.

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`domEvent`](/three.ez/api/classes/pointereventext/#domevent)

#### Defined in

[src/events/Events.ts:227](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L227)

***

### intersection

> `readonly` **intersection**: [`IntersectionExt`](/three.ez/api/interfaces/intersectionext/)

Returns the intersection information between the mouse event and 3D objects in the scene.

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`intersection`](/three.ez/api/classes/pointereventext/#intersection)

#### Defined in

[src/events/Events.ts:200](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L200)

***

### position

> `readonly` **position**: `Vector3`

Returns the new position of the dragged object.'

#### Defined in

[src/events/Events.ts:259](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L259)

***

### relatedTarget

> `readonly` **relatedTarget**: `R`

The secondary target for the event, if there is one.

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`relatedTarget`](/three.ez/api/classes/pointereventext/#relatedtarget)

#### Defined in

[src/events/Events.ts:192](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L192)

***

### timeStamp

> `readonly` **timeStamp**: `number`

The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead.

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`timeStamp`](/three.ez/api/classes/pointereventext/#timestamp)

#### Defined in

[src/events/Events.ts:124](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L124)

## Accessors

### altKey

#### Get Signature

> **get** **altKey**(): `boolean`

Returns true if the alt key was down when the mouse event was fired.

##### Returns

`boolean`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`altKey`](/three.ez/api/classes/pointereventext/#altkey)

#### Defined in

[src/events/Events.ts:166](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L166)

***

### bubbles

#### Get Signature

> **get** **bubbles**(): `boolean`

A boolean value indicating whether or not the event bubbles up through the DOM.

##### Returns

`boolean`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`bubbles`](/three.ez/api/classes/pointereventext/#bubbles)

#### Defined in

[src/events/Events.ts:114](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L114)

***

### button

#### Get Signature

> **get** **button**(): `number`

The button number that was pressed (if applicable) when the mouse event was fired.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`button`](/three.ez/api/classes/pointereventext/#button)

#### Defined in

[src/events/Events.ts:168](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L168)

***

### buttons

#### Get Signature

> **get** **buttons**(): `number`

The buttons being pressed (if any) when the mouse event was fired.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`buttons`](/three.ez/api/classes/pointereventext/#buttons)

#### Defined in

[src/events/Events.ts:170](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L170)

***

### clientX

#### Get Signature

> **get** **clientX**(): `number`

The X coordinate of the mouse pointer in local (DOM content) coordinates.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`clientX`](/three.ez/api/classes/pointereventext/#clientx)

#### Defined in

[src/events/Events.ts:172](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L172)

***

### clientY

#### Get Signature

> **get** **clientY**(): `number`

The Y coordinate of the mouse pointer in local (DOM content) coordinates.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`clientY`](/three.ez/api/classes/pointereventext/#clienty)

#### Defined in

[src/events/Events.ts:174](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L174)

***

### ctrlKey

#### Get Signature

> **get** **ctrlKey**(): `boolean`

Returns true if the control key was down when the mouse event was fired.

##### Returns

`boolean`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`ctrlKey`](/three.ez/api/classes/pointereventext/#ctrlkey)

#### Defined in

[src/events/Events.ts:176](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L176)

***

### defaultPrevented

#### Get Signature

> **get** **defaultPrevented**(): `boolean`

Indicates whether or not the call to event.preventDefault() canceled the event.

##### Returns

`boolean`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`defaultPrevented`](/three.ez/api/classes/pointereventext/#defaultprevented)

#### Defined in

[src/events/Events.ts:120](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L120)

***

### height

#### Get Signature

> **get** **height**(): `number`

The height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`height`](/three.ez/api/classes/pointereventext/#height)

#### Defined in

[src/events/Events.ts:233](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L233)

***

### isPrimary

#### Get Signature

> **get** **isPrimary**(): `boolean`

Indicates if the pointer represents the primary pointer of this pointer type.

##### Returns

`boolean`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`isPrimary`](/three.ez/api/classes/pointereventext/#isprimary)

#### Defined in

[src/events/Events.ts:247](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L247)

***

### metaKey

#### Get Signature

> **get** **metaKey**(): `boolean`

Returns true if the meta key was down when the mouse event was fired.

##### Returns

`boolean`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`metaKey`](/three.ez/api/classes/pointereventext/#metakey)

#### Defined in

[src/events/Events.ts:178](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L178)

***

### movementX

#### Get Signature

> **get** **movementX**(): `number`

The X coordinate of the pointer relative to the position of the last event.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`movementX`](/three.ez/api/classes/pointereventext/#movementx)

#### Defined in

[src/events/Events.ts:180](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L180)

***

### movementY

#### Get Signature

> **get** **movementY**(): `number`

The Y coordinate of the pointer relative to the position of the last event.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`movementY`](/three.ez/api/classes/pointereventext/#movementy)

#### Defined in

[src/events/Events.ts:182](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L182)

***

### offsetX

#### Get Signature

> **get** **offsetX**(): `number`

The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`offsetX`](/three.ez/api/classes/pointereventext/#offsetx)

#### Defined in

[src/events/Events.ts:184](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L184)

***

### offsetY

#### Get Signature

> **get** **offsetY**(): `number`

The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`offsetY`](/three.ez/api/classes/pointereventext/#offsety)

#### Defined in

[src/events/Events.ts:186](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L186)

***

### pageX

#### Get Signature

> **get** **pageX**(): `number`

The X coordinate of the mouse pointer relative to the whole document.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`pageX`](/three.ez/api/classes/pointereventext/#pagex)

#### Defined in

[src/events/Events.ts:188](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L188)

***

### pageY

#### Get Signature

> **get** **pageY**(): `number`

The Y coordinate of the mouse pointer relative to the whole document.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`pageY`](/three.ez/api/classes/pointereventext/#pagey)

#### Defined in

[src/events/Events.ts:190](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L190)

***

### pointerId

#### Get Signature

> **get** **pointerId**(): `number`

A unique identifier for the pointer causing the event.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`pointerId`](/three.ez/api/classes/pointereventext/#pointerid)

#### Defined in

[src/events/Events.ts:229](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L229)

***

### pointerType

#### Get Signature

> **get** **pointerType**(): `string`

Indicates the device type that caused the event (mouse, pen, touch, etc.).

##### Returns

`string`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`pointerType`](/three.ez/api/classes/pointereventext/#pointertype)

#### Defined in

[src/events/Events.ts:245](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L245)

***

### pressure

#### Get Signature

> **get** **pressure**(): `number`

The normalized pressure of the pointer input in the range 0 to 1, where 0 and 1 represent the minimum and maximum pressure the hardware is capable of detecting, respectively.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`pressure`](/three.ez/api/classes/pointereventext/#pressure)

#### Defined in

[src/events/Events.ts:235](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L235)

***

### screenX

#### Get Signature

> **get** **screenX**(): `number`

The X coordinate of the mouse pointer in global (screen) coordinates.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`screenX`](/three.ez/api/classes/pointereventext/#screenx)

#### Defined in

[src/events/Events.ts:194](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L194)

***

### screenY

#### Get Signature

> **get** **screenY**(): `number`

The Y coordinate of the mouse pointer in global (screen) coordinates.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`screenY`](/three.ez/api/classes/pointereventext/#screeny)

#### Defined in

[src/events/Events.ts:196](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L196)

***

### shiftKey

#### Get Signature

> **get** **shiftKey**(): `boolean`

Returns true if the shift key was down when the mouse event was fired.

##### Returns

`boolean`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`shiftKey`](/three.ez/api/classes/pointereventext/#shiftkey)

#### Defined in

[src/events/Events.ts:198](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L198)

***

### tangentialPressure

#### Get Signature

> **get** **tangentialPressure**(): `number`

The normalized tangential pressure of the pointer input (also known as barrel pressure or cylinder stress) in the range -1 to 1, where 0 is the neutral position of the control.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`tangentialPressure`](/three.ez/api/classes/pointereventext/#tangentialpressure)

#### Defined in

[src/events/Events.ts:237](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L237)

***

### target

#### Get Signature

> **get** **target**(): `T`

A reference to the object to which the event was originally dispatched.

##### Returns

`T`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`target`](/three.ez/api/classes/pointereventext/#target)

#### Defined in

[src/events/Events.ts:122](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L122)

***

### tiltX

#### Get Signature

> **get** **tiltX**(): `number`

The plane angle (in degrees, in the range of -90 to 90) between the Y–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the Y axis.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`tiltX`](/three.ez/api/classes/pointereventext/#tiltx)

#### Defined in

[src/events/Events.ts:239](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L239)

***

### tiltY

#### Get Signature

> **get** **tiltY**(): `number`

The plane angle (in degrees, in the range of -90 to 90) between the X–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the X axis.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`tiltY`](/three.ez/api/classes/pointereventext/#tilty)

#### Defined in

[src/events/Events.ts:241](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L241)

***

### twist

#### Get Signature

> **get** **twist**(): `number`

The clockwise rotation of the pointer (e.g. pen stylus) around its major axis in degrees, with a value in the range 0 to 359.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`twist`](/three.ez/api/classes/pointereventext/#twist)

#### Defined in

[src/events/Events.ts:243](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L243)

***

### type

#### Get Signature

> **get** **type**(): keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

The case-insensitive name identifying the type of the event.

##### Returns

keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`type`](/three.ez/api/classes/pointereventext/#type)

#### Defined in

[src/events/Events.ts:126](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L126)

***

### width

#### Get Signature

> **get** **width**(): `number`

The width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer.

##### Returns

`number`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`width`](/three.ez/api/classes/pointereventext/#width)

#### Defined in

[src/events/Events.ts:231](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L231)

## Methods

### getModifierState()

> **getModifierState**(`keyArg`): `boolean`

Returns the current state of the specified modifier key. See KeyboardEvent.getModifierState() for details.

#### Parameters

• **keyArg**: `string`

#### Returns

`boolean`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`getModifierState`](/three.ez/api/classes/pointereventext/#getmodifierstate)

#### Defined in

[src/events/Events.ts:216](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L216)

***

### preventDefault()

> **preventDefault**(): `void`

Cancels the event.

#### Returns

`void`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`preventDefault`](/three.ez/api/classes/pointereventext/#preventdefault)

#### Defined in

[src/events/Events.ts:142](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L142)

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance).

#### Returns

`void`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`stopImmediatePropagation`](/three.ez/api/classes/pointereventext/#stopimmediatepropagation)

#### Defined in

[src/events/Events.ts:147](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L147)

***

### stopPropagation()

> **stopPropagation**(): `void`

Stops the propagation of events further along in the Object3D hierarchy.

#### Returns

`void`

#### Inherited from

[`PointerEventExt`](/three.ez/api/classes/pointereventext/).[`stopPropagation`](/three.ez/api/classes/pointereventext/#stoppropagation)

#### Defined in

[src/events/Events.ts:152](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L152)
