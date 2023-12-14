import { Main as MainBase, PerspectiveCameraAuto } from '@three.ez/main';
import { AmbientLight, DirectionalLight, Mesh, PlaneGeometry, Scene as SceneBase, ShaderMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { Cube } from './cube';
import { fragment, vertex } from './plane';

const meshCount = 192;

class Scene extends SceneBase {
  public composer: EffectComposer;
  public camera = new PerspectiveCameraAuto(70).translateZ(2);
  public directionalLight = new DirectionalLight('white', 2).translateZ(10);
  public cube = new Cube();
  public loader = new GLTFLoader().setPath('gltf/');

  constructor() {
    super();
    this.add(new AmbientLight(), this.directionalLight);
    this.directionalLight.matrixAutoUpdate = false;
    this.directionalLight.matrix = this.camera.matrix;

    const color1 = '#25c2a0';
    const color2 = '#000000';
    const color3 = '#d15de8';
    const uTime = 0;
    const uSpeed = 0.4;
    const uDensity = 1.3;
    const uStrength = 4;
    const uFrequency = 2;
    const uAmplitude = 1;

    const uC1 = hexToRgb(color1);
    const uC2 = hexToRgb(color2);
    const uC3 = hexToRgb(color3);

    const uniforms = {
      colors: { value: [color1, color2, color3] },
      uTime: { value: uTime },
      uSpeed: { value: uSpeed },

      uLoadingTime: { value: 0 },

      uNoiseDensity: { value: uDensity },
      uNoiseStrength: { value: uStrength },
      uFrequency: { value: uFrequency },
      uAmplitude: { value: uAmplitude },
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
    var material = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
    });
    const geometry = new PlaneGeometry(10, 10, 1, meshCount);
    const plane = new Mesh(geometry, material);
    plane.translateZ(-7);
    this.add(plane);
    this.on('animate', (e) => {
      uniforms.uTime.value += e.delta;
    });
  }
}

export class Main extends MainBase {
  public scene = new Scene();

  public get currentStep() {
    return this.scene.cube.currentStep;
  }

  constructor() {
    super({ rendererParameters: { antialias: true, canvas: document.getElementById('cubecanvas') }, backgroundAlpha: 0 });
    this.createView({ scene: this.scene, camera: this.scene.camera });
  }

  public next() {
    this.scene.cube.next();
  }

  public back() {
    this.scene.cube.back();
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
