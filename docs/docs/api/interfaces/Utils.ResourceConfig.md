---
id: "Utils.ResourceConfig"
title: "Interface: ResourceConfig"
sidebar_label: "ResourceConfig"
custom_edit_url: null
---

[Utils](../namespaces/Utils.md).ResourceConfig

An interface representing the configuration of a resource, including its path and optional callbacks.

## Properties

### onLoad

• **onLoad**: (`result`: `unknown`) => `void`

A callback function to be called when the resource is successfully loaded.

#### Type declaration

▸ (`result`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `unknown` |

##### Returns

`void`

#### Defined in

[src/utils/Asset.ts:46](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/utils/Asset.ts#L46)

___

### path

• **path**: `string`

The path to the resource that needs to be loaded.

#### Defined in

[src/utils/Asset.ts:42](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/utils/Asset.ts#L42)
