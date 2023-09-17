import { Face } from '../face';
import { DraggableBox } from './draggable-box';

export class DragDrop extends Face {
  constructor() {
    super(1, 'green');
    this.add(new DraggableBox());
  }
}
