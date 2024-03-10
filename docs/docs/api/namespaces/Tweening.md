---
id: "Tweening"
title: "Namespace: Tweening"
sidebar_label: "Tweening"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [Easings](../classes/Tweening.Easings.md)
- [RunningTween](../classes/Tweening.RunningTween.md)
- [Tween](../classes/Tweening.Tween.md)
- [TweenManager](../classes/Tweening.TweenManager.md)

## Interfaces

- [MotionConfig](../interfaces/Tweening.MotionConfig.md)

## Type Aliases

### Easing

Ƭ **Easing**: keyof [`Easings`](../classes/Tweening.Easings.md) \| [`EasingFunction`](Tweening.md#easingfunction)

Type representing an easing type, which can be either a predefined easing function or a custom easing function.

#### Defined in

[src/tweening/Easings.ts:4](https://github.com/agargaro/three.ez/blob/ddf86ba/src/tweening/Easings.ts#L4)

___

### EasingFunction

Ƭ **EasingFunction**: (`x`: `number`) => `number`

#### Type declaration

▸ (`x`): `number`

Type representing an easing function that takes a single numeric parameter and returns a numeric result.

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

##### Returns

`number`

#### Defined in

[src/tweening/Easings.ts:2](https://github.com/agargaro/three.ez/blob/ddf86ba/src/tweening/Easings.ts#L2)
