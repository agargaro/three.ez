---
id: "Tweening.Tween"
title: "Class: Tween<T>"
sidebar_label: "Tween"
custom_edit_url: null
---

[Tweening](../namespaces/Tweening.md).Tween

A Tween represents a series of actions that can be applied to a target object to create animations or sequences of events.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `any` | The type of the target object. |

## Constructors

### constructor

• **new Tween**<`T`\>(`target`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The object to apply the tween to. |

#### Defined in

[src/tweening/Tween.ts:20](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L20)

## Properties

### tags

• **tags**: `string`[] = `[]`

Tags used for filtering and management.

#### Defined in

[src/tweening/Tween.ts:15](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L15)

___

### target

• **target**: `T`

The object to apply the tween to.

#### Defined in

[src/tweening/Tween.ts:13](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L13)

## Methods

### by

▸ **by**(`time`, `action`, `config?`): [`Tween`](Tweening.Tween.md)<`T`\>

Define a relative motion from the current state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The duration of the motion in milliseconds. |
| `action` | `Motion`<`T`\> | The motion configuration. |
| `config?` | [`MotionConfig`](../interfaces/Tweening.MotionConfig.md)<`T`\> | Additional motion configuration options. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:63](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L63)

___

### call

▸ **call**(`callback`): [`Tween`](Tweening.Tween.md)<`T`\>

Add a callback action to the Tween.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | The callback function to execute. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:73](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L73)

___

### chain

▸ **chain**(`tween`): [`Tween`](Tweening.Tween.md)<`T`\>

Chain actions from another Tween to this Tween.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tween` | [`Tween`](Tweening.Tween.md)<`T`\> | The Tween containing actions to chain. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:172](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L172)

___

### clone

▸ **clone**(): [`Tween`](Tweening.Tween.md)<`T`\>

Clone the Tween instance.

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

A new Tween instance with the same configuration.

#### Defined in

[src/tweening/Tween.ts:181](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L181)

___

### delay

▸ **delay**(`time`): [`Tween`](Tweening.Tween.md)<`T`\>

Add a delay before executing the next action.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The duration of the delay in milliseconds. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:83](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L83)

___

### parallel

▸ **parallel**(`...tweens`): [`Tween`](Tweening.Tween.md)<`T`\>

Run multiple Tweens in parallel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...tweens` | [`Tween`](Tweening.Tween.md)<`T`\>[] | The Tweens to run in parallel. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:150](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L150)

___

### repeat

▸ **repeat**(`times?`): [`Tween`](Tweening.Tween.md)<`T`\>

Repeat the last action for a specific number of times.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `times` | `number` | `1` | The number of times to repeat the action. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:93](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L93)

___

### repeatForever

▸ **repeatForever**(): [`Tween`](Tweening.Tween.md)<`T`\>

Repeat the last action indefinitely.

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:109](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L109)

___

### sequence

▸ **sequence**(`...tweens`): [`Tween`](Tweening.Tween.md)<`T`\>

Run multiple Tweens in sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...tweens` | [`Tween`](Tweening.Tween.md)<`T`\>[] | The Tweens to run in sequence. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:160](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L160)

___

### setTags

▸ **setTags**(`...tags`): [`Tween`](Tweening.Tween.md)<`T`\>

Set tags for the Tween, which can be used for filtering and management.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...tags` | `string`[] | Tags to associate with the Tween. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:29](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L29)

___

### setTarget

▸ **setTarget**(`target`): [`Tween`](Tweening.Tween.md)<`T`\>

Set the target object for the Tween.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The object to apply the tween to. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:39](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L39)

___

### start

▸ **start**(): [`RunningTween`](Tweening.RunningTween.md)<`T`\>

Start the Tween and create a RunningTween instance.

#### Returns

[`RunningTween`](Tweening.RunningTween.md)<`T`\>

A RunningTween instance that controls the execution of the Tween.

#### Defined in

[src/tweening/Tween.ts:192](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L192)

___

### then

▸ **then**(`tween`): [`Tween`](Tweening.Tween.md)<`T`\>

Chain another Tween to execute after this Tween.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tween` | [`Tween`](Tweening.Tween.md)<`T`\> | The Tween to chain. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:140](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L140)

___

### to

▸ **to**(`time`, `action`, `config?`): [`Tween`](Tweening.Tween.md)<`T`\>

Define a motion from the current state to a new state over a specified time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The duration of the motion in milliseconds. |
| `action` | `Motion`<`T`\> | The motion configuration. |
| `config?` | [`MotionConfig`](../interfaces/Tweening.MotionConfig.md)<`T`\> | Additional motion configuration options. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:51](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L51)

___

### yoyo

▸ **yoyo**(`times?`): [`Tween`](Tweening.Tween.md)<`T`\>

Apply a yoyo effect to the last action, making it reverse its motion, for a specific number of times.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `times` | `number` | `1` | The number of times to yoyo the last action. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:118](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L118)

___

### yoyoForever

▸ **yoyoForever**(): [`Tween`](Tweening.Tween.md)<`T`\>

Apply a yoyo effect to the last action, making it reverse its motion, indefinitely.

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:131](https://github.com/agargaro/three.ez/blob/2012bca/src/tweening/Tween.ts#L131)
