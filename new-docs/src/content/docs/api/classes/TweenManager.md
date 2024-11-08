---
editUrl: false
next: false
prev: false
title: "TweenManager"
---

This class is responsible for managing and controlling running tweens.

## Constructors

### new TweenManager()

> **new TweenManager**(): [`TweenManager`](/api/classes/tweenmanager/)

#### Returns

[`TweenManager`](/api/classes/tweenmanager/)

## Methods

### completeAll()

> `static` **completeAll**(): `void`

Complete all running tweens.

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:123](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/tweening/TweenManager.ts#L123)

***

### completeAllByTag()

> `static` **completeAllByTag**(`tag`): `void`

Complete all running tweens with a specific tag.

#### Parameters

• **tag**: `string`

The tag to filter running tweens.

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:133](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/tweening/TweenManager.ts#L133)

***

### stopAll()

> `static` **stopAll**(): `void`

Stop all running tweens.

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:102](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/tweening/TweenManager.ts#L102)

***

### stopAllByTag()

> `static` **stopAllByTag**(`tag`): `void`

Stop all running tweens with a specific tag.

#### Parameters

• **tag**: `string`

The tag to filter running tweens.

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:112](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/tweening/TweenManager.ts#L112)

***

### stopById()

> `static` **stopById**(`id`): `void`

Stop the running tween with a specific id.

#### Parameters

• **id**: `string`

Tween identifier.

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:90](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/tweening/TweenManager.ts#L90)
