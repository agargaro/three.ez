import { Camera, Object3D, Scene } from 'three';
import { EzEvents, EzMiscEvents } from './Events.js';

// TODO: we can use a distincArray instead of Set

const miscEvents: (keyof EzMiscEvents)[] = ['viewportresize', 'beforeanimate', 'animate', 'afteranimate'];
const allowedEventsSet = new Set<keyof EzEvents>(miscEvents);

/** @internal */
export function push(type: keyof EzEvents, target: Object3D): void {
  const scene = target.scene;

  if (scene && allowedEventsSet.has(type)) {
    pushScene(scene, type, target);
  }
}

/** @internal */
export function update(target: Object3D): void {
  const listeners = target.__eventsDispatcher.listeners;
  const scene = target.scene;

  for (const type of miscEvents) {
    const eventsCount = listeners[type]?.length ?? 0;

    if (eventsCount > 0) {
      pushScene(scene, type, target);
    }
  }
}

function pushScene(scene: Scene, type: keyof EzEvents, target: Object3D): void {
  scene.__registeredEventsObjects ??= {};
  const registeredEventsObjects = scene.__registeredEventsObjects;
  registeredEventsObjects[type] ??= new Set();
  registeredEventsObjects[type].add(target);
}

/** @internal */
export function removeAll(target: Object3D): void {
  const registeredEventsObjects = target.scene?.__registeredEventsObjects;

  if (registeredEventsObjects) {
    for (const type in registeredEventsObjects) {
      registeredEventsObjects[type].delete(target);
    }
  }
}

/** @internal */
export function remove(type: keyof EzEvents, target: Object3D): void {
  const registeredEventsObjects = target.scene?.__registeredEventsObjects;

  if (registeredEventsObjects) {
    registeredEventsObjects[type]?.delete(target);
  }
}

/** @internal */
export function dispatchEvent<K extends keyof EzMiscEvents>(scene: Scene, type: K, event?: EzEvents[K]): void {
  const registeredEventsObjects = scene.__registeredEventsObjects;

  if (registeredEventsObjects?.[type]) {
    for (const target of registeredEventsObjects[type]) {
      target.__eventsDispatcher.dispatch(type, event);
    }
  }
}

/** @internal */
export function dispatchEventExcludeCameras<K extends keyof EzMiscEvents>(scene: Scene, type: K, event?: EzEvents[K]): void {
  const registeredEventsObjects = scene.__registeredEventsObjects;

  if (registeredEventsObjects?.[type]) {
    for (const target of registeredEventsObjects[type]) {
      if (!(target as Camera).isCamera) {
        target.__eventsDispatcher.dispatch(type, event);
      }
    }
  }
}
