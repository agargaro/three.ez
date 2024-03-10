import { Main, OrthographicCameraAuto } from '@three.ez/main';
import { BoxGeometry, MeshBasicMaterial, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';
import { CullingStatic, InstancedMesh2 } from '../src/InstancedMesh2';

const main = new Main({ rendererParameters: { antialias: true } });
const camera = new OrthographicCameraAuto(10).translateZ(0.1);
const scene = new Scene();

const boxes = new InstancedMesh2(new BoxGeometry(), new MeshBasicMaterial({ color: 'red' }), 4, {
  behaviour: CullingStatic,
  onInstanceCreation: (obj, index) => {
    obj.position.setX((index - 1.5) * 2).setZ(-10);
    // scrivere nella doc che nel costruttore non si può settare la visibilità
    // fare benchmark se vale la pena avere la matrix4 così
  }
});

boxes.computeBoundingSphere();

boxes.instances[1].visible = false;

boxes.on('click', (e) => {
  console.log(e.intersection.instanceId);
  boxes.instances[e.intersection.instanceId].visible = false;
});


scene.add(boxes);

main.createView({
  scene, camera, backgroundColor: 'white', onBeforeRender: () => {
    camera.updateMatrixWorld(true);
    boxes.updateCulling(camera);
    boxesCount.updateDisplay();
  }
});

const controls = new OrbitControls(camera, main.renderer.domElement);

const gui = new GUI();
gui.add(boxes.instances as any, 'length').name("instances total").disable();
const boxesCount = gui.add(boxes, 'count').name("instances rendered").disable();
