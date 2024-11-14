---
editUrl: false
next: false
prev: false
title: "RaycasterSortComparer"
---

> **RaycasterSortComparer**: (`a`, `b`) => `number`

A custom sorting comparison function used for ordering intersections during raycasting.

## Parameters

• **a**: [`IntersectionExt`](/three.ez/api/interfaces/intersectionext/)

The first intersection to compare.

• **b**: [`IntersectionExt`](/three.ez/api/interfaces/intersectionext/)

The second intersection to compare.

## Returns

`number`

A negative value if `a` should precede `b`, a positive value if `b` should precede `a`, or zero if their order is indeterminate.

## Defined in

[src/events/RaycasterManager.ts:12](https://github.com/agargaro/three.ez/blob/6a659b7871154988e88d8973e76bf92863e7cc6e/src/events/RaycasterManager.ts#L12)
