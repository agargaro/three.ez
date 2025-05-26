import { Object3D, Vector3 } from 'three';
import { Vector3Ext } from './prototype/Vector3Ext.js';

// TODO: create unpatch method?

/** @internal */
export function patchPosition(target: Object3D): void {
  if (!(target.position as Vector3Ext).isVector3Ext) {
    patchVector3Prototype(target.position);
  }
  (target.position as Vector3Ext)._onChangeCallback = onChangePosition;
}

/** @internal */
export function patchScale(target: Object3D): void {
  if (!(target.scale as Vector3Ext).isVector3Ext) {
    patchVector3Prototype(target.scale);
  }
  (target.scale as Vector3Ext)._onChangeCallback = onChangeScale;
}

function onChangePosition(this: Object3D): void {
  this.needsRender = true;
  this.__eventsDispatcher.dispatch('positionchange');
}

function onChangeScale(this: Object3D): void {
  this.needsRender = true;
  this.__eventsDispatcher.dispatch('scalechange');
}

function patchVector3Prototype(vec3: Vector3): void {
  (vec3 as Vector3Ext)._x = vec3.x;
  (vec3 as Vector3Ext)._y = vec3.y;
  (vec3 as Vector3Ext)._z = vec3.z;
  /** @ts-expect-error The operand of a 'delete' operator must be optional */
  delete vec3.x;
  /** @ts-expect-error The operand of a 'delete' operator must be optional */
  delete vec3.y;
  /** @ts-expect-error The operand of a 'delete' operator must be optional */
  delete vec3.z;
  Object.setPrototypeOf(vec3, Vector3Ext.prototype);
}
