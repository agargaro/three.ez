import { MaterialExtPrototype } from './patch/Material';
import { Object3DExtPrototype } from './patch/Object3D';
import { SceneExtPrototype } from './patch/Scene';

export * from './binding/Binding';
export * from './cameras/OrthographicCameraAuto';
export * from './cameras/PerspectiveCameraAuto';
export * from './core/Main';
export * from './events/CursorManager';
export * from './events/Default';
export * from './events/DragAndDropManager';
export * from './events/Events';
export * from './events/EventsDispatcher';
export * from './events/Hitbox';
export * from './events/InteractionManager';
export * from './events/InteractionEventsQueue';
export * from './events/MiscEventsManager';
export * from './events/RaycasterManager';
export * from './instancedMesh/EventsDispatcherInstanced';
export * from './instancedMesh/InstancedMesh2';
export * from './instancedMesh/InstancedMeshEntity';
export * from './patch/Euler';
export * from './patch/Material'
export * from './patch/Matrix4';
export * from './patch/Object3D';
export * from './patch/Quaternion';
export * from './patch/Scene';
export * from './patch/SmartRendering';
export * from './patch/Vector3';
export * from './patch/WebGLRenderer';
export * from './rendering/RenderManager';
export * from './rendering/RenderView';
export * from './tweening/Actions';
export * from './tweening/Easings';
export * from './tweening/Tween';
export * from './tweening/TweenManager';
export * from './tweening/RunningTween';
export * from './utils/Asset';
export * from './utils/IntersectionUtils';
export * from './utils/Query';
export * from './utils/Stats';
export * from './utils/Utils';
export * from './utils/VectorUtils';

/** @internal */
declare module 'three/src/math/Vector2' {
    export interface Vector {
        lerpVectors(v1: Vector, v2: Vector, alpha: number): this;
    }
}

declare module 'three/src/core/Object3D' {
    export interface Object3D extends Object3DExtPrototype { }
}

declare module 'three/src/materials/Material' {
    export interface Material extends MaterialExtPrototype { }
}

declare module 'three/src/scenes/Scene' {
    export interface Scene extends SceneExtPrototype { }
}
