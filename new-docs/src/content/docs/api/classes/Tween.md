---
editUrl: false
next: false
prev: false
title: "Tween"
---

A Tween represents a series of actions that can be applied to a target object to create animations or sequences of events.

## Type Parameters

• **T** = `any`

The type of the target object.

## Constructors

### new Tween()

> **new Tween**\<`T`\>(`target`): [`Tween`](/three.ez/api/classes/tween/)\<`T`\>

#### Parameters

• **target**: `T`

The object to apply the tween to.

#### Returns

[`Tween`](/three.ez/api/classes/tween/)\<`T`\>

#### Defined in

[src/tweening/Tween.ts:23](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L23)

## Properties

### id

> **id**: `string`

Unique identifier. If specified, the old tween with the same id will be stopped.

#### Defined in

[src/tweening/Tween.ts:18](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L18)

***

### tags

> **tags**: `string`[] = `[]`

Tags used for filtering and management.

#### Defined in

[src/tweening/Tween.ts:16](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L16)

***

### target

> **target**: `T`

The object to apply the tween to.

#### Defined in

[src/tweening/Tween.ts:14](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L14)

## Methods

### by()

> **by**(`time`, `action`, `config`?): `this`

Define a relative motion from the current state.

#### Parameters

• **time**: `number`

The duration of the motion in milliseconds.

• **action**: [`Motion`](/three.ez/api/type-aliases/motion/)\<`T`\>

The motion configuration.

• **config?**: [`MotionConfig`](/three.ez/api/interfaces/motionconfig/)\<`T`\>

Additional motion configuration options.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:76](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L76)

***

### call()

> **call**(`callback`): `this`

Add a callback action to the Tween.

#### Parameters

• **callback**

The callback function to execute.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:96](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L96)

***

### chain()

> **chain**(`tween`): `this`

Chain actions from another Tween to this Tween.

#### Parameters

• **tween**: [`Tween`](/three.ez/api/classes/tween/)\<`T`\>

The Tween containing actions to chain.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:202](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L202)

***

### clone()

> **clone**(): [`Tween`](/three.ez/api/classes/tween/)\<`T`\>

Clone the Tween instance.

#### Returns

[`Tween`](/three.ez/api/classes/tween/)\<`T`\>

A new Tween instance with the same configuration.

#### Defined in

[src/tweening/Tween.ts:212](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L212)

***

### delay()

> **delay**(`time`): `this`

Add a delay before executing the next action.

#### Parameters

• **time**: `number`

The duration of the delay in milliseconds.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:106](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L106)

***

### parallel()

> **parallel**(...`tweens`): `this`

Run multiple Tweens in parallel.

#### Parameters

• ...**tweens**: [`Tween`](/three.ez/api/classes/tween/)\<`T`\>[]

The Tweens to run in parallel.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:178](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L178)

***

### repeat()

> **repeat**(`times`): `this`

Repeat the last action for a specific number of times.

#### Parameters

• **times**: `number` = `1`

The number of times to repeat the action.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:116](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L116)

***

### repeatForever()

> **repeatForever**(): `this`

Repeat the last action indefinitely.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:133](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L133)

***

### sequence()

> **sequence**(...`tweens`): `this`

Run multiple Tweens in sequence.

#### Parameters

• ...**tweens**: [`Tween`](/three.ez/api/classes/tween/)\<`T`\>[]

The Tweens to run in sequence.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:189](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L189)

***

### set()

> **set**(`action`): `this`

Define a movement from the current state to a new state instantaneously.

#### Parameters

• **action**: [`SetMotion`](/three.ez/api/type-aliases/setmotion/)\<`T`\>

The motion configuration.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:86](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L86)

***

### setId()

> **setId**(`id`): `this`

Set a unique identifier for the Tween. If specified, stops the old tween with the same id.

#### Parameters

• **id**: `string`

The identifier to assign to the Tween.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:32](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L32)

***

### setTags()

> **setTags**(...`tags`): `this`

Set tags for the Tween, which can be used for filtering and management.

#### Parameters

• ...**tags**: `string`[]

Tags to associate with the Tween.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:42](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L42)

***

### setTarget()

> **setTarget**(`target`): `this`

Set the target object for the Tween.

#### Parameters

• **target**: `T`

The object to apply the tween to.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:52](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L52)

***

### start()

> **start**(): [`RunningTween`](/three.ez/api/classes/runningtween/)\<`T`\>

Start the Tween and create a RunningTween instance.

#### Returns

[`RunningTween`](/three.ez/api/classes/runningtween/)\<`T`\>

A RunningTween instance that controls the execution of the Tween.

#### Defined in

[src/tweening/Tween.ts:224](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L224)

***

### then()

> **then**(`tween`): `this`

Chain another Tween to execute after this Tween.

#### Parameters

• **tween**: [`Tween`](/three.ez/api/classes/tween/)\<`T`\>

The Tween to chain.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:167](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L167)

***

### to()

> **to**(`time`, `action`, `config`?): `this`

Define a motion from the current state to a new state over a specified time.

#### Parameters

• **time**: `number`

The duration of the motion in milliseconds.

• **action**: [`Motion`](/three.ez/api/type-aliases/motion/)\<`T`\>

The motion configuration.

• **config?**: [`MotionConfig`](/three.ez/api/interfaces/motionconfig/)\<`T`\>

Additional motion configuration options.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:64](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L64)

***

### yoyo()

> **yoyo**(`times`): `this`

Apply a yoyo effect to the last action, making it reverse its motion, for a specific number of times.

#### Parameters

• **times**: `number` = `1`

The number of times to yoyo the last action.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:142](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L142)

***

### yoyoForever()

> **yoyoForever**(): `this`

Apply a yoyo effect to the last action, making it reverse its motion, indefinitely.

#### Returns

`this`

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:158](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Tween.ts#L158)
