import { IUniform, ShaderMaterial, Vector3 } from 'three';
import { fragmentShader, vertexShader } from './plane';

export class GradientMaterial extends ShaderMaterial {
  constructor() {
    const colors = ['#25c2a0', '#000000', '#d15de8'];

    const uC1 = hexToRgb(colors[0]);
    const uC2 = hexToRgb(colors[1]);
    const uC3 = hexToRgb(colors[2]);

    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 0.4 },

      uLoadingTime: { value: 0 },

      uNoiseDensity: { value: 1.3 },
      uNoiseStrength: { value: 4 },
      uFrequency: { value: 2 },
      uAmplitude: { value: 1 },
      uIntensity: { value: 0.5 },
      uC1r: { value: formatColor(uC1?.r) },
      uC1g: { value: formatColor(uC1?.g) },
      uC1b: { value: formatColor(uC1?.b) },
      uC2r: { value: formatColor(uC2?.r) },
      uC2g: { value: formatColor(uC2?.g) },
      uC2b: { value: formatColor(uC2?.b) },
      uC3r: { value: formatColor(uC3?.r) },
      uC3g: { value: formatColor(uC3?.g) },
      uC3b: { value: formatColor(uC3?.b) },
    };

    super({
      uniforms,
      fragmentShader,
      vertexShader,
    });
  }

  public setTime(time: number): void {
    this.uniforms.uTime.value = time;
  }
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function formatColor(color = 0) {
  return color / 255;
}
