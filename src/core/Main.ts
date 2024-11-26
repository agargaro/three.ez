import { Camera, Clock, ColorRepresentation, Raycaster, Scene, Vector2, WebGLRenderer, WebGLRendererParameters } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { InteractionManager } from '../events/InteractionManager.js';
import { EventsCache } from '../events/MiscEventsManager.js';
import { RenderManager } from '../rendering/RenderManager.js';
import { RenderView, ViewParameters } from '../rendering/RenderView.js';
import { Stats } from '../utils/Stats.js';
import { RaycasterSortComparer } from '../events/RaycasterManager.js';
import { applyWebGLRendererPatch } from '../patch/WebGLRenderer.js';
import { updateTweens } from '../tweening/TweenManager.js';
import { computeBinding } from '../binding/Binding.js';

/**
 * Configuration parameters for initializing the Main class.
 */
export interface MainParameters {
  /** Enable full-screen mode and automatic canvas resizing (default: true). */
  fullscreen?: boolean;
  /** Display performance statistics (default: true). */
  showStats?: boolean;
  /** Disable the context menu on right-click (default: true). */
  disableContextMenu?: boolean;
  /** Default background color (default: 'black'). */
  backgroundColor?: ColorRepresentation;
  /** Default background alpha (transparency) value (default: 1). */
  backgroundAlpha?: number;
  /** Callback function executed for each frame. */
  animate?: (delta: number, total: number) => void;
  /** Configuration parameters for the WebGLRenderer. Ignored if renderer is specified. */
  rendererParameters?: WebGLRendererParameters;
  /** Enable cursor handling in the application (default: true). */
  enableCursor?: boolean;
  /** Enable multitouch interactions (default: false). */
  multitouch?: boolean;
  /** */
  renderer?: WebGLRenderer;
}

/**
 * The `Main` class serves as the core component for managing a 3D application.
 * It provides configuration options and methods for setting up and controlling the application's behavior.
 */
export class Main {
  /** A static counter representing the number of animation frames elapsed. */
  public ticks = 0;
  private readonly _renderManager: RenderManager;
  private readonly _interactionManager: InteractionManager;
  /** @internal **/ public _stats: Stats;
  /** @internal **/ public _showStats: boolean;
  private readonly _animate: (delta: number, total: number) => void; // todo improve this.. readonly not worth
  private readonly _clock = new Clock();

  /**
     * The WebGLRenderer instance used for rendering the 3D scene.
     */
  public get renderer(): WebGLRenderer { return this._renderManager.renderer; }

  /**
     * An array of all RenderView instances managed by the application.
     * Lists all views created and managed by the application, each representing a separate viewport or scene.
     */
  public get views(): RenderView[] { return this._renderManager.views; }

  /**
     * The currently active RenderView (activated by mouse position).
     */
  public get activeView(): RenderView { return this._renderManager.activeView; }

  /**
     * The Scene associated with the currently active RenderView.
     */
  public get activeScene(): Scene { return this._renderManager.activeView?.scene; }

  /**
     * The Camera associated with the currently active RenderView.
     */
  public get activeCamera(): Camera { return this._renderManager.activeView?.camera; }

  /**
     * The EffectComposer (used for post-processing) associated with the currently active RenderView.
     */
  public get activeComposer(): EffectComposer { return this._renderManager.activeView?.composer; }

  /**
     * Indicates whether to display performance statistics.
     * If set to true, statistics will be shown; otherwise, they will be hidden.
     */
  public get showStats(): boolean { return this._showStats; }
  public set showStats(value: boolean) {
    if (value) {
      if (!this._stats) this._stats = new Stats(this.renderer);
      document.body.appendChild(this._stats.dom);
    } else if (this._stats) {
      document.body.removeChild(this._stats.dom);
    }
    this._showStats = value;
  }

  /**
     * Indicates whether to enable multitouch interactions.
     */
  public get multitouch(): boolean { return this._interactionManager.queue.multitouch; }
  public set multitouch(value: boolean) { this._interactionManager.queue.multitouch = value; }

  /**
     * Defines the mouse buttons that can be used for dragging objects.
     * Specify the button values as an array of PointerEvent button values.
     */
  public get dragButtons(): number[] { return this._interactionManager.dragManager.dragButtons; }
  public set dragButtons(value: number[]) { this._interactionManager.dragManager.dragButtons = value; }

  /**
     * Indicates whether to enable cursor handling in the application.
     */
  public get enableCursor(): boolean { return this._interactionManager.cursorManager.enabled; }
  public set enableCursor(value: boolean) { this._interactionManager.cursorManager.enabled = value; }

  /**
     * A custom sorting comparer function used to order intersections when performing raycasting.
     */
  public get raycasterSortComparer(): RaycasterSortComparer { return this._interactionManager.raycasterManager.raycasterSortComparer; }
  public set raycasterSortComparer(value: RaycasterSortComparer) { this._interactionManager.raycasterManager.raycasterSortComparer = value; }

  /**
     * A Raycaster instance responsible for handling raycasting operations in the application.
     */
  public get raycaster(): Raycaster { return this._interactionManager.raycasterManager.raycaster; }

  /**
     * The default background color used in the application.
     */
  public get backgroundColor(): ColorRepresentation { return this._renderManager.backgroundColor; }
  public set backgroundColor(value: ColorRepresentation) { this._renderManager.backgroundColor = value; }

  /**
     * The default alpha (transparency) value for the background.
     */
  public get backgroundAlpha(): number { return this._renderManager.backgroundAlpha; }
  public set backgroundAlpha(value: number) { this._renderManager.backgroundAlpha = value; }

  /**
     * The current mouse position represented as a Vector2.
     * Provides the x and y coordinates of the mouse pointer within the application.
     */
  public get mousePosition(): Vector2 { return this._interactionManager.raycasterManager.pointer; }

  /**
     * Indicates if the pointer is over the canvas.
     */
  public get pointerOnCanvas(): boolean { return this._interactionManager.raycasterManager.pointerOnCanvas; }

  /**
     * @param params Configuration parameters for initializing the Main class.
     */
  constructor(params: MainParameters = {}) {
    if (!params.renderer) this.setDefaultRendererParameters(params);
    const renderer = params.renderer ?? new WebGLRenderer(params.rendererParameters);
    const appendCanvas = !params.rendererParameters.canvas;

    this._renderManager = new RenderManager(renderer, appendCanvas, params.fullscreen, params.backgroundColor, params.backgroundAlpha);
    this._interactionManager = new InteractionManager(this._renderManager);
    this.multitouch = params.multitouch ?? false;
    this.handleContextMenu(params.disableContextMenu);
    this.showStats = params.showStats ?? true;
    this.enableCursor = params.enableCursor ?? true;
    this._animate = params.animate || null;

    applyWebGLRendererPatch(this);
  }

  private setDefaultRendererParameters(parameters: MainParameters): void {
    if (!parameters.rendererParameters) parameters.rendererParameters = {};
    parameters.rendererParameters.antialias ??= true;
  }

  private handleContextMenu(disableContextMenu = true): void {
    if (disableContextMenu) {
      this.renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
    }
  }

  private setAnimationLoop(): void {
    this.renderer.setAnimationLoop((time, frame) => {
      if (this._showStats) this._stats.begin();

      this.ticks++;
      const currentDelta = this._clock.getDelta();

      this._interactionManager.update();
      updateTweens(currentDelta * 1000);

      this.animate(currentDelta, this._clock.elapsedTime);

      const visibleScenes = this._renderManager.getVisibleScenes();

      if (visibleScenes) {
        for (const scene of visibleScenes) {
          const delta = currentDelta * scene.timeScale;
          const total = scene.totalTime += delta;
          EventsCache.dispatchEvent(scene, 'beforeanimate', { delta, total });
          EventsCache.dispatchEvent(scene, 'animate', { delta, total });
          EventsCache.dispatchEvent(scene, 'afteranimate', { delta, total });
          computeBinding(scene);
        }

        this._renderManager.render();

        for (const scene of visibleScenes) {
          scene.needsRender = !scene.__smartRendering;
        }
      }

      if (this._showStats) {
        this._stats.end();
        this._stats.update();
      }
    });
  }

  private clearAnimationLoop(): void {
    this.renderer.setAnimationLoop(null);
  }

  public animate(delta: number, total: number): void {
    if (this._animate) {
      this._animate(delta, total);
    }
  }

  /**
     * Creates a new RenderView and adds it to the RenderManager.
     * @param view The parameters for the new RenderView.
     * @returns The created RenderView instance.
     */
  public createView(view: ViewParameters): RenderView {
    if (this._renderManager.views.length === 0) this.setAnimationLoop();
    return this._renderManager.create(view);
  }

  /**
     * Adds a RenderView to the RenderManager.
     * @param view The RenderView instance to add.
     */
  public addView(view: RenderView): void {
    if (this._renderManager.views.length === 0) this.setAnimationLoop();
    this._renderManager.add(view);
  }

  /**
     * Removes a RenderView from the RenderManager.
     * @param view The RenderView instance to remove.
     */
  public removeView(view: RenderView): void {
    this._renderManager.remove(view);
    if (this._renderManager.views.length === 0) this.clearAnimationLoop(); // TODO consider if we want to move it to renderManager
  }

  /**
     * Removes a RenderView from the RenderManager by its tag.
     * @param tag The tag of the RenderView to remove.
     */
  public removeViewByTag(tag: string): void {
    this._renderManager.removeByTag(tag);
    if (this._renderManager.views.length === 0) this.clearAnimationLoop();
  }

  /**
     * Clears all RenderViews from the RenderManager.
     */
  public clearViews(): void {
    this._renderManager.clear();
    this.clearAnimationLoop();
  }

  /**
     * Retrieves a RenderView by its tag.
     * @param tag The tag to search for.
     * @returns The RenderView with the specified tag, if found, otherwise, undefined.
     */
  public getViewByTag(tag: string): RenderView {
    return this._renderManager.getByTag(tag);
  }

  /**
    * Retrieves a RenderView by mouse position.
    * @param mouse The mouse position as a Vector2.
    */
  public getViewByMouse(mouse: Vector2): void {
    this._renderManager.getViewByMouse(mouse);
  }

  /**
     * Sets active RenderViews by tag.
     * @param tag The tag of the RenderViews to set as active.
     */
  public setActiveViewsByTag(tag: string): void {
    this._renderManager.setActiveViewsByTag(tag);
  }
}
