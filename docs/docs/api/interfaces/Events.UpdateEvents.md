---
id: "Events.UpdateEvents"
title: "Interface: UpdateEvents"
sidebar_label: "UpdateEvents"
custom_edit_url: null
---

[Events](../namespaces/Events.md).UpdateEvents

Represents events related to updates. These events do not propagate to parents.

## Properties

### enabledchange

• **enabledchange**: [`PropertyChangeEvent`](Events.PropertyChangeEvent.md)<`boolean`\>

Event triggered when the enabledState of the object changes (either its own or the parent's `enabled` property).

#### Defined in

[src/events/Events.ts:18](https://github.com/agargaro/three.ez/blob/fab1372/src/events/Events.ts#L18)

___

### positionchange

• **positionchange**: `never`

Event triggered when the position of the object changes.

#### Defined in

[src/events/Events.ts:12](https://github.com/agargaro/three.ez/blob/fab1372/src/events/Events.ts#L12)

___

### rotationchange

• **rotationchange**: `never`

Event triggered when the rotation of the object changes.

#### Defined in

[src/events/Events.ts:16](https://github.com/agargaro/three.ez/blob/fab1372/src/events/Events.ts#L16)

___

### scalechange

• **scalechange**: `never`

Event triggered when the scale of the object changes.

#### Defined in

[src/events/Events.ts:14](https://github.com/agargaro/three.ez/blob/fab1372/src/events/Events.ts#L14)

___

### visiblechange

• **visiblechange**: [`PropertyChangeEvent`](Events.PropertyChangeEvent.md)<`boolean`\>

Event triggered when the visibilityState of the object changes (either its own or the parent's `visible` property).

#### Defined in

[src/events/Events.ts:20](https://github.com/agargaro/three.ez/blob/fab1372/src/events/Events.ts#L20)
