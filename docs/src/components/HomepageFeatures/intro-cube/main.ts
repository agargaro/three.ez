import { Asset, Main as MainBase, PerspectiveCameraAuto } from '@three.ez/main';
import { AmbientLight, Color, DataTexture, DirectionalLight, Group, Mesh, MeshToonMaterial, PlaneGeometry, RedFormat, Scene as SceneBase, ShaderMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { Cube } from './cube';
import { CustomShaderMaterial } from './shaderMaterial';
import { Gradient } from './gradientMesh';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect';

class Scene extends SceneBase {
  public composer: EffectComposer;
  public camera = new PerspectiveCameraAuto(70).translateZ(2);
  public directionalLight = new DirectionalLight('white', 2).translateZ(2).translateX(-3);
  public cube = new Cube();
  public loader = new GLTFLoader().setPath('gltf/');
  public tv: Group;

  constructor() {
    super();
    this.add(new AmbientLight(), this.directionalLight);
    this.directionalLight.matrixAutoUpdate = false;
    this.directionalLight.matrix = this.camera.matrix;
    this.loader.load(
      'Tv.glb',
      (gltf) => {
        gltf.scene.position.z -= 3;

        const alphaIndex = 1;

        const colors = new Uint8Array(alphaIndex + 2);

        for (let c = 0; c <= colors.length; c++) {
          colors[c] = (c / colors.length) * 256;
        }

        const gradientMap = new DataTexture(colors, colors.length, 1, RedFormat);

        gradientMap.needsUpdate = true;

        gltf.scene.traverse((node) => {
          if (node instanceof Mesh) {
            node.material = new MeshToonMaterial({ color: node.material.color, gradientMap });
          }
        });
        this.tv = gltf.scene;
        
        this.add(this.tv);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      // called when loading has errors
      function (error) {
        console.log('An error happened', error);
      }
    );
    this.on('animate', (e) => {
      Gradient.material.setTime(e.total);
      this.tv?.rotateY(e.delta);
    });
  }
}

export class Main extends MainBase {
  public scene = new Scene();
  effect = new OutlineEffect(this.renderer);

  public get currentStep() {
    return this.scene.cube.currentStep;
  }

  constructor() {
    super({ rendererParameters: { antialias: true, canvas: document.getElementById('cubecanvas') }, backgroundAlpha: 0 });
    this.createView({
      scene: this.scene,
      camera: this.scene.camera,
      onAfterRender: () => {
        this.effect.render(this.scene, this.scene.camera);
      },
    });
  }

  public next() {
    this.scene.cube.next();
  }

  public back() {
    this.scene.cube.back();
  }
}
