import { Object3DExtPrototype } from './patch/Object3D';
import { SceneExtPrototype } from './patch/Scene';

export * from './binding';
export * from './cameras';
export * from './core';
export * from './events';
export * from './instancedMesh';
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
