import { Scene as SceneBase, AmbientLight, DirectionalLight } from 'three';
import { Main as MainBase, PerspectiveCameraAuto } from '@three.ez/main';
import { Cube } from './cube';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';

class Scene extends SceneBase {
  public composer: EffectComposer;
  public camera = new PerspectiveCameraAuto(70).translateZ(2);
  public directionalLight = new DirectionalLight('white', 2).translateZ(10);
  public cube = new Cube();
  constructor() {
    super();
    this.add(new AmbientLight(), this.directionalLight, this.cube);
    this.directionalLight.matrixAutoUpdate = false;
    this.directionalLight.matrix = this.camera.matrix;
  }
}

export class Main extends MainBase {
  public scene = new Scene();

  public get currentStep() {
    return this.scene.cube.currentStep;
  }

  constructor() {
    super({ rendererParameters: { antialias: true, canvas: document.getElementById('cubecanvas') } });
    this.createView({ scene: this.scene, camera: this.scene.camera });
  }

  public next() {
    this.scene.cube.next();
  }

  public back() {
    this.scene.cube.back();
  }
}
