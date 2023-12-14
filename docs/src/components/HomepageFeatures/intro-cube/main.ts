import { Main as MainBase, PerspectiveCameraAuto } from '@three.ez/main';
import { AmbientLight, DirectionalLight, Mesh, PlaneGeometry, Scene as SceneBase, ShaderMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { Cube } from './cube';
import { fragment, vertex } from './plane';
import { CustomShaderMaterial } from './shaderMaterial';

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

    const uniforms = {
      colors: [color1, color2, color3],
      uTime: 0,
      uSpeed: 0.4,

      uLoadingTime: 0,

      uNoiseDensity: 1.3,
      uNoiseStrength: 4,
      uFrequency: 2,
      uAmplitude: 1,
      uIntensity: 0.5,
    };
    var material = new CustomShaderMaterial(uniforms, vertex, fragment);
    const geometry = new PlaneGeometry(10, 10, 1, meshCount);
    const plane = new Mesh(geometry, material);
    plane.translateZ(-7);
    this.add(plane);
    this.on('animate', (e) => {
      uniforms.uTime += e.total;
      uniforms.uLoadingTime += e.total;
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
