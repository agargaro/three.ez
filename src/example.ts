import { Scene as SceneBase, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';
import { Main as MainBase, PerspectiveCameraAuto } from './index';

// This file is excluded from the tsconfig.json file. In order to work with this example, remove that line. 

class DraggableBox extends Mesh {
  constructor() {
    super(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());
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

(window as any).main = new Main();
