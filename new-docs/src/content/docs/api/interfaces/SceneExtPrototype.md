---
editUrl: false
next: false
prev: false
title: "SceneExtPrototype"
---

Represents the prototype for extending Scene functionality.

## Properties

### blurOnClickOut

> **blurOnClickOut**: `boolean`

A flag indicating whether to blur the focused Object3D when clicking outside of any object.

#### Defined in

[src/patch/Scene.ts:37](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Scene.ts#L37)

***

### continuousRaycasting

> **continuousRaycasting**: `boolean`

A flag indicating whether continuous raycasting is enabled (default: false).
When set to true, main raycasting occurs every frame, while false triggers raycasting only upon mouse movement.
Additionally, if set to true, the 'pointerintersection' event will be fired every frame.

#### Defined in

[src/patch/Scene.ts:21](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Scene.ts#L21)

***

### continuousRaycastingDropTarget

> **continuousRaycastingDropTarget**: `boolean`

A flag indicating whether continuous raycasting is enabled when searching for drop targets (default: false).
When set to true, main raycasting for drop targets occurs every frame, while false triggers it only upon mouse movement. 
Additionally, if set to true, the 'dragover' event will be fired every frame.

#### Defined in

[src/patch/Scene.ts:27](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Scene.ts#L27)

***

### focusedObject

> **focusedObject**: `Object3D`\<`Object3DEventMap`\>

A reference to the currently focused Object3D within the scene.

#### Defined in

[src/patch/Scene.ts:33](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Scene.ts#L33)

***

### intersections

> **intersections**: [`IntersectionExt`](/three.ez/api/interfaces/intersectionext/)[]

An array of intersections computed from the pointer (primary pointer only).

#### Defined in

[src/patch/Scene.ts:29](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Scene.ts#L29)

***

### intersectionsDropTarget

> **intersectionsDropTarget**: [`IntersectionExt`](/three.ez/api/interfaces/intersectionext/)[]

An array of intersections computed from the pointer if an object is dragged and has 'findDropTarget' set to true (primary pointer only).

#### Defined in

[src/patch/Scene.ts:31](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Scene.ts#L31)

***

### timeScale

> **timeScale**: `number`

The time scale for scene animations.

#### Defined in

[src/patch/Scene.ts:39](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Scene.ts#L39)

***

### totalTime

> **totalTime**: `number`

The total time elapsed in the scene.

#### Defined in

[src/patch/Scene.ts:41](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Scene.ts#L41)

## Methods

### activeSmartRendering()

> **activeSmartRendering**(): `this`

Activates smart rendering for the scene.

#### Returns

`this`

The updated instance of the scene.

#### Defined in

[src/patch/Scene.ts:46](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Scene.ts#L46)

***

### focus()

> **focus**(`target`?): `void`

Sets the focus to the specified Object3D within the scene, or clears the focus if no target is provided.

#### Parameters

• **target?**: `Object3D`\<`Object3DEventMap`\>

Optional. The Object3D to focus on. If not provided, the focus is cleared.

#### Returns

`void`

#### Defined in

[src/patch/Scene.ts:51](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Scene.ts#L51)
