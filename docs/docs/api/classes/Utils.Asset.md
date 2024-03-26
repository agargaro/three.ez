---
id: "Utils.Asset"
title: "Class: Asset"
sidebar_label: "Asset"
custom_edit_url: null
---

[Utils](../namespaces/Utils.md).Asset

The Asset class is a manager for loading and handling resources in a scene.

## Properties

### onError

▪ `Static` **onError**: (`error`: `unknown`) => `void`

#### Type declaration

▸ (`error`): `void`

Default callback function for handling errors during resource loading.
This function is called with an `error` object in case of loading errors.

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

##### Returns

`void`

#### Defined in

[src/utils/Asset.ts:63](https://github.com/agargaro/three.ez/blob/78b6b77/src/utils/Asset.ts#L63)

___

### onProgress

▪ `Static` **onProgress**: (`ratio`: `number`) => `void`

#### Type declaration

▸ (`ratio`): `void`

Default callback function for reporting progress during resource loading.
This function is called with a ratio (0 to 1) to indicate the loading progress.

##### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

##### Returns

`void`

#### Defined in

[src/utils/Asset.ts:58](https://github.com/agargaro/three.ez/blob/78b6b77/src/utils/Asset.ts#L58)

## Methods

### get

▸ `Static` **get**<`T`\>(`path`): `T`

Get a previously loaded result object for a specific path.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path of the resource. |

#### Returns

`T`

A previously loaded result object.

#### Defined in

[src/utils/Asset.ts:73](https://github.com/agargaro/three.ez/blob/78b6b77/src/utils/Asset.ts#L73)

▸ `Static` **get**<`T`\>(`...path`): `T`[]

Get a list of previously loaded result objects for a series of specific paths.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...path` | `string`[] | An array of resource paths. |

#### Returns

`T`[]

An array of previously loaded result objects.

#### Defined in

[src/utils/Asset.ts:79](https://github.com/agargaro/three.ez/blob/78b6b77/src/utils/Asset.ts#L79)

___

### getLoader

▸ `Static` **getLoader**<`T`\>(`loaderType`): `T`

Get a specific loader based on the resource type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Loader`<`unknown`, `string`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loaderType` | `Object` | The desired loader type. |

#### Returns

`T`

The loader associated with the resource type.

#### Defined in

[src/utils/Asset.ts:95](https://github.com/agargaro/three.ez/blob/78b6b77/src/utils/Asset.ts#L95)

___

### load

▸ `Static` **load**<`T`\>(`loaderType`, `path`, `onProgress?`, `onError?`): `Promise`<`T`\>

Load a resource using a specified loader type and path.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loaderType` | `Object` | The type of loader to use for loading the resource. |
| `path` | `string` | The path to the resource to be loaded. |
| `onProgress?` | (`event`: `ProgressEvent`<`EventTarget`\>) => `void` | (optional) A callback function to report loading progress with a ProgressEvent. |
| `onError?` | (`error`: `unknown`) => `void` | - |

#### Returns

`Promise`<`T`\>

A Promise that resolves with the loaded resource when loading is complete.

#### Defined in

[src/utils/Asset.ts:109](https://github.com/agargaro/three.ez/blob/78b6b77/src/utils/Asset.ts#L109)

___

### loadAll

▸ `Static` **loadAll**(`config?`, `...resources`): `Promise`<`void`[]\>

Load all specified resources and return a promise that resolves when all resources are loaded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`LoadingConfig`](../interfaces/Utils.LoadingConfig.md) | Configuration for the loading process. |
| `...resources` | [`Resource`](../interfaces/Utils.Resource.md)[] | An array of resource objects to load. |

#### Returns

`Promise`<`void`[]\>

A promise that resolves when all resources are loaded.

#### Defined in

[src/utils/Asset.ts:149](https://github.com/agargaro/three.ez/blob/78b6b77/src/utils/Asset.ts#L149)

___

### preload

▸ `Static` **preload**(`loader`, `...paths`): `void`

Preload resources for future use.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loader` | `Object` | The loader type to be used for preloading. |
| `...paths` | (`string` \| [`ResourceConfig`](../interfaces/Utils.ResourceConfig.md))[] | An array of resource paths or configurations to preload. |

#### Returns

`void`

#### Defined in

[src/utils/Asset.ts:128](https://github.com/agargaro/three.ez/blob/78b6b77/src/utils/Asset.ts#L128)

___

### preloadAllPending

▸ `Static` **preloadAllPending**(`config?`): `Promise`<`void`[]\>

Preload all pending resources and return a promise that resolves when all resources are loaded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`LoadingConfig`](../interfaces/Utils.LoadingConfig.md) | Optional configuration for the loading process. |

#### Returns

`Promise`<`void`[]\>

A promise that resolves when all pending resources are loaded.

#### Defined in

[src/utils/Asset.ts:137](https://github.com/agargaro/three.ez/blob/78b6b77/src/utils/Asset.ts#L137)
