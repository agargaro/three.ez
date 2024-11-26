import { InstancedMesh, Object3D } from 'three';
import { applyObject3DRotationPatch, applyObject3DVector3Patch } from '../patch/Object3D.js';
import { EventExt, Events, InteractionEvents, MiscUpdateEvents, UpdateEvents } from './Events.js';
import { EventsCache } from './MiscEventsManager.js';

/** @internal */
export class EventsDispatcher {
  public parent: Object3D;
  public listeners: { [K in keyof Events]?: ((event?: Events[K]) => void)[] } = {};

  constructor(parent: Object3D) {
    this.parent = parent;
  }

  public add<K extends keyof Events>(type: K, listener: (event: Events[K]) => void): (event: Events[K]) => void {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
      if (type === 'positionchange' || type === 'scalechange') {
        applyObject3DVector3Patch(this.parent);
      } else if (type === 'rotationchange') {
        applyObject3DRotationPatch(this.parent);
      } else if (type === 'drop' || type === 'dragenter' || type === 'dragleave' || type === 'dragover') {
        this.parent.__isDropTarget = true;
      }
    }
    if (this.listeners[type].indexOf(listener) < 0) {
      this.listeners[type].push(listener);
    }
    EventsCache.push(type, this.parent);
    return listener;
  }

  public has<K extends keyof Events>(type: K, listener: (event: Events[K]) => void): boolean {
    return this.listeners[type]?.indexOf(listener) > -1;
  }

  public remove<K extends keyof Events>(type: K, listener: (event: Events[K]) => void): void {
    const index = this.listeners[type]?.indexOf(listener) ?? -1;
    if (index > -1) {
      this.listeners[type].splice(index, 1);
      if (this.listeners[type].length === 0) {
        EventsCache.remove(type, this.parent);
        this.parent.__isDropTarget = this.isDropTarget();
      }
    }
  }

  private isDropTarget(): boolean {
    const l = this.listeners;
    return !(this.parent as InstancedMesh).isInstancedMesh
      && (l['drop']?.length > 0 || l['dragenter']?.length > 0 || l['dragleave']?.length > 0 || l['dragover']?.length > 0);
  }

  public dispatchDOM<K extends keyof InteractionEvents>(type: K, event: InteractionEvents[K]): void {
    event._bubbles = false;
    event._stoppedImmediatePropagation = false;
    event._defaultPrevented = false;
    event._type = type;
    event._target = this.parent;
    this.executeDOM(type, event);
  }

  public dispatchDOMAncestor<K extends keyof InteractionEvents>(type: K, event: InteractionEvents[K]): void {
    let target = this.parent;
    event._bubbles = true;
    event._stoppedImmediatePropagation = false;
    event._defaultPrevented = false;
    event._type = type;
    event._target = target;
    while (target && event._bubbles) {
      target.__eventsDispatcher.executeDOM(type, event);
      target = target.parent;
    }
  }

  private executeDOM<K extends keyof InteractionEvents>(type: K, event: InteractionEvents[K]): void {
    if (!this.listeners[type]) return;
    const target = event.currentTarget = this.parent;
    for (const callback of this.listeners[type]) {
      if (event._stoppedImmediatePropagation) break;
      callback.call(target, event as any);
    }
  }

  public dispatch<T extends keyof MiscUpdateEvents>(type: T, event?: MiscUpdateEvents[T]): void {
    if (!this.listeners[type]) return;
    for (const callback of this.listeners[type]) {
      callback.call(this.parent, event as any);
    }
  }

  public dispatchDescendant<T extends keyof UpdateEvents>(type: T, event?: UpdateEvents[T]): void {
    const target = this.parent;
    target.__eventsDispatcher.dispatch(type, event as any);
    if (!target.children) return;
    for (const child of target.children) {
      child.__eventsDispatcher.dispatchDescendant(type, event);
    }
  }

  public dispatchManual<T extends keyof Events>(type: T, event?: Events[T]): void {
    if ((event as EventExt)?.cancelable !== undefined) {
      return this.dispatchDOM(type as keyof InteractionEvents, event as any);
    }
    this.dispatch(type as keyof MiscUpdateEvents, event as any);
  }

  public dispatchAncestorManual<T extends keyof Events>(type: T, event?: Events[T]): void {
    if ((event as EventExt)?.cancelable !== undefined) {
      this.dispatchDOMAncestor(type as keyof InteractionEvents, event as any);
    }
  }
}
