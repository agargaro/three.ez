---
editUrl: false
next: false
prev: false
title: "Hitbox"
---

Hitbox for collision detection.

## Extends

- `Mesh`

## Constructors

### new Hitbox()

> **new Hitbox**(`geometry`): [`Hitbox`](/three.ez/api/classes/hitbox/)

#### Parameters

• **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

#### Returns

[`Hitbox`](/three.ez/api/classes/hitbox/)

#### Overrides

`Mesh.constructor`

#### Defined in

[src/events/Hitbox.ts:9](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/Hitbox.ts#L9)

## Properties

### animations

> **animations**: `AnimationClip`[]

Array with object's animation clips.

#### Default Value

`[]`

#### Inherited from

`Mesh.animations`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:266

***

### castShadow

> **castShadow**: `boolean`

Whether the object gets rendered into shadow map.

#### Default Value

`false`

#### Inherited from

`Mesh.castShadow`

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

`Mesh.children`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:145

***

### cursor

> **cursor**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when interacting with the object.

#### Inherited from

`Mesh.cursor`

#### Defined in

[src/patch/Object3D.ts:59](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L59)

***

### cursorDrag

> **cursorDrag**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when dragging the object.

#### Inherited from

`Mesh.cursorDrag`

#### Defined in

[src/patch/Object3D.ts:61](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L61)

***

### cursorDrop

> **cursorDrop**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when dropping an object onto this one.

#### Inherited from

`Mesh.cursorDrop`

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

`Mesh.customDepthMaterial`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:282

***

### customDistanceMaterial?

> `optional` **customDistanceMaterial**: `Material`

Same as [customDepthMaterial](../../../../../three.ez/api/classes/orthographiccameraauto/#customdepthmaterial), but used with THREE.Object3DPointLight | PointLight.

#### Default Value

`undefined`

#### Inherited from

`Mesh.customDistanceMaterial`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:288

***

### draggable

> **draggable**: `boolean`

Indicates whether the object is draggable. Default is DEFAULT_DRAGGABLE (`false`).

#### Inherited from

`Mesh.draggable`

#### Defined in

[src/patch/Object3D.ts:53](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L53)

***

### dragTarget

> **dragTarget**: `Object3D`\<`Object3DEventMap`\>

Indicates which object will be dragged instead of this one.

#### Inherited from

`Mesh.dragTarget`

#### Defined in

[src/patch/Object3D.ts:49](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L49)

***

### enabled

> **enabled**: `boolean`

Determines if the object is enabled. Default is `true`.
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Inherited from

`Mesh.enabled`

#### Defined in

[src/patch/Object3D.ts:40](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L40)

***

### findDropTarget

> **findDropTarget**: `boolean`

Determines when the object is dragged, whether it will have to search for any drop targets. Default is `false`.

#### Inherited from

`Mesh.findDropTarget`

#### Defined in

[src/patch/Object3D.ts:55](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L55)

***

### focusable

> **focusable**: `boolean`

Indicates whether the object can receive focus. Default is DEFAULT_FOCUSABLE (`true`).

#### Inherited from

`Mesh.focusable`

#### Defined in

[src/patch/Object3D.ts:51](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L51)

***

### frustumCulled

> **frustumCulled**: `boolean`

When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera.

#### Default Value

`true`

#### Inherited from

`Mesh.frustumCulled`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:251

***

### geometry

> **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

An instance of THREE.BufferGeometry | BufferGeometry (or derived classes), defining the object's structure.

#### Default Value

THREE.BufferGeometry | `new THREE.BufferGeometry()`.

#### Inherited from

`Mesh.geometry`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:59

***

### hitboxes

> **hitboxes**: [`Hitbox`](/three.ez/api/classes/hitbox/)[]

Array of hitboxes for collision detection.

#### Inherited from

`Mesh.hitboxes`

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

`Mesh.id`

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

`Mesh.interceptByRaycaster`

#### Defined in

[src/patch/Object3D.ts:45](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L45)

***

### isMesh

> `readonly` **isMesh**: `true`

Read-only flag to check if a given object is of type Mesh.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

`Mesh.isMesh`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:47

***

### isObject3D

> `readonly` **isObject3D**: `true`

Flag to check if a given object is of type Object3D.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

`Mesh.isObject3D`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:102

***

### layers

> **layers**: `Layers`

The layer membership of the object.

#### Remarks

The object is only visible if it has at least one layer in common with the THREE.Object3DCamera | Camera in use.
This property can also be used to filter out unwanted objects in ray-intersection tests when using THREE.Raycaster | Raycaster.

#### Default Value

`new THREE.Layers()`

#### Inherited from

`Mesh.layers`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:226

***

### material

> **material**: `Material` \| `Material`[]

An instance of material derived from the THREE.Material | Material base class or an array of materials, defining the object's appearance.

#### Default Value

THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`.

#### Inherited from

`Mesh.material`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:65

***

### matrix

> **matrix**: `Matrix4`

The local transform matrix.

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

`Mesh.matrix`

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

`Mesh.matrixAutoUpdate`

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

`Mesh.matrixWorld`

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

`Mesh.matrixWorldAutoUpdate`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:212

***

### matrixWorldNeedsUpdate

> **matrixWorldNeedsUpdate**: `boolean`

When this is set, it calculates the matrixWorld in that frame and resets this property to false.

#### Default Value

`false`

#### Inherited from

`Mesh.matrixWorldNeedsUpdate`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:218

***

### modelViewMatrix

> `readonly` **modelViewMatrix**: `Matrix4`

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

`Mesh.modelViewMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:180

***

### morphTargetDictionary?

> `optional` **morphTargetDictionary**: `object`

A dictionary of morphTargets based on the `morphTarget.name` property.

#### Index Signature

 \[`key`: `string`\]: `number`

#### Default Value

`undefined`, _but rebuilt by [.updateMorphTargets()](../../../../../three.ez/api/classes/hitbox/#updatemorphtargets)._

#### Inherited from

`Mesh.morphTargetDictionary`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:77

***

### morphTargetInfluences?

> `optional` **morphTargetInfluences**: `number`[]

An array of weights typically from `0-1` that specify how much of the morph is applied.

#### Default Value

`undefined`, _but reset to a blank array by [.updateMorphTargets()](../../../../../three.ez/api/classes/hitbox/#updatemorphtargets)._

#### Inherited from

`Mesh.morphTargetInfluences`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:71

***

### name

> **name**: `string`

Optional name of the object

#### Remarks

_(doesn't need to be unique)_.

#### Default Value

`""`

#### Inherited from

`Mesh.name`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:122

***

### needsRender

> **needsRender**: `boolean`

Indicates whether the scene needs rendering.

#### Inherited from

`Mesh.needsRender`

#### Defined in

[src/patch/Object3D.ts:65](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L65)

***

### normalMatrix

> `readonly` **normalMatrix**: `Matrix3`

#### Default Value

`new THREE.Matrix3()`

#### Inherited from

`Mesh.normalMatrix`

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

`Mesh.parent`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:137

***

### position

> `readonly` **position**: `Vector3`

Object's local position.

#### Default Value

`new THREE.Vector3()` - that is `(0, 0, 0)`.

#### Inherited from

`Mesh.position`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:157

***

### quaternion

> `readonly` **quaternion**: `Quaternion`

Object's local rotation as a THREE.Quaternion | Quaternion.

#### Default Value

`new THREE.Quaternion()` - that is `(0,  0, 0, 1)`.

#### Inherited from

`Mesh.quaternion`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:169

***

### receiveShadow

> **receiveShadow**: `boolean`

Whether the material receives shadows.

#### Default Value

`false`

#### Inherited from

`Mesh.receiveShadow`

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

`Mesh.renderOrder`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:260

***

### rotation

> `readonly` **rotation**: `Euler`

Object's local rotation ([Euler angles](https://en.wikipedia.org/wiki/Euler_angles)), in radians.

#### Default Value

`new THREE.Euler()` - that is `(0, 0, 0, Euler.DEFAULT_ORDER)`.

#### Inherited from

`Mesh.rotation`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:163

***

### scale

> `readonly` **scale**: `Vector3`

The object's local scale.

#### Default Value

`new THREE.Vector3( 1, 1, 1 )`

#### Inherited from

`Mesh.scale`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:175

***

### scene

> **scene**: `Scene`

Reference to the scene the object belongs to.

#### Inherited from

`Mesh.scene`

#### Defined in

[src/patch/Object3D.ts:57](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L57)

***

### tags

> **tags**: `Set`\<`string`\>

Indicates the tags to be searched using the querySelector and `querySelectorAll` methods.

#### Inherited from

`Mesh.tags`

#### Defined in

[src/patch/Object3D.ts:67](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L67)

***

### type

> `readonly` **type**: `string`

#### Default Value

`Mesh`

#### Inherited from

`Mesh.type`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:53

***

### up

> **up**: `Vector3`

This is used by the [lookAt](../../../../../three.ez/api/classes/hitbox/#lookat) method, for example, to determine the orientation of the result.

#### Default Value

[Object3D.DEFAULT_UP](../../../../../three.ez/api/classes/orthographiccameraauto/#default_up) - that is `(0, 1, 0)`.

#### Inherited from

`Mesh.up`

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

`Mesh.userData`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:273

***

### uuid

> **uuid**: `string`

[UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) of this object instance.

#### Remarks

This gets automatically assigned and shouldn't be edited.

#### Inherited from

`Mesh.uuid`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:115

***

### visible

> **visible**: `boolean`

Object gets rendered if `true`.

#### Default Value

`true`

#### Inherited from

`Mesh.visible`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:232

***

### DEFAULT\_MATRIX\_AUTO\_UPDATE

> `static` **DEFAULT\_MATRIX\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixAutoUpdate](../../../../../three.ez/api/classes/orthographiccameraauto/#matrixautoupdate) for newly created Object3Ds.

#### Default Value

`true`

#### Inherited from

`Mesh.DEFAULT_MATRIX_AUTO_UPDATE`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:373

***

### DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE

> `static` **DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixWorldAutoUpdate](../../../../../three.ez/api/classes/orthographiccameraauto/#matrixworldautoupdate) for newly created Object3Ds.

#### Default Value

`true`

#### Inherited from

`Mesh.DEFAULT_MATRIX_WORLD_AUTO_UPDATE`

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

`Mesh.DEFAULT_UP`

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

`Mesh.clicking`

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

`Mesh.enabledState`

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

`Mesh.firstFocusable`

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

`Mesh.focused`

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

`Mesh.hovered`

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

`Mesh.isDragging`

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

`Mesh.visibilityState`

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

 - [attach](../../../../../three.ez/api/classes/hitbox/#attach)
 - THREE.Group | Group for info on manually grouping objects.

#### Inherited from

`Mesh.add`

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

• **listener**: `EventListener`\<`Object3DEventMap`\[`T`\], `T`, [`Hitbox`](/three.ez/api/classes/hitbox/)\>

The function that gets called when the event is fired.

#### Returns

`void`

#### Inherited from

`Mesh.addEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:52

***

### applyBlur()

> **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Inherited from

`Mesh.applyBlur`

#### Defined in

[src/patch/Object3D.ts:89](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L89)

***

### applyFocus()

> **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Inherited from

`Mesh.applyFocus`

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

`Mesh.applyMatrix4`

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

`Mesh.applyQuaternion`

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

[add](../../../../../three.ez/api/classes/hitbox/#add)

#### Inherited from

`Mesh.attach`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:541

***

### bindProperty()

> **bindProperty**\<`T`\>(`property`, `getCallback`, `renderOnChange`?): `this`

Binds a property to a callback function for updates.

#### Type Parameters

• **T** *extends* keyof [`Hitbox`](/three.ez/api/classes/hitbox/)

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

`Mesh.bindProperty`

#### Defined in

[src/patch/Object3D.ts:141](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L141)

***

### clear()

> **clear**(): `this`

Removes all child objects.

#### Returns

`this`

#### Inherited from

`Mesh.clear`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:533

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

`Mesh.clone`

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

`Mesh.copy`

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

`Mesh.detectChanges`

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

`Mesh.dispatchEvent`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:81

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

`Mesh.getObjectById`

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

`Mesh.getObjectByName`

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

`Mesh.getObjectByProperty`

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

`Mesh.getObjectsByProperty`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:576

***

### getVertexPosition()

> **getVertexPosition**(`index`, `target`): `Vector3`

Get the local-space position of the vertex at the given index,
taking into account the current animation state of both morph targets and skinning.

#### Parameters

• **index**: `number`

Expects a `Integer`

• **target**: `Vector3`

#### Returns

`Vector3`

#### Inherited from

`Mesh.getVertexPosition`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:91

***

### getWorldDirection()

> **getWorldDirection**(`target`): `Vector3`

Returns a vector representing the direction of object's positive z-axis in world space.

#### Parameters

• **target**: `Vector3`

The result will be copied into this Vector3.

#### Returns

`Vector3`

#### Inherited from

`Mesh.getWorldDirection`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:600

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

`Mesh.getWorldPosition`

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

`Mesh.getWorldQuaternion`

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

`Mesh.getWorldScale`

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

`Mesh.hasEvent`

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

• **listener**: `EventListener`\<`Object3DEventMap`\[`T`\], `T`, [`Hitbox`](/three.ez/api/classes/hitbox/)\>

The function that gets called when the event is fired.

#### Returns

`boolean`

#### Inherited from

`Mesh.hasEventListener`

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

`Mesh.localToWorld`

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

`Mesh.lookAt`

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

`Mesh.lookAt`

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

`Mesh.off`

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

`Mesh.on`

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

`Mesh.onAfterRender`

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

`Mesh.onAfterShadow`

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

`Mesh.onBeforeRender`

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

`Mesh.onBeforeShadow`

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

`Mesh.querySelector`

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

`Mesh.querySelectorAll`

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

`Mesh.raycast`

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

`Mesh.remove`

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

• **listener**: `EventListener`\<`Object3DEventMap`\[`T`\], `T`, [`Hitbox`](/three.ez/api/classes/hitbox/)\>

The listener function that gets removed.

#### Returns

`void`

#### Inherited from

`Mesh.removeEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:72

***

### removeFromParent()

> **removeFromParent**(): `this`

Removes this object from its current parent.

#### Returns

`this`

#### Inherited from

`Mesh.removeFromParent`

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

`Mesh.rotateOnAxis`

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

`Mesh.rotateOnWorldAxis`

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

`Mesh.rotateX`

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

`Mesh.rotateY`

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

`Mesh.rotateZ`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:452

***

### setManualDetectionMode()

> **setManualDetectionMode**(): `void`

Activates manual detection mode for bindings.
When this method is used, all bindings will no longer be calculated automatically.
Instead, they must be manually computed using the 'detectChanges' function.

#### Returns

`void`

#### Inherited from

`Mesh.setManualDetectionMode`

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

`Mesh.setRotationFromAxisAngle`

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

`Mesh.setRotationFromEuler`

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

`Mesh.setRotationFromMatrix`

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

`Mesh.setRotationFromQuaternion`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:417

***

### toJSON()

> **toJSON**(`meta`?): `MeshJSON`

Convert the object to three.js [JSON Object/Scene format](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4).

#### Parameters

• **meta?**: `JSONMeta`

Object containing metadata such as materials, textures or images for the object.

#### Returns

`MeshJSON`

#### Inherited from

`Mesh.toJSON`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:93

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

`Mesh.translateOnAxis`

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

`Mesh.translateX`

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

`Mesh.translateY`

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

`Mesh.translateZ`

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

`Mesh.traverse`

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

`Mesh.traverseAncestors`

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

`Mesh.traverseVisible`

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

`Mesh.trigger`

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

`Mesh.triggerAncestor`

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

`Mesh.tween`

#### Defined in

[src/patch/Object3D.ts:154](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L154)

***

### unbindProperty()

> **unbindProperty**\<`T`\>(`property`): `this`

Unbinds a previously bound property from the object.

#### Type Parameters

• **T** *extends* keyof [`Hitbox`](/three.ez/api/classes/hitbox/)

#### Parameters

• **property**: `T`

The name of the property to unbind.

#### Returns

`this`

The instance of the object with the binding removed.

#### Inherited from

`Mesh.unbindProperty`

#### Defined in

[src/patch/Object3D.ts:147](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L147)

***

### updateMatrix()

> **updateMatrix**(): `void`

Updates local transform.

#### Returns

`void`

#### Inherited from

`Mesh.updateMatrix`

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

`Mesh.updateMatrixWorld`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:645

***

### updateMorphTargets()

> **updateMorphTargets**(): `void`

Updates the morphTargets to have no influence on the object

#### Returns

`void`

#### Remarks

Resets the [morphTargetInfluences](../../../../../three.ez/api/classes/hitbox/#morphtargetinfluences) and [morphTargetDictionary](../../../../../three.ez/api/classes/hitbox/#morphtargetdictionary) properties.

#### Inherited from

`Mesh.updateMorphTargets`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:83

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

`Mesh.updateWorldMatrix`

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

`Mesh.worldToLocal`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:490
