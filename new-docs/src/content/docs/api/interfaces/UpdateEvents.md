---
editUrl: false
next: false
prev: false
title: "UpdateEvents"
---

Represents events related to updates. These events do not propagate to parents.

## Properties

### enabledchange

> **enabledchange**: [`PropertyChangeEvent`](/three.ez/api/interfaces/propertychangeevent/)\<`boolean`\>

Event triggered when the enabledState of the object changes (either its own or the parent's `enabled` property).

#### Defined in

[src/events/Events.ts:19](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L19)

***

### positionchange

> **positionchange**: `never`

Event triggered when the position of the object changes.

#### Defined in

[src/events/Events.ts:13](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L13)

***

### rotationchange

> **rotationchange**: `never`

Event triggered when the rotation of the object changes.

#### Defined in

[src/events/Events.ts:17](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L17)

***

### scalechange

> **scalechange**: `never`

Event triggered when the scale of the object changes.

#### Defined in

[src/events/Events.ts:15](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L15)

***

### visiblechange

> **visiblechange**: [`PropertyChangeEvent`](/three.ez/api/interfaces/propertychangeevent/)\<`boolean`\>

Event triggered when the visibilityState of the object changes (either its own or the parent's `visible` property).

#### Defined in

[src/events/Events.ts:21](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L21)
