---
id: "Core.MainParameters"
title: "Interface: MainParameters"
sidebar_label: "MainParameters"
custom_edit_url: null
---

[Core](../namespaces/Core.md).MainParameters

Configuration parameters for initializing the Main class.

## Properties

### animate

• `Optional` **animate**: (`delta`: `number`, `total`: `number`) => `void`

#### Type declaration

▸ (`delta`, `total`): `void`

Callback function executed for each frame.

##### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |
| `total` | `number` |

##### Returns

`void`

#### Defined in

[src/core/Main.ts:32](https://github.com/agargaro/three.ez/blob/57919a6/src/core/Main.ts#L32)

___

### backgroundAlpha

• `Optional` **backgroundAlpha**: `number`

Default background alpha (transparency) value (default: 1).

#### Defined in

[src/core/Main.ts:30](https://github.com/agargaro/three.ez/blob/57919a6/src/core/Main.ts#L30)

___

### backgroundColor

• `Optional` **backgroundColor**: `ColorRepresentation`

Default background color (default: 'black').

#### Defined in

[src/core/Main.ts:28](https://github.com/agargaro/three.ez/blob/57919a6/src/core/Main.ts#L28)

___

### disableContextMenu

• `Optional` **disableContextMenu**: `boolean`

Disable the context menu on right-click (default: true).

#### Defined in

[src/core/Main.ts:26](https://github.com/agargaro/three.ez/blob/57919a6/src/core/Main.ts#L26)

___

### enableCursor

• `Optional` **enableCursor**: `boolean`

Enable cursor handling in the application (default: true).

#### Defined in

[src/core/Main.ts:36](https://github.com/agargaro/three.ez/blob/57919a6/src/core/Main.ts#L36)

___

### fullscreen

• `Optional` **fullscreen**: `boolean`

Enable full-screen mode and automatic canvas resizing (default: true).

#### Defined in

[src/core/Main.ts:22](https://github.com/agargaro/three.ez/blob/57919a6/src/core/Main.ts#L22)

___

### multitouch

• `Optional` **multitouch**: `boolean`

Enable multitouch interactions (default: false).

#### Defined in

[src/core/Main.ts:38](https://github.com/agargaro/three.ez/blob/57919a6/src/core/Main.ts#L38)

___

### rendererParameters

• `Optional` **rendererParameters**: `WebGLRendererParameters`

Configuration parameters for the WebGLRenderer.

#### Defined in

[src/core/Main.ts:34](https://github.com/agargaro/three.ez/blob/57919a6/src/core/Main.ts#L34)

___

### showStats

• `Optional` **showStats**: `boolean`

Display performance statistics (default: true).

#### Defined in

[src/core/Main.ts:24](https://github.com/agargaro/three.ez/blob/57919a6/src/core/Main.ts#L24)
