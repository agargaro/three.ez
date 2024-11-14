---
editUrl: false
next: false
prev: false
title: "TransformType"
---

> **TransformType**\<`T`, `U`, `V`\>: \{ \[P in keyof T\]: T\[P\] extends U ? T\[P\] \| V : T\[P\] \}

## Type Parameters

• **T**

• **U**

• **V**

## Defined in

[src/tweening/Actions.ts:11](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/tweening/Actions.ts#L11)
