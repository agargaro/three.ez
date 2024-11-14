import { Camera, Object3D, Scene } from 'three';
import { Events, MiscEvents } from './Events.js';

type SceneEventsCache = { [x: string]: Set<Object3D> };

/** @internal */
export class EventsCache {
  private static _allowedEventsSet = new Set<keyof Events>(['viewportresize', 'beforeanimate', 'animate', 'afteranimate'] as (keyof MiscEvents)[]);
  private static _events: { [x: number]: SceneEventsCache } = {};

  public static push(type: keyof Events, target: Object3D): void {
    const scene = target.scene;
    if (scene && this._allowedEventsSet.has(type)) {
      this.pushScene(scene, type, target);
    }
  }

  public static update(target: Object3D): void {
    this.updateEvent(target, 'viewportresize');
    this.updateEvent(target, 'beforeanimate');
    this.updateEvent(target, 'animate');
    this.updateEvent(target, 'afteranimate');
  }

  private static updateEvent(target: Object3D, name: keyof Events): void {
    if (target.__eventsDispatcher.listeners[name]?.length > 0) {
      this.pushScene(target.scene, name, target);
    }
  }

  private static pushScene(scene: Scene, type: keyof Events, target: Object3D): void {
    const sceneCache = this._events[scene.id] ?? (this._events[scene.id] = {});
    const eventCache = sceneCache[type] ?? (sceneCache[type] = new Set());
    eventCache.add(target);
  }

  public static removeAll(target: Object3D): void {
    const sceneCache = this._events[target.scene?.id];
    if (sceneCache) {
      for (const key in sceneCache) {
        const eventCache = sceneCache[key];
        eventCache.delete(target);
      }
    }
  }

  public static remove(type: keyof Events, target: Object3D): void {
    const sceneCache = this._events[target.scene?.id];
    if (sceneCache) {
      sceneCache[type]?.delete(target);
    }
  }

  public static dispatchEvent<K extends keyof MiscEvents>(scene: Scene, type: K, event?: Events[K]): void {
    const sceneCache = this._events[scene?.id];
    if (sceneCache?.[type]) {
      for (const target of sceneCache[type]) {
        target.__eventsDispatcher.dispatch(type, event);
      }
    }
  }

  public static dispatchEventExcludeCameras<K extends keyof MiscEvents>(scene: Scene, type: K, event?: Events[K]): void {
    const sceneCache = this._events[scene?.id];
    if (sceneCache?.[type]) {
      for (const target of sceneCache[type]) {
        if (!(target as Camera).isCamera) {
          target.__eventsDispatcher.dispatch(type, event);
        }
      }
    }
  }
}
