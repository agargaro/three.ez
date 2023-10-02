---
id: "Patch.SceneExtPrototype"
title: "Interface: SceneExtPrototype"
sidebar_label: "SceneExtPrototype"
custom_edit_url: null
---

[Patch](../namespaces/Patch.md).SceneExtPrototype

Represents the prototype for extended Scene functionality.

## Properties

### blurOnClickOut

• **blurOnClickOut**: `boolean`

Flag indicating whether to blur focused object3D when clicking outside of any object.

#### Defined in

[src/patch/Scene.ts:38](https://github.com/agargaro/three.ez/blob/4f6b61c/src/patch/Scene.ts#L38)

___

### continousRaycasting

• **continousRaycasting**: `boolean`

Flag indicating whether continuous raycasting is enabled (default: false).
If set to true, raycasting will occur every frame, otherwise it will occur only upon mouse movement. 
Also, if set to true, the 'pointerintersection' event will be triggered every frame.

#### Defined in

[src/patch/Scene.ts:24](https://github.com/agargaro/three.ez/blob/4f6b61c/src/patch/Scene.ts#L24)

___

### continousRaycastingDropTarget

• **continousRaycastingDropTarget**: `boolean`

Flag indicating whether continuous raycasting when searching for drop targets is enabled (default: false).
If set to true, raycasting will occur every frame, otherwise it will occur only upon mouse movement. 
Also, if set to true, the 'dragover' event will be triggered every frame.

#### Defined in

[src/patch/Scene.ts:30](https://github.com/agargaro/three.ez/blob/4f6b61c/src/patch/Scene.ts#L30)

___

### focusedObject

• **focusedObject**: `Object3D`

A reference to the currently focused Object3D within the scene.

#### Defined in

[src/patch/Scene.ts:36](https://github.com/agargaro/three.ez/blob/4f6b61c/src/patch/Scene.ts#L36)

___

### intersections

• **intersections**: [`IntersectionExt`](Events.IntersectionExt.md)[]

An array of intersections computed from the pointer (primary pointer only).

#### Defined in

[src/patch/Scene.ts:32](https://github.com/agargaro/three.ez/blob/4f6b61c/src/patch/Scene.ts#L32)

___

### intersectionsDropTarget

• **intersectionsDropTarget**: [`IntersectionExt`](Events.IntersectionExt.md)[]

An array of intersections computed from the pointer if an object is dragged and has 'findDropTarget' to true (primary pointer only).

#### Defined in

[src/patch/Scene.ts:34](https://github.com/agargaro/three.ez/blob/4f6b61c/src/patch/Scene.ts#L34)

___

### timeScale

• **timeScale**: `number`

The time scale for scene animations.

#### Defined in

[src/patch/Scene.ts:40](https://github.com/agargaro/three.ez/blob/4f6b61c/src/patch/Scene.ts#L40)

___

### totalTime

• **totalTime**: `number`

The total time elapsed in the scene.

#### Defined in

[src/patch/Scene.ts:42](https://github.com/agargaro/three.ez/blob/4f6b61c/src/patch/Scene.ts#L42)

## Methods

### activeSmartRendering

▸ **activeSmartRendering**(): [`SceneExtPrototype`](Patch.SceneExtPrototype.md)

Activate smart rendering for the scene.

#### Returns

[`SceneExtPrototype`](Patch.SceneExtPrototype.md)

The updated instance of the scene.

#### Defined in

[src/patch/Scene.ts:47](https://github.com/agargaro/three.ez/blob/4f6b61c/src/patch/Scene.ts#L47)

___

### focus

▸ **focus**(`target?`): `void`

Set the focus to the specified Object3D within the scene, or clears the focus if no target is provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target?` | `Object3D` | Optional. The Object3D to focus on. If not provided, the focus is cleared. |

#### Returns

`void`

#### Defined in

[src/patch/Scene.ts:52](https://github.com/agargaro/three.ez/blob/4f6b61c/src/patch/Scene.ts#L52)
