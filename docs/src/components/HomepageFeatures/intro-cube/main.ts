import { Main as MainBase, PerspectiveCameraAuto } from '@three.ez/main';
import { AmbientLight, DirectionalLight, Mesh, PlaneGeometry, Scene as SceneBase, ShaderMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { Cube } from './cube';
import { CustomShaderMaterial } from './shaderMaterial';
import { Gradient } from './gradientMesh';









class Scene extends SceneBase {
  public composer: EffectComposer;
  public camera = new PerspectiveCameraAuto(70).translateZ(2);
  public directionalLight = new DirectionalLight('white', 2).translateZ(10);
  public cube = new Cube();
  public loader = new GLTFLoader().setPath('gltf/');

  constructor() {
    super();
    this.add(new AmbientLight(), this.directionalLight,new Gradient());
    this.directionalLight.matrixAutoUpdate = false;
    this.directionalLight.matrix = this.camera.matrix;

    this.on('animate', (e) => {
      Gradient.material.setTime(e.total);
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