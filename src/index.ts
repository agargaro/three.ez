import { MaterialExtPrototype } from './patch/Material.js';
import { Object3DExtPrototype } from './patch/Object3D.js';
import { SceneExtPrototype } from './patch/Scene.js';

export * from './binding/Binding.js';
export * from './cameras/OrthographicCameraAuto.js';
export * from './cameras/PerspectiveCameraAuto.js';
export * from './core/Main.js';
export * from './events/CursorManager.js';
export * from './events/Default.js';
export * from './events/DragAndDropManager.js';
export * from './events/Events.js';
export * from './events/EventsDispatcher.js';
export * from './events/Hitbox.js';
export * from './events/InteractionManager.js';
export * from './events/InteractionEventsQueue.js';
export * from './events/MiscEventsManager.js';
export * from './events/RaycasterManager.js';
export * from './instancedMesh/EventsDispatcherInstanced.js';
export * from './instancedMesh/InstancedMesh2.js';
export * from './instancedMesh/InstancedMeshEntity.js';
export * from './patch/Euler.js';
export * from './patch/Material.js';
export * from './patch/Matrix4.js';
export * from './patch/Object3D.js';
export * from './patch/Quaternion.js';
export * from './patch/Scene.js';
export * from './patch/SmartRendering.js';
export * from './patch/Vector3.js';
export * from './patch/WebGLRenderer.js';
export * from './rendering/RenderManager.js';
export * from './rendering/RenderView.js';
export * from './tweening/Actions.js';
export * from './tweening/Easings.js';
export * from './tweening/Tween.js';
export * from './tweening/TweenManager.js';
export * from './tweening/RunningTween.js';
export * from './utils/Asset.js';
export * from './utils/IntersectionUtils.js';
export * from './utils/Query.js';
export * from './utils/Stats.js';
export * from './utils/Utils.js';
export * from './utils/VectorUtils.js';

declare module 'three' {
  export interface Object3D extends Object3DExtPrototype { }
  export interface Material extends MaterialExtPrototype { }
  export interface Scene extends SceneExtPrototype { }
}
