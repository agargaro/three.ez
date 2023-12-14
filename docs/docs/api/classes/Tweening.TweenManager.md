---
id: "Tweening.TweenManager"
title: "Class: TweenManager"
sidebar_label: "TweenManager"
custom_edit_url: null
---

[Tweening](../namespaces/Tweening.md).TweenManager

This class is responsible for managing and controlling running tweens.

## Methods

### completeAll

▸ `Static` **completeAll**(): `void`

Complete all running tweens.

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:123](https://github.com/agargaro/three.ez/blob/a06fa88/src/tweening/TweenManager.ts#L123)

___

### completeAllByTag

▸ `Static` **completeAllByTag**(`tag`): `void`

Complete all running tweens with a specific tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag to filter running tweens. |

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:133](https://github.com/agargaro/three.ez/blob/a06fa88/src/tweening/TweenManager.ts#L133)

___

### stopAll

▸ `Static` **stopAll**(): `void`

Stop all running tweens.

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:102](https://github.com/agargaro/three.ez/blob/a06fa88/src/tweening/TweenManager.ts#L102)

___

### stopAllByTag

▸ `Static` **stopAllByTag**(`tag`): `void`

Stop all running tweens with a specific tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag to filter running tweens. |

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:112](https://github.com/agargaro/three.ez/blob/a06fa88/src/tweening/TweenManager.ts#L112)

___

### stopById

▸ `Static` **stopById**(`id`): `void`

Stop the running tween with a specific id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Tween identifier. |

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:90](https://github.com/agargaro/three.ez/blob/a06fa88/src/tweening/TweenManager.ts#L90)
