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

[src/events/Events.ts:74](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L74)

___

### click

• **click**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a click event occurs.

#### Defined in

[src/events/Events.ts:62](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L62)

___

### dblclick

• **dblclick**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a double click event occurs.

#### Defined in

[src/events/Events.ts:64](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L64)

___

### drag

• **drag**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when the target is dragged.

#### Defined in

[src/events/Events.ts:80](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L80)

___

### dragcancel

• **dragcancel**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when dragging is canceled (Can be canceled pressing 'ESC'). This is triggered on target and dropTarget.

#### Defined in

[src/events/Events.ts:86](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L86)

___

### dragend

• **dragend**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when dragging ends.

#### Defined in

[src/events/Events.ts:84](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L84)

___

### dragenter

• **dragenter**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when a draggable object enters a drop target.

#### Defined in

[src/events/Events.ts:88](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L88)

___

### dragleave

• **dragleave**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when a draggable object leaves a drop target.

#### Defined in

[src/events/Events.ts:95](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L95)

___

### dragover

• **dragover**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when a draggable object moves over the drop target.
Triggers every frame if the scene has 'continuousRaycastingDropTarget' equal to true.

#### Defined in

[src/events/Events.ts:93](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L93)

___

### dragstart

• **dragstart**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when dragging starts.

#### Defined in

[src/events/Events.ts:82](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L82)

___

### drop

• **drop**: [`DragEventExt`](../classes/Events.DragEventExt.md)<`T`, `RD`\>

Event triggered when a draggable object is dropped onto a drop target.

#### Defined in

[src/events/Events.ts:97](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L97)

___

### focus

• **focus**: [`FocusEventExt`](../classes/Events.FocusEventExt.md)<`T`, `R`\>

Event triggered when target gains focus.

#### Defined in

[src/events/Events.ts:72](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L72)

___

### focusin

• **focusin**: [`FocusEventExt`](../classes/Events.FocusEventExt.md)<`T`, `R`\>

Event triggered when target gains focus (no propagation).

#### Defined in

[src/events/Events.ts:68](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L68)

___

### focusout

• **focusout**: [`FocusEventExt`](../classes/Events.FocusEventExt.md)<`T`, `R`\>

Event triggered when target loses focus (no propagation).

#### Defined in

[src/events/Events.ts:70](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L70)

___

### keydown

• **keydown**: [`KeyboardEventExt`](../classes/Events.KeyboardEventExt.md)<`T`\>

Event triggered on the focused object when a key is pressed.

#### Defined in

[src/events/Events.ts:76](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L76)

___

### keyup

• **keyup**: [`KeyboardEventExt`](../classes/Events.KeyboardEventExt.md)<`T`\>

Event triggered on the focused object when a key is released.

#### Defined in

[src/events/Events.ts:78](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L78)

___

### pointerdown

• **pointerdown**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer button is pressed.

#### Defined in

[src/events/Events.ts:56](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L56)

___

### pointerenter

• **pointerenter**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer enters the target (no propagation).

#### Defined in

[src/events/Events.ts:48](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L48)

___

### pointerintersection

• **pointerintersection**: [`PointerIntersectionEvent`](../classes/Events.PointerIntersectionEvent.md)<`T`\>

Event triggered if pointer is on target. Triggers every frame and only works if the scene has 'continuousRaycasting' equal to true.

#### Defined in

[src/events/Events.ts:60](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L60)

___

### pointerleave

• **pointerleave**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer leaves the target (no propagation).

#### Defined in

[src/events/Events.ts:52](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L52)

___

### pointermove

• **pointermove**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer moves over the target.

#### Defined in

[src/events/Events.ts:54](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L54)

___

### pointerout

• **pointerout**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer leaves the target.

#### Defined in

[src/events/Events.ts:50](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L50)

___

### pointerover

• **pointerover**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer enters the target.

#### Defined in

[src/events/Events.ts:46](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L46)

___

### pointerup

• **pointerup**: [`PointerEventExt`](../classes/Events.PointerEventExt.md)<`T`, `R`\>

Event triggered when a pointer button is released.

#### Defined in

[src/events/Events.ts:58](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L58)

___

### wheel

• **wheel**: [`WheelEventExt`](../classes/Events.WheelEventExt.md)<`T`, `Object3D`<`Object3DEventMap`\>\>

Event triggered when scrolling the mouse wheel.

#### Defined in

[src/events/Events.ts:66](https://github.com/agargaro/three.ez/blob/0027204/src/events/Events.ts#L66)
