---
id: "Events.MiscEvents"
title: "Interface: MiscEvents"
sidebar_label: "MiscEvents"
custom_edit_url: null
---

[Events](../namespaces/Events.md).MiscEvents

Represents miscellaneous events. These events do not propagate to parents.

## Properties

### afteranimate

• **afteranimate**: [`AnimateEvent`](Events.AnimateEvent.md)

Event triggered every frame, after 'animate'. Usually used if you want to operate after the animation is computed.

#### Defined in

[src/events/Events.ts:35](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L35)

___

### animate

• **animate**: [`AnimateEvent`](Events.AnimateEvent.md)

Event triggered every frame. Used to animate objects.

#### Defined in

[src/events/Events.ts:33](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L33)

___

### beforeanimate

• **beforeanimate**: [`AnimateEvent`](Events.AnimateEvent.md)

Event triggered every frame, before 'animate'. Usually used to prepare object animations.

#### Defined in

[src/events/Events.ts:31](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L31)

___

### viewportresize

• **viewportresize**: [`ViewportResizeEvent`](Events.ViewportResizeEvent.md)

Event triggered on first render and every time an object is rendered with a different viewport size from the previous one.

#### Defined in

[src/events/Events.ts:29](https://github.com/agargaro/three.ez/blob/ddf86ba/src/events/Events.ts#L29)
