import { Main, MainParameters } from '../../src';
import { WebGLRenderer, Clock, Vector2 } from 'three';
import { assert, describe, expect, it, beforeEach, vi } from 'vitest';
import { JSDOM } from 'jsdom';
describe('Main class', () => {
  let mainInstance;

  beforeEach(() => {
    //     // Mocking WebGLRenderer to avoid DOM-related issues
    //     const dom = new JSDOM('<!doctype html><html><body></body></html>', {
    //       url: 'http://localhost',
    //     });
    //     const mockCanvas = dom.window.document.createElement('canvas');
    //     dom.window.document.body.appendChild(mockCanvas);
    //     const mockRenderer = new WebGLRenderer();
    //     vi.spyOn(mockRenderer, 'setAnimationLoop').mockImplementation(vi.fn(()=>{}));

    //     const parameters: MainParameters = {
    //         fullscreen: false,
    //         showStats: false,
    //         disableContextMenu: true,
    //         backgroundColor: 'black',
    //         backgroundAlpha: 1,
    //         animate: ()=>{},
    //         rendererParameters: {},
    //         enableCursor: true,
    //         multitouch: false,
    //     };

    mainInstance = new Main();
  });

  it('should create an instance of Main', () => {
    expect(mainInstance).toBeInstanceOf(Main);
  });

  it('should have a valid WebGLRenderer', () => {
    expect(mainInstance.renderer).toBeInstanceOf(WebGLRenderer);
  });

  it('should initialize with default values', () => {
    expect(mainInstance.fullscreen).toBe(false);
    expect(mainInstance.showStats).toBe(false);
    expect(mainInstance.disableContextMenu).toBe(true);
    expect(mainInstance.backgroundColor).toBe('black');
    expect(mainInstance.backgroundAlpha).toBe(1);
    expect(mainInstance.multitouch).toBe(false);
    expect(mainInstance.enableCursor).toBe(true);
  });

  it('should handle context menu', () => {
    // Assuming disableContextMenu is true in the parameters
    const contextMenuEvent = new Event('contextmenu');
    const preventDefaultSpy = vi.spyOn(contextMenuEvent, 'preventDefault');
    document.body.dispatchEvent(contextMenuEvent);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should set and get active views by tag', () => {
    const tag = 'testTag';
    const viewParams = { tag };
    const renderView = mainInstance.createView(viewParams);

    mainInstance.setActiveViewsByTag(tag);

    expect(mainInstance.activeView).toEqual(renderView);
  });

  it('should add and remove views', () => {
    const viewParams = {
      /* ... */
    };
    const renderView = mainInstance.createView(viewParams);

    expect(mainInstance.views).toContain(renderView);

    mainInstance.removeView(renderView);

    expect(mainInstance.views).not.toContain(renderView);
  });

  it('should handle animate callback', () => {
    const animateCallback = vi.fn();
    const parameters: MainParameters = { animate: animateCallback };
    const instanceWithAnimate = new Main(parameters);

    // Simulate animation loop
    (instanceWithAnimate.renderer.setAnimationLoop as any).mock.calls[0][0](100, {}); // Simulate animation loop call

    expect(animateCallback).toHaveBeenCalledWith(100, {});
  });

  it('should update mouse position', () => {
    const mousePosition = new Vector2(1, 2);
    mainInstance.getViewByMouse(mousePosition);

    expect(mainInstance.mousePosition).toEqual(mousePosition);
  });

  // Add more tests as needed
});
