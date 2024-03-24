import { WebGLRenderer } from "three";
import { ViewManager } from "../ViewManager";

/** @internal */
export function applyWebGLRendererPatch(renderer: WebGLRenderer, viewManager: ViewManager): void {
    const setSizeBase = renderer.setSize.bind(renderer);
    
    renderer.setSize = function (width, height, updateStyle) {
        setSizeBase(width, height, updateStyle);
        viewManager.onResize();
    }
}