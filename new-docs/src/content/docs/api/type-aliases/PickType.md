---
editUrl: false
next: false
prev: false
title: "PickType"
---

> **PickType**\<`T`, `U`\>: `{ [P in keyof T as T[P] extends U ? P : never]: T[P] }`

## Type Parameters

• **T**

• **U**

## Defined in

[src/tweening/Actions.ts:10](https://github.com/agargaro/three.ez/blob/b06e30e89a1cb80df2de9df7c48590de59a134ce/src/tweening/Actions.ts#L10)
