import { Scene, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
import { PerspectiveCameraAuto, Main } from '../src';

const box = new Mesh(new BoxGeometry(0.1, 0.1, 0.1), new MeshNormalMaterial());
box.draggable = true;
box.on('animate', (e) => box.rotateX(e.delta).rotateY(e.delta * 2));
const scene = new Scene().add(box);
const main = new Main();
main.createView({ scene, camera: new PerspectiveCameraAuto(70).translateZ(1) });
