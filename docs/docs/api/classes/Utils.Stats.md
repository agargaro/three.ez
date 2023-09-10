---
id: "Utils.Stats"
title: "Class: Stats"
sidebar_label: "Stats"
custom_edit_url: null
---

[Utils](../namespaces/Utils.md).Stats

## Constructors

### constructor

• **new Stats**()

#### Defined in

[src/utils/Stats.ts:11](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L11)

## Properties

### beginTime

• `Private` **beginTime**: `number`

#### Defined in

[src/utils/Stats.ts:5](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L5)

___

### dom

• **dom**: `HTMLDivElement`

#### Defined in

[src/utils/Stats.ts:2](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L2)

___

### fpsPanel

• `Private` **fpsPanel**: [`Panel`](Utils.Panel.md)

#### Defined in

[src/utils/Stats.ts:7](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L7)

___

### frames

• `Private` **frames**: `number` = `0`

#### Defined in

[src/utils/Stats.ts:4](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L4)

___

### memPanel

• `Private` **memPanel**: [`Panel`](Utils.Panel.md)

#### Defined in

[src/utils/Stats.ts:9](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L9)

___

### mode

• `Private` **mode**: `number` = `0`

#### Defined in

[src/utils/Stats.ts:3](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L3)

___

### msPanel

• `Private` **msPanel**: [`Panel`](Utils.Panel.md)

#### Defined in

[src/utils/Stats.ts:8](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L8)

___

### prevTime

• `Private` **prevTime**: `number`

#### Defined in

[src/utils/Stats.ts:6](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L6)

## Methods

### addPanel

▸ **addPanel**(`panel`): [`Panel`](Utils.Panel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`Panel`](Utils.Panel.md) |

#### Returns

[`Panel`](Utils.Panel.md)

#### Defined in

[src/utils/Stats.ts:25](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L25)

___

### begin

▸ **begin**(): `void`

#### Returns

`void`

#### Defined in

[src/utils/Stats.ts:40](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L40)

___

### end

▸ **end**(`rendered?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rendered?` | `boolean` |

#### Returns

`number`

#### Defined in

[src/utils/Stats.ts:44](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L44)

___

### showPanel

▸ **showPanel**(`id`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | 0:fps, 1: ms, 2: mb, 3+: custom |

#### Returns

`void`

#### Defined in

[src/utils/Stats.ts:33](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L33)

___

### update

▸ **update**(`rendered?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rendered?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/utils/Stats.ts:68](https://github.com/agargaro/three.ez/blob/3bc2c12/src/utils/Stats.ts#L68)
