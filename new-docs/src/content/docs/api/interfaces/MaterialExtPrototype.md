---
editUrl: false
next: false
prev: false
title: "MaterialExtPrototype"
---

Represents the prototype for extended Material functionality.

## Methods

### tween()

> **tween**\<`T`\>(`id`?): [`Tween`](/three.ez/api/classes/tween/)\<`T`\>

Initiates a Tween animation for the material.

#### Type Parameters

• **T** *extends* [`MaterialExtPrototype`](/three.ez/api/interfaces/materialextprototype/)

The type of the target.

#### Parameters

• **id?**: `string`

Unique identifier. If you start a new tween, the old one with the same id (if specified) will be stopped.

#### Returns

[`Tween`](/three.ez/api/classes/tween/)\<`T`\>

A Tween instance for further configuration.

#### Defined in

[src/patch/Material.ts:14](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/patch/Material.ts#L14)
