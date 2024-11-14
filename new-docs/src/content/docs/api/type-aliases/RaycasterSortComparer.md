---
editUrl: false
next: false
prev: false
title: "RaycasterSortComparer"
---

> **RaycasterSortComparer**: (`a`, `b`) => `number`

A custom sorting comparison function used for ordering intersections during raycasting.

## Parameters

• **a**: [`IntersectionExt`](/api/interfaces/intersectionext/)

The first intersection to compare.

• **b**: [`IntersectionExt`](/api/interfaces/intersectionext/)

The second intersection to compare.

## Returns

`number`

A negative value if `a` should precede `b`, a positive value if `b` should precede `a`, or zero if their order is indeterminate.

## Defined in

[src/events/RaycasterManager.ts:12](https://github.com/agargaro/three.ez/blob/3fdd7e09783eb2a959141bd465ac646bca571e93/src/events/RaycasterManager.ts#L12)
