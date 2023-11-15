import { Mesh, BoxGeometry, SphereGeometry, PlaneGeometry, MeshLambertMaterial, Scene as SceneBase, DirectionalLight, AmbientLight } from 'three';
import { Main, OrthographicCameraAuto } from '../src';

class Box extends Mesh {
  constructor() {
    super(new BoxGeometry(5, 5, 5), new MeshLambertMaterial({ color: 0xff6666 }));
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

class Sphere extends Mesh {
  constructor() {
    super(new SphereGeometry(2), new MeshLambertMaterial({ color: 0x6666ff }));
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

class Plane extends Mesh {
  constructor() {
    super(new PlaneGeometry(10, 15), new MeshLambertMaterial({ color: 0x66ff66 }));
    this.userData.className = 'blink active-plane';
    this.translateX(-10);

    this.on(['dragenter', 'dragleave', 'drop', 'dragcancel'], (e) => {
      (this.material as MeshLambertMaterial).emissive.set(e.type === 'dragenter' ? 0xcccc00 : 0);
    });

    // These events do not propagate to parents
    this.on(['focusin', 'focusout', 'pointerenter', 'pointerleave'], (e) => blink(document.getElementById(e.type), this.userData.className));
  }
}

class Scene extends SceneBase {
  constructor() {
    super();
    this.activeSmartRendering(); // render the frame only if it detects changes.
    this.userData.className = 'blink active-scene';
    this.continuousRaycasting = true;
    this.continuousRaycastingDropTarget = true;
    this.add(new AmbientLight('white', 0.5), new DirectionalLight().translateZ(10), new Sphere(), new Box(), new Plane());

    this.on('focus', (e) => ((e.target as Mesh).material as MeshLambertMaterial).emissive.set(0xcccc00));
    this.on('blur', (e) => ((e.target as Mesh).material as MeshLambertMaterial).emissive.set(0));

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

const main = new Main({ showStats: false, fullscreen: false, rendererParameters: { canvas: document.getElementById('myCanvas') } });
main.createView({ scene: new Scene(), camera: new OrthographicCameraAuto(50).translateZ(10) });

function blink(element: HTMLElement, className: string) {
  clearTimeout((element as any).timer);
  element.className = className;
  (element as any).timer = setTimeout(() => (element.className = 'blink'), 200);
}
