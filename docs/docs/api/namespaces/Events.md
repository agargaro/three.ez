---
id: "Events"
title: "Namespace: Events"
sidebar_label: "Events"
sidebar_position: 0
custom_edit_url: null
---

This package exports all decorators that are available in Sequelize, built using the legacy stage-3 decorators proposal.

All available decorators can be imported as follows:

```js
import { HasOne, Attribute } from '@sequelize/core/decorators-legacy';
```

## Classes

- [DragEventExt](../classes/Events.DragEventExt.md)
- [EventExt](../classes/Events.EventExt.md)
- [FocusEventExt](../classes/Events.FocusEventExt.md)
- [KeyboardEventExt](../classes/Events.KeyboardEventExt.md)
- [MouseEventExt](../classes/Events.MouseEventExt.md)
- [PointerEventExt](../classes/Events.PointerEventExt.md)
- [PointerIntersectionEvent](../classes/Events.PointerIntersectionEvent.md)
- [WheelEventExt](../classes/Events.WheelEventExt.md)

## Interfaces

- [AnimateEvent](../interfaces/Events.AnimateEvent.md)
- [InteractionEvents](../interfaces/Events.InteractionEvents.md)
- [IntersectionExt](../interfaces/Events.IntersectionExt.md)
- [MiscEvents](../interfaces/Events.MiscEvents.md)
- [PropertyChangeEvent](../interfaces/Events.PropertyChangeEvent.md)
- [RendererResizeEvent](../interfaces/Events.RendererResizeEvent.md)
- [UpdateEvents](../interfaces/Events.UpdateEvents.md)

## Type Aliases

### Cursor

Ƭ **Cursor**: [`CursorsKeys`](Events.md#cursorskeys) \| `String`

Indicates a cursor by a list or by url.

#### Defined in

[src/events/CursorManager.ts:25](https://github.com/agargaro/three.ez/blob/2012bca/src/events/CursorManager.ts#L25)

___

### CursorsKeys

Ƭ **CursorsKeys**: ``"auto"`` \| ``"default"`` \| ``"none"`` \| ``"context-menu"`` \| ``"help"`` \| ``"pointer"`` \| ``"progress"`` \| ``"wait"`` \| ``"cell"`` \| ``"crosshair"`` \| ``"text"`` \| ``"vertical-text"`` \| ``"alias"`` \| ``"copy"`` \| ``"move"`` \| ``"no-drop"`` \| ``"not-allowed"`` \| ``"grab"`` \| ``"grabbing"`` \| ``"all-scroll"`` \| ``"col-resize"`` \| ``"row-resize"`` \| ``"n-resize"`` \| ``"e-resize"`` \| ``"s-resize"`` \| ``"w-resize"`` \| ``"ne-resize"`` \| ``"nw-resize"`` \| ``"se-resize"`` \| ``"sw-resize"`` \| ``"ew-resize"`` \| ``"ns-resize"`` \| ``"nesw-resize"`` \| ``"nwse-resize"`` \| ``"zoom-in"`` \| ``"zoom-out"``

https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

#### Defined in

[src/events/CursorManager.ts:12](https://github.com/agargaro/three.ez/blob/2012bca/src/events/CursorManager.ts#L12)

___

### RaycasterSortComparer

Ƭ **RaycasterSortComparer**: (`a`: [`IntersectionExt`](../interfaces/Events.IntersectionExt.md), `b`: [`IntersectionExt`](../interfaces/Events.IntersectionExt.md)) => `number`

#### Type declaration

▸ (`a`, `b`): `number`

A custom sorting comparer function used to order intersections when performing raycasting.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`IntersectionExt`](../interfaces/Events.IntersectionExt.md) | The first intersection to compare. |
| `b` | [`IntersectionExt`](../interfaces/Events.IntersectionExt.md) | The second intersection to compare. |

##### Returns

`number`

A negative number if `a` should come before `b`, a positive number if `b` should come before `a`, or zero if their order does not matter.

#### Defined in

[src/events/RaycasterManager.ts:11](https://github.com/agargaro/three.ez/blob/2012bca/src/events/RaycasterManager.ts#L11)
