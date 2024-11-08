---
editUrl: false
next: false
prev: false
title: "LoadingConfig"
---

Configuration options for resource loading.

## Properties

### onError()?

> `optional` **onError**: (`error`) => `void`

A callback function for handling errors during resource loading.
This function is called with an `error` object in case of loading errors.

#### Parameters

• **error**: `unknown`

#### Returns

`void`

#### Defined in

[src/utils/Asset.ts:16](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/utils/Asset.ts#L16)

***

### onProgress()?

> `optional` **onProgress**: (`ratio`) => `void`

A callback function for reporting progress during resource loading.
This function is called with a ratio (0 to 1) to indicate the loading progress.

#### Parameters

• **ratio**: `number`

#### Returns

`void`

#### Defined in

[src/utils/Asset.ts:11](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/utils/Asset.ts#L11)
