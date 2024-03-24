import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { InteractionManager } from '../src';

const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 2;

const scene = new Scene();

const renderer = new WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const interactionManager = new InteractionManager(renderer, scene, camera);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const mesh = new Mesh(new BoxGeometry(), new MeshBasicMaterial({ color: 'white' }));
scene.add(mesh);

mesh.draggable = true;

mesh.on('animate', (e) => {
  if (mesh.hovered) return;
  mesh.rotation.z += e.delta;
});

renderer.setAnimationLoop((time) => {
  interactionManager.update(time);
  renderer.render(scene, camera);
});
