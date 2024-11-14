---
editUrl: false
next: false
prev: false
title: "Object3DExtPrototype"
---

Represents the prototype for extended Object3D functionality.

## Properties

### cursor

> **cursor**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when interacting with the object.

#### Defined in

[src/patch/Object3D.ts:59](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L59)

***

### cursorDrag

> **cursorDrag**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when dragging the object.

#### Defined in

[src/patch/Object3D.ts:61](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L61)

***

### cursorDrop

> **cursorDrop**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when dropping an object onto this one.

#### Defined in

[src/patch/Object3D.ts:63](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L63)

***

### draggable

> **draggable**: `boolean`

Indicates whether the object is draggable. Default is DEFAULT_DRAGGABLE (`false`).

#### Defined in

[src/patch/Object3D.ts:53](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L53)

***

### dragTarget

> **dragTarget**: `Object3D`\<`Object3DEventMap`\>

Indicates which object will be dragged instead of this one.

#### Defined in

[src/patch/Object3D.ts:49](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L49)

***

### enabled

> **enabled**: `boolean`

Determines if the object is enabled. Default is `true`.
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Defined in

[src/patch/Object3D.ts:40](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L40)

***

### findDropTarget

> **findDropTarget**: `boolean`

Determines when the object is dragged, whether it will have to search for any drop targets. Default is `false`.

#### Defined in

[src/patch/Object3D.ts:55](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L55)

***

### focusable

> **focusable**: `boolean`

Indicates whether the object can receive focus. Default is DEFAULT_FOCUSABLE (`true`).

#### Defined in

[src/patch/Object3D.ts:51](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L51)

***

### hitboxes

> **hitboxes**: [`Hitbox`](/three.ez/api/classes/hitbox/)[]

Array of hitboxes for collision detection.

#### Defined in

[src/patch/Object3D.ts:47](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L47)

***

### interceptByRaycaster

> **interceptByRaycaster**: `boolean`

Determines if the **object** and **all of its children** can be intercepted by the main raycaster.

#### Default

```ts
DEFAULT_INTERCEPT_BY_RAYCASTER (true).
```

#### Defined in

[src/patch/Object3D.ts:45](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L45)

***

### needsRender

> **needsRender**: `boolean`

Indicates whether the scene needs rendering.

#### Defined in

[src/patch/Object3D.ts:65](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L65)

***

### scene

> **scene**: `Scene`

Reference to the scene the object belongs to.

#### Defined in

[src/patch/Object3D.ts:57](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L57)

***

### tags

> **tags**: `Set`\<`string`\>

Indicates the tags to be searched using the querySelector and `querySelectorAll` methods.

#### Defined in

[src/patch/Object3D.ts:67](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L67)

## Accessors

### clicking

#### Get Signature

> **get** **clicking**(): `boolean`

Indicates if the object is currently being clicked.

##### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:73](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L73)

***

### enabledState

#### Get Signature

> **get** **enabledState**(): `boolean`

Retrieves the combined enabled state considering parent objects.

##### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:77](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L77)

***

### firstFocusable

#### Get Signature

> **get** **firstFocusable**(): `Object3D`\<`Object3DEventMap`\>

Retrieves the first possible focusable object.

##### Returns

`Object3D`\<`Object3DEventMap`\>

#### Defined in

[src/patch/Object3D.ts:81](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L81)

***

### focused

#### Get Signature

> **get** **focused**(): `boolean`

Indicates if the object is currently focused.

##### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:71](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L71)

***

### hovered

#### Get Signature

> **get** **hovered**(): `boolean`

Indicates if the primary pointer is over this object.

##### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:69](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L69)

***

### isDragging

#### Get Signature

> **get** **isDragging**(): `boolean`

Indicates if the object is currently being dragged.

##### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:75](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L75)

***

### visibilityState

#### Get Signature

> **get** **visibilityState**(): `boolean`

Retrieves the combined visibility state considering parent objects.

##### Returns

`boolean`

#### Defined in

[src/patch/Object3D.ts:79](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L79)

## Methods

### applyBlur()

> **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:89](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L89)

***

### applyFocus()

> **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:85](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L85)

***

### bindProperty()

> **bindProperty**\<`T`\>(`property`, `getCallback`, `renderOnChange`?): `this`

Binds a property to a callback function for updates.

#### Type Parameters

• **T** *extends* keyof [`Object3DExtPrototype`](/three.ez/api/interfaces/object3dextprototype/)

#### Parameters

• **property**: `T`

The name of the property to bind.

• **getCallback**

A function that retrieves the property's value.

• **renderOnChange?**: `boolean`

Indicates whether to render when the property changes (optional, default: `false`).

#### Returns

`this`

The instance of the object with the binding applied.

#### Defined in

[src/patch/Object3D.ts:141](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L141)

***

### detectChanges()

> **detectChanges**(`recursive`?): `void`

Calculates all bindings on the current object.
If 'recursive' is set to true, it will also calculate bindings for all children.

#### Parameters

• **recursive?**: `boolean`

If true, calculate bindings for children as well (optional, default: `false`).

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:133](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L133)

***

### hasEvent()

> **hasEvent**\<`K`\>(`type`, `listener`): `boolean`

Checks if the object has a specific event listener.

#### Type Parameters

• **K** *extends* keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Parameters

• **type**: `K`

The type of event to check for.

• **listener**

The callback function to check.

#### Returns

`boolean`

`true` if the event listener is attached; otherwise, `false`.

#### Defined in

[src/patch/Object3D.ts:103](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L103)

***

### off()

> **off**\<`K`\>(`type`, `listener`): `void`

Removes an event listener from the object.

#### Type Parameters

• **K** *extends* keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Parameters

• **type**: `K`

The type of event to remove the listener from.

• **listener**

The callback function to remove.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:109](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L109)

***

### on()

> **on**\<`K`\>(`type`, `listener`): (`event`?) => `void`

Attaches an event listener to the object.

#### Type Parameters

• **K** *extends* keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Parameters

• **type**: `K` \| `K`[]

The type of event to listen for.

• **listener**

The callback function to execute when the event occurs.

#### Returns

`Function`

A function to remove the event listener.

##### Parameters

• **event?**: [`Events`](/three.ez/api/type-aliases/events/)\[`K`\]

##### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:96](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L96)

***

### querySelector()

> **querySelector**(`query`): `Object3D`\<`Object3DEventMap`\>

Finds and returns the first Object3D element that matches the specified query string.
This method follows a similar syntax to CSS selectors.

#### Parameters

• **query**: `string`

The query string to match against the Object3D elements.

#### Returns

`Object3D`\<`Object3DEventMap`\>

The first Object3D element that matches the query, or undefined if no match is found.

#### Defined in

[src/patch/Object3D.ts:161](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L161)

***

### querySelectorAll()

> **querySelectorAll**(`query`): `Object3D`\<`Object3DEventMap`\>[]

Finds and returns a list of Object3D elements that match the specified query string.
This method follows a similar syntax to CSS selectors.

#### Parameters

• **query**: `string`

The query string to match against the Object3D elements.

#### Returns

`Object3D`\<`Object3DEventMap`\>[]

An array of Object3D elements that match the query.

#### Defined in

[src/patch/Object3D.ts:168](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L168)

***

### setManualDetectionMode()

> **setManualDetectionMode**(): `void`

Activates manual detection mode for bindings.
When this method is used, all bindings will no longer be calculated automatically.
Instead, they must be manually computed using the 'detectChanges' function.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:127](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L127)

***

### trigger()

> **trigger**\<`K`\>(`type`, `event`?): `void`

Triggers a specific event on the object.

#### Type Parameters

• **K** *extends* keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Parameters

• **type**: `K`

The type of event to trigger.

• **event?**: [`Events`](/three.ez/api/type-aliases/events/)\[`K`\]

Optional event data to pass to the listeners.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:115](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L115)

***

### triggerAncestor()

> **triggerAncestor**\<`K`\>(`type`, `event`?): `void`

Triggers a specific event on the object and all its ancestors.

#### Type Parameters

• **K** *extends* keyof [`InteractionEvents`](/three.ez/api/interfaces/interactionevents/)\<`Object3D`\<`Object3DEventMap`\>, `Object3D`\<`Object3DEventMap`\>, `Object3D`\<`Object3DEventMap`\> \| [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)\>

#### Parameters

• **type**: `K`

The type of event to trigger.

• **event?**: [`InteractionEvents`](/three.ez/api/interfaces/interactionevents/)\<`Object3D`\<`Object3DEventMap`\>, `Object3D`\<`Object3DEventMap`\>, `Object3D`\<`Object3DEventMap`\> \| [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)\>\[`K`\]

Optional event data to pass to the listeners.

#### Returns

`void`

#### Defined in

[src/patch/Object3D.ts:121](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L121)

***

### tween()

> **tween**\<`T`\>(`id`?): [`Tween`](/three.ez/api/classes/tween/)\<`T`\>

Initiates a Tween animation for the object.

#### Type Parameters

• **T** *extends* `Object3D`\<`Object3DEventMap`\> = `Object3D`\<`Object3DEventMap`\>

The type of the target.

#### Parameters

• **id?**: `string`

Unique identifier. If you start a new tween, the old one with the same id (if specified) will be stopped.

#### Returns

[`Tween`](/three.ez/api/classes/tween/)\<`T`\>

A Tween instance for further configuration.

#### Defined in

[src/patch/Object3D.ts:154](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L154)

***

### unbindProperty()

> **unbindProperty**\<`T`\>(`property`): `this`

Unbinds a previously bound property from the object.

#### Type Parameters

• **T** *extends* keyof [`Object3DExtPrototype`](/three.ez/api/interfaces/object3dextprototype/)

#### Parameters

• **property**: `T`

The name of the property to unbind.

#### Returns

`this`

The instance of the object with the binding removed.

#### Defined in

[src/patch/Object3D.ts:147](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L147)
