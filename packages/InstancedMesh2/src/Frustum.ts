import { Matrix4, Plane, WebGLCoordinateSystem, WebGPUCoordinateSystem } from "three";

/** @internal @LASTREV 162 Frustum */
export class Frustum {
  public planes: Plane[];

  constructor(p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane()) {
    this.planes = [p0, p1, p2, p3, p4, p5];
  }

  public setFromProjectionMatrix(m: Matrix4, coordinateSystem = WebGLCoordinateSystem): this {
    const planes = this.planes;
    const me = m.elements;
    const me0 = me[0], me1 = me[1], me2 = me[2], me3 = me[3];
    const me4 = me[4], me5 = me[5], me6 = me[6], me7 = me[7];
    const me8 = me[8], me9 = me[9], me10 = me[10], me11 = me[11];
    const me12 = me[12], me13 = me[13], me14 = me[14], me15 = me[15];

    planes[0].setComponents(me3 - me0, me7 - me4, me11 - me8, me15 - me12).normalize();
    planes[1].setComponents(me3 + me0, me7 + me4, me11 + me8, me15 + me12).normalize();
    planes[2].setComponents(me3 + me1, me7 + me5, me11 + me9, me15 + me13).normalize();
    planes[3].setComponents(me3 - me1, me7 - me5, me11 - me9, me15 - me13).normalize();
    planes[4].setComponents(me3 - me2, me7 - me6, me11 - me10, me15 - me14).normalize();

    if (coordinateSystem === WebGLCoordinateSystem) {
      planes[5].setComponents(me3 + me2, me7 + me6, me11 + me10, me15 + me14).normalize();
    } else if (coordinateSystem === WebGPUCoordinateSystem) {
      planes[5].setComponents(me2, me6, me10, me14).normalize();
    } else {
      throw new Error('Frustum.setFromProjectionMatrix(): Invalid coordinate system: ' + coordinateSystem);
    }

    return this;
  }

  /** returns -1 = OUT, 0 = IN, > 0 = INTERSECT. */
  public intesectsBoxMask(box: Float32Array, mask: number): number {
    const planes = this.planes;
    let xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number;

    for (let i = 0; i < 6; i++) {
      if ((mask & (0b100000 >> i)) === 0) continue; // if byte i is 0

      const planeNormal = planes[i].normal;
      const planeConstant = planes[i].constant;
      const px = planeNormal.x, py = planeNormal.y, pz = planeNormal.z;

      if (px > 0) {
        xMin = box[3];
        xMax = box[0];
      } else {
        xMin = box[0];
        xMax = box[3];
      }

      if (py > 0) {
        yMin = box[4];
        yMax = box[1];
      } else {
        yMin = box[1];
        yMax = box[4];
      }

      if (pz > 0) {
        zMin = box[5];
        zMax = box[2];
      } else {
        zMin = box[2];
        zMax = box[5];
      }

      if ((px * xMin) + (py * yMin) + (pz * zMin) < -planeConstant) {
        return -1; // is out
      }

      if ((px * xMax) + (py * yMax) + (pz * zMax) > -planeConstant) {
        mask ^= 0b100000 >> i; // is full in, set byte i to 0
      }
    }

    return mask;
  }
}
