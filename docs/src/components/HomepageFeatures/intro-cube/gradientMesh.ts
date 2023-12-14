import { Mesh, PlaneGeometry } from 'three';
import { GradientMaterial } from './gradientMaterial';

const meshCount = 192;

export class Gradient extends Mesh {
  public static material = new GradientMaterial();
  public static geometry = new PlaneGeometry(10, 10, 1, meshCount);

  constructor() {
    super(Gradient.geometry, Gradient.material);
    this.translateZ(-10)
  }
}
