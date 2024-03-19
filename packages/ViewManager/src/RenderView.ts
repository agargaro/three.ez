import { Camera, Scene, Vector2 } from "three";

/**
 * Represents an object defining the dimensions and position of a viewport.
 */
export interface Viewport {
  /** Left coordinate of the viewport. */
  left: number;
  /** Bottom coordinate of the viewport. */
  bottom: number;
  /** Width of the viewport. */
  width: number;
  /** Height of the viewport. */
  height: number;
}

/**
 * Represents a set of parameters for configuring a view.
 */
export interface ViewParameters {
  /** Scene rendered in the view. */
  scene: Scene;
  /** Camera used to view the scene (avoid using the same camera for different scenes). */
  camera: Camera;
  /** Normalized viewport defining dimensions and position of the view (optional). Values range from 0 to 1. */
  viewport?: Viewport;
  /** Tags of the view (optional). */
  tags?: string[];
  /** Determines if the view is visible (optional, default: true). */
  visible?: boolean;
  /** Determines whether InteractionEvents will be triggered for the view (optional, default: true).  */
  enabled?: boolean;
}

/**
 * Represents a render view with specific parameters. 
 * Don't instantiate this manually.
 */
export class RenderView implements ViewParameters {
  public scene: Scene;
  public camera: Camera;
  public viewport: Viewport;
  /** The viewport defining the dimensions and position of the view. */
  public computedViewport = { left: 0, bottom: 0, width: 0, height: 0, top: 0 };
  public tags: string[];
  public visible: boolean;
  public enabled: boolean;
  private _rendererSize: Vector2;

  /**
   * Don't instantiate this manually.
   */
  constructor(parameters: ViewParameters, rendererSize: Vector2) {
    this._rendererSize = rendererSize;
    this.scene = parameters.scene;
    this.camera = parameters.camera;
    this.viewport = parameters.viewport;
    this.tags = parameters.tags;
    this.visible = parameters.visible ?? true;
    this.enabled = parameters.enabled ?? true;

    this.scene.add(this.camera); // Mandatory to trigger camera resize event
    
    this.update();
  }

  /**
   * Updates the dimensions of the viewport based on the renderer size.
   */
  public update(): void {
    if (this.viewport) {
      this.computedViewport.left = Math.floor(this._rendererSize.x * this.viewport.left);
      this.computedViewport.bottom = Math.floor(this._rendererSize.y * this.viewport.bottom);
      this.computedViewport.width = Math.floor(this._rendererSize.x * this.viewport.width);
      this.computedViewport.height = Math.floor(this._rendererSize.y * this.viewport.height);
      this.computedViewport.top = Math.floor(this._rendererSize.y - this.computedViewport.bottom - this.computedViewport.height);
    } else {
      this.computedViewport.width = this._rendererSize.x;
      this.computedViewport.height = this._rendererSize.y;
    }
  }
}
