---
id: "Events.InteractionEvents"
title: "Interface: InteractionEvents<T, R, RD>"
sidebar_label: "InteractionEvents"
custom_edit_url: null
---

[Events](../namespaces/Events.md).InteractionEvents

Represents interaction events. These events propagate to parents.

**`Typeparam`**

T - The primary target type.

**`Typeparam`**

R - The related target type.

**`Typeparam`**

RD - The related target type on drag events.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Object3D` |
| `R` | `Object3D` |
| `RD` | `Object3D` \| [`InstancedMeshEntity`](../classes/InstancedMesh.InstancedMeshEntity.md) |

## Properties

### blur

• **blur**: [`FocusEventExt`](../classes/Events.FocusEventExt.md)<`T`, `R`\>

Event triggered when target loses focus.

#### Defined in

[src/events/Events.ts:73](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L73)

___

### click

• **click**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a click event occurs.

#### Defined in

[src/events/Events.ts:61](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L61)

___

### dblclick

• **dblclick**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a double click event occurs.

#### Defined in

[src/events/Events.ts:63](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L63)

___

### drag

• **drag**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when the target is dragged.

#### Defined in

[src/events/Events.ts:79](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L79)

___

### dragcancel

• **dragcancel**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when dragging is canceled (Can be canceled pressing 'ESC'). This is triggered on target and dropTarget.

#### Defined in

[src/events/Events.ts:85](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L85)

___

### dragend

• **dragend**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when dragging ends.

#### Defined in

[src/events/Events.ts:83](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L83)

___

### dragenter

• **dragenter**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when a draggable object enters a drop target.

#### Defined in

[src/events/Events.ts:87](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L87)

___

### dragleave

• **dragleave**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when a draggable object leaves a drop target.

#### Defined in

[src/events/Events.ts:94](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L94)

___

### dragover

• **dragover**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when a draggable object moves over the drop target.
Triggers every frame if the scene has 'continuousRaycastingDropTarget' equal to true.

#### Defined in

[src/events/Events.ts:92](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L92)

___

### dragstart

• **dragstart**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when dragging starts.

#### Defined in

[src/events/Events.ts:81](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L81)

___

### drop

• **drop**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when a draggable object is dropped onto a drop target.

#### Defined in

[src/events/Events.ts:96](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L96)

___

### focus

• **focus**: [`FocusEventExt`](../classes/Events.FocusEventExt.md)<`T`, `R`\>

Event triggered when target gains focus.

#### Defined in

[src/events/Events.ts:71](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L71)

___

### focusin

• **focusin**: [`FocusEventExt`](../classes/Events.FocusEventExt.md)<`T`, `R`\>

Event triggered when target gains focus (no propagation).

#### Defined in

[src/events/Events.ts:67](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L67)

___

### focusout

• **focusout**: [`FocusEventExt`](../classes/Events.FocusEventExt.md)<`T`, `R`\>

Event triggered when target loses focus (no propagation).

#### Defined in

[src/events/Events.ts:69](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L69)

___

### keydown

• **keydown**: [`KeyboardEventExt`](../classes/Events.KeyboardEventExt.md)<`T`\>

Event triggered on the focused object when a key is pressed.

#### Defined in

[src/events/Events.ts:75](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L75)

___

### keyup

• **keyup**: [`KeyboardEventExt`](../classes/Events.KeyboardEventExt.md)<`T`\>

Event triggered on the focused object when a key is released.

#### Defined in

[src/events/Events.ts:77](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L77)

___

### pointerdown

• **pointerdown**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer button is pressed.

#### Defined in

[src/events/Events.ts:55](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L55)

___

### pointerenter

• **pointerenter**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer enters the target (no propagation).

#### Defined in

[src/events/Events.ts:47](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L47)

___

### pointerintersection

• **pointerintersection**: [`PointerIntersectionEvent`](../classes/Events.PointerIntersectionEvent.md)<`T`\>

Event triggered if pointer is on target. Triggers every frame and only works if the scene has 'continuousRaycasting' equal to true.

#### Defined in

[src/events/Events.ts:59](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L59)

___

### pointerleave

• **pointerleave**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer leaves the target (no propagation).

#### Defined in

[src/events/Events.ts:51](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L51)

___

### pointermove

• **pointermove**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer moves over the target.

#### Defined in

[src/events/Events.ts:53](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L53)

___

### pointerout

• **pointerout**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer leaves the target.

#### Defined in

[src/events/Events.ts:49](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L49)

___

### pointerover

• **pointerover**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer enters the target.

#### Defined in

[src/events/Events.ts:45](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L45)

___

### pointerup

• **pointerup**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer button is released.

#### Defined in

[src/events/Events.ts:57](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L57)

___

### wheel

• **wheel**: [`WheelEventExt`](../classes/Events.WheelEventExt.md)<`T`, `Object3D`<`Object3DEventMap`\>\>

Event triggered when scrolling the mouse wheel.

#### Defined in

[src/events/Events.ts:65](https://github.com/agargaro/three.ez/blob/cf5584f/src/events/Events.ts#L65)
