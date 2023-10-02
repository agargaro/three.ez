import { Scene as SceneBase, AmbientLight, DirectionalLight, Color, CubeTexture, Texture } from 'three';
import { Main as MainBase, PerspectiveCameraAuto } from '@three.ez/main';
import { Cube } from './cube';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
    this.loader.load(
      'CUBE.glb',
      (gltf) => {
        this.add(gltf.scene);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      // called when loading has errors
      function (error) {
        console.log('An error happened',error);
      }
    );
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
