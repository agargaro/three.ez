---
editUrl: false
next: false
prev: false
title: "RunningTween"
---

This class represents a running tween for a specific target object.
It manages the execution of actions and tweens associated with the tween.
Don't instantiate this manually.

## Type Parameters

• **T** = `any`

The type of the target object.

## Constructors

### new RunningTween()

> **new RunningTween**\<`T`\>(`target`, `tween`): [`RunningTween`](/three.ez/api/classes/runningtween/)\<`T`\>

Don't instantiate this manually.

#### Parameters

• **target**: `T`

• **tween**: [`Tween`](/three.ez/api/classes/tween/)\<`T`\>

#### Returns

[`RunningTween`](/three.ez/api/classes/runningtween/)\<`T`\>

#### Defined in

[src/tweening/RunningTween.ts:68](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/RunningTween.ts#L68)

## Properties

### paused

> **paused**: `boolean` = `false`

Indicates whether the execution of the running tween is paused.
If set to `true`, the tween will not progress until it is resumed.

#### Defined in

[src/tweening/RunningTween.ts:52](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/RunningTween.ts#L52)

***

### timeScale

> **timeScale**: `number` = `1`

The time scale factor for the running tween.
It determines the speed at which the tween progresses.
A value of `1` represents normal speed, while `0.5` would be half-speed, and `2` would be double-speed.

#### Defined in

[src/tweening/RunningTween.ts:58](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/RunningTween.ts#L58)

## Accessors

### finished

#### Get Signature

> **get** **finished**(): `boolean`

Indicates whether the running tween has finished executing.

##### Returns

`boolean`

#### Defined in

[src/tweening/RunningTween.ts:63](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/RunningTween.ts#L63)

## Methods

### complete()

> **complete**(): `void`

Complete the running tween, causing it to finish immediately.

#### Returns

`void`

#### Defined in

[src/tweening/RunningTween.ts:107](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/RunningTween.ts#L107)

***

### pause()

> **pause**(): `void`

Pause the execution of the running tween.

#### Returns

`void`

#### Defined in

[src/tweening/RunningTween.ts:86](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/RunningTween.ts#L86)

***

### resume()

> **resume**(): `void`

Resume the execution of the running tween if it was paused.

#### Returns

`void`

#### Defined in

[src/tweening/RunningTween.ts:93](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/RunningTween.ts#L93)

***

### revert()

> **revert**(): `void`

Revert the running tween to its initial state (Not implemented yet).

#### Returns

`void`

#### Defined in

[src/tweening/RunningTween.ts:114](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/RunningTween.ts#L114)

***

### setTimeScale()

> **setTimeScale**(`value`): `this`

Set the time scale for the running tween.

#### Parameters

• **value**: `number`

The time scale value to apply.

#### Returns

`this`

The updated RunningTween instance.

#### Defined in

[src/tweening/RunningTween.ts:78](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/RunningTween.ts#L78)

***

### stop()

> **stop**(): `void`

Stop the running tween, causing it to finish immediately.

#### Returns

`void`

#### Defined in

[src/tweening/RunningTween.ts:100](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/RunningTween.ts#L100)
