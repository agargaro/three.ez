import { Object3D } from 'three';

/** @internal */
export function applyQuaternionPatch(target: Object3D): void {
  target.__onChangeBaseQuat = target.quaternion._onChangeCallback;
  if (target.scene?.__smartRendering) {
    setQuatChangeCallbackSR(target);
  } else {
    setQuatChangeCallback(target);
  }
}

/** @internal */
export function setQuatChangeCallback(target: Object3D): void {
  target.quaternion._onChangeCallback = () => {
    target.__onChangeBaseQuat();
    target.__eventsDispatcher.dispatch('rotationchange');
  };
}

/** @internal */
export function setQuatChangeCallbackSR(target: Object3D): void {
  target.quaternion._onChangeCallback = () => {
    target.__onChangeBaseQuat();
    target.needsRender = true;
    target.__eventsDispatcher.dispatch('rotationchange');
  };
}
