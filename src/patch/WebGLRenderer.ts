import { Camera, Scene, Vector4, WebGLRenderer } from 'three';
import { Main } from '../core/Main.js';
import { ViewportResizeEvent } from '../events/Events.js';
import { EventsCache } from '../events/MiscEventsManager.js';

const viewportSize = new Vector4();
const lastViewportSizes: { [x: number]: Vector4 } = {};

/** @internal */
export function applyWebGLRendererPatch(main: Main): void {
  const renderer = main.renderer;
  const baseRender = renderer.render.bind(renderer);

  renderer.render = function (scene: Scene, camera: Camera) {
    this.getViewport(viewportSize);
    handleViewportResize(this, scene, camera);

    if (main._showStats) main._stats.beginQuery();
    baseRender(scene, camera);
    if (main._showStats) main._stats.endQuery();
  };
}

function handleViewportResize(renderer: WebGLRenderer, scene: Scene, camera: Camera): void {
  let event: ViewportResizeEvent;

  if (!lastViewportSizes[scene.id]) {
    lastViewportSizes[scene.id] = new Vector4(-1);
  }

  const lastSceneSize = lastViewportSizes[scene.id];
  if (lastSceneSize.z !== viewportSize.z || lastSceneSize.w !== viewportSize.w) {
    lastSceneSize.copy(viewportSize);
    event = { renderer, camera, width: viewportSize.z, height: viewportSize.w };
    EventsCache.dispatchEventExcludeCameras(scene, 'viewportresize', event);
  }

  if (!lastViewportSizes[camera.id]) {
    lastViewportSizes[camera.id] = new Vector4(-1);
  }

  const lastCameraSize = lastViewportSizes[camera.id];
  if (lastCameraSize.z !== viewportSize.z || lastCameraSize.w !== viewportSize.w) {
    lastCameraSize.copy(viewportSize);
    camera.__eventsDispatcher?.dispatch('viewportresize', event ?? { renderer, camera, width: viewportSize.z, height: viewportSize.w });
  }
}
