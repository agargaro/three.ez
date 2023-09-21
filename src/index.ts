import { Object3DExtPrototype, Object3DExtPrototypeInternal } from './patch/Object3D';
import { SceneExtPrototype, SceneExtPrototypeInternal } from './patch/Scene';

export * from './binding';
export * from './core';
export * from './events';
export * from './instancedMesh';
export * from './cameras';
export * from './patch';
export * from './rendering';
export * from './tweening';
export * from './utils';

declare module 'three/src/core/Object3D' {
    export interface Object3D extends Object3DExtPrototype { }
}

declare module 'three/src/scenes/Scene' {
    export interface Scene extends SceneExtPrototype { }
}

/** @internal */
declare module 'three/src/core/Object3D' {
    export interface Object3D extends Object3DExtPrototypeInternal { }
}

/** @internal */
declare module 'three/src/scenes/Scene' {
    export interface Scene extends SceneExtPrototypeInternal { }
}

