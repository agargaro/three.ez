---
editUrl: false
next: false
prev: false
title: "InteractionEvents"
---

Represents interaction events. These events propagate to parents.

## Typeparam

T - The primary target type.

## Typeparam

R - The related target type.

## Typeparam

RD - The related target type on drag events.

## Type Parameters

• **T** = `Object3D`

• **R** = `Object3D`

• **RD** = `Object3D` \| [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

## Properties

### blur

> **blur**: [`FocusEventExt`](/three.ez/api/classes/focuseventext/)\<`T`, `R`\>

Event triggered when target loses focus.

#### Defined in

[src/events/Events.ts:74](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L74)

***

### click

> **click**: [`PointerEventExt`](/three.ez/api/classes/pointereventext/)\<`T`, `R`\>

Event triggered when a click event occurs.

#### Defined in

[src/events/Events.ts:62](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L62)

***

### dblclick

> **dblclick**: [`PointerEventExt`](/three.ez/api/classes/pointereventext/)\<`T`, `R`\>

Event triggered when a double click event occurs.

#### Defined in

[src/events/Events.ts:64](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L64)

***

### drag

> **drag**: [`DragEventExt`](/three.ez/api/classes/drageventext/)\<`T`, `RD`\>

Event triggered when the target is dragged.

#### Defined in

[src/events/Events.ts:80](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L80)

***

### dragcancel

> **dragcancel**: [`DragEventExt`](/three.ez/api/classes/drageventext/)\<`T`, `RD`\>

Event triggered when dragging is canceled (Can be canceled pressing 'ESC'). This is triggered on target and dropTarget.

#### Defined in

[src/events/Events.ts:86](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L86)

***

### dragend

> **dragend**: [`DragEventExt`](/three.ez/api/classes/drageventext/)\<`T`, `RD`\>

Event triggered when dragging ends.

#### Defined in

[src/events/Events.ts:84](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L84)

***

### dragenter

> **dragenter**: [`DragEventExt`](/three.ez/api/classes/drageventext/)\<`T`, `RD`\>

Event triggered when a draggable object enters a drop target.

#### Defined in

[src/events/Events.ts:88](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L88)

***

### dragleave

> **dragleave**: [`DragEventExt`](/three.ez/api/classes/drageventext/)\<`T`, `RD`\>

Event triggered when a draggable object leaves a drop target.

#### Defined in

[src/events/Events.ts:95](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L95)

***

### dragover

> **dragover**: [`DragEventExt`](/three.ez/api/classes/drageventext/)\<`T`, `RD`\>

Event triggered when a draggable object moves over the drop target.
Triggers every frame if the scene has 'continuousRaycastingDropTarget' equal to true.

#### Defined in

[src/events/Events.ts:93](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L93)

***

### dragstart

> **dragstart**: [`DragEventExt`](/three.ez/api/classes/drageventext/)\<`T`, `RD`\>

Event triggered when dragging starts.

#### Defined in

[src/events/Events.ts:82](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L82)

***

### drop

> **drop**: [`DragEventExt`](/three.ez/api/classes/drageventext/)\<`T`, `RD`\>

Event triggered when a draggable object is dropped onto a drop target.

#### Defined in

[src/events/Events.ts:97](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L97)

***

### focus

> **focus**: [`FocusEventExt`](/three.ez/api/classes/focuseventext/)\<`T`, `R`\>

Event triggered when target gains focus.

#### Defined in

[src/events/Events.ts:72](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L72)

***

### focusin

> **focusin**: [`FocusEventExt`](/three.ez/api/classes/focuseventext/)\<`T`, `R`\>

Event triggered when target gains focus (no propagation).

#### Defined in

[src/events/Events.ts:68](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L68)

***

### focusout

> **focusout**: [`FocusEventExt`](/three.ez/api/classes/focuseventext/)\<`T`, `R`\>

Event triggered when target loses focus (no propagation).

#### Defined in

[src/events/Events.ts:70](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L70)

***

### keydown

> **keydown**: [`KeyboardEventExt`](/three.ez/api/classes/keyboardeventext/)\<`T`\>

Event triggered on the focused object when a key is pressed.

#### Defined in

[src/events/Events.ts:76](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L76)

***

### keyup

> **keyup**: [`KeyboardEventExt`](/three.ez/api/classes/keyboardeventext/)\<`T`\>

Event triggered on the focused object when a key is released.

#### Defined in

[src/events/Events.ts:78](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L78)

***

### pointerdown

> **pointerdown**: [`PointerEventExt`](/three.ez/api/classes/pointereventext/)\<`T`, `R`\>

Event triggered when a pointer button is pressed.

#### Defined in

[src/events/Events.ts:56](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L56)

***

### pointerenter

> **pointerenter**: [`PointerEventExt`](/three.ez/api/classes/pointereventext/)\<`T`, `R`\>

Event triggered when a pointer enters the target (no propagation).

#### Defined in

[src/events/Events.ts:48](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L48)

***

### pointerintersection

> **pointerintersection**: [`PointerIntersectionEvent`](/three.ez/api/classes/pointerintersectionevent/)\<`T`\>

Event triggered if pointer is on target. Triggers every frame and only works if the scene has 'continuousRaycasting' equal to true.

#### Defined in

[src/events/Events.ts:60](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L60)

***

### pointerleave

> **pointerleave**: [`PointerEventExt`](/three.ez/api/classes/pointereventext/)\<`T`, `R`\>

Event triggered when a pointer leaves the target (no propagation).

#### Defined in

[src/events/Events.ts:52](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L52)

***

### pointermove

> **pointermove**: [`PointerEventExt`](/three.ez/api/classes/pointereventext/)\<`T`, `R`\>

Event triggered when a pointer moves over the target.

#### Defined in

[src/events/Events.ts:54](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L54)

***

### pointerout

> **pointerout**: [`PointerEventExt`](/three.ez/api/classes/pointereventext/)\<`T`, `R`\>

Event triggered when a pointer leaves the target.

#### Defined in

[src/events/Events.ts:50](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L50)

***

### pointerover

> **pointerover**: [`PointerEventExt`](/three.ez/api/classes/pointereventext/)\<`T`, `R`\>

Event triggered when a pointer enters the target.

#### Defined in

[src/events/Events.ts:46](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L46)

***

### pointerup

> **pointerup**: [`PointerEventExt`](/three.ez/api/classes/pointereventext/)\<`T`, `R`\>

Event triggered when a pointer button is released.

#### Defined in

[src/events/Events.ts:58](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L58)

***

### wheel

> **wheel**: [`WheelEventExt`](/three.ez/api/classes/wheeleventext/)\<`T`, `Object3D`\<`Object3DEventMap`\>\>

Event triggered when scrolling the mouse wheel.

#### Defined in

[src/events/Events.ts:66](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Events.ts#L66)
