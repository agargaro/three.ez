import { Camera, Clock, ColorRepresentation, Raycaster, Scene, Vector2, WebGLRenderer, WebGLRendererParameters } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { Binding } from "../binding/Binding";
import { InteractionManager } from "../events/InteractionManager";
import { EventsCache } from "../events/MiscEventsManager";
import { RenderManager } from "../rendering/RenderManager";
import { RenderView, ViewParameters } from "../rendering/RenderView";
import { TweenManager } from "../tweening/TweenManager";
import { Stats } from "../utils/Stats";
import { RaycasterSortComparer } from "../events/RaycasterManager";

/**
 * Represents the configuration parameters for initializing the Main class.
 */
export interface MainParameters {
    /** A boolean flag indicating whether to enable full-screen mode and perform automatic resizing of the canvas (default: true). */
    fullscreen?: boolean;
    /** A boolean flag indicating whether to display performance statistics (default: true). */
    showStats?: boolean;
    /** A boolean flag indicating whether to disable the context menu on right-click (default: true). */
    disableContextMenu?: boolean;
    /** The default background color (default: 'black'). */
    backgroundColor?: ColorRepresentation;
    /** The default alpha (transparency) value for the background (default: 1). */
    backgroundAlpha?: number;
    /** A callback function executed for each frame. */
    animate?: XRFrameRequestCallback;
    /** Configuration parameters for the WebGLRenderer. */
    rendererParameters?: WebGLRendererParameters;
    /** A boolean flag indicating whether to enable cursor handling in the application (default: true). */
    enableCursor?: boolean;
    /** A boolean flag indicating whether to enable multitouch interactions (default: false). */
    multitouch?: boolean;
}

/**
 * The `Main` class serves as the core component for managing a 3D application.
 * It provides configuration options and methods for setting up and controlling the application's behavior.
 */
export class Main {
    /** A static counter representing the number of animation frames elapsed. */
    public static ticks = 0;
    private _renderManager: RenderManager;
    private _interactionManager: InteractionManager;
    private _stats: Stats;
    private _animate: XRFrameRequestCallback;
    private _clock = new Clock();
    private _showStats: boolean;

    /**
     * The WebGLRenderer instance used for rendering the 3D scene.
     */
    public get renderer(): WebGLRenderer { return this._renderManager.renderer }

    /**
     * An array of all RenderView instances managed by the application.
     * Lists all views created and managed by the application, each representing a separate viewport or scene.
     */
    public get views(): RenderView[] { return this._renderManager.views }

    /**
     * The currently active RenderView (activated by mouse position).
     */
    public get activeView(): RenderView { return this._renderManager.activeView }

    /**
     * The Scene associated with the currently active RenderView.
     */
    public get activeScene(): Scene { return this._renderManager.activeView?.scene }

    /**
     * The Camera associated with the currently active RenderView.
     */
    public get activeCamera(): Camera { return this._renderManager.activeView?.camera }

    /**
     * The EffectComposer (used for post-processing) associated with the currently active RenderView.
     */
    public get activeComposer(): EffectComposer { return this._renderManager.activeView?.composer }

    /**
     * A boolean flag indicating whether to display performance statistics.
     * If set to true, statistics will be shown; otherwise, they will be hidden.
     */
    public get showStats(): boolean { return this._showStats }
    public set showStats(value: boolean) {
        if (value) {
            if (!this._stats) this._stats = new Stats();
            document.body.appendChild(this._stats.dom);
        } else if (this._stats) {
            document.body.removeChild(this._stats.dom);
        }
        this._showStats = value;
    }

    /**
     * A boolean flag indicating whether to enable multitouch interactions.
     */
    public get multitouch(): boolean { return this._interactionManager.queue.multitouch }
    public set multitouch(value: boolean) { this._interactionManager.queue.multitouch = value }

    /**
     * A boolean flag indicating whether to enable cursor handling in the application.
     */
    public get enableCursor(): boolean { return this._interactionManager.cursorManager.enabled }
    public set enableCursor(value: boolean) { this._interactionManager.cursorManager.enabled = value }

    /**
     * A custom sorting comparer function used to order intersections when performing raycasting.
     */
    public get raycasterSortComparer(): RaycasterSortComparer { return this._interactionManager.raycasterManager.raycasterSortComparer }
    public set raycasterSortComparer(value: RaycasterSortComparer) { this._interactionManager.raycasterManager.raycasterSortComparer = value }

    /**
     * A Raycaster instance responsible for handling raycasting operations in the application.
     */
    public get raycaster(): Raycaster { return this._interactionManager.raycasterManager.raycaster }

    /**
     * The default background color used in the application.
     */
    public get backgroundColor(): ColorRepresentation { return this._renderManager.backgroundColor }
    public set backgroundColor(value: ColorRepresentation) { this._renderManager.backgroundColor = value }

    /**
     * The default alpha (transparency) value for the background.
     */
    public get backgroundAlpha(): number { return this._renderManager.backgroundAlpha }
    public set backgroundAlpha(value: number) { this._renderManager.backgroundAlpha = value }

    /**
     * The current mouse position represented as a Vector2.
     * Provides the x and y coordinates of the mouse pointer within the application.
     */
    public get mousePosition(): Vector2 { return this._interactionManager.raycasterManager.pointer }

    /**
     * @param parameters Represents the configuration parameters for initializing the Main class.
     */
    constructor(parameters: MainParameters = {}) {
        this._renderManager = new RenderManager(parameters.rendererParameters, parameters.fullscreen, parameters.backgroundColor, parameters.backgroundAlpha);
        this._interactionManager = new InteractionManager(this._renderManager);
        this.multitouch = parameters.multitouch ?? false;
        this.handleContextMenu(parameters.disableContextMenu);
        this.showStats = parameters.showStats ?? true;
        this.setAnimationLoop();
        this.enableCursor = parameters.enableCursor ?? true;
        this._animate = parameters.animate;
    }

    private handleContextMenu(disableContextMenu = true): void {
        if (disableContextMenu) {
            this.renderer.domElement.addEventListener("contextmenu", (e) => e.preventDefault());
        }
    }

    private setAnimationLoop(): void {
        this.renderer.setAnimationLoop((time, frame) => {
            Main.ticks++;
            const currentDelta = this._clock.getDelta();

            this._interactionManager.update();
            TweenManager.update(currentDelta * 1000);

            this.animate(time, frame);

            let rendered = false;
            const visibleScenes = this._renderManager.getVisibleScenes();

            if (visibleScenes) {
                for (const scene of visibleScenes) {
                    const delta = currentDelta * scene.timeScale;
                    const total = scene.totalTime += delta;
                    EventsCache.dispatchEvent(scene, "beforeanimate", { delta, total });
                    EventsCache.dispatchEvent(scene, "animate", { delta, total });
                    EventsCache.dispatchEvent(scene, "afteranimate", { delta, total });
                    Binding.compute(scene);
                }

                rendered = this._renderManager.render();

                for (const scene of visibleScenes) {
                    scene.needsRender = !scene.__smartRendering;
                }
            }

            if (this._showStats) {
                this._stats.update(rendered);
            }
        });
    }

    private animate(time: DOMHighResTimeStamp, frame: XRFrame): void {
        if (this._animate) {
            this._animate(time, frame);
        }
    }

    /**
     * Creates a new RenderView and adds it to the RenderManager.
     * @param view The parameters for the new RenderView.
     * @returns The created RenderView instance.
     */
    public createView(view: ViewParameters): RenderView {
        return this._renderManager.create(view);
    }

    /**
     * Adds a RenderView to the RenderManager.
     * @param view The RenderView instance to add.
     */
    public addView(view: RenderView): void {
        this._renderManager.add(view);
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
     * Removes a RenderView from the RenderManager.
     * @param view The RenderView instance to remove.
     */
    public removeView(view: RenderView): void {
        this._renderManager.remove(view);
    }

    /**
     * Removes a RenderView from the RenderManager by its tag.
     * @param tag The tag of the RenderView to remove.
     */
    public removeViewByTag(tag: string): void {
        this._renderManager.removeByTag(tag);
    }

    /**
     * Clears all RenderViews from the RenderManager.
     */
    public clearViews(): void {
        this._renderManager.clear();
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
