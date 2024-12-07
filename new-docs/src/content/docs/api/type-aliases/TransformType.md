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

[src/tweening/Actions.ts:11](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/tweening/Actions.ts#L11)
