---
id: "Core.MainParameters"
title: "Interface: MainParameters"
sidebar_label: "MainParameters"
custom_edit_url: null
---

[Core](../namespaces/Core.md).MainParameters

Represents the configuration parameters for initializing the Main class.

## Properties

### animate

• `Optional` **animate**: `XRFrameRequestCallback`

A callback function executed for each frame.

#### Defined in

[src/core/Main.ts:27](https://github.com/agargaro/three.ez/blob/e7ff09c/src/core/Main.ts#L27)

___

### backgroundAlpha

• `Optional` **backgroundAlpha**: `number`

The default alpha (transparency) value for the background (default: 1).

#### Defined in

[src/core/Main.ts:25](https://github.com/agargaro/three.ez/blob/e7ff09c/src/core/Main.ts#L25)

___

### backgroundColor

• `Optional` **backgroundColor**: `ColorRepresentation`

The default background color (default: black).

#### Defined in

[src/core/Main.ts:23](https://github.com/agargaro/three.ez/blob/e7ff09c/src/core/Main.ts#L23)

___

### disableContextMenu

• `Optional` **disableContextMenu**: `boolean`

A boolean flag indicating whether to disable the context menu on right-click (default: true).

#### Defined in

[src/core/Main.ts:21](https://github.com/agargaro/three.ez/blob/e7ff09c/src/core/Main.ts#L21)

___

### enableCursor

• `Optional` **enableCursor**: `boolean`

A boolean flag indicating whether to enable cursor handling in the application (default: true).

#### Defined in

[src/core/Main.ts:31](https://github.com/agargaro/three.ez/blob/e7ff09c/src/core/Main.ts#L31)

___

### fullscreen

• `Optional` **fullscreen**: `boolean`

A Boolean flag indicating whether to enable full-screen mode and perform automatic resizing of the canvas (default: true).

#### Defined in

[src/core/Main.ts:17](https://github.com/agargaro/three.ez/blob/e7ff09c/src/core/Main.ts#L17)

___

### multitouch

• `Optional` **multitouch**: `boolean`

A boolean flag indicating whether to enable multitouch interactions (default: false).

#### Defined in

[src/core/Main.ts:33](https://github.com/agargaro/three.ez/blob/e7ff09c/src/core/Main.ts#L33)

___

### rendererParameters

• `Optional` **rendererParameters**: `WebGLRendererParameters`

Configuration parameters for the WebGLRenderer.

#### Defined in

[src/core/Main.ts:29](https://github.com/agargaro/three.ez/blob/e7ff09c/src/core/Main.ts#L29)

___

### showStats

• `Optional` **showStats**: `boolean`

A boolean flag indicating whether to display performance statistics (default: true).

#### Defined in

[src/core/Main.ts:19](https://github.com/agargaro/three.ez/blob/e7ff09c/src/core/Main.ts#L19)
