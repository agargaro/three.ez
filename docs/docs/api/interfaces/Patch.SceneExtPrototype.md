---
id: "Patch.SceneExtPrototype"
title: "Interface: SceneExtPrototype"
sidebar_label: "SceneExtPrototype"
custom_edit_url: null
---

[Patch](../namespaces/Patch.md).SceneExtPrototype

Represents the prototype for extending Scene functionality.

## Properties

### blurOnClickOut

• **blurOnClickOut**: `boolean`

A flag indicating whether to blur the focused Object3D when clicking outside of any object.

#### Defined in

[src/patch/Scene.ts:36](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Scene.ts#L36)

___

### continuousRaycasting

• **continuousRaycasting**: `boolean`

A flag indicating whether continuous raycasting is enabled (default: false).
When set to true, main raycasting occurs every frame, while false triggers raycasting only upon mouse movement.
Additionally, if set to true, the 'pointerintersection' event will be fired every frame.

#### Defined in

[src/patch/Scene.ts:20](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Scene.ts#L20)

___

### continuousRaycastingDropTarget

• **continuousRaycastingDropTarget**: `boolean`

A flag indicating whether continuous raycasting is enabled when searching for drop targets (default: false).
When set to true, main raycasting for drop targets occurs every frame, while false triggers it only upon mouse movement. 
Additionally, if set to true, the 'dragover' event will be fired every frame.

#### Defined in

[src/patch/Scene.ts:26](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Scene.ts#L26)

___

### focusedObject

• **focusedObject**: `Object3D`<`Object3DEventMap`\>

A reference to the currently focused Object3D within the scene.

#### Defined in

[src/patch/Scene.ts:32](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Scene.ts#L32)

___

### intersections

• **intersections**: [`IntersectionExt`](Events.IntersectionExt.md)[]

An array of intersections computed from the pointer (primary pointer only).

#### Defined in

[src/patch/Scene.ts:28](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Scene.ts#L28)

___

### intersectionsDropTarget

• **intersectionsDropTarget**: [`IntersectionExt`](Events.IntersectionExt.md)[]

An array of intersections computed from the pointer if an object is dragged and has 'findDropTarget' set to true (primary pointer only).

#### Defined in

[src/patch/Scene.ts:30](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Scene.ts#L30)

___

### timeScale

• **timeScale**: `number`

The time scale for scene animations.

#### Defined in

[src/patch/Scene.ts:38](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Scene.ts#L38)

___

### totalTime

• **totalTime**: `number`

The total time elapsed in the scene.

#### Defined in

[src/patch/Scene.ts:40](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Scene.ts#L40)

## Methods

### activeSmartRendering

▸ **activeSmartRendering**(): [`SceneExtPrototype`](Patch.SceneExtPrototype.md)

Activates smart rendering for the scene.

#### Returns

[`SceneExtPrototype`](Patch.SceneExtPrototype.md)

The updated instance of the scene.

#### Defined in

[src/patch/Scene.ts:45](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Scene.ts#L45)

___

### focus

▸ **focus**(`target?`): `void`

Sets the focus to the specified Object3D within the scene, or clears the focus if no target is provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target?` | `Object3D`<`Object3DEventMap`\> | Optional. The Object3D to focus on. If not provided, the focus is cleared. |

#### Returns

`void`

#### Defined in

[src/patch/Scene.ts:50](https://github.com/agargaro/three.ez/blob/a81f57c/src/patch/Scene.ts#L50)
