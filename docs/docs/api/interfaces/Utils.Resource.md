---
id: "Utils.Resource"
title: "Interface: Resource"
sidebar_label: "Resource"
custom_edit_url: null
---

[Utils](../namespaces/Utils.md).Resource

An interface representing a resource, specifying the loader type and paths to be loaded.

## Properties

### loader

• **loader**: `Object`

The type of loader to use for this resource.

#### Call signature

• **new loader**(`manager?`): `Loader`\<`any`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `manager?` | `LoadingManager` |

##### Returns

`Loader`\<`any`, `any`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | `Loader`\<`any`, `any`\> |

#### Defined in

[src/utils/Asset.ts:28](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/utils/Asset.ts#L28)

___

### paths

• **paths**: (`string` \| [`ResourceConfig`](Utils.ResourceConfig.md))[]

An array of resource paths or configurations to be loaded by the loader.

#### Defined in

[src/utils/Asset.ts:32](https://github.com/agargaro/three.ez/blob/c98e2000aba94763fdfaf44f220a0d54ccd99dd1/src/utils/Asset.ts#L32)
