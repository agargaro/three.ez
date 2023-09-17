import { BoxGeometry, Mesh, MeshNormalMaterial } from 'three';

export class DraggableBox extends Mesh {
  constructor() {
    super(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());
    this.draggable = true;
    this.on('animate', (e) => this.rotateX(e.delta).rotateY(e.delta * 2));
  }
}
