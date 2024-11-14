---
editUrl: false
next: false
prev: false
title: "PerspectiveCameraAuto"
---

Extends the PerspectiveCamera to automatically adjust its aspect ratio on renderer resize.

## Extends

- `PerspectiveCamera`

## Constructors

### new PerspectiveCameraAuto()

> **new PerspectiveCameraAuto**(`fov`?, `near`?, `far`?): [`PerspectiveCameraAuto`](/three.ez/api/classes/perspectivecameraauto/)

#### Parameters

• **fov?**: `number`

Camera frustum vertical field of view in degrees. Default `50`.

• **near?**: `number`

Camera frustum near plane distance. Default `0.1`.

• **far?**: `number`

Camera frustum far plane distance. Default `2000`.

#### Returns

[`PerspectiveCameraAuto`](/three.ez/api/classes/perspectivecameraauto/)

#### Overrides

`PerspectiveCamera.constructor`

#### Defined in

[src/cameras/PerspectiveCameraAuto.ts:13](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/cameras/PerspectiveCameraAuto.ts#L13)

## Properties

### animations

> **animations**: `AnimationClip`[]

Array with object's animation clips.

#### Default Value

`[]`

#### Inherited from

`PerspectiveCamera.animations`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:266

***

### aspect

> **aspect**: `number`

Camera frustum aspect ratio, usually the canvas width / canvas height.

#### Remarks

Expects a `Float`

#### Default Value

`1`, _(square canvas)_.

#### Inherited from

`PerspectiveCamera.aspect`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:93

***

### castShadow

> **castShadow**: `boolean`

Whether the object gets rendered into shadow map.

#### Default Value

`false`

#### Inherited from

`PerspectiveCamera.castShadow`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:238

***

### children

> **children**: `Object3D`\<`Object3DEventMap`\>[]

Array with object's children.

#### See

THREE.Object3DGroup | Group for info on manually grouping objects.

#### Default Value

`[]`

#### Inherited from

`PerspectiveCamera.children`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:145

***

### coordinateSystem

> **coordinateSystem**: `CoordinateSystem`

#### Inherited from

`PerspectiveCamera.coordinateSystem`

#### Defined in

node\_modules/@types/three/src/cameras/Camera.d.ts:64

***

### cursor

> **cursor**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when interacting with the object.

#### Inherited from

`PerspectiveCamera.cursor`

#### Defined in

[src/patch/Object3D.ts:59](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L59)

***

### cursorDrag

> **cursorDrag**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when dragging the object.

#### Inherited from

`PerspectiveCamera.cursorDrag`

#### Defined in

[src/patch/Object3D.ts:61](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L61)

***

### cursorDrop

> **cursorDrop**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when dropping an object onto this one.

#### Inherited from

`PerspectiveCamera.cursorDrop`

#### Defined in

[src/patch/Object3D.ts:63](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L63)

***

### customDepthMaterial?

> `optional` **customDepthMaterial**: `Material`

Custom depth material to be used when rendering to the depth map.

#### Remarks

Can only be used in context of meshes.
When shadow-casting with a THREE.DirectionalLight | DirectionalLight or THREE.SpotLight | SpotLight,
if you are modifying vertex positions in the vertex shader you must specify a customDepthMaterial for proper shadows.

#### Default Value

`undefined`

#### Inherited from

`PerspectiveCamera.customDepthMaterial`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:282

***

### customDistanceMaterial?

> `optional` **customDistanceMaterial**: `Material`

Same as [customDepthMaterial](../../../../../three.ez/api/classes/orthographiccameraauto/#customdepthmaterial), but used with THREE.Object3DPointLight | PointLight.

#### Default Value

`undefined`

#### Inherited from

`PerspectiveCamera.customDistanceMaterial`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:288

***

### draggable

> **draggable**: `boolean`

Indicates whether the object is draggable. Default is DEFAULT_DRAGGABLE (`false`).

#### Inherited from

`PerspectiveCamera.draggable`

#### Defined in

[src/patch/Object3D.ts:53](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L53)

***

### dragTarget

> **dragTarget**: `Object3D`\<`Object3DEventMap`\>

Indicates which object will be dragged instead of this one.

#### Inherited from

`PerspectiveCamera.dragTarget`

#### Defined in

[src/patch/Object3D.ts:49](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L49)

***

### enabled

> **enabled**: `boolean`

Determines if the object is enabled. Default is `true`.
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Inherited from

`PerspectiveCamera.enabled`

#### Defined in

[src/patch/Object3D.ts:40](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L40)

***

### far

> **far**: `number`

Camera frustum far plane.

#### Remarks

Must be greater than the current value of [.near](../../../../../three.ez/api/classes/perspectivecameraauto/#near) plane.

#### Default Value

`2000`

#### Inherited from

`PerspectiveCamera.far`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:110

***

### filmGauge

> **filmGauge**: `number`

Film size used for the larger axis.
This parameter does not influence the projection matrix unless [.filmOffset](../../../../../three.ez/api/classes/perspectivecameraauto/#filmoffset) is set to a nonzero value.

#### Remarks

Expects a `Float`

#### Default Value

`35`, _millimeters_.

#### Inherited from

`PerspectiveCamera.filmGauge`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:141

***

### filmOffset

> **filmOffset**: `number`

Horizontal off-center offset in the same unit as [.filmGauge](../../../../../three.ez/api/classes/perspectivecameraauto/#filmgauge).

#### Remarks

Expects a `Float`

#### Default Value

`0`

#### Inherited from

`PerspectiveCamera.filmOffset`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:148

***

### findDropTarget

> **findDropTarget**: `boolean`

Determines when the object is dragged, whether it will have to search for any drop targets. Default is `false`.

#### Inherited from

`PerspectiveCamera.findDropTarget`

#### Defined in

[src/patch/Object3D.ts:55](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L55)

***

### focus

> **focus**: `number`

Object distance used for stereoscopy and depth-of-field effects.

#### Remarks

This parameter does not influence the projection matrix unless a THREE.StereoCamera | StereoCamera is being used.

#### Default Value

`10`

#### Inherited from

`PerspectiveCamera.focus`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:118

***

### focusable

> **focusable**: `boolean`

Indicates whether the object can receive focus. Default is DEFAULT_FOCUSABLE (`true`).

#### Inherited from

`PerspectiveCamera.focusable`

#### Defined in

[src/patch/Object3D.ts:51](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L51)

***

### fov

> **fov**: `number`

Camera frustum vertical field of view, from bottom to top of view, in degrees.

#### Remarks

Expects a `Float`

#### Default Value

`50`

#### Inherited from

`PerspectiveCamera.fov`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:86

***

### frustumCulled

> **frustumCulled**: `boolean`

When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera.

#### Default Value

`true`

#### Inherited from

`PerspectiveCamera.frustumCulled`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:251

***

### hitboxes

> **hitboxes**: [`Hitbox`](/three.ez/api/classes/hitbox/)[]

Array of hitboxes for collision detection.

#### Inherited from

`PerspectiveCamera.hitboxes`

#### Defined in

[src/patch/Object3D.ts:47](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L47)

***

### id

> `readonly` **id**: `number`

Unique number for this Object3D instance.

#### Remarks

Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
Expects a `Integer`

#### Inherited from

`PerspectiveCamera.id`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:109

***

### interceptByRaycaster

> **interceptByRaycaster**: `boolean`

Determines if the **object** and **all of its children** can be intercepted by the main raycaster.

#### Default

```ts
DEFAULT_INTERCEPT_BY_RAYCASTER (true).
```

#### Inherited from

`PerspectiveCamera.interceptByRaycaster`

#### Defined in

[src/patch/Object3D.ts:45](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L45)

***

### isCamera

> `readonly` **isCamera**: `true`

Read-only flag to check if a given object is of type Camera.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

`PerspectiveCamera.isCamera`

#### Defined in

node\_modules/@types/three/src/cameras/Camera.d.ts:29

***

### isObject3D

> `readonly` **isObject3D**: `true`

Flag to check if a given object is of type Object3D.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

`PerspectiveCamera.isObject3D`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:102

***

### isPerspectiveCamera

> `readonly` **isPerspectiveCamera**: `true`

Read-only flag to check if a given object is of type Camera.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

`PerspectiveCamera.isPerspectiveCamera`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:67

***

### layers

> **layers**: `Layers`

The THREE.Layers | layers that the Camera is a member of.

#### Remarks

Objects must share at least one layer with the Camera to be n when the camera's viewpoint is rendered.

#### Default Value

`new THREE.Layers()`

#### Inherited from

`PerspectiveCamera.layers`

#### Defined in

node\_modules/@types/three/src/cameras/Camera.d.ts:43

***

### matrix

> **matrix**: `Matrix4`

The local transform matrix.

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

`PerspectiveCamera.matrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:191

***

### matrixAutoUpdate

> **matrixAutoUpdate**: `boolean`

When this is set, it calculates the matrix of position, (rotation or quaternion) and
scale every frame and also recalculates the matrixWorld property.

#### Default Value

[DEFAULT_MATRIX_AUTO_UPDATE](../../../../../three.ez/api/classes/orthographiccameraauto/#default_matrix_auto_update) - that is `(true)`.

#### Inherited from

`PerspectiveCamera.matrixAutoUpdate`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:205

***

### matrixWorld

> **matrixWorld**: `Matrix4`

The global transform of the object.

#### Remarks

If the Object3D has no parent, then it's identical to the local transform THREE.Object3D.matrix | .matrix.

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

`PerspectiveCamera.matrixWorld`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:198

***

### matrixWorldAutoUpdate

> **matrixWorldAutoUpdate**: `boolean`

If set, then the renderer checks every frame if the object and its children need matrix updates.
When it isn't, then you have to maintain all matrices in the object and its children yourself.

#### Default Value

[DEFAULT_MATRIX_WORLD_AUTO_UPDATE](../../../../../three.ez/api/classes/orthographiccameraauto/#default_matrix_world_auto_update) - that is `(true)`.

#### Inherited from

`PerspectiveCamera.matrixWorldAutoUpdate`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:212

***

### matrixWorldInverse

> **matrixWorldInverse**: `Matrix4`

This is the inverse of matrixWorld.

#### Remarks

MatrixWorld contains the Matrix which has the world transform of the Camera .

#### Default Value

THREE.Matrix4 | `new THREE.Matrix4()`

#### Inherited from

`PerspectiveCamera.matrixWorldInverse`

#### Defined in

node\_modules/@types/three/src/cameras/Camera.d.ts:50

***

### matrixWorldNeedsUpdate

> **matrixWorldNeedsUpdate**: `boolean`

When this is set, it calculates the matrixWorld in that frame and resets this property to false.

#### Default Value

`false`

#### Inherited from

`PerspectiveCamera.matrixWorldNeedsUpdate`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:218

***

### modelViewMatrix

> `readonly` **modelViewMatrix**: `Matrix4`

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

`PerspectiveCamera.modelViewMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:180

***

### name

> **name**: `string`

Optional name of the object

#### Remarks

_(doesn't need to be unique)_.

#### Default Value

`""`

#### Inherited from

`PerspectiveCamera.name`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:122

***

### near

> **near**: `number`

Camera frustum near plane.

#### Remarks

The valid range is greater than `0` and less than the current value of the [.far](../../../../../three.ez/api/classes/perspectivecameraauto/#far) plane.

#### Default Value

`0.1`

#### Inherited from

`PerspectiveCamera.near`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:102

***

### needsRender

> **needsRender**: `boolean`

Indicates whether the scene needs rendering.

#### Inherited from

`PerspectiveCamera.needsRender`

#### Defined in

[src/patch/Object3D.ts:65](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L65)

***

### normalMatrix

> `readonly` **normalMatrix**: `Matrix3`

#### Default Value

`new THREE.Matrix3()`

#### Inherited from

`PerspectiveCamera.normalMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:185

***

### parent

> **parent**: `Object3D`\<`Object3DEventMap`\>

Object's parent in the [scene graph](https://en.wikipedia.org/wiki/Scene_graph).

#### Remarks

An object can have at most one parent.

#### Default Value

`null`

#### Inherited from

`PerspectiveCamera.parent`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:137

***

### position

> `readonly` **position**: `Vector3`

Object's local position.

#### Default Value

`new THREE.Vector3()` - that is `(0, 0, 0)`.

#### Inherited from

`PerspectiveCamera.position`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:157

***

### projectionMatrix

> **projectionMatrix**: `Matrix4`

This is the matrix which contains the projection.

#### Default Value

THREE.Matrix4 | `new THREE.Matrix4()`

#### Inherited from

`PerspectiveCamera.projectionMatrix`

#### Defined in

node\_modules/@types/three/src/cameras/Camera.d.ts:56

***

### projectionMatrixInverse

> **projectionMatrixInverse**: `Matrix4`

This is the inverse of projectionMatrix.

#### Default Value

THREE.Matrix4 | `new THREE.Matrix4()`

#### Inherited from

`PerspectiveCamera.projectionMatrixInverse`

#### Defined in

node\_modules/@types/three/src/cameras/Camera.d.ts:62

***

### quaternion

> `readonly` **quaternion**: `Quaternion`

Object's local rotation as a THREE.Quaternion | Quaternion.

#### Default Value

`new THREE.Quaternion()` - that is `(0,  0, 0, 1)`.

#### Inherited from

`PerspectiveCamera.quaternion`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:169

***

### receiveShadow

> **receiveShadow**: `boolean`

Whether the material receives shadows.

#### Default Value

`false`

#### Inherited from

`PerspectiveCamera.receiveShadow`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:244

***

### renderOrder

> **renderOrder**: `number`

This value allows the default rendering order of [scene graph](https://en.wikipedia.org/wiki/Scene_graph)
objects to be overridden although opaque and transparent objects remain sorted independently.

#### Remarks

When this property is set for an instance of Group | Group, all descendants objects will be sorted and rendered together.
Sorting is from lowest to highest renderOrder.

#### Default Value

`0`

#### Inherited from

`PerspectiveCamera.renderOrder`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:260

***

### rotation

> `readonly` **rotation**: `Euler`

Object's local rotation ([Euler angles](https://en.wikipedia.org/wiki/Euler_angles)), in radians.

#### Default Value

`new THREE.Euler()` - that is `(0, 0, 0, Euler.DEFAULT_ORDER)`.

#### Inherited from

`PerspectiveCamera.rotation`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:163

***

### scale

> `readonly` **scale**: `Vector3`

The object's local scale.

#### Default Value

`new THREE.Vector3( 1, 1, 1 )`

#### Inherited from

`PerspectiveCamera.scale`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:175

***

### scene

> **scene**: `Scene`

Reference to the scene the object belongs to.

#### Inherited from

`PerspectiveCamera.scene`

#### Defined in

[src/patch/Object3D.ts:57](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L57)

***

### tags

> **tags**: `Set`\<`string`\>

Indicates the tags to be searched using the querySelector and `querySelectorAll` methods.

#### Inherited from

`PerspectiveCamera.tags`

#### Defined in

[src/patch/Object3D.ts:67](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L67)

***

### type

> `readonly` **type**: `string`

#### Default Value

`PerspectiveCamera`

#### Inherited from

`PerspectiveCamera.type`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:73

***

### up

> **up**: `Vector3`

This is used by the [lookAt](../../../../../three.ez/api/classes/perspectivecameraauto/#lookat) method, for example, to determine the orientation of the result.

#### Default Value

[Object3D.DEFAULT_UP](../../../../../three.ez/api/classes/orthographiccameraauto/#default_up) - that is `(0, 1, 0)`.

#### Inherited from

`PerspectiveCamera.up`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:151

***

### userData

> **userData**: `Record`\<`string`, `any`\>

An object that can be used to store custom data about the Object3D.

#### Remarks

It should not hold references to _functions_ as these **will not** be cloned.

#### Default

`{}`

#### Inherited from

`PerspectiveCamera.userData`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:273

***

### uuid

> **uuid**: `string`

[UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) of this object instance.

#### Remarks

This gets automatically assigned and shouldn't be edited.

#### Inherited from

`PerspectiveCamera.uuid`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:115

***

### view

> **view**: `object`

Frustum window specification or null.
This is set using the [.setViewOffset](../../../../../three.ez/api/classes/perspectivecameraauto/#setviewoffset) method and cleared using [.clearViewOffset](../../../../../three.ez/api/classes/perspectivecameraauto/#clearviewoffset).

#### enabled

> **enabled**: `boolean`

#### fullHeight

> **fullHeight**: `number`

#### fullWidth

> **fullWidth**: `number`

#### height

> **height**: `number`

#### offsetX

> **offsetX**: `number`

#### offsetY

> **offsetY**: `number`

#### width

> **width**: `number`

#### Default Value

`null`

#### Inherited from

`PerspectiveCamera.view`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:125

***

### viewport?

> `optional` **viewport**: `Vector4`

#### Inherited from

`PerspectiveCamera.viewport`

#### Defined in

node\_modules/@types/three/src/cameras/Camera.d.ts:66

***

### visible

> **visible**: `boolean`

Object gets rendered if `true`.

#### Default Value

`true`

#### Inherited from

`PerspectiveCamera.visible`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:232

***

### zoom

> **zoom**: `number`

Gets or sets the zoom factor of the camera.

#### Default Value

`1`

#### Inherited from

`PerspectiveCamera.zoom`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:79

***

### DEFAULT\_MATRIX\_AUTO\_UPDATE

> `static` **DEFAULT\_MATRIX\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixAutoUpdate](../../../../../three.ez/api/classes/orthographiccameraauto/#matrixautoupdate) for newly created Object3Ds.

#### Default Value

`true`

#### Inherited from

`PerspectiveCamera.DEFAULT_MATRIX_AUTO_UPDATE`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:373

***

### DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE

> `static` **DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixWorldAutoUpdate](../../../../../three.ez/api/classes/orthographiccameraauto/#matrixworldautoupdate) for newly created Object3Ds.

#### Default Value

`true`

#### Inherited from

`PerspectiveCamera.DEFAULT_MATRIX_WORLD_AUTO_UPDATE`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:379

***

### DEFAULT\_UP

> `static` **DEFAULT\_UP**: `Vector3`

The default [up](../../../../../three.ez/api/classes/orthographiccameraauto/#up) direction for objects, also used as the default position for THREE.DirectionalLight | DirectionalLight,
THREE.HemisphereLight | HemisphereLight and THREE.Spotlight | Spotlight (which creates lights shining from the top down).

#### Default Value

`new THREE.Vector3( 0, 1, 0)`

#### Inherited from

`PerspectiveCamera.DEFAULT_UP`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:367

## Accessors

### clicking

#### Get Signature

> **get** **clicking**(): `boolean`

Indicates if the object is currently being clicked.

##### Returns

`boolean`

#### Inherited from

`PerspectiveCamera.clicking`

#### Defined in

[src/patch/Object3D.ts:73](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L73)

***

### enabledState

#### Get Signature

> **get** **enabledState**(): `boolean`

Retrieves the combined enabled state considering parent objects.

##### Returns

`boolean`

#### Inherited from

`PerspectiveCamera.enabledState`

#### Defined in

[src/patch/Object3D.ts:77](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L77)

***

### firstFocusable

#### Get Signature

> **get** **firstFocusable**(): `Object3D`\<`Object3DEventMap`\>

Retrieves the first possible focusable object.

##### Returns

`Object3D`\<`Object3DEventMap`\>

#### Inherited from

`PerspectiveCamera.firstFocusable`

#### Defined in

[src/patch/Object3D.ts:81](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L81)

***

### focused

#### Get Signature

> **get** **focused**(): `boolean`

Indicates if the object is currently focused.

##### Returns

`boolean`

#### Inherited from

`PerspectiveCamera.focused`

#### Defined in

[src/patch/Object3D.ts:71](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L71)

***

### hovered

#### Get Signature

> **get** **hovered**(): `boolean`

Indicates if the primary pointer is over this object.

##### Returns

`boolean`

#### Inherited from

`PerspectiveCamera.hovered`

#### Defined in

[src/patch/Object3D.ts:69](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L69)

***

### isDragging

#### Get Signature

> **get** **isDragging**(): `boolean`

Indicates if the object is currently being dragged.

##### Returns

`boolean`

#### Inherited from

`PerspectiveCamera.isDragging`

#### Defined in

[src/patch/Object3D.ts:75](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L75)

***

### visibilityState

#### Get Signature

> **get** **visibilityState**(): `boolean`

Retrieves the combined visibility state considering parent objects.

##### Returns

`boolean`

#### Inherited from

`PerspectiveCamera.visibilityState`

#### Defined in

[src/patch/Object3D.ts:79](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L79)

## Methods

### add()

> **add**(...`object`): `this`

Adds another Object3D as child of this Object3D.

#### Parameters

• ...**object**: `Object3D`\<`Object3DEventMap`\>[]

#### Returns

`this`

#### Remarks

An arbitrary number of objects may be added
Any current parent on an object passed in here will be removed, since an Object3D can have at most one parent.

#### See

 - [attach](../../../../../three.ez/api/classes/perspectivecameraauto/#attach)
 - THREE.Group | Group for info on manually grouping objects.

#### Inherited from

`PerspectiveCamera.add`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:515

***

### addEventListener()

> **addEventListener**\<`T`\>(`type`, `listener`): `void`

Adds a listener to an event type.

#### Type Parameters

• **T** *extends* keyof `Object3DEventMap`

#### Parameters

• **type**: `T`

The type of event to listen to.

• **listener**: `EventListener`\<`Object3DEventMap`\[`T`\], `T`, [`PerspectiveCameraAuto`](/three.ez/api/classes/perspectivecameraauto/)\>

The function that gets called when the event is fired.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.addEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:52

***

### applyBlur()

> **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.applyBlur`

#### Defined in

[src/patch/Object3D.ts:89](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L89)

***

### applyFocus()

> **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.applyFocus`

#### Defined in

[src/patch/Object3D.ts:85](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L85)

***

### applyMatrix4()

> **applyMatrix4**(`matrix`): `void`

Applies the matrix transform to the object and updates the object's position, rotation and scale.

#### Parameters

• **matrix**: `Matrix4`

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.applyMatrix4`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:385

***

### applyQuaternion()

> **applyQuaternion**(`quaternion`): `this`

Applies the rotation represented by the quaternion to the object.

#### Parameters

• **quaternion**: `Quaternion`

#### Returns

`this`

#### Inherited from

`PerspectiveCamera.applyQuaternion`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:391

***

### attach()

> **attach**(`object`): `this`

Adds a Object3D as a child of this, while maintaining the object's world transform.

#### Parameters

• **object**: `Object3D`\<`Object3DEventMap`\>

#### Returns

`this`

#### Remarks

Note: This method does not support scene graphs having non-uniformly-scaled nodes(s).

#### See

[add](../../../../../three.ez/api/classes/perspectivecameraauto/#add)

#### Inherited from

`PerspectiveCamera.attach`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:541

***

### bindProperty()

> **bindProperty**\<`T`\>(`property`, `getCallback`, `renderOnChange`?): `this`

Binds a property to a callback function for updates.

#### Type Parameters

• **T** *extends* keyof [`PerspectiveCameraAuto`](/three.ez/api/classes/perspectivecameraauto/)

#### Parameters

• **property**: `T`

The name of the property to bind.

• **getCallback**

A function that retrieves the property's value.

• **renderOnChange?**: `boolean`

Indicates whether to render when the property changes (optional, default: `false`).

#### Returns

`this`

The instance of the object with the binding applied.

#### Inherited from

`PerspectiveCamera.bindProperty`

#### Defined in

[src/patch/Object3D.ts:141](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L141)

***

### clear()

> **clear**(): `this`

Removes all child objects.

#### Returns

`this`

#### Inherited from

`PerspectiveCamera.clear`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:533

***

### clearViewOffset()

> **clearViewOffset**(): `void`

Removes any offset set by the [.setViewOffset](../../../../../three.ez/api/classes/perspectivecameraauto/#setviewoffset) method.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.clearViewOffset`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:240

***

### clone()

> **clone**(`recursive`?): `this`

Returns a clone of `this` object and optionally all descendants.

#### Parameters

• **recursive?**: `boolean`

If true, descendants of the object are also cloned. Default `true`

#### Returns

`this`

#### Inherited from

`PerspectiveCamera.clone`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:664

***

### copy()

> **copy**(`object`, `recursive`?): `this`

Copies the given object into this object.

#### Parameters

• **object**: `Object3D`\<`Object3DEventMap`\>

• **recursive?**: `boolean`

If set to `true`, descendants of the object are copied next to the existing ones. If set to
`false`, descendants are left unchanged. Default is `true`.

#### Returns

`this`

#### Remarks

Event listeners and user-defined callbacks (.onAfterRender and .onBeforeRender) are not copied.

#### Inherited from

`PerspectiveCamera.copy`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:673

***

### detectChanges()

> **detectChanges**(`recursive`?): `void`

Calculates all bindings on the current object.
If 'recursive' is set to true, it will also calculate bindings for all children.

#### Parameters

• **recursive?**: `boolean`

If true, calculate bindings for children as well (optional, default: `false`).

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.detectChanges`

#### Defined in

[src/patch/Object3D.ts:133](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L133)

***

### dispatchEvent()

> **dispatchEvent**\<`T`\>(`event`): `void`

Fire an event type.

#### Type Parameters

• **T** *extends* keyof `Object3DEventMap`

#### Parameters

• **event**: `BaseEvent`\<`T`\> & `Object3DEventMap`\[`T`\]

The event that gets fired.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.dispatchEvent`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:81

***

### getEffectiveFOV()

> **getEffectiveFOV**(): `number`

Returns the current vertical field of view angle in degrees considering [.zoom](../../../../../three.ez/api/classes/perspectivecameraauto/#zoom).

#### Returns

`number`

#### Inherited from

`PerspectiveCamera.getEffectiveFOV`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:165

***

### getFilmHeight()

> **getFilmHeight**(): `number`

Returns the height of the image on the film

#### Returns

`number`

#### Remarks

If [.aspect](../../../../../three.ez/api/classes/perspectivecameraauto/#aspect). is less than or equal to one (portrait format), the result equals [.filmGauge](../../../../../three.ez/api/classes/perspectivecameraauto/#filmgauge).

#### Inherited from

`PerspectiveCamera.getFilmHeight`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:179

***

### getFilmWidth()

> **getFilmWidth**(): `number`

Returns the width of the image on the film

#### Returns

`number`

#### Remarks

If [.aspect](../../../../../three.ez/api/classes/perspectivecameraauto/#aspect). is greater than or equal to one (landscape format), the result equals [.filmGauge](../../../../../three.ez/api/classes/perspectivecameraauto/#filmgauge).

#### Inherited from

`PerspectiveCamera.getFilmWidth`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:172

***

### getFocalLength()

> **getFocalLength**(): `number`

Returns the focal length of the current .fov | fov in respect to [.filmGauge](../../../../../three.ez/api/classes/perspectivecameraauto/#filmgauge).

#### Returns

`number`

#### Inherited from

`PerspectiveCamera.getFocalLength`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:153

***

### getObjectById()

> **getObjectById**(`id`): `Object3D`\<`Object3DEventMap`\>

Searches through an object and its children, starting with the object itself, and returns the first with a matching id.

#### Parameters

• **id**: `number`

Unique number of the object instance. Expects a `Integer`

#### Returns

`Object3D`\<`Object3DEventMap`\>

#### Remarks

Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.

#### See

id

#### Inherited from

`PerspectiveCamera.getObjectById`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:549

***

### getObjectByName()

> **getObjectByName**(`name`): `Object3D`\<`Object3DEventMap`\>

Searches through an object and its children, starting with the object itself, and returns the first with a matching name.

#### Parameters

• **name**: `string`

String to match to the children's Object3D.name property.

#### Returns

`Object3D`\<`Object3DEventMap`\>

#### Remarks

Note that for most objects the name is an empty string by default
You will have to set it manually to make use of this method.

#### Inherited from

`PerspectiveCamera.getObjectByName`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:557

***

### getObjectByProperty()

> **getObjectByProperty**(`name`, `value`): `Object3D`\<`Object3DEventMap`\>

Searches through an object and its children, starting with the object itself,
and returns the first with a property that matches the value given.

#### Parameters

• **name**: `string`

the property name to search for.

• **value**: `any`

value of the given property.

#### Returns

`Object3D`\<`Object3DEventMap`\>

#### Inherited from

`PerspectiveCamera.getObjectByProperty`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:566

***

### getObjectsByProperty()

> **getObjectsByProperty**(`name`, `value`, `optionalTarget`?): `Object3D`\<`Object3DEventMap`\>[]

Searches through an object and its children, starting with the object itself,
and returns the first with a property that matches the value given.

#### Parameters

• **name**: `string`

The property name to search for.

• **value**: `any`

Value of the given property.

• **optionalTarget?**: `Object3D`\<`Object3DEventMap`\>[]

target to set the result. Otherwise a new Array is instantiated. If set, you must clear
this array prior to each call (i.e., array.length = 0;).

#### Returns

`Object3D`\<`Object3DEventMap`\>[]

#### Inherited from

`PerspectiveCamera.getObjectsByProperty`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:576

***

### getViewBounds()

> **getViewBounds**(`distance`, `minTarget`, `maxTarget`): `void`

Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.

#### Parameters

• **distance**: `number`

• **minTarget**: `Vector2`

• **maxTarget**: `Vector2`

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.getViewBounds`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:185

***

### getViewSize()

> **getViewSize**(`distance`, `target`): `Vector2`

Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
Copies the result into the target Vector2, where x is width and y is height.

#### Parameters

• **distance**: `number`

• **target**: `Vector2`

#### Returns

`Vector2`

#### Inherited from

`PerspectiveCamera.getViewSize`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:191

***

### getWorldDirection()

> **getWorldDirection**(`target`): `Vector3`

Returns a THREE.Vector3 | Vector3 representing the world space direction in which the Camera is looking.

#### Parameters

• **target**: `Vector3`

The result will be copied into this Vector3.

#### Returns

`Vector3`

#### Remarks

Note: A Camera looks down its local, negative z-axis.

#### Inherited from

`PerspectiveCamera.getWorldDirection`

#### Defined in

node\_modules/@types/three/src/cameras/Camera.d.ts:73

***

### getWorldPosition()

> **getWorldPosition**(`target`): `Vector3`

Returns a vector representing the position of the object in world space.

#### Parameters

• **target**: `Vector3`

The result will be copied into this Vector3.

#### Returns

`Vector3`

#### Inherited from

`PerspectiveCamera.getWorldPosition`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:582

***

### getWorldQuaternion()

> **getWorldQuaternion**(`target`): `Quaternion`

Returns a quaternion representing the rotation of the object in world space.

#### Parameters

• **target**: `Quaternion`

The result will be copied into this Quaternion.

#### Returns

`Quaternion`

#### Inherited from

`PerspectiveCamera.getWorldQuaternion`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:588

***

### getWorldScale()

> **getWorldScale**(`target`): `Vector3`

Returns a vector of the scaling factors applied to the object for each axis in world space.

#### Parameters

• **target**: `Vector3`

The result will be copied into this Vector3.

#### Returns

`Vector3`

#### Inherited from

`PerspectiveCamera.getWorldScale`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:594

***

### hasEvent()

> **hasEvent**\<`K`\>(`type`, `listener`): `boolean`

Checks if the object has a specific event listener.

#### Type Parameters

• **K** *extends* keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Parameters

• **type**: `K`

The type of event to check for.

• **listener**

The callback function to check.

#### Returns

`boolean`

`true` if the event listener is attached; otherwise, `false`.

#### Inherited from

`PerspectiveCamera.hasEvent`

#### Defined in

[src/patch/Object3D.ts:103](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L103)

***

### hasEventListener()

> **hasEventListener**\<`T`\>(`type`, `listener`): `boolean`

Checks if listener is added to an event type.

#### Type Parameters

• **T** *extends* keyof `Object3DEventMap`

#### Parameters

• **type**: `T`

The type of event to listen to.

• **listener**: `EventListener`\<`Object3DEventMap`\[`T`\], `T`, [`PerspectiveCameraAuto`](/three.ez/api/classes/perspectivecameraauto/)\>

The function that gets called when the event is fired.

#### Returns

`boolean`

#### Inherited from

`PerspectiveCamera.hasEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:62

***

### localToWorld()

> **localToWorld**(`vector`): `Vector3`

Converts the vector from this object's local space to world space.

#### Parameters

• **vector**: `Vector3`

A vector representing a position in this object's local space.

#### Returns

`Vector3`

#### Inherited from

`PerspectiveCamera.localToWorld`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:484

***

### lookAt()

#### lookAt(vector)

> **lookAt**(`vector`): `void`

Rotates the object to face a point in world space.

##### Parameters

• **vector**: `Vector3`

A vector representing a position in world space to look at.

##### Returns

`void`

##### Remarks

This method does not support objects having non-uniformly-scaled parent(s).

##### Inherited from

`PerspectiveCamera.lookAt`

##### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:497

#### lookAt(x, y, z)

> **lookAt**(`x`, `y`, `z`): `void`

Rotates the object to face a point in world space.

##### Parameters

• **x**: `number`

Expects a `Float`

• **y**: `number`

Expects a `Float`

• **z**: `number`

Expects a `Float`

##### Returns

`void`

##### Remarks

This method does not support objects having non-uniformly-scaled parent(s).

##### Inherited from

`PerspectiveCamera.lookAt`

##### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:505

***

### off()

> **off**\<`K`\>(`type`, `listener`): `void`

Removes an event listener from the object.

#### Type Parameters

• **K** *extends* keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Parameters

• **type**: `K`

The type of event to remove the listener from.

• **listener**

The callback function to remove.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.off`

#### Defined in

[src/patch/Object3D.ts:109](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L109)

***

### on()

> **on**\<`K`\>(`type`, `listener`): (`event`?) => `void`

Attaches an event listener to the object.

#### Type Parameters

• **K** *extends* keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Parameters

• **type**: `K` \| `K`[]

The type of event to listen for.

• **listener**

The callback function to execute when the event occurs.

#### Returns

`Function`

A function to remove the event listener.

##### Parameters

• **event?**: [`Events`](/three.ez/api/type-aliases/events/)\[`K`\]

##### Returns

`void`

#### Inherited from

`PerspectiveCamera.on`

#### Defined in

[src/patch/Object3D.ts:96](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L96)

***

### onAfterRender()

> **onAfterRender**(`renderer`, `scene`, `camera`, `geometry`, `material`, `group`): `void`

An optional callback that is executed immediately after a 3D object is rendered.

#### Parameters

• **renderer**: `WebGLRenderer`

• **scene**: `Scene`

• **camera**: `Camera`

• **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

• **material**: `Material`

• **group**: `Group`\<`Object3DEventMap`\>

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

`PerspectiveCamera.onAfterRender`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:353

***

### onAfterShadow()

> **onAfterShadow**(`renderer`, `scene`, `camera`, `shadowCamera`, `geometry`, `depthMaterial`, `group`): `void`

An optional callback that is executed immediately after a 3D object is rendered to a shadow map.

#### Parameters

• **renderer**: `WebGLRenderer`

• **scene**: `Scene`

• **camera**: `Camera`

• **shadowCamera**: `Camera`

• **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

• **depthMaterial**: `Material`

• **group**: `Group`\<`Object3DEventMap`\>

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry,
depthMaterial, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

`PerspectiveCamera.onAfterShadow`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:318

***

### onBeforeRender()

> **onBeforeRender**(`renderer`, `scene`, `camera`, `geometry`, `material`, `group`): `void`

An optional callback that is executed immediately before a 3D object is rendered.

#### Parameters

• **renderer**: `WebGLRenderer`

• **scene**: `Scene`

• **camera**: `Camera`

• **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

• **material**: `Material`

• **group**: `Group`\<`Object3DEventMap`\>

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

`PerspectiveCamera.onBeforeRender`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:336

***

### onBeforeShadow()

> **onBeforeShadow**(`renderer`, `scene`, `camera`, `shadowCamera`, `geometry`, `depthMaterial`, `group`): `void`

An optional callback that is executed immediately before a 3D object is rendered to a shadow map.

#### Parameters

• **renderer**: `WebGLRenderer`

• **scene**: `Scene`

• **camera**: `Camera`

• **shadowCamera**: `Camera`

• **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

• **depthMaterial**: `Material`

• **group**: `Group`\<`Object3DEventMap`\>

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry,
depthMaterial, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

`PerspectiveCamera.onBeforeShadow`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:299

***

### querySelector()

> **querySelector**(`query`): `Object3D`\<`Object3DEventMap`\>

Finds and returns the first Object3D element that matches the specified query string.
This method follows a similar syntax to CSS selectors.

#### Parameters

• **query**: `string`

The query string to match against the Object3D elements.

#### Returns

`Object3D`\<`Object3DEventMap`\>

The first Object3D element that matches the query, or undefined if no match is found.

#### Inherited from

`PerspectiveCamera.querySelector`

#### Defined in

[src/patch/Object3D.ts:161](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L161)

***

### querySelectorAll()

> **querySelectorAll**(`query`): `Object3D`\<`Object3DEventMap`\>[]

Finds and returns a list of Object3D elements that match the specified query string.
This method follows a similar syntax to CSS selectors.

#### Parameters

• **query**: `string`

The query string to match against the Object3D elements.

#### Returns

`Object3D`\<`Object3DEventMap`\>[]

An array of Object3D elements that match the query.

#### Inherited from

`PerspectiveCamera.querySelectorAll`

#### Defined in

[src/patch/Object3D.ts:168](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L168)

***

### raycast()

> **raycast**(`raycaster`, `intersects`): `void`

Abstract (empty) method to get intersections between a casted ray and this object

#### Parameters

• **raycaster**: `Raycaster`

• **intersects**: `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>[]

#### Returns

`void`

#### Remarks

Subclasses such as THREE.Mesh | Mesh, THREE.Line | Line, and THREE.Points | Points implement this method in order to use raycasting.

#### See

THREE.Raycaster | Raycaster

#### Default Value

`() => {}`

#### Inherited from

`PerspectiveCamera.raycast`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:610

***

### remove()

> **remove**(...`object`): `this`

Removes a Object3D as child of this Object3D.

#### Parameters

• ...**object**: `Object3D`\<`Object3DEventMap`\>[]

#### Returns

`this`

#### Remarks

An arbitrary number of objects may be removed.

#### See

THREE.Group | Group for info on manually grouping objects.

#### Inherited from

`PerspectiveCamera.remove`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:523

***

### removeEventListener()

> **removeEventListener**\<`T`\>(`type`, `listener`): `void`

Removes a listener from an event type.

#### Type Parameters

• **T** *extends* keyof `Object3DEventMap`

#### Parameters

• **type**: `T`

The type of the listener that gets removed.

• **listener**: `EventListener`\<`Object3DEventMap`\[`T`\], `T`, [`PerspectiveCameraAuto`](/three.ez/api/classes/perspectivecameraauto/)\>

The listener function that gets removed.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.removeEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:72

***

### removeFromParent()

> **removeFromParent**(): `this`

Removes this object from its current parent.

#### Returns

`this`

#### Inherited from

`PerspectiveCamera.removeFromParent`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:528

***

### rotateOnAxis()

> **rotateOnAxis**(`axis`, `angle`): `this`

Rotate an object along an axis in object space.

#### Parameters

• **axis**: `Vector3`

A normalized vector in object space.

• **angle**: `number`

The angle in radians. Expects a `Float`

#### Returns

`this`

#### Remarks

The axis is assumed to be normalized.

#### Inherited from

`PerspectiveCamera.rotateOnAxis`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:425

***

### rotateOnWorldAxis()

> **rotateOnWorldAxis**(`axis`, `angle`): `this`

Rotate an object along an axis in world space.

#### Parameters

• **axis**: `Vector3`

A normalized vector in world space.

• **angle**: `number`

The angle in radians. Expects a `Float`

#### Returns

`this`

#### Remarks

The axis is assumed to be normalized
Method Assumes no rotated parent.

#### Inherited from

`PerspectiveCamera.rotateOnWorldAxis`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:434

***

### rotateX()

> **rotateX**(`angle`): `this`

Rotates the object around _x_ axis in local space.

#### Parameters

• **angle**: `number`

#### Returns

`this`

#### Inherited from

`PerspectiveCamera.rotateX`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:440

***

### rotateY()

> **rotateY**(`angle`): `this`

Rotates the object around _y_ axis in local space.

#### Parameters

• **angle**: `number`

#### Returns

`this`

#### Inherited from

`PerspectiveCamera.rotateY`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:446

***

### rotateZ()

> **rotateZ**(`angle`): `this`

Rotates the object around _z_ axis in local space.

#### Parameters

• **angle**: `number`

#### Returns

`this`

#### Inherited from

`PerspectiveCamera.rotateZ`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:452

***

### setFocalLength()

> **setFocalLength**(`focalLength`): `void`

Sets the FOV by focal length in respect to the current [.filmGauge](../../../../../three.ez/api/classes/perspectivecameraauto/#filmgauge).

#### Parameters

• **focalLength**: `number`

Expects a `Float`

#### Returns

`void`

#### Remarks

By default, the focal length is specified for a `35mm` (full frame) camera.

#### Inherited from

`PerspectiveCamera.setFocalLength`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:160

***

### ~~setLens()~~

> **setLens**(`focalLength`, `frameHeight`?): `void`

:::caution[Deprecated]
Use [.setFocalLength()](/three.ez/api/classes/perspectivecameraauto/#setfocallength) and [.filmGauge](/three.ez/api/classes/perspectivecameraauto/#filmgauge) instead.
:::

#### Parameters

• **focalLength**: `number`

• **frameHeight?**: `number`

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.setLens`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:251

***

### setManualDetectionMode()

> **setManualDetectionMode**(): `void`

Activates manual detection mode for bindings.
When this method is used, all bindings will no longer be calculated automatically.
Instead, they must be manually computed using the 'detectChanges' function.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.setManualDetectionMode`

#### Defined in

[src/patch/Object3D.ts:127](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L127)

***

### setRotationFromAxisAngle()

> **setRotationFromAxisAngle**(`axis`, `angle`): `void`

Calls THREE.Quaternion.setFromAxisAngle | setFromAxisAngle(axis, angle) on the [.quaternion](../../../../../three.ez/api/classes/orthographiccameraauto/#quaternion).

#### Parameters

• **axis**: `Vector3`

A normalized vector in object space.

• **angle**: `number`

Angle in radians. Expects a `Float`

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.setRotationFromAxisAngle`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:398

***

### setRotationFromEuler()

> **setRotationFromEuler**(`euler`): `void`

Calls THREE.Quaternion.setFromEuler | setFromEuler(euler) on the [.quaternion](../../../../../three.ez/api/classes/orthographiccameraauto/#quaternion).

#### Parameters

• **euler**: `Euler`

Euler angle specifying rotation amount.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.setRotationFromEuler`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:404

***

### setRotationFromMatrix()

> **setRotationFromMatrix**(`m`): `void`

Calls THREE.Quaternion.setFromRotationMatrix | setFromRotationMatrix(m) on the [.quaternion](../../../../../three.ez/api/classes/orthographiccameraauto/#quaternion).

#### Parameters

• **m**: `Matrix4`

Rotate the quaternion by the rotation component of the matrix.

#### Returns

`void`

#### Remarks

Note that this assumes that the upper 3x3 of m is a pure rotation matrix (i.e, unscaled).

#### Inherited from

`PerspectiveCamera.setRotationFromMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:411

***

### setRotationFromQuaternion()

> **setRotationFromQuaternion**(`q`): `void`

Copy the given THREE.Quaternion | Quaternion into [.quaternion](../../../../../three.ez/api/classes/orthographiccameraauto/#quaternion).

#### Parameters

• **q**: `Quaternion`

Normalized Quaternion.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.setRotationFromQuaternion`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:417

***

### setViewOffset()

> **setViewOffset**(`fullWidth`, `fullHeight`, `x`, `y`, `width`, `height`): `void`

Sets an offset in a larger frustum.

#### Parameters

• **fullWidth**: `number`

Full width of multiview setup Expects a `Float`.

• **fullHeight**: `number`

Full height of multiview setup Expects a `Float`.

• **x**: `number`

Horizontal offset of subcamera Expects a `Float`.

• **y**: `number`

Vertical offset of subcamera Expects a `Float`.

• **width**: `number`

Width of subcamera Expects a `Float`.

• **height**: `number`

Height of subcamera Expects a `Float`.

#### Returns

`void`

#### Remarks

This is useful for multi-window or multi-monitor/multi-machine setups.

For example, if you have 3x2 monitors and each monitor is _1920x1080_ and
the monitors are in grid like this
```
┌───┬───┬───┐
│ A │ B │ C │
├───┼───┼───┤
│ D │ E │ F │
└───┴───┴───┘
```
then for each monitor you would call it like this
```typescript
  const w = 1920;
  const h = 1080;
  const fullWidth = w * 3;
  const fullHeight = h * 2;

  // Monitor - A
  camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
  // Monitor - B
  camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
  // Monitor - C
  camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
  // Monitor - D
  camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
  // Monitor - E
  camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
  // Monitor - F
  camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
```
Note there is no reason monitors have to be the same size or in a grid.

#### Inherited from

`PerspectiveCamera.setViewOffset`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:235

***

### toJSON()

> **toJSON**(`meta`?): `PerspectiveCameraJSON`

Convert the object to three.js [JSON Object/Scene format](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4).

#### Parameters

• **meta?**: `JSONMeta`

Object containing metadata such as materials, textures or images for the object.

#### Returns

`PerspectiveCameraJSON`

#### Inherited from

`PerspectiveCamera.toJSON`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:253

***

### translateOnAxis()

> **translateOnAxis**(`axis`, `distance`): `this`

Translate an object by distance along an axis in object space

#### Parameters

• **axis**: `Vector3`

A normalized vector in object space.

• **distance**: `number`

The distance to translate. Expects a `Float`

#### Returns

`this`

#### Remarks

The axis is assumed to be normalized.

#### Inherited from

`PerspectiveCamera.translateOnAxis`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:460

***

### translateX()

> **translateX**(`distance`): `this`

Translates object along x axis in object space by distance units.

#### Parameters

• **distance**: `number`

Expects a `Float`

#### Returns

`this`

#### Inherited from

`PerspectiveCamera.translateX`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:466

***

### translateY()

> **translateY**(`distance`): `this`

Translates object along _y_ axis in object space by distance units.

#### Parameters

• **distance**: `number`

Expects a `Float`

#### Returns

`this`

#### Inherited from

`PerspectiveCamera.translateY`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:472

***

### translateZ()

> **translateZ**(`distance`): `this`

Translates object along _z_ axis in object space by distance units.

#### Parameters

• **distance**: `number`

Expects a `Float`

#### Returns

`this`

#### Inherited from

`PerspectiveCamera.translateZ`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:478

***

### traverse()

> **traverse**(`callback`): `void`

Executes the callback on this object and all descendants.

#### Parameters

• **callback**

A function with as first argument an Object3D object.

#### Returns

`void`

#### Remarks

Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

`PerspectiveCamera.traverse`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:617

***

### traverseAncestors()

> **traverseAncestors**(`callback`): `void`

Executes the callback on all ancestors.

#### Parameters

• **callback**

A function with as first argument an Object3D object.

#### Returns

`void`

#### Remarks

Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

`PerspectiveCamera.traverseAncestors`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:632

***

### traverseVisible()

> **traverseVisible**(`callback`): `void`

Like traverse, but the callback will only be executed for visible objects

#### Parameters

• **callback**

A function with as first argument an Object3D object.

#### Returns

`void`

#### Remarks

Descendants of invisible objects are not traversed.
Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

`PerspectiveCamera.traverseVisible`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:625

***

### trigger()

> **trigger**\<`K`\>(`type`, `event`?): `void`

Triggers a specific event on the object.

#### Type Parameters

• **K** *extends* keyof MiscEvents \| keyof InteractionEvents\<Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\>, Object3D\<Object3DEventMap\> \| InstancedMeshEntity\> \| keyof UpdateEvents

#### Parameters

• **type**: `K`

The type of event to trigger.

• **event?**: [`Events`](/three.ez/api/type-aliases/events/)\[`K`\]

Optional event data to pass to the listeners.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.trigger`

#### Defined in

[src/patch/Object3D.ts:115](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L115)

***

### triggerAncestor()

> **triggerAncestor**\<`K`\>(`type`, `event`?): `void`

Triggers a specific event on the object and all its ancestors.

#### Type Parameters

• **K** *extends* keyof [`InteractionEvents`](/three.ez/api/interfaces/interactionevents/)\<`Object3D`\<`Object3DEventMap`\>, `Object3D`\<`Object3DEventMap`\>, `Object3D`\<`Object3DEventMap`\> \| [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)\>

#### Parameters

• **type**: `K`

The type of event to trigger.

• **event?**: [`InteractionEvents`](/three.ez/api/interfaces/interactionevents/)\<`Object3D`\<`Object3DEventMap`\>, `Object3D`\<`Object3DEventMap`\>, `Object3D`\<`Object3DEventMap`\> \| [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)\>\[`K`\]

Optional event data to pass to the listeners.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.triggerAncestor`

#### Defined in

[src/patch/Object3D.ts:121](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L121)

***

### tween()

> **tween**\<`T`\>(`id`?): [`Tween`](/three.ez/api/classes/tween/)\<`T`\>

Initiates a Tween animation for the object.

#### Type Parameters

• **T** *extends* `Object3D`\<`Object3DEventMap`\> = `Object3D`\<`Object3DEventMap`\>

The type of the target.

#### Parameters

• **id?**: `string`

Unique identifier. If you start a new tween, the old one with the same id (if specified) will be stopped.

#### Returns

[`Tween`](/three.ez/api/classes/tween/)\<`T`\>

A Tween instance for further configuration.

#### Inherited from

`PerspectiveCamera.tween`

#### Defined in

[src/patch/Object3D.ts:154](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L154)

***

### unbindProperty()

> **unbindProperty**\<`T`\>(`property`): `this`

Unbinds a previously bound property from the object.

#### Type Parameters

• **T** *extends* keyof [`PerspectiveCameraAuto`](/three.ez/api/classes/perspectivecameraauto/)

#### Parameters

• **property**: `T`

The name of the property to unbind.

#### Returns

`this`

The instance of the object with the binding removed.

#### Inherited from

`PerspectiveCamera.unbindProperty`

#### Defined in

[src/patch/Object3D.ts:147](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L147)

***

### updateMatrix()

> **updateMatrix**(): `void`

Updates local transform.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.updateMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:637

***

### updateMatrixWorld()

> **updateMatrixWorld**(`force`?): `void`

Updates the global transform of the object.
And will update the object descendants if [.matrixWorldNeedsUpdate](../../../../../three.ez/api/classes/orthographiccameraauto/#matrixworldneedsupdate) is set to true or if the force parameter is set to `true`.

#### Parameters

• **force?**: `boolean`

A boolean that can be used to bypass [.matrixWorldAutoUpdate](../../../../../three.ez/api/classes/orthographiccameraauto/#matrixworldautoupdate), to recalculate the world matrix of the object and descendants on the current frame.
Useful if you cannot wait for the renderer to update it on the next frame, assuming [.matrixWorldAutoUpdate](../../../../../three.ez/api/classes/orthographiccameraauto/#matrixworldautoupdate) set to `true`.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.updateMatrixWorld`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:645

***

### updateProjectionMatrix()

> **updateProjectionMatrix**(): `void`

Updates the camera projection matrix

#### Returns

`void`

#### Remarks

Must be called after any change of parameters.

#### Inherited from

`PerspectiveCamera.updateProjectionMatrix`

#### Defined in

node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:246

***

### updateWorldMatrix()

> **updateWorldMatrix**(`updateParents`, `updateChildren`): `void`

Updates the global transform of the object.

#### Parameters

• **updateParents**: `boolean`

Recursively updates global transform of ancestors.

• **updateChildren**: `boolean`

Recursively updates global transform of descendants.

#### Returns

`void`

#### Inherited from

`PerspectiveCamera.updateWorldMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:652

***

### worldToLocal()

> **worldToLocal**(`vector`): `Vector3`

Converts the vector from world space to this object's local space.

#### Parameters

• **vector**: `Vector3`

A vector representing a position in world space.

#### Returns

`Vector3`

#### Inherited from

`PerspectiveCamera.worldToLocal`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:490
