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

#### Type declaration

▸ (`error`): `void`

A callback function for handling errors during resource loading.
This function is called with an `error` object in case of loading errors.

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

##### Returns

`void`

#### Defined in

[src/utils/Asset.ts:16](https://github.com/agargaro/three.ez/blob/935aabc/src/utils/Asset.ts#L16)

___

### onProgress

• `Optional` **onProgress**: (`ratio`: `number`) => `void`

#### Type declaration

▸ (`ratio`): `void`

A callback function for reporting progress during resource loading.
This function is called with a ratio (0 to 1) to indicate the loading progress.

##### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

##### Returns

`void`

#### Defined in

[src/utils/Asset.ts:11](https://github.com/agargaro/three.ez/blob/935aabc/src/utils/Asset.ts#L11)
