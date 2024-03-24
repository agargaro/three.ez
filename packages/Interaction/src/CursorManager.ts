import { Object3D } from "three";

/** Valid cursor values based on the CSS cursor property. */
export type CursorsKeys = "auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" |
    "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "grab" | "grabbing" |
    "all-scroll" | "col-resize" | "row-resize" | "n-resize" | "e-resize" | "s-resize" | "w-resize" |
    "ne-resize" | "nw-resize" | "se-resize" | "sw-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "zoom-in" | "zoom-out";

const cursorSet = new Set<Cursor>([
    "auto", "default", "none", "context-menu", "help", "pointer", "progress", "wait",
    "cell", "crosshair", "text", "vertical-text", "alias", "copy", "move", "no-drop", "not-allowed", "grab", "grabbing",
    "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize",
    "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"
]);

/** Represents a cursor, either by a CSS cursor key or a URL. */
export type Cursor = CursorsKeys | String;

/** @internal */
export class CursorHandler {
    public enabled = true;
    private _cursor: Cursor;
    private _domElement: HTMLCanvasElement;

    constructor(domElement: HTMLCanvasElement) {
        this._domElement = domElement;
    }

    public update(dragged: Object3D, hovered: Object3D, dropTarget: Object3D): void {
        if (!this.enabled || !hovered) return;

        const cursor = this.getCursor(dragged, hovered, dropTarget) as string;

        if (cursor !== this._cursor) {
            this._cursor = cursor;
            this._domElement.style.cursor = cursorSet.has(cursor) ? cursor : `url(${cursor}), default`;
        }
    }

    private getCursor(dragged: Object3D, hovered: Object3D, dropTarget: Object3D): Cursor {
        if (dropTarget) return dropTarget.cursorDrop ?? "alias";
        if (dragged) return dragged.cursorDrag ?? "grabbing";
        if (hovered.cursor) return hovered.cursor;
        if (!hovered.enabledState) return "default";
        if (hovered.draggable) return "grab";
        return "pointer"; // TODO add check if has events
    }
}
