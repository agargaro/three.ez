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

[src/tweening/Tween.ts:23](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L23)

## Properties

### id

• **id**: `string`

Unique identifier. If specified, the old tween with the same id will be stopped.

#### Defined in

[src/tweening/Tween.ts:18](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L18)

___

### tags

• **tags**: `string`[] = `[]`

Tags used for filtering and management.

#### Defined in

[src/tweening/Tween.ts:16](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L16)

___

### target

• **target**: `T`

The object to apply the tween to.

#### Defined in

[src/tweening/Tween.ts:14](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L14)

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

[src/tweening/Tween.ts:76](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L76)

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

[src/tweening/Tween.ts:96](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L96)

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

[src/tweening/Tween.ts:202](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L202)

___

### clone

▸ **clone**(): [`Tween`](Tweening.Tween.md)<`T`\>

Clone the Tween instance.

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

A new Tween instance with the same configuration.

#### Defined in

[src/tweening/Tween.ts:212](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L212)

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

[src/tweening/Tween.ts:106](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L106)

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

[src/tweening/Tween.ts:178](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L178)

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

[src/tweening/Tween.ts:116](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L116)

___

### repeatForever

▸ **repeatForever**(): [`Tween`](Tweening.Tween.md)<`T`\>

Repeat the last action indefinitely.

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:133](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L133)

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

[src/tweening/Tween.ts:189](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L189)

___

### set

▸ **set**(`action`): [`Tween`](Tweening.Tween.md)<`T`\>

Define a movement from the current state to a new state instantaneously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `SetMotion`<`T`\> | The motion configuration. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:86](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L86)

___

### setId

▸ **setId**(`id`): [`Tween`](Tweening.Tween.md)<`T`\>

Set a unique identifier for the Tween. If specified, stops the old tween with the same id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The identifier to assign to the Tween. |

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:32](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L32)

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

[src/tweening/Tween.ts:42](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L42)

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

[src/tweening/Tween.ts:52](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L52)

___

### start

▸ **start**(): [`RunningTween`](Tweening.RunningTween.md)<`T`\>

Start the Tween and create a RunningTween instance.

#### Returns

[`RunningTween`](Tweening.RunningTween.md)<`T`\>

A RunningTween instance that controls the execution of the Tween.

#### Defined in

[src/tweening/Tween.ts:224](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L224)

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

[src/tweening/Tween.ts:167](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L167)

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

[src/tweening/Tween.ts:64](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L64)

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

[src/tweening/Tween.ts:142](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L142)

___

### yoyoForever

▸ **yoyoForever**(): [`Tween`](Tweening.Tween.md)<`T`\>

Apply a yoyo effect to the last action, making it reverse its motion, indefinitely.

#### Returns

[`Tween`](Tweening.Tween.md)<`T`\>

The updated Tween instance.

#### Defined in

[src/tweening/Tween.ts:158](https://github.com/agargaro/three.ez/blob/fab1372/src/tweening/Tween.ts#L158)
