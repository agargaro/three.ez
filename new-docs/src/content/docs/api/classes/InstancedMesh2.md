---
editUrl: false
next: false
prev: false
title: "InstancedMesh2"
---

Extends the InstancedMesh class to provide individual management of each instance, similar to an Object3D.

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

## Extends

- `InstancedMesh`

## Constructors

### new InstancedMesh2()

> **new InstancedMesh2**(`geometry`, `material`, `count`, `singleInstanceType`, `animate`, `color`?): [`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)

#### Parameters

• **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

The geometry for the instanced mesh.

• **material**: `Material`

The material to apply to the instanced mesh.

• **count**: `number`

The number of instances to create.

• **singleInstanceType**: *typeof* [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

The type of individual instance to create.

• **animate**: `boolean` = `false`

A flag indicating whether the 'animate' event will be triggered for each instance (optional, default: false).

• **color?**: `ColorRepresentation`

The default color to apply to each instance (optional).

#### Returns

[`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)

#### Overrides

`InstancedMesh.constructor`

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:66](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMesh2.ts#L66)

## Properties

### ~~animations~~

> **animations**: `AnimationClip`[]

Array with object's animation clips.

#### Default Value

`[]`

#### Inherited from

`InstancedMesh.animations`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:266

***

### ~~boundingBox~~

> **boundingBox**: `Box3`

This bounding box encloses all instances of the InstancedMesh,, which can be calculated with [.computeBoundingBox()](../../../../../three.ez/api/classes/instancedmesh2/#computeboundingbox).

#### Remarks

Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.

#### Default Value

`null`

#### Inherited from

`InstancedMesh.boundingBox`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:65

***

### ~~boundingSphere~~

> **boundingSphere**: `Sphere`

This bounding sphere encloses all instances of the InstancedMesh, which can be calculated with [.computeBoundingSphere()](../../../../../three.ez/api/classes/instancedmesh2/#computeboundingsphere).

#### Remarks

bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.

#### Default Value

`null`

#### Inherited from

`InstancedMesh.boundingSphere`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:72

***

### ~~castShadow~~

> **castShadow**: `boolean`

Whether the object gets rendered into shadow map.

#### Default Value

`false`

#### Inherited from

`InstancedMesh.castShadow`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:238

***

### ~~children~~

> **children**: `Object3D`\<`Object3DEventMap`\>[]

Array with object's children.

#### See

THREE.Object3DGroup | Group for info on manually grouping objects.

#### Default Value

`[]`

#### Inherited from

`InstancedMesh.children`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:145

***

### ~~count~~

> **count**: `number`

The number of instances.

#### Remarks

The `count` value passed into the InstancedMesh | constructor represents the **maximum** number of instances of this mesh.
You can change the number of instances at runtime to an integer value in the range `[0, count]`.

#### Inherited from

`InstancedMesh.count`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:82

***

### ~~cursor~~

> **cursor**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when interacting with the object.

#### Inherited from

`InstancedMesh.cursor`

#### Defined in

[src/patch/Object3D.ts:59](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L59)

***

### ~~cursorDrag~~

> **cursorDrag**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when dragging the object.

#### Inherited from

`InstancedMesh.cursorDrag`

#### Defined in

[src/patch/Object3D.ts:61](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L61)

***

### ~~cursorDrop~~

> **cursorDrop**: [`Cursor`](/three.ez/api/type-aliases/cursor/)

Cursor style when dropping an object onto this one.

#### Inherited from

`InstancedMesh.cursorDrop`

#### Defined in

[src/patch/Object3D.ts:63](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L63)

***

### ~~customDepthMaterial?~~

> `optional` **customDepthMaterial**: `Material`

Custom depth material to be used when rendering to the depth map.

#### Remarks

Can only be used in context of meshes.
When shadow-casting with a THREE.DirectionalLight | DirectionalLight or THREE.SpotLight | SpotLight,
if you are modifying vertex positions in the vertex shader you must specify a customDepthMaterial for proper shadows.

#### Default Value

`undefined`

#### Inherited from

`InstancedMesh.customDepthMaterial`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:282

***

### ~~customDistanceMaterial?~~

> `optional` **customDistanceMaterial**: `Material`

Same as [customDepthMaterial](../../../../../three.ez/api/classes/orthographiccameraauto/#customdepthmaterial), but used with THREE.Object3DPointLight | PointLight.

#### Default Value

`undefined`

#### Inherited from

`InstancedMesh.customDistanceMaterial`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:288

***

### ~~draggable~~

> **draggable**: `boolean`

Indicates whether the object is draggable. Default is DEFAULT_DRAGGABLE (`false`).

#### Inherited from

`InstancedMesh.draggable`

#### Defined in

[src/patch/Object3D.ts:53](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L53)

***

### ~~dragTarget~~

> **dragTarget**: `Object3D`\<`Object3DEventMap`\>

Indicates which object will be dragged instead of this one.

#### Inherited from

`InstancedMesh.dragTarget`

#### Defined in

[src/patch/Object3D.ts:49](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L49)

***

### ~~enabled~~

> **enabled**: `boolean`

Determines if the object is enabled. Default is `true`.
If set to true, it allows triggering all InteractionEvents; otherwise, events are disabled.

#### Inherited from

`InstancedMesh.enabled`

#### Defined in

[src/patch/Object3D.ts:40](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L40)

***

### ~~findDropTarget~~

> **findDropTarget**: `boolean`

Determines when the object is dragged, whether it will have to search for any drop targets. Default is `false`.

#### Inherited from

`InstancedMesh.findDropTarget`

#### Defined in

[src/patch/Object3D.ts:55](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L55)

***

### ~~focusable~~

> **focusable**: `boolean`

Indicates whether the object can receive focus. Default is DEFAULT_FOCUSABLE (`true`).

#### Inherited from

`InstancedMesh.focusable`

#### Defined in

[src/patch/Object3D.ts:51](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L51)

***

### ~~frustumCulled~~

> **frustumCulled**: `boolean`

When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera.

#### Default Value

`true`

#### Inherited from

`InstancedMesh.frustumCulled`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:251

***

### ~~geometry~~

> **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

An instance of THREE.BufferGeometry | BufferGeometry (or derived classes), defining the object's structure.

#### Default Value

THREE.BufferGeometry | `new THREE.BufferGeometry()`.

#### Inherited from

`InstancedMesh.geometry`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:59

***

### ~~hitboxes~~

> **hitboxes**: [`Hitbox`](/three.ez/api/classes/hitbox/)[]

Array of hitboxes for collision detection.

#### Inherited from

`InstancedMesh.hitboxes`

#### Defined in

[src/patch/Object3D.ts:47](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L47)

***

### ~~id~~

> `readonly` **id**: `number`

Unique number for this Object3D instance.

#### Remarks

Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
Expects a `Integer`

#### Inherited from

`InstancedMesh.id`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:109

***

### ~~instanceColor~~

> **instanceColor**: `InstancedBufferAttribute`

Represents the colors of all instances.
You have to set InstancedBufferAttribute.needsUpdate | .instanceColor.needsUpdate() flag to `true` if you modify instanced data via [.setColorAt()](../../../../../three.ez/api/classes/instancedmesh2/#setcolorat).

#### Default Value

`null`

#### Inherited from

`InstancedMesh.instanceColor`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:89

***

### ~~instanceMatrix~~

> **instanceMatrix**: `InstancedBufferAttribute`

Represents the local transformation of all instances.
You have to set InstancedBufferAttribute.needsUpdate | .instanceMatrix.needsUpdate() flag to `true` if you modify instanced data via [.setMatrixAt()](../../../../../three.ez/api/classes/instancedmesh2/#setmatrixat).

#### Inherited from

`InstancedMesh.instanceMatrix`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:95

***

### ~~instances~~

> **instances**: [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)[] = `[]`

An array storing individual InstancedMeshEntity instances associated with this InstancedMesh2.
Each element represents a separate instance that can be managed individually.

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:26](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMesh2.ts#L26)

***

### ~~interceptByRaycaster~~

> **interceptByRaycaster**: `boolean`

Determines if the **object** and **all of its children** can be intercepted by the main raycaster.

#### Default

```ts
DEFAULT_INTERCEPT_BY_RAYCASTER (true).
```

#### Inherited from

`InstancedMesh.interceptByRaycaster`

#### Defined in

[src/patch/Object3D.ts:45](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L45)

***

### ~~isInstancedMesh~~

> `readonly` **isInstancedMesh**: `true`

Read-only flag to check if a given object is of type InstancedMesh.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

`InstancedMesh.isInstancedMesh`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:58

***

### ~~isInstancedMesh2~~

> **isInstancedMesh2**: `boolean` = `true`

A flag indicating that this is an instance of InstancedMesh2.

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:21](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMesh2.ts#L21)

***

### ~~isMesh~~

> `readonly` **isMesh**: `true`

Read-only flag to check if a given object is of type Mesh.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

`InstancedMesh.isMesh`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:47

***

### ~~isObject3D~~

> `readonly` **isObject3D**: `true`

Flag to check if a given object is of type Object3D.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

`InstancedMesh.isObject3D`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:102

***

### ~~layers~~

> **layers**: `Layers`

The layer membership of the object.

#### Remarks

The object is only visible if it has at least one layer in common with the THREE.Object3DCamera | Camera in use.
This property can also be used to filter out unwanted objects in ray-intersection tests when using THREE.Raycaster | Raycaster.

#### Default Value

`new THREE.Layers()`

#### Inherited from

`InstancedMesh.layers`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:226

***

### ~~material~~

> **material**: `Material` \| `Material`[]

An instance of material derived from the THREE.Material | Material base class or an array of materials, defining the object's appearance.

#### Default Value

THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`.

#### Inherited from

`InstancedMesh.material`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:65

***

### ~~matrix~~

> **matrix**: `Matrix4`

The local transform matrix.

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

`InstancedMesh.matrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:191

***

### ~~matrixAutoUpdate~~

> **matrixAutoUpdate**: `boolean`

When this is set, it calculates the matrix of position, (rotation or quaternion) and
scale every frame and also recalculates the matrixWorld property.

#### Default Value

[DEFAULT_MATRIX_AUTO_UPDATE](../../../../../three.ez/api/classes/orthographiccameraauto/#default_matrix_auto_update) - that is `(true)`.

#### Inherited from

`InstancedMesh.matrixAutoUpdate`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:205

***

### ~~matrixWorld~~

> **matrixWorld**: `Matrix4`

The global transform of the object.

#### Remarks

If the Object3D has no parent, then it's identical to the local transform THREE.Object3D.matrix | .matrix.

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

`InstancedMesh.matrixWorld`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:198

***

### ~~matrixWorldAutoUpdate~~

> **matrixWorldAutoUpdate**: `boolean`

If set, then the renderer checks every frame if the object and its children need matrix updates.
When it isn't, then you have to maintain all matrices in the object and its children yourself.

#### Default Value

[DEFAULT_MATRIX_WORLD_AUTO_UPDATE](../../../../../three.ez/api/classes/orthographiccameraauto/#default_matrix_world_auto_update) - that is `(true)`.

#### Inherited from

`InstancedMesh.matrixWorldAutoUpdate`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:212

***

### ~~matrixWorldNeedsUpdate~~

> **matrixWorldNeedsUpdate**: `boolean`

When this is set, it calculates the matrixWorld in that frame and resets this property to false.

#### Default Value

`false`

#### Inherited from

`InstancedMesh.matrixWorldNeedsUpdate`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:218

***

### ~~modelViewMatrix~~

> `readonly` **modelViewMatrix**: `Matrix4`

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

`InstancedMesh.modelViewMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:180

***

### ~~morphTargetDictionary?~~

> `optional` **morphTargetDictionary**: `object`

A dictionary of morphTargets based on the `morphTarget.name` property.

#### Index Signature

 \[`key`: `string`\]: `number`

#### Default Value

`undefined`, _but rebuilt by updateMorphTargets | .updateMorphTargets()._

#### Inherited from

`InstancedMesh.morphTargetDictionary`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:77

***

### ~~morphTargetInfluences?~~

> `optional` **morphTargetInfluences**: `number`[]

An array of weights typically from `0-1` that specify how much of the morph is applied.

#### Default Value

`undefined`, _but reset to a blank array by updateMorphTargets | .updateMorphTargets()._

#### Inherited from

`InstancedMesh.morphTargetInfluences`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:71

***

### ~~morphTexture~~

> **morphTexture**: `DataTexture`

Represents the morph target weights of all instances. You have to set its .needsUpdate flag to true if
you modify instanced data via .setMorphAt.

#### Inherited from

`InstancedMesh.morphTexture`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:101

***

### ~~name~~

> **name**: `string`

Optional name of the object

#### Remarks

_(doesn't need to be unique)_.

#### Default Value

`""`

#### Inherited from

`InstancedMesh.name`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:122

***

### ~~needsRender~~

> **needsRender**: `boolean`

Indicates whether the scene needs rendering.

#### Inherited from

`InstancedMesh.needsRender`

#### Defined in

[src/patch/Object3D.ts:65](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L65)

***

### ~~normalMatrix~~

> `readonly` **normalMatrix**: `Matrix3`

#### Default Value

`new THREE.Matrix3()`

#### Inherited from

`InstancedMesh.normalMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:185

***

### ~~parent~~

> **parent**: `Object3D`\<`Object3DEventMap`\>

Object's parent in the [scene graph](https://en.wikipedia.org/wiki/Scene_graph).

#### Remarks

An object can have at most one parent.

#### Default Value

`null`

#### Inherited from

`InstancedMesh.parent`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:137

***

### ~~position~~

> `readonly` **position**: `Vector3`

Object's local position.

#### Default Value

`new THREE.Vector3()` - that is `(0, 0, 0)`.

#### Inherited from

`InstancedMesh.position`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:157

***

### ~~quaternion~~

> `readonly` **quaternion**: `Quaternion`

Object's local rotation as a THREE.Quaternion | Quaternion.

#### Default Value

`new THREE.Quaternion()` - that is `(0,  0, 0, 1)`.

#### Inherited from

`InstancedMesh.quaternion`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:169

***

### ~~receiveShadow~~

> **receiveShadow**: `boolean`

Whether the material receives shadows.

#### Default Value

`false`

#### Inherited from

`InstancedMesh.receiveShadow`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:244

***

### ~~renderOrder~~

> **renderOrder**: `number`

This value allows the default rendering order of [scene graph](https://en.wikipedia.org/wiki/Scene_graph)
objects to be overridden although opaque and transparent objects remain sorted independently.

#### Remarks

When this property is set for an instance of Group | Group, all descendants objects will be sorted and rendered together.
Sorting is from lowest to highest renderOrder.

#### Default Value

`0`

#### Inherited from

`InstancedMesh.renderOrder`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:260

***

### ~~rotation~~

> `readonly` **rotation**: `Euler`

Object's local rotation ([Euler angles](https://en.wikipedia.org/wiki/Euler_angles)), in radians.

#### Default Value

`new THREE.Euler()` - that is `(0, 0, 0, Euler.DEFAULT_ORDER)`.

#### Inherited from

`InstancedMesh.rotation`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:163

***

### ~~scale~~

> `readonly` **scale**: `Vector3`

The object's local scale.

#### Default Value

`new THREE.Vector3( 1, 1, 1 )`

#### Inherited from

`InstancedMesh.scale`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:175

***

### ~~scene~~

> **scene**: `Scene`

Reference to the scene the object belongs to.

#### Inherited from

`InstancedMesh.scene`

#### Defined in

[src/patch/Object3D.ts:57](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L57)

***

### ~~tags~~

> **tags**: `Set`\<`string`\>

Indicates the tags to be searched using the querySelector and `querySelectorAll` methods.

#### Inherited from

`InstancedMesh.tags`

#### Defined in

[src/patch/Object3D.ts:67](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L67)

***

### ~~type~~

> `readonly` **type**: `string`

#### Default Value

`Mesh`

#### Inherited from

`InstancedMesh.type`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:53

***

### ~~up~~

> **up**: `Vector3`

This is used by the [lookAt](../../../../../three.ez/api/classes/instancedmesh2/#lookat) method, for example, to determine the orientation of the result.

#### Default Value

[Object3D.DEFAULT_UP](../../../../../three.ez/api/classes/orthographiccameraauto/#default_up) - that is `(0, 1, 0)`.

#### Inherited from

`InstancedMesh.up`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:151

***

### ~~userData~~

> **userData**: `Record`\<`string`, `any`\>

An object that can be used to store custom data about the Object3D.

#### Remarks

It should not hold references to _functions_ as these **will not** be cloned.

#### Default

`{}`

#### Inherited from

`InstancedMesh.userData`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:273

***

### ~~uuid~~

> **uuid**: `string`

[UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) of this object instance.

#### Remarks

This gets automatically assigned and shouldn't be edited.

#### Inherited from

`InstancedMesh.uuid`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:115

***

### ~~visible~~

> **visible**: `boolean`

Object gets rendered if `true`.

#### Default Value

`true`

#### Inherited from

`InstancedMesh.visible`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:232

***

### ~~DEFAULT\_MATRIX\_AUTO\_UPDATE~~

> `static` **DEFAULT\_MATRIX\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixAutoUpdate](../../../../../three.ez/api/classes/orthographiccameraauto/#matrixautoupdate) for newly created Object3Ds.

#### Default Value

`true`

#### Inherited from

`InstancedMesh.DEFAULT_MATRIX_AUTO_UPDATE`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:373

***

### ~~DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE~~

> `static` **DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixWorldAutoUpdate](../../../../../three.ez/api/classes/orthographiccameraauto/#matrixworldautoupdate) for newly created Object3Ds.

#### Default Value

`true`

#### Inherited from

`InstancedMesh.DEFAULT_MATRIX_WORLD_AUTO_UPDATE`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:379

***

### ~~DEFAULT\_UP~~

> `static` **DEFAULT\_UP**: `Vector3`

The default [up](../../../../../three.ez/api/classes/orthographiccameraauto/#up) direction for objects, also used as the default position for THREE.DirectionalLight | DirectionalLight,
THREE.HemisphereLight | HemisphereLight and THREE.Spotlight | Spotlight (which creates lights shining from the top down).

#### Default Value

`new THREE.Vector3( 0, 1, 0)`

#### Inherited from

`InstancedMesh.DEFAULT_UP`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:367

## Accessors

### ~~clicking~~

#### Get Signature

> **get** **clicking**(): `boolean`

Indicates if the object is currently being clicked.

##### Returns

`boolean`

#### Inherited from

`InstancedMesh.clicking`

#### Defined in

[src/patch/Object3D.ts:73](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L73)

***

### ~~clickingInstance~~

#### Get Signature

> **get** **clickingInstance**(): [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

Gets the currently clicking instance.

##### Returns

[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:51](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMesh2.ts#L51)

***

### ~~draggingInstance~~

#### Get Signature

> **get** **draggingInstance**(): [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

Gets the currently dragging instance.

##### Returns

[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:56](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMesh2.ts#L56)

***

### ~~enabledState~~

#### Get Signature

> **get** **enabledState**(): `boolean`

Retrieves the combined enabled state considering parent objects.

##### Returns

`boolean`

#### Inherited from

`InstancedMesh.enabledState`

#### Defined in

[src/patch/Object3D.ts:77](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L77)

***

### ~~firstFocusable~~

#### Get Signature

> **get** **firstFocusable**(): `Object3D`\<`Object3DEventMap`\>

Retrieves the first possible focusable object.

##### Returns

`Object3D`\<`Object3DEventMap`\>

#### Inherited from

`InstancedMesh.firstFocusable`

#### Defined in

[src/patch/Object3D.ts:81](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L81)

***

### ~~focused~~

#### Get Signature

> **get** **focused**(): `boolean`

Indicates if the object is currently focused.

##### Returns

`boolean`

#### Inherited from

`InstancedMesh.focused`

#### Defined in

[src/patch/Object3D.ts:71](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L71)

***

### ~~focusedInstance~~

#### Get Signature

> **get** **focusedInstance**(): [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

Gets the currently focused instance.

##### Returns

[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:46](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMesh2.ts#L46)

***

### ~~hovered~~

#### Get Signature

> **get** **hovered**(): `boolean`

Indicates if the primary pointer is over this object.

##### Returns

`boolean`

#### Inherited from

`InstancedMesh.hovered`

#### Defined in

[src/patch/Object3D.ts:69](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L69)

***

### ~~hoveredInstance~~

#### Get Signature

> **get** **hoveredInstance**(): [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

Gets the currently hovered instance.

##### Returns

[`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:41](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMesh2.ts#L41)

***

### ~~isDragging~~

#### Get Signature

> **get** **isDragging**(): `boolean`

Indicates if the object is currently being dragged.

##### Returns

`boolean`

#### Inherited from

`InstancedMesh.isDragging`

#### Defined in

[src/patch/Object3D.ts:75](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L75)

***

### ~~visibilityState~~

#### Get Signature

> **get** **visibilityState**(): `boolean`

Retrieves the combined visibility state considering parent objects.

##### Returns

`boolean`

#### Inherited from

`InstancedMesh.visibilityState`

#### Defined in

[src/patch/Object3D.ts:79](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L79)

## Methods

### ~~add()~~

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

 - [attach](../../../../../three.ez/api/classes/instancedmesh2/#attach)
 - THREE.Group | Group for info on manually grouping objects.

#### Inherited from

`InstancedMesh.add`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:515

***

### ~~addEventListener()~~

> **addEventListener**\<`T`\>(`type`, `listener`): `void`

Adds a listener to an event type.

#### Type Parameters

• **T** *extends* keyof `InstancedMeshEventMap`

#### Parameters

• **type**: `T`

The type of event to listen to.

• **listener**: `EventListener`\<`InstancedMeshEventMap`\[`T`\], `T`, [`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)\>

The function that gets called when the event is fired.

#### Returns

`void`

#### Inherited from

`InstancedMesh.addEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:52

***

### ~~applyBlur()~~

> **applyBlur**(): `void`

Applies blur (removes focus) from the object.

#### Returns

`void`

#### Inherited from

`InstancedMesh.applyBlur`

#### Defined in

[src/patch/Object3D.ts:89](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L89)

***

### ~~applyFocus()~~

> **applyFocus**(): `void`

Applies focus to the object.

#### Returns

`void`

#### Inherited from

`InstancedMesh.applyFocus`

#### Defined in

[src/patch/Object3D.ts:85](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L85)

***

### ~~applyMatrix4()~~

> **applyMatrix4**(`matrix`): `void`

Applies the matrix transform to the object and updates the object's position, rotation and scale.

#### Parameters

• **matrix**: `Matrix4`

#### Returns

`void`

#### Inherited from

`InstancedMesh.applyMatrix4`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:385

***

### ~~applyQuaternion()~~

> **applyQuaternion**(`quaternion`): `this`

Applies the rotation represented by the quaternion to the object.

#### Parameters

• **quaternion**: `Quaternion`

#### Returns

`this`

#### Inherited from

`InstancedMesh.applyQuaternion`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:391

***

### ~~attach()~~

> **attach**(`object`): `this`

Adds a Object3D as a child of this, while maintaining the object's world transform.

#### Parameters

• **object**: `Object3D`\<`Object3DEventMap`\>

#### Returns

`this`

#### Remarks

Note: This method does not support scene graphs having non-uniformly-scaled nodes(s).

#### See

[add](../../../../../three.ez/api/classes/instancedmesh2/#add)

#### Inherited from

`InstancedMesh.attach`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:541

***

### ~~bindProperty()~~

> **bindProperty**\<`T`\>(`property`, `getCallback`, `renderOnChange`?): `this`

Binds a property to a callback function for updates.

#### Type Parameters

• **T** *extends* keyof [`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)

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

`InstancedMesh.bindProperty`

#### Defined in

[src/patch/Object3D.ts:141](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L141)

***

### ~~clear()~~

> **clear**(): `this`

Removes all child objects.

#### Returns

`this`

#### Inherited from

`InstancedMesh.clear`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:533

***

### ~~clone()~~

> **clone**(`recursive`?): `this`

Returns a clone of `this` object and optionally all descendants.

#### Parameters

• **recursive?**: `boolean`

If true, descendants of the object are also cloned. Default `true`

#### Returns

`this`

#### Inherited from

`InstancedMesh.clone`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:664

***

### ~~computeBoundingBox()~~

> **computeBoundingBox**(): `void`

Computes the bounding box of the instanced mesh, and updates the .boundingBox attribute. The bounding box
is not computed by the engine; it must be computed by your app. You may need to recompute the bounding box if an
instance is transformed via .setMatrixAt().

#### Returns

`void`

#### Inherited from

`InstancedMesh.computeBoundingBox`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:108

***

### ~~computeBoundingSphere()~~

> **computeBoundingSphere**(): `void`

Computes the bounding sphere of the instanced mesh, and updates the .boundingSphere attribute. The engine
automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling. You
may need to recompute the bounding sphere if an instance is transformed via [page:.setMatrixAt]().

#### Returns

`void`

#### Inherited from

`InstancedMesh.computeBoundingSphere`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:115

***

### ~~copy()~~

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

`InstancedMesh.copy`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:673

***

### ~~detectChanges()~~

> **detectChanges**(`recursive`?): `void`

Calculates all bindings on the current object.
If 'recursive' is set to true, it will also calculate bindings for all children.

#### Parameters

• **recursive?**: `boolean`

If true, calculate bindings for children as well (optional, default: `false`).

#### Returns

`void`

#### Inherited from

`InstancedMesh.detectChanges`

#### Defined in

[src/patch/Object3D.ts:133](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L133)

***

### ~~dispatchEvent()~~

> **dispatchEvent**\<`T`\>(`event`): `void`

Fire an event type.

#### Type Parameters

• **T** *extends* keyof `InstancedMeshEventMap`

#### Parameters

• **event**: `BaseEvent`\<`T`\> & `InstancedMeshEventMap`\[`T`\]

The event that gets fired.

#### Returns

`void`

#### Inherited from

`InstancedMesh.dispatchEvent`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:81

***

### ~~dispose()~~

> **dispose**(): `this`

Frees the GPU-related resources allocated by this instance

#### Returns

`this`

#### Remarks

Call this method whenever this instance is no longer used in your app.

#### Inherited from

`InstancedMesh.dispose`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:176

***

### ~~focus()~~

> **focus**(`target`?): `void`

Set the focus to the specified instance, if focus is enabled for the InstancedMesh2, or clears the focus if no target is provided.

#### Parameters

• **target?**: [`InstancedMeshEntity`](/three.ez/api/classes/instancedmeshentity/)

Optional. The instance to focus on. If not provided, the focus is cleared.

#### Returns

`void`

#### Defined in

[src/instancedMesh/InstancedMesh2.ts:101](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/instancedMesh/InstancedMesh2.ts#L101)

***

### ~~getColorAt()~~

> **getColorAt**(`index`, `color`): `void`

Get the color of the defined instance.

#### Parameters

• **index**: `number`

The index of an instance. Values have to be in the range `[0, count]`. Expects a `Integer`

• **color**: `Color`

This color object will be set to the color of the defined instance.

#### Returns

`void`

#### Inherited from

`InstancedMesh.getColorAt`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:122

***

### ~~getMatrixAt()~~

> **getMatrixAt**(`index`, `matrix`): `void`

Get the local transformation matrix of the defined instance.

#### Parameters

• **index**: `number`

The index of an instance Values have to be in the range `[0, count]`. Expects a `Integer`

• **matrix**: `Matrix4`

This 4x4 matrix will be set to the local transformation matrix of the defined instance.

#### Returns

`void`

#### Inherited from

`InstancedMesh.getMatrixAt`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:138

***

### ~~getMorphAt()~~

> **getMorphAt**(`index`, `mesh`): `void`

Get the morph target weights of the defined instance.

#### Parameters

• **index**: `number`

The index of an instance. Values have to be in the range [0, count].

• **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

The .morphTargetInfluences property of this mesh will be filled with the morph target weights of the defined instance.

#### Returns

`void`

#### Inherited from

`InstancedMesh.getMorphAt`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:145

***

### ~~getObjectById()~~

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

`InstancedMesh.getObjectById`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:549

***

### ~~getObjectByName()~~

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

`InstancedMesh.getObjectByName`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:557

***

### ~~getObjectByProperty()~~

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

`InstancedMesh.getObjectByProperty`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:566

***

### ~~getObjectsByProperty()~~

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

`InstancedMesh.getObjectsByProperty`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:576

***

### ~~getVertexPosition()~~

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

`InstancedMesh.getVertexPosition`

#### Defined in

node\_modules/@types/three/src/objects/Mesh.d.ts:91

***

### ~~getWorldDirection()~~

> **getWorldDirection**(`target`): `Vector3`

Returns a vector representing the direction of object's positive z-axis in world space.

#### Parameters

• **target**: `Vector3`

The result will be copied into this Vector3.

#### Returns

`Vector3`

#### Inherited from

`InstancedMesh.getWorldDirection`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:600

***

### ~~getWorldPosition()~~

> **getWorldPosition**(`target`): `Vector3`

Returns a vector representing the position of the object in world space.

#### Parameters

• **target**: `Vector3`

The result will be copied into this Vector3.

#### Returns

`Vector3`

#### Inherited from

`InstancedMesh.getWorldPosition`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:582

***

### ~~getWorldQuaternion()~~

> **getWorldQuaternion**(`target`): `Quaternion`

Returns a quaternion representing the rotation of the object in world space.

#### Parameters

• **target**: `Quaternion`

The result will be copied into this Quaternion.

#### Returns

`Quaternion`

#### Inherited from

`InstancedMesh.getWorldQuaternion`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:588

***

### ~~getWorldScale()~~

> **getWorldScale**(`target`): `Vector3`

Returns a vector of the scaling factors applied to the object for each axis in world space.

#### Parameters

• **target**: `Vector3`

The result will be copied into this Vector3.

#### Returns

`Vector3`

#### Inherited from

`InstancedMesh.getWorldScale`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:594

***

### ~~hasEvent()~~

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

`InstancedMesh.hasEvent`

#### Defined in

[src/patch/Object3D.ts:103](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L103)

***

### ~~hasEventListener()~~

> **hasEventListener**\<`T`\>(`type`, `listener`): `boolean`

Checks if listener is added to an event type.

#### Type Parameters

• **T** *extends* keyof `InstancedMeshEventMap`

#### Parameters

• **type**: `T`

The type of event to listen to.

• **listener**: `EventListener`\<`InstancedMeshEventMap`\[`T`\], `T`, [`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)\>

The function that gets called when the event is fired.

#### Returns

`boolean`

#### Inherited from

`InstancedMesh.hasEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:62

***

### ~~localToWorld()~~

> **localToWorld**(`vector`): `Vector3`

Converts the vector from this object's local space to world space.

#### Parameters

• **vector**: `Vector3`

A vector representing a position in this object's local space.

#### Returns

`Vector3`

#### Inherited from

`InstancedMesh.localToWorld`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:484

***

### ~~lookAt()~~

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

`InstancedMesh.lookAt`

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

`InstancedMesh.lookAt`

##### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:505

***

### ~~off()~~

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

`InstancedMesh.off`

#### Defined in

[src/patch/Object3D.ts:109](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L109)

***

### ~~on()~~

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

`InstancedMesh.on`

#### Defined in

[src/patch/Object3D.ts:96](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L96)

***

### ~~onAfterRender()~~

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

`InstancedMesh.onAfterRender`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:353

***

### ~~onAfterShadow()~~

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

`InstancedMesh.onAfterShadow`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:318

***

### ~~onBeforeRender()~~

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

`InstancedMesh.onBeforeRender`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:336

***

### ~~onBeforeShadow()~~

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

`InstancedMesh.onBeforeShadow`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:299

***

### ~~querySelector()~~

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

`InstancedMesh.querySelector`

#### Defined in

[src/patch/Object3D.ts:161](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L161)

***

### ~~querySelectorAll()~~

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

`InstancedMesh.querySelectorAll`

#### Defined in

[src/patch/Object3D.ts:168](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L168)

***

### ~~raycast()~~

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

`InstancedMesh.raycast`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:610

***

### ~~remove()~~

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

`InstancedMesh.remove`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:523

***

### ~~removeEventListener()~~

> **removeEventListener**\<`T`\>(`type`, `listener`): `void`

Removes a listener from an event type.

#### Type Parameters

• **T** *extends* keyof `InstancedMeshEventMap`

#### Parameters

• **type**: `T`

The type of the listener that gets removed.

• **listener**: `EventListener`\<`InstancedMeshEventMap`\[`T`\], `T`, [`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)\>

The listener function that gets removed.

#### Returns

`void`

#### Inherited from

`InstancedMesh.removeEventListener`

#### Defined in

node\_modules/@types/three/src/core/EventDispatcher.d.ts:72

***

### ~~removeFromParent()~~

> **removeFromParent**(): `this`

Removes this object from its current parent.

#### Returns

`this`

#### Inherited from

`InstancedMesh.removeFromParent`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:528

***

### ~~rotateOnAxis()~~

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

`InstancedMesh.rotateOnAxis`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:425

***

### ~~rotateOnWorldAxis()~~

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

`InstancedMesh.rotateOnWorldAxis`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:434

***

### ~~rotateX()~~

> **rotateX**(`angle`): `this`

Rotates the object around _x_ axis in local space.

#### Parameters

• **angle**: `number`

#### Returns

`this`

#### Inherited from

`InstancedMesh.rotateX`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:440

***

### ~~rotateY()~~

> **rotateY**(`angle`): `this`

Rotates the object around _y_ axis in local space.

#### Parameters

• **angle**: `number`

#### Returns

`this`

#### Inherited from

`InstancedMesh.rotateY`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:446

***

### ~~rotateZ()~~

> **rotateZ**(`angle`): `this`

Rotates the object around _z_ axis in local space.

#### Parameters

• **angle**: `number`

#### Returns

`this`

#### Inherited from

`InstancedMesh.rotateZ`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:452

***

### ~~setColorAt()~~

> **setColorAt**(`index`, `color`): `void`

Sets the given color to the defined instance

#### Parameters

• **index**: `number`

The index of an instance. Values have to be in the range `[0, count]`. Expects a `Integer`

• **color**: `Color`

The color of a single instance.

#### Returns

`void`

#### Remarks

Make sure you set InstancedBufferAttribute.needsUpdate | .instanceColor.needsUpdate() to `true` after updating all the colors.

#### Inherited from

`InstancedMesh.setColorAt`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:131

***

### ~~setManualDetectionMode()~~

> **setManualDetectionMode**(): `void`

Activates manual detection mode for bindings.
When this method is used, all bindings will no longer be calculated automatically.
Instead, they must be manually computed using the 'detectChanges' function.

#### Returns

`void`

#### Inherited from

`InstancedMesh.setManualDetectionMode`

#### Defined in

[src/patch/Object3D.ts:127](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L127)

***

### ~~setMatrixAt()~~

> **setMatrixAt**(`index`, `matrix`): `void`

Sets the given local transformation matrix to the defined instance.

#### Parameters

• **index**: `number`

The index of an instance. Values have to be in the range `[0, count]`. Expects a `Integer`

• **matrix**: `Matrix4`

A 4x4 matrix representing the local transformation of a single instance.

#### Returns

`void`

#### Remarks

Make sure you set InstancedBufferAttribute.needsUpdate | .instanceMatrix.needsUpdate() flag to `true` after updating all the matrices.

#### Inherited from

`InstancedMesh.setMatrixAt`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:154

***

### ~~setMorphAt()~~

> **setMorphAt**(`index`, `mesh`): `void`

Sets the morph target weights to the defined instance. Make sure you set .morphTexture.needsUpdate
to true after updating all the influences.

#### Parameters

• **index**: `number`

The index of an instance. Values have to be in the range [0, count].

• **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

A mesh with .morphTargetInfluences property containing the morph target weights of a single instance.

#### Returns

`void`

#### Inherited from

`InstancedMesh.setMorphAt`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:162

***

### ~~setRotationFromAxisAngle()~~

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

`InstancedMesh.setRotationFromAxisAngle`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:398

***

### ~~setRotationFromEuler()~~

> **setRotationFromEuler**(`euler`): `void`

Calls THREE.Quaternion.setFromEuler | setFromEuler(euler) on the [.quaternion](../../../../../three.ez/api/classes/orthographiccameraauto/#quaternion).

#### Parameters

• **euler**: `Euler`

Euler angle specifying rotation amount.

#### Returns

`void`

#### Inherited from

`InstancedMesh.setRotationFromEuler`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:404

***

### ~~setRotationFromMatrix()~~

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

`InstancedMesh.setRotationFromMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:411

***

### ~~setRotationFromQuaternion()~~

> **setRotationFromQuaternion**(`q`): `void`

Copy the given THREE.Quaternion | Quaternion into [.quaternion](../../../../../three.ez/api/classes/orthographiccameraauto/#quaternion).

#### Parameters

• **q**: `Quaternion`

Normalized Quaternion.

#### Returns

`void`

#### Inherited from

`InstancedMesh.setRotationFromQuaternion`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:417

***

### ~~toJSON()~~

> **toJSON**(`meta`?): `InstancedMeshJSON`

#### Parameters

• **meta?**: `JSONMeta`

#### Returns

`InstancedMeshJSON`

#### Inherited from

`InstancedMesh.toJSON`

#### Defined in

node\_modules/@types/three/src/objects/InstancedMesh.d.ts:178

***

### ~~translateOnAxis()~~

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

`InstancedMesh.translateOnAxis`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:460

***

### ~~translateX()~~

> **translateX**(`distance`): `this`

Translates object along x axis in object space by distance units.

#### Parameters

• **distance**: `number`

Expects a `Float`

#### Returns

`this`

#### Inherited from

`InstancedMesh.translateX`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:466

***

### ~~translateY()~~

> **translateY**(`distance`): `this`

Translates object along _y_ axis in object space by distance units.

#### Parameters

• **distance**: `number`

Expects a `Float`

#### Returns

`this`

#### Inherited from

`InstancedMesh.translateY`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:472

***

### ~~translateZ()~~

> **translateZ**(`distance`): `this`

Translates object along _z_ axis in object space by distance units.

#### Parameters

• **distance**: `number`

Expects a `Float`

#### Returns

`this`

#### Inherited from

`InstancedMesh.translateZ`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:478

***

### ~~traverse()~~

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

`InstancedMesh.traverse`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:617

***

### ~~traverseAncestors()~~

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

`InstancedMesh.traverseAncestors`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:632

***

### ~~traverseVisible()~~

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

`InstancedMesh.traverseVisible`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:625

***

### ~~trigger()~~

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

`InstancedMesh.trigger`

#### Defined in

[src/patch/Object3D.ts:115](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L115)

***

### ~~triggerAncestor()~~

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

`InstancedMesh.triggerAncestor`

#### Defined in

[src/patch/Object3D.ts:121](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L121)

***

### ~~tween()~~

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

`InstancedMesh.tween`

#### Defined in

[src/patch/Object3D.ts:154](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L154)

***

### ~~unbindProperty()~~

> **unbindProperty**\<`T`\>(`property`): `this`

Unbinds a previously bound property from the object.

#### Type Parameters

• **T** *extends* keyof [`InstancedMesh2`](/three.ez/api/classes/instancedmesh2/)

#### Parameters

• **property**: `T`

The name of the property to unbind.

#### Returns

`this`

The instance of the object with the binding removed.

#### Inherited from

`InstancedMesh.unbindProperty`

#### Defined in

[src/patch/Object3D.ts:147](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Object3D.ts#L147)

***

### ~~updateMatrix()~~

> **updateMatrix**(): `void`

Updates local transform.

#### Returns

`void`

#### Inherited from

`InstancedMesh.updateMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:637

***

### ~~updateMatrixWorld()~~

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

`InstancedMesh.updateMatrixWorld`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:645

***

### ~~updateWorldMatrix()~~

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

`InstancedMesh.updateWorldMatrix`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:652

***

### ~~worldToLocal()~~

> **worldToLocal**(`vector`): `Vector3`

Converts the vector from world space to this object's local space.

#### Parameters

• **vector**: `Vector3`

A vector representing a position in world space.

#### Returns

`Vector3`

#### Inherited from

`InstancedMesh.worldToLocal`

#### Defined in

node\_modules/@types/three/src/core/Object3D.d.ts:490
