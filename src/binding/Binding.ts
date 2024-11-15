import { Object3D, Scene } from 'three';

/** @internal */
export interface BindingCallback<T = any> {
  getValue: () => T;
  setValue: (value: T) => void;
  key: string;
}

export function detectChanges(target: Object3D, resursive: boolean): void {
  executeAllCallbacks(target);
  if (resursive) {
    for (const child of target.children) {
      detectChanges(child, true);
    }
  }
}

export function bindProperty<T>(key: string, target: Object3D, getValue: () => T, renderOnChange?: boolean): void {
  if (getIndexByKey(target, key) > -1) {
    console.error('Cannot override property already bound.');
    return;
  }

  addToBoundCallbacks(key, target, getValue.bind(target), renderOnChange);
  if (target.scene) {
    bindToScene(target);
  }
}

function addToBoundCallbacks<T>(key: string, target: Object3D, getValue: () => T, renderOnChange: boolean): void {
  const setValue = createSetValue(key, target, renderOnChange);
  const bindingCallback: BindingCallback = { key, getValue, setValue };
  target.__boundCallbacks.push(bindingCallback);
  executeCallback(bindingCallback);
}

function createSetValue<T>(key: string, target: Object3D, renderOnChange: boolean): (value: T) => void {
  if (renderOnChange) {
    return (value) => {
      if (value !== target[key]) {
        target[key] = value;
        target.needsRender = true;
      }
    };
  }
  return (value) => {
    if (value !== target[key]) {
      target[key] = value;
    }
  };
}

function getIndexByKey(target: Object3D, key: string): number {
  const boundCallbacks = target.__boundCallbacks;
  for (let i = 0; i < boundCallbacks.length; i++) {
    if (boundCallbacks[i].key === key) return i;
  }
  return -1;
}

export function setManualDetectionMode(target: Object3D): void {
  if (target.__manualDetection) return;
  if (target.__boundCallbacks.length > 0) {
    console.error('Cannot change detectChangesMode if a binding is already created.');
  } else {
    target.__manualDetection = true;
  }
}

export function bindToScene(target: Object3D): void {
  if (target.__boundCallbacks.length > 0) {
    target.scene.__boundObjects.add(target);
  }
}

export function unbindFromScene(target: Object3D): void {
  target.scene.__boundObjects.delete(target);
}

export function unbindProperty(target: Object3D, key: string): void {
  const index = getIndexByKey(target, key);
  if (index > -1) {
    target.__boundCallbacks.splice(index, 1);
    if (target.scene) {
      unbindFromScene(target);
    }
  }
}

function executeCallback(bindingCallback: BindingCallback): void {
  bindingCallback.setValue(bindingCallback.getValue());
}

function executeAllCallbacks(target: Object3D): void {
  const callbacks = target.__boundCallbacks;
  for (const callback of callbacks) {
    executeCallback(callback);
  }
}

export function compute(scene: Scene): void {
  const boundObjs = scene.__boundObjects;
  for (const target of boundObjs) {
    executeAllCallbacks(target);
  }
}
