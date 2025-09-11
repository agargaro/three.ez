import { Object3D } from 'three';

// TODO: add BatchedMesh and InstancedMesh support
// TODO: add default cusor config

/** Valid cursor values based on the CSS cursor property. */
export type CursorsKeys = 'auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' |
  'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'grab' | 'grabbing' |
  'all-scroll' | 'col-resize' | 'row-resize' | 'n-resize' | 'e-resize' | 's-resize' | 'w-resize' |
  'ne-resize' | 'nw-resize' | 'se-resize' | 'sw-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'zoom-in' | 'zoom-out';

/** Represents a cursor, either by a CSS cursor key or a URL. */
export type Cursor = CursorsKeys | String;

const cursorSet = new Set<Cursor>([
  'auto', 'default', 'none', 'context-menu', 'help', 'pointer', 'progress', 'wait',
  'cell', 'crosshair', 'text', 'vertical-text', 'alias', 'copy', 'move', 'no-drop', 'not-allowed', 'grab', 'grabbing',
  'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize',
  'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out'
]);

/** @internal */
export class CursorHandler {
  public enabled = true;
  protected readonly _domElement: HTMLCanvasElement;
  protected _currentCursor: Cursor | null = null;

  constructor(domElement: HTMLCanvasElement) {
    this._domElement = domElement;
  }

  public update(dragged: Object3D, hovered: Object3D, dropTarget: Object3D): void {
    if (!this.enabled || !hovered) return;

    const cursor = this.getCursor(dragged, hovered, dropTarget);

    if (cursor !== this._currentCursor) {
      this._currentCursor = cursor;
      const cursorStyle = cursorSet.has(cursor) ? cursor as string : `url(${cursor}), default`;
      this._domElement.style.cursor = cursorStyle;
    }
  }

  private getCursor(objDragged: Object3D, objHovered: Object3D, objDropTarget: Object3D): Cursor {
    if (objDropTarget) return objDropTarget.cursorDrop ?? 'copy';
    if (objDragged) return objDragged.cursorDrag ?? 'grabbing';
    if (objHovered.cursor) return objHovered.cursor;
    if (!objHovered.enabledState) return 'default';
    if (objHovered.draggable) return 'grab';
    return objHovered.isInteractable ? 'pointer' : 'default';
  }
}
