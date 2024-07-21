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

▸ **completeAll**(): `void`

Complete all running tweens.

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:123](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/tweening/TweenManager.ts#L123)

___

### completeAllByTag

▸ **completeAllByTag**(`tag`): `void`

Complete all running tweens with a specific tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag to filter running tweens. |

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:133](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/tweening/TweenManager.ts#L133)

___

### stopAll

▸ **stopAll**(): `void`

Stop all running tweens.

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:102](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/tweening/TweenManager.ts#L102)

___

### stopAllByTag

▸ **stopAllByTag**(`tag`): `void`

Stop all running tweens with a specific tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag to filter running tweens. |

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:112](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/tweening/TweenManager.ts#L112)

___

### stopById

▸ **stopById**(`id`): `void`

Stop the running tween with a specific id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Tween identifier. |

#### Returns

`void`

#### Defined in

[src/tweening/TweenManager.ts:90](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/tweening/TweenManager.ts#L90)
