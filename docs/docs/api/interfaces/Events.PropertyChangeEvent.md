---
id: "Events.PropertyChangeEvent"
title: "Interface: PropertyChangeEvent<V>"
sidebar_label: "PropertyChangeEvent"
custom_edit_url: null
---

[Events](../namespaces/Events.md).PropertyChangeEvent

Represents a property change event.

## Type parameters

| Name | Description |
| :------ | :------ |
| `V` | The type of the new value associated with the property change. |

## Properties

### target

• **target**: `Object3D`<`Object3DEventMap`\>

A reference to the object to which the event was originally dispatched.

#### Defined in

[src/events/Events.ts:396](https://github.com/agargaro/three.ez/blob/a06fa88/src/events/Events.ts#L396)

___

### value

• **value**: `V`

The new value associated with the property change.

#### Defined in

[src/events/Events.ts:398](https://github.com/agargaro/three.ez/blob/a06fa88/src/events/Events.ts#L398)
