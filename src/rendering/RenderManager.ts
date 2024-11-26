import { Camera, Color, ColorRepresentation, Scene, Vector2, WebGLRenderer } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderView, ViewParameters } from './RenderView.js';

/** @internal */
export class RenderManager {
  public renderer: WebGLRenderer;
  public views: RenderView[] = [];
  public activeView: RenderView;
  public hoveredView: RenderView;
  private _visibleScenes = new Set<Scene>();
  private _rendererSize = new Vector2();
  private _fullscreen: boolean;
  private _backgroundColor: Color;
  private _backgroundAlpha: number;
  private _resized = false;
  private readonly _resizeObserver = new ResizeObserver(() => this._resized = true);

  public get activeScene(): Scene { return this.activeView?.scene; }
  public get hoveredScene(): Scene { return this.hoveredView?.scene; }

  public get fullscreen(): boolean { return this._fullscreen; }
  public set fullscreen(value: boolean) {
    this._fullscreen = value;
    this.updateRenderSize();
  }

  public get backgroundColor(): Color { return this._backgroundColor; }
  public set backgroundColor(value: ColorRepresentation) {
    this._backgroundColor = new Color(value);
    this.renderer.setClearColor(this._backgroundColor, this._backgroundAlpha);
  }

  public get backgroundAlpha(): number { return this._backgroundAlpha; }
  public set backgroundAlpha(value: number) {
    this._backgroundAlpha = value;
    this.renderer.setClearColor(this._backgroundColor, this._backgroundAlpha);
  }

  constructor(renderer: WebGLRenderer, appendCanvas: boolean, fullscreen = true, backgroundColor: ColorRepresentation = 0x000000, backgroundAlpha = 1) {
    this.renderer = renderer;
    renderer.setPixelRatio(window.devicePixelRatio);
    this.appendCanvas(appendCanvas);
    this._fullscreen = fullscreen;
    this._backgroundAlpha = backgroundAlpha;
    this._backgroundColor = new Color(backgroundColor);
    window.addEventListener('resize', () => this._resized = true);
    this._resizeObserver.observe(this.renderer.domElement);
    this.updateRenderSize();
    renderer.setClearColor(this._backgroundColor, this._backgroundAlpha);
  }

  private appendCanvas(appendCanvas: boolean): void {
    if (appendCanvas) {
      document.body.appendChild(this.renderer.domElement);
    }
  }

  public create(view: ViewParameters): RenderView {
    const renderView = new RenderView(view, this._rendererSize);
    this.views.push(renderView);
    return renderView;
  }

  public add(view: RenderView): void {
    if (this.views.indexOf(view) > -1) return;
    this.views.push(view);
  }

  public getByTag(tag: string): RenderView {
    for (const view of this.views) {
      if (view.tags.indexOf(tag) > -1) {
        return view;
      }
    }
  }

  public remove(view: RenderView): void {
    const index = this.views.indexOf(view);
    if (index > -1) {
      this.views.splice(index, 1);
      if (this.views.length === 0) {
        this.setDefaultRendererParameters();
      }
    }
  }

  public removeByTag(tag: string): void {
    if (this.views.length === 0) return;
    for (let i = this.views.length - 1; i >= 0; i--) {
      if (this.views[i].tags.indexOf(tag) > -1) {
        this.views.splice(i, 1);
      }
    }
    if (this.views.length === 0) {
      this.setDefaultRendererParameters();
    }
  }

  public clear(): void {
    this.views = [];
    this.setDefaultRendererParameters();
  }

  private setDefaultRendererParameters(): void {
    this.renderer.setScissorTest(false);
    this.renderer.setViewport(0, 0, this._rendererSize.width, this._rendererSize.height);
    this.renderer.setScissor(0, 0, this._rendererSize.width, this._rendererSize.height);
    this.renderer.setClearColor(this._backgroundColor, this._backgroundAlpha);
  }

  public getVisibleScenes(): Set<Scene> {
    if (this.views.length === 0) return;
    this._visibleScenes.clear();
    for (const view of this.views) {
      if (view.visible) {
        this._visibleScenes.add(view.scene);
      }
    }
    return this._visibleScenes;
  }

  public updateActiveView(mouse: Vector2, pointerOnCanvas: boolean): void {
    this.hoveredView = pointerOnCanvas ? this.getViewByMouse(mouse) : undefined;
    if (this.hoveredView) {
      this.activeView = this.hoveredView;
    }
  }

  public getViewByMouse(mouse: Vector2): RenderView {
    for (let i = this.views.length - 1; i >= 0; i--) {
      const view = this.views[i];
      const v = view.computedViewport;
      if (view.visible && v.left <= mouse.x && v.left + v.width >= mouse.x && v.top <= mouse.y && v.top + v.height >= mouse.y) {
        return view;
      }
    }
  }

  private isRenderNecessary(): boolean {
    for (const view of this.views) {
      if (view.visible && view.scene.needsRender) {
        return true;
      }
    }
    return false;
  }

  public render(): void {
    if (!this.isRenderNecessary()) return;

    for (const view of this.views) {
      if (view.visible) {
        const v = view.computedViewport;
        this.renderer.setScissorTest(view.viewport !== undefined);
        this.renderer.setViewport(v.left, v.bottom, v.width, v.height);
        this.renderer.setScissor(v.left, v.bottom, v.width, v.height);
        this.renderer.setClearColor(view.backgroundColor ?? this._backgroundColor, view.backgroundAlpha ?? this._backgroundAlpha);
        view.onBeforeRender();
        this.executeRender(view.scene, view.camera, view.composer);
        view.onAfterRender();
      }
    }
  }

  private executeRender(scene?: Scene, camera?: Camera, composer?: EffectComposer): void {
    if (composer) {
      composer.render();
    } else {
      this.renderer.render(scene, camera);
    }
  }

  public update(): void {
    if (!this._resized) return;

    this.updateRenderSize();
    for (const view of this.views) {
      view.update();
    }
    this._resized = false;
  }

  private updateRenderSize(): void {
    if (this._fullscreen) { // TODO remove this flag
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    } else {
      const { width, height } = this.renderer.domElement.getBoundingClientRect();
      this.renderer.setSize(width, height, false);
    }
    this.renderer.getSize(this._rendererSize);
  }

  public setActiveViewsByTag(tag: string): void {
    for (const view of this.views) {
      view.visible = view.tags.indexOf(tag) > -1;
    }
  }
}
