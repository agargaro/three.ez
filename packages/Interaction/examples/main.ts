import * as THREE from 'three';
import { EventsCache, InteractionManager } from '../src';

const width = window.innerWidth, height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10).translateZ(1);
const scene = new THREE.Scene();


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

const interactionManager = new InteractionManager(renderer, scene, camera);

const box = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), new THREE.MeshNormalMaterial());
scene.add(box);
box.draggable = true;
debugger;
box.on('animate', (e) => box.rotateX(e.delta).rotateY(e.delta * 2));
box.on(['pointerover', 'pointerout'], function (e) {
  console.log(e.type);
});

function animation(time) {
  interactionManager.update();

  time /= 1000;

  const delta = time - scene.totalTime;
  const total = time;
  console.log(delta);
  scene.totalTime = time;
  EventsCache.dispatchEvent(scene, "beforeanimate", { delta, total });
  EventsCache.dispatchEvent(scene, "animate", { delta, total });
  EventsCache.dispatchEvent(scene, "afteranimate", { delta, total });

  renderer.render(scene, camera);
}