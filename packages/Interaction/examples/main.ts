import * as THREE from 'three';
import { EventsCache, InteractionManager } from '../src';

class Box extends THREE.Mesh {
  constructor() {
    super(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshLambertMaterial({ color: 0xff6666 }));
    this.userData.className = 'blink active-box';
    this.translateZ(-5);
    this.focusable = false;

    // These events do not propagate to parents
    this.on(['focusin', 'focusout', 'pointerenter', 'pointerleave'], (e) => blink(document.getElementById(e.type), this.userData.className));
    this.on('rotationchange', () => blink(document.getElementById('rotationchange'), this.userData.className));
    this.on('viewportresize', () => blink(document.getElementById('viewportresize'), this.userData.className));
    this.on('animate', (e) => {
      blink(document.getElementById('animate'), this.userData.className);
      if (!this.hovered) return;
      this.rotateX(e.delta).rotateY(e.delta * 1.5);
    });
  }
}

class Sphere extends THREE.Mesh {
  constructor() {
    super(new THREE.SphereGeometry(2), new THREE.MeshLambertMaterial({ color: 0x6666ff }));
    this.userData.className = 'blink active-sphere';
    this.translateX(10);
    this.draggable = true;
    this.findDropTarget = true;

    // These events do not propagate to parents
    this.on(['focusin', 'focusout', 'pointerenter', 'pointerleave'], (e) => blink(document.getElementById(e.type), this.userData.className));
    this.on('positionchange', () => blink(document.getElementById('positionchange'), this.userData.className));
    this.on('scalechange', () => blink(document.getElementById('scalechange'), this.userData.className));
    this.on(['pointerover', 'pointerout'], (e) => this.scale.multiplyScalar(e.type === 'pointerover' ? 1.2 : 1 / 1.2));
  }
}

class Plane extends THREE.Mesh {
  constructor() {
    super(new THREE.PlaneGeometry(10, 15), new THREE.MeshLambertMaterial({ color: 0x66ff66 }));
    this.userData.className = 'blink active-plane';
    this.translateX(-10);

    this.on(['dragenter', 'dragleave', 'drop', 'dragcancel'], (e) => {
      (this.material as THREE.MeshLambertMaterial).emissive.set(e.type === 'dragenter' ? 0xcccc00 : 0);
    });

    // These events do not propagate to parents
    this.on(['focusin', 'focusout', 'pointerenter', 'pointerleave'], (e) => blink(document.getElementById(e.type), this.userData.className));
  }
}

class Scene extends THREE.Scene {
  constructor() {
    super();
    this.activeSmartRendering(); // render the frame only if it detects changes.
    this.userData.className = 'blink active-scene';
    this.continuousRaycasting = true;
    this.continuousRaycastingDropTarget = true;
    this.add(new THREE.AmbientLight('white', 0.5), new THREE.DirectionalLight().translateZ(10), new Sphere(), new Box(), new Plane());

    this.on('focus', (e) => ((e.target as THREE.Mesh).material as THREE.MeshLambertMaterial).emissive.set(0xcccc00));
    this.on('blur', (e) => ((e.target as THREE.Mesh).material as THREE.MeshLambertMaterial).emissive.set(0));

    this.on(
      [
        'pointerover',
        'pointerout',
        'pointermove',
        'pointerdown',
        'pointerup',
        'pointerintersection',
        'click',
        'dblclick',
        'wheel',
        'focus',
        'blur',
        'keydown',
        'keyup',
        'drag',
        'dragstart',
        'dragend',
        'drop',
        'dragenter',
        'dragleave',
        'dragover',
        'dragcancel',
        'pointerleave',
        'pointerenter',
      ],
      (e) => blink(document.getElementById(e.type), e.target.userData.className)
    );
  }
}

function blink(element: HTMLElement, className: string) {
  clearTimeout((element as any).timer);
  element.className = className;
  (element as any).timer = setTimeout(() => (element.className = 'blink'), 200);
}

let width = window.innerWidth;
let height = window.innerHeight;
let aspect = width / height;
const frustumSize = 50;
const camera = new THREE.OrthographicCamera(0.5 * frustumSize * aspect / - 2, 0.5 * frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2);
camera.translateZ(10);

const scene = new Scene();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', onWindowResize);

const interactionManager = new InteractionManager(renderer, scene, camera);

function animation(time) {
  interactionManager.update();

  time /= 1000;

  const delta = time - scene.totalTime;
  const total = time;
  scene.totalTime = time;
  EventsCache.dispatchEvent(scene, "beforeanimate", { delta, total });
  EventsCache.dispatchEvent(scene, "animate", { delta, total });
  EventsCache.dispatchEvent(scene, "afteranimate", { delta, total });

  renderer.render(scene, camera);
}

function onWindowResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  aspect = width / height;

  renderer.setSize(width, height);

  camera.left = - 0.5 * frustumSize * aspect / 2;
  camera.right = 0.5 * frustumSize * aspect / 2;
  camera.top = frustumSize / 2;
  camera.bottom = - frustumSize / 2;
  camera.updateProjectionMatrix();
}