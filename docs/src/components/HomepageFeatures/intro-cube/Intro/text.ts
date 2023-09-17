import { Mesh, MeshPhongMaterial } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

export class Text extends Mesh {
  private static loader = new FontLoader();
  private static fontUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/optimer_regular.typeface.json';

  constructor(text: string) {
    super(undefined, new MeshPhongMaterial({ color: 0xffff77 }));
    this.interceptByRaycaster = false;

    Text.loader.load(Text.fontUrl, (font) => {
      this.geometry = new TextGeometry(text, { font, size: 0.15, height: 0.1 });
      this.geometry.computeBoundingBox();
      const centerX = -0.5 * (this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x);
      const centerY = -0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y);
      this.position.set(centerX, centerY, 0);

      this.on('animate', (e) => {
        this.rotation.y = Math.sin(e.total) * 0.2;
        this.rotation.x = Math.sin(e.total * 1.5) * 0.2;
      });
    });
  }
}
