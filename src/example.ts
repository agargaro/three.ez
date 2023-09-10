import { Scene as SceneBase, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
import { Main as MainBase, PerspectiveCameraAuto } from './index';

class DraggableBox extends Mesh {
  constructor() {
    super(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());
    this.draggable = true;
    this.on('animate', (e) => this.rotateX(e.delta).rotateY(e.delta * 2));
  }
}

class Scene extends SceneBase {
  constructor() {
    super();
    this.add(new DraggableBox());
  }
}

class Main extends MainBase {
  constructor() {
    super();
    this.createView({ scene: new Scene(), camera: new PerspectiveCameraAuto(70).translateZ(1) });
  }
}

const main = new Main();
