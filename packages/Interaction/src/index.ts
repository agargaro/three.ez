import { Object3DExtPrototype } from './patch/Object3D';
import { SceneExtPrototype } from './patch/Scene';

export * from './CursorManager';
export * from './Default';
export * from './DragAndDropManager';
export * from './Events';
export * from './EventsDispatcher';
export * from './Hitbox';
export * from './InteractionEventsQueue';
export * from './InteractionManager';
export * from './MiscEventsManager';
export * from './RaycasterManager';
export * from './patch/Euler'
export * from './patch/Matrix4'
export * from './patch/Object3D'
export * from './patch/Quaternion'
export * from './patch/Scene'
export * from './patch/SmartRendering'
export * from './patch/Vector3'
export * from './patch/WebGLRenderer'

declare module 'three/src/core/Object3D' {
    export interface Object3D extends Object3DExtPrototype { }
}

declare module 'three/src/scenes/Scene' {
    export interface Scene extends SceneExtPrototype { }
}
