import { Particles } from './particles';
import { Face } from '../face';
import { Text } from './text';

export class Intro extends Face {
  constructor() {
    super(0, 'blue');
    this.add(new Text('three.ez'), new Particles(500));
  }
}
