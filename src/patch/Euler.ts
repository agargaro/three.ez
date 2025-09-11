import { Object3D } from 'three';

/** @internal */
export function patchRotation(target: Object3D): void {
  if (!target.__onChangeEulerBase) {
    target.__onChangeEulerBase = target.rotation._onChangeCallback;
    target.rotation._onChangeCallback = onChangeEuler;
  }
}

function onChangeEuler(this: Object3D): void {
  this.__onChangeEulerBase!();
  this.needsRender = true;
  this.__eventsDispatcher.dispatch('rotationchange');
}
