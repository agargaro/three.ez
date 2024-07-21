---
id: "Patch.MaterialExtPrototype"
title: "Interface: MaterialExtPrototype"
sidebar_label: "MaterialExtPrototype"
custom_edit_url: null
---

[Patch](../namespaces/Patch.md).MaterialExtPrototype

Represents the prototype for extended Material functionality.

## Methods

### tween

▸ **tween**\<`T`\>(`id?`): [`Tween`](../classes/Tweening.Tween.md)\<`T`\>

Initiates a Tween animation for the material.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`MaterialExtPrototype`](Patch.MaterialExtPrototype.md)\<`T`\> | The type of the target. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | `string` | Unique identifier. If you start a new tween, the old one with the same id (if specified) will be stopped. |

#### Returns

[`Tween`](../classes/Tweening.Tween.md)\<`T`\>

A Tween instance for further configuration.

#### Defined in

[src/patch/Material.ts:14](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/patch/Material.ts#L14)
