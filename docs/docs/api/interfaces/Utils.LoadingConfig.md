---
id: "Utils.LoadingConfig"
title: "Interface: LoadingConfig"
sidebar_label: "LoadingConfig"
custom_edit_url: null
---

[Utils](../namespaces/Utils.md).LoadingConfig

Configuration options for resource loading.

## Properties

### onError

• `Optional` **onError**: (`error`: `unknown`) => `void`

A callback function for handling errors during resource loading.
This function is called with an `error` object in case of loading errors.

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

##### Returns

`void`

#### Defined in

[src/utils/Asset.ts:16](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/utils/Asset.ts#L16)

___

### onProgress

• `Optional` **onProgress**: (`ratio`: `number`) => `void`

A callback function for reporting progress during resource loading.
This function is called with a ratio (0 to 1) to indicate the loading progress.

#### Type declaration

▸ (`ratio`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

##### Returns

`void`

#### Defined in

[src/utils/Asset.ts:11](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/utils/Asset.ts#L11)
