import { Object3D } from 'three';

/** @internal */
export function applyEulerPatch(target: Object3D): void {
  target.__onChangeBaseEuler = target.rotation._onChangeCallback;
  if (target.scene?.__smartRendering) {
    setEulerChangeCallbackSR(target);
  } else {
    setEulerChangeCallback(target);
  }
}

/** @internal */
export function setEulerChangeCallbackSR(target: Object3D): void {
  target.rotation._onChangeCallback = () => {
    target.__onChangeBaseEuler();
    target.needsRender = true;
    target.__eventsDispatcher.dispatch('rotationchange');
  };
}

/** @internal */
export function setEulerChangeCallback(target: Object3D): void {
  target.rotation._onChangeCallback = () => {
    target.__onChangeBaseEuler();
    target.__eventsDispatcher.dispatch('rotationchange');
  };
}
