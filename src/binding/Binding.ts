import { Object3D, Scene } from "three";

/** @internal */
export interface BindingCallback<T = any> {
  getValue: () => T;
  setValue: (value: T) => void;
  key: string;
}

/** @internal */
export class Binding {

  public static detectChanges(target: Object3D, resursive: boolean): void {
    this.executeAllCallbacks(target);
    if (resursive) {
      for (const child of target.children) {
        this.detectChanges(child, true);
      }
    }
  }

  public static bindProperty<T>(key: string, target: Object3D, getValue: () => T, renderOnChange?: boolean): void {
    if (this.getIndexByKey(target, key) > -1) {
      console.error("Cannot override property already bound.");
      return;
    }

    this.addToBoundCallbacks(key, target, getValue.bind(target), renderOnChange);
    if (target.scene) {
      this.bindToScene(target);
    }
  }

  private static addToBoundCallbacks<T>(key: string, target: Object3D, getValue: () => T, renderOnChange: boolean): void {
    const setValue = this.createSetValue(key, target, renderOnChange);
    const bindingCallback: BindingCallback = { key, getValue, setValue };
    target.__boundCallbacks.push(bindingCallback);
    this.executeCallback(bindingCallback);
  }

  private static createSetValue<T>(key: string, target: Object3D, renderOnChange: boolean): (value: T) => void {
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

  private static getIndexByKey(target: Object3D, key: string): number {
    const boundCallbacks = target.__boundCallbacks;
    for (let i = 0; i < boundCallbacks.length; i++) {
      if (boundCallbacks[i].key === key) return i;
    }
    return -1;
  }

  public static setManualDetectionMode(target: Object3D): void {
    if (target.__manualDetection) return;
    if (target.__boundCallbacks.length > 0) {
      console.error("Cannot change detectChangesMode if a binding is already created.");
    } else {
      target.__manualDetection = true;
    }
  }

  public static bindToScene(target: Object3D): void {
    if (target.__boundCallbacks.length > 0) {
      target.scene.__boundObjects.push(target);
    }
  }

  public static unbindFromScene(target: Object3D): void {
    target.scene.__boundObjects.remove(target);
  }

  public static unbindProperty(target: Object3D, key: string): void {
    const index = this.getIndexByKey(target, key);
    if (index > -1) {
      target.__boundCallbacks.splice(index, 1);
      if (target.scene) {
        this.unbindFromScene(target);
      }
    }
  }

  private static executeCallback(bindingCallback: BindingCallback): void {
    bindingCallback.setValue(bindingCallback.getValue());
  }

  private static executeAllCallbacks(target: Object3D): void {
    const callbacks = target.__boundCallbacks;
    for (const callback of callbacks) {
      this.executeCallback(callback);
    }
  }

  public static compute(scene: Scene): void {
    const boundObjs = scene.__boundObjects;
    for (const target of boundObjs.data) {
      this.executeAllCallbacks(target);
    }
  }

}
