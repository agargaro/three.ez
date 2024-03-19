import { Scene, Vector2, WebGLRenderer } from "three";
import { RenderView, ViewParameters } from "./RenderView";

export class ViewManager {
  public views: RenderView[] = [];
  public activeView: RenderView;
  public hoveredView: RenderView;
  private _renderer: WebGLRenderer;
  private _visibleScenes = new Set<Scene>();
  private _rendererSize = new Vector2();

  public get activeScene(): Scene { return this.activeView?.scene }
  public get hoveredScene(): Scene { return this.hoveredView?.scene }

  constructor(renderer: WebGLRenderer) {
    this._renderer = renderer;

    window.addEventListener("resize", this.onResize.bind(this));

    this.updateRenderSize();
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
    }
  }

  public removeByTag(tag: string): void {
    if (this.views.length === 0) return;

    for (let i = this.views.length - 1; i >= 0; i--) {
      if (this.views[i].tags.indexOf(tag) > -1) {
        this.views.splice(i, 1);
      }
    }
  }

  public clear(): void {
    this.views = [];
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

  private onResize(): void {
    this.updateRenderSize();

    for (const view of this.views) {
      view.update();
    }
  }

  private updateRenderSize(): void {
    this._renderer.getSize(this._rendererSize);
  }

  public setActiveViewsByTag(tag: string): void {
    for (const view of this.views) {
      view.visible = view.tags.indexOf(tag) > -1;
    }
  }
}
