import createContext from 'gl';
import { Color } from 'three';
import { beforeAll, describe, expect, it } from 'vitest';
import { Main } from '../../src';

describe('Main class', () => {
  let mainInstance: Main;

  beforeAll(() => {
    const context = createContext(1, 1);
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    mainInstance = new Main({ showStats: false, rendererParameters: { context, canvas } });
  });

  it('should initialize with default values', () => {
    // expect(mainInstance.fullscreen).toBe(true);
    expect(mainInstance.showStats).toBe(false); // showStats default cannot be tested
    // expect(mainInstance.disableContextMenu).toBe(true);
    expect((mainInstance.backgroundColor as Color).getHex()).toBe(0);
    expect(mainInstance.backgroundAlpha).toBe(1);
    expect((mainInstance as any)._animate).toBe(undefined);
    expect(mainInstance.enableCursor).toBe(true);
    expect(mainInstance.multitouch).toBe(false);
  });
});
