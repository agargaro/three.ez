import { Asset, Main, PerspectiveCameraAuto } from '@three.ez/main';
import { ACESFilmicToneMapping, AmbientLight, BufferGeometry, DirectionalLight, FogExp2, Mesh, MeshLambertMaterial, MeshStandardMaterial, PlaneGeometry, Scene, Vector3 } from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Sky } from 'three/examples/jsm/objects/Sky';
import { CullingStatic, InstancedMesh2 } from '../src/InstancedMesh2';

const count = 1000000;
const terrainSize = 200000;

const main = new Main({ rendererParameters: { antialias: true } }); // init renderer and other stuff
main.renderer.toneMapping = ACESFilmicToneMapping;
main.renderer.toneMappingExposure = 0.5;

const camera = new PerspectiveCameraAuto(70, 0.1, 4000).translateY(300).translateZ(-900);
const scene = new Scene();

const treeGLTF = (await Asset.load<GLTF>(GLTFLoader, '../tree.glb')).scene.children[0] as Mesh<BufferGeometry, MeshStandardMaterial>;

const trees = new InstancedMesh2(treeGLTF.geometry, treeGLTF.material, count, {
  behaviour: CullingStatic,
  onInstanceCreation: (obj, index) => {
    obj.position.setX(Math.random() * terrainSize - terrainSize / 2).setZ(Math.random() * terrainSize - terrainSize / 2);
    obj.scale.setScalar(Math.random() * 0.1 + 0.1);
    obj.rotateY(Math.random() * Math.PI * 2).rotateZ(Math.random() * 0.3 - 0.15);
  }
});

const terrain = new Mesh(new PlaneGeometry(terrainSize, terrainSize, 10, 10), new MeshLambertMaterial({ color: 0x004622 }));
terrain.rotateX(Math.PI / -2);

const sun = new Vector3();
const sky = new Sky();
sky.scale.setScalar(450000);
const uniforms = sky.material.uniforms;
uniforms['turbidity'].value = 5;
uniforms['rayleigh'].value = 2;

sky.on('animate', (e) => {
  sun.setFromSphericalCoords(1, Math.PI / -1.9 + e.total * 0.02, Math.PI / 1.4);
  uniforms['sunPosition'].value.copy(sun);
});

const dirLight = new DirectionalLight('white');
dirLight.on('animate', (e) => {
  dirLight.intensity = sun.y > 0.1 ? 10 : Math.max(0, sun.y / 0.1 * 10);
  dirLight.position.copy(sun).multiplyScalar(terrainSize);
  dirLight.target.position.copy(sun).multiplyScalar(-terrainSize);
});

scene.add(sky, trees, terrain, new AmbientLight(), dirLight, dirLight.target);

scene.fog = new FogExp2('white', 0.0004);
scene.on('animate', (e) => scene.fog.color.setHSL(0, 0, sun.y));

main.createView({
  scene, camera, enabled: false, onBeforeRender: () => {
    camera.updateMatrixWorld(true);
    trees.updateCulling(camera);
    treeCount.updateDisplay();
  }
});

const controls = new MapControls(camera, main.renderer.domElement);
controls.maxPolarAngle = Math.PI / 2.1;
controls.minDistance = 100;
controls.maxDistance = 1000;

const gui = new GUI();
gui.add(trees.instances as any, 'length').name("instances total").disable();
const treeCount = gui.add(trees, 'count').name("instances rendered").disable();
gui.add(camera, 'far', 1000, 10000, 100).name("camera far").onChange(() => camera.updateProjectionMatrix());
