import { Object3D } from 'three';

/** @internal */
export function patchQuaternion(target: Object3D): void {
  if (!target.__onChangeQuaternionBase) {
    target.__onChangeQuaternionBase = target.quaternion._onChangeCallback;
    target.quaternion._onChangeCallback = onChangeQuaternion;
  }
}

function onChangeQuaternion(this: Object3D): void {
  this.__onChangeQuaternionBase!();
  this.needsRender = true;
  this.__eventsDispatcher.dispatch('rotationchange');
}
