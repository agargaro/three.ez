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

[src/patch/Scene.ts:39](https://github.com/agargaro/three.ez/blob/46fae0a/src/patch/Scene.ts#L39)

___

### continousRaycasting

• **continousRaycasting**: `boolean`

Flag indicating whether continuous raycasting is enabled (default: false).
If set to true, raycasting will occur every frame, otherwise it will occur only upon mouse movement. 
Also, if set to true, the 'pointerintersection' event will be triggered every frame.

#### Defined in

[src/patch/Scene.ts:25](https://github.com/agargaro/three.ez/blob/46fae0a/src/patch/Scene.ts#L25)

___

### continousRaycastingDropTarget

• **continousRaycastingDropTarget**: `boolean`

Flag indicating whether continuous raycasting when searching for drop targets is enabled (default: false).
If set to true, raycasting will occur every frame, otherwise it will occur only upon mouse movement. 
Also, if set to true, the 'dragover' event will be triggered every frame.

#### Defined in

[src/patch/Scene.ts:31](https://github.com/agargaro/three.ez/blob/46fae0a/src/patch/Scene.ts#L31)

___

### focusedObject

• **focusedObject**: `Object3D`

A reference to the currently focused Object3D within the scene.

#### Defined in

[src/patch/Scene.ts:37](https://github.com/agargaro/three.ez/blob/46fae0a/src/patch/Scene.ts#L37)

___

### intersections

• **intersections**: [`IntersectionExt`](Events.IntersectionExt.md)[]

An array of intersections computed from the pointer (primary pointer only).

#### Defined in

[src/patch/Scene.ts:33](https://github.com/agargaro/three.ez/blob/46fae0a/src/patch/Scene.ts#L33)

___

### intersectionsDropTarget

• **intersectionsDropTarget**: [`IntersectionExt`](Events.IntersectionExt.md)[]

An array of intersections computed from the pointer if an object is dragged and has 'findDropTarget' to true (primary pointer only).

#### Defined in

[src/patch/Scene.ts:35](https://github.com/agargaro/three.ez/blob/46fae0a/src/patch/Scene.ts#L35)

___

### timeScale

• **timeScale**: `number`

The time scale for scene animations.

#### Defined in

[src/patch/Scene.ts:41](https://github.com/agargaro/three.ez/blob/46fae0a/src/patch/Scene.ts#L41)

___

### totalTime

• **totalTime**: `number`

The total time elapsed in the scene.

#### Defined in

[src/patch/Scene.ts:43](https://github.com/agargaro/three.ez/blob/46fae0a/src/patch/Scene.ts#L43)

## Methods

### activeSmartRendering

▸ **activeSmartRendering**(): [`SceneExtPrototype`](Patch.SceneExtPrototype.md)

Activate smart rendering for the scene.

#### Returns

[`SceneExtPrototype`](Patch.SceneExtPrototype.md)

The updated instance of the scene.

#### Defined in

[src/patch/Scene.ts:48](https://github.com/agargaro/three.ez/blob/46fae0a/src/patch/Scene.ts#L48)

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

[src/patch/Scene.ts:53](https://github.com/agargaro/three.ez/blob/46fae0a/src/patch/Scene.ts#L53)
