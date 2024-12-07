---
editUrl: false
next: false
prev: false
title: "IntersectionExt"
---

Represents an extended intersection between a ray and 3D objects in a scene.

## Extends

- `Intersection`

## Properties

### batchId?

> `optional` **batchId**: `number`

#### Inherited from

`Intersection.batchId`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:36

***

### distance

> **distance**: `number`

Distance between the origin of the ray and the intersection

#### Inherited from

`Intersection.distance`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:19

***

### distanceToRay?

> `optional` **distanceToRay**: `number`

#### Inherited from

`Intersection.distanceToRay`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:20

***

### face?

> `optional` **face**: `Face`

Intersected face

#### Inherited from

`Intersection.face`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:25

***

### faceIndex?

> `optional` **faceIndex**: `number`

Index of the intersected face

#### Inherited from

`Intersection.faceIndex`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:27

***

### hitbox

> **hitbox**: [`Hitbox`](/api/classes/hitbox/)

The hitbox hit by the raycaster.

#### Defined in

[src/events/Events.ts:106](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L106)

***

### index?

> `optional` **index**: `number`

#### Inherited from

`Intersection.index`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:23

***

### instanceId?

> `optional` **instanceId**: `number`

The index number of the instance where the ray intersects the THREE.InstancedMesh | InstancedMesh

#### Inherited from

`Intersection.instanceId`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:34

***

### normal?

> `optional` **normal**: `Vector3`

#### Inherited from

`Intersection.normal`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:32

***

### object

> **object**: `Object3D`\<`Object3DEventMap`\>

The intersected object

#### Overrides

`Intersection.object`

#### Defined in

[src/events/Events.ts:104](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/Events.ts#L104)

***

### point

> **point**: `Vector3`

Point of intersection, in world coordinates

#### Inherited from

`Intersection.point`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:22

***

### pointOnLine?

> `optional` **pointOnLine**: `Vector3`

#### Inherited from

`Intersection.pointOnLine`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:35

***

### uv?

> `optional` **uv**: `Vector2`

#### Inherited from

`Intersection.uv`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:30

***

### uv1?

> `optional` **uv1**: `Vector2`

#### Inherited from

`Intersection.uv1`

#### Defined in

node\_modules/@types/three/src/core/Raycaster.d.ts:31
