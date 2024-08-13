import { Scene, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
import { Main, PerspectiveCameraAuto } from '../src/index.js';

const box = new Mesh(new BoxGeometry(0.1, 0.1, 0.1), new MeshNormalMaterial());
box.draggable = true;
box.on('animate', (e) => box.rotateX(e.delta).rotateY(e.delta * 2));
box.on(['pointerover', 'pointerout'], function (e) {
    this.tween('id').to(500, { scale: e.type === 'pointerover' ? 1.5 : 1 }, { easing: 'easeOutElastic' }).start();
});

const scene = new Scene().add(box);

const main = new Main();
main.createView({ scene, camera: new PerspectiveCameraAuto(70).translateZ(1) });