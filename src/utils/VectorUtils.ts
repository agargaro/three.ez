import { Object3D, Vector2, Vector3 } from 'three';

type VectorObject3D = Vector2 | Vector3 | Object3D;
type ObjVec3 = Vector3 | Object3D;

const TEMP: Vector3[] = [...Array(4)].map(() => new Vector3());
const ORIGIN = new Vector3();

export class VectorUtils {
  public static DEFAULT_NORMAL = new Vector3(0, 0, 1);

  private static getPositionFromObject3D(item: VectorObject3D): Vector3 {
    return (item as Object3D).isObject3D ? (item as Object3D).position : (item as Vector3);
  }

  private static getPositionsFromObject3D(items: VectorObject3D[]): Vector3[] {
    const ret: Vector3[] = [];
    for (const item of items) {
      ret.push(this.getPositionFromObject3D(item));
    }
    return ret;
  }

  public static computeSign(point: Vector3, origin: Vector3, normal: Vector3): number {
    return Math.sign(TEMP[0].subVectors(point, origin).dot(normal));
  }

  public static haveSameDirection(v1: Vector3, v2: Vector3, tolerance = 10 ** -2): boolean {
    return TEMP[0].copy(v1).normalize().dot(TEMP[1].copy(v2).normalize()) > 1 - tolerance;
  }

  public static haveOppositeDirection(v1: Vector3, v2: Vector3, tolerance = 10 ** -2): boolean {
    return TEMP[0].copy(v1).normalize().dot(TEMP[1].copy(v2).normalize()) < tolerance - 1;
  }

  public static perpendicular(dir: Vector3, target = new Vector3(), normal = this.DEFAULT_NORMAL) {
    return target.crossVectors(dir, normal);
  }

  public static perpendicularSigned(dir: Vector3, referencePoint: Vector3, target = new Vector3(), normal = this.DEFAULT_NORMAL) {
    target.crossVectors(dir, normal);
    return this.computeSign(referencePoint, ORIGIN, target) !== 1 ? target : target.multiplyScalar(-1);
  }

  public static perpendicularByPoints(p1: ObjVec3, p2: ObjVec3, target = new Vector3(), normal = this.DEFAULT_NORMAL) {
    const [p1c, p2c] = this.getPositionsFromObject3D([p1, p2]);
    return target.crossVectors(TEMP[0].subVectors(p1c, p2c), normal);
  }

  public static perpendicularSignedByPoints(p1: ObjVec3, p2: ObjVec3, refPoint: ObjVec3, target = new Vector3(), normal = this.DEFAULT_NORMAL) {
    const [p1c, p2c, r] = this.getPositionsFromObject3D([p1, p2, refPoint]);
    target.crossVectors(TEMP[0].subVectors(p1c, p2c), normal);
    return this.computeSign(r, p1c, target) !== 1 ? target : target.multiplyScalar(-1);
  }

  public static bisector(v1: Vector3, v2: Vector3, target = new Vector3()) {
    TEMP[0].copy(v1).normalize();
    TEMP[1].copy(v2).normalize();
    return target.addVectors(TEMP[0], TEMP[1]).normalize();
  }

  public static bisectorByPoints(p1: ObjVec3, p2: ObjVec3, center: ObjVec3, target = new Vector3()) {
    const [p1c, p2c, c] = this.getPositionsFromObject3D([p1, p2, center]);
    return this.bisector(TEMP[2].subVectors(p1c, c), TEMP[3].subVectors(p2c, c), target);
  }

  public static arePointsOnSameSide(origin: ObjVec3, dir: Vector3, points: ObjVec3[]): boolean {
    const [o, ...p] = this.getPositionsFromObject3D([origin, ...points]);
    const sign = this.computeSign(p[0], o, dir);
    for (let i = 1; i < points.length; i++) {
      if (sign !== this.computeSign(p[i], o, dir)) return false;
    }
    return true;
  }

  public static arePointsOnSameSideByPoints(p1: ObjVec3, p2: ObjVec3, points: ObjVec3[], normal = this.DEFAULT_NORMAL): boolean {
    const [p1c, p2c, ...p] = this.getPositionsFromObject3D([p1, p2, ...points]);
    const dir = this.perpendicularByPoints(p1c, p2c, TEMP[0], normal);
    const sign = this.computeSign(p[0], p1c, dir);
    for (let i = 1; i < points.length; i++) {
      if (sign !== this.computeSign(p[i], p1c, dir)) return false;
    }
    return true;
  }

  // normal must be normalized
  public static angleSignedFromOrigin(a: Vector3, b: Vector3, normal = this.DEFAULT_NORMAL): number {
    return Math.atan2(TEMP[0].crossVectors(a, b).dot(normal), a.dot(b));
  }

  public static angleSignedByPoints(p1: ObjVec3, p2: ObjVec3, center: ObjVec3, normal = this.DEFAULT_NORMAL): number {
    const [p1c, p2c, c] = this.getPositionsFromObject3D([p1, p2, center]);
    const a = TEMP[0].subVectors(p1c, c);
    const b = TEMP[1].subVectors(p2c, c);
    return Math.atan2(TEMP[2].crossVectors(a, b).dot(normal), a.dot(b));
  }

  public static projectOnLine(point: ObjVec3, l1: ObjVec3, l2: ObjVec3, target = new Vector3()): Vector3 {
    const [vc, p1c, p2c] = this.getPositionsFromObject3D([point, l1, l2]);
    return target.subVectors(vc, p1c).projectOnVector(TEMP[0].subVectors(p1c, p2c)).add(p1c);
  }

  // https://paulbourke.net/geometry/pointlineplane/
  public static lineIntersection2D(a1: VectorObject3D, a2: VectorObject3D, b1: VectorObject3D, b2: VectorObject3D, target = new Vector3()): Vector3 {
    const [a1c, a2c, b1c, b2c] = this.getPositionsFromObject3D([a1, a2, b1, b2]);
    const denominator = (b2c.y - b1c.y) * (a2c.x - a1c.x) - (b2c.x - b1c.x) * (a2c.y - a1c.y);
    if (denominator === 0) return; // parallel
    let ua = ((b2c.x - b1c.x) * (a1c.y - b1c.y) - (b2c.y - b1c.y) * (a1c.x - b1c.x)) / denominator;
    return target.set(a1c.x + ua * (a2c.x - a1c.x), a1c.y + ua * (a2c.y - a1c.y), 0);
  }

  // https://paulbourke.net/geometry/pointlineplane/
  public static segmentIntersection2D(a1: VectorObject3D, a2: VectorObject3D, b1: VectorObject3D, b2: VectorObject3D, target = new Vector3()): Vector3 {
    const [a1c, a2c, b1c, b2c] = this.getPositionsFromObject3D([a1, a2, b1, b2]);
    const denominator = (b2c.y - b1c.y) * (a2c.x - a1c.x) - (b2c.x - b1c.x) * (a2c.y - a1c.y);
    if (denominator === 0) return; // parallel
    let ua = ((b2c.x - b1c.x) * (a1c.y - b1c.y) - (b2c.y - b1c.y) * (a1c.x - b1c.x)) / denominator;
    let ub = ((a2c.x - a1c.x) * (a1c.y - b1c.y) - (a2c.y - a1c.y) * (a1c.x - b1c.x)) / denominator;
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return;
    return target.set(a1c.x + ua * (a2c.x - a1c.x), a1c.y + ua * (a2c.y - a1c.y), 0);
  }

  // https://paulbourke.net/geometry/pointlineplane/
  public static lineIntersection3D(p1: ObjVec3, p2: ObjVec3, p3: ObjVec3, p4: ObjVec3, target = new Vector3(), tolerance = 10 ** -10): Vector3 {
    const [p1c, p2c, p3c, p4c] = this.getPositionsFromObject3D([p1, p2, p3, p4]);

    const p13 = TEMP[0].subVectors(p1c, p3c);
    const p43 = TEMP[1].subVectors(p4c, p3c);

    if (p43.lengthSq() < tolerance) return;
    const p21 = TEMP[2].subVectors(p2c, p1c);
    if (p21.lengthSq() < tolerance) return;

    const d1343 = p13.x * p43.x + p13.y * p43.y + p13.z * p43.z;
    const d4321 = p43.x * p21.x + p43.y * p21.y + p43.z * p21.z;
    const d1321 = p13.x * p21.x + p13.y * p21.y + p13.z * p21.z;
    const d4343 = p43.x * p43.x + p43.y * p43.y + p43.z * p43.z;
    const d2121 = p21.x * p21.x + p21.y * p21.y + p21.z * p21.z;

    const denom = d2121 * d4343 - d4321 * d4321;
    if (Math.abs(denom) < tolerance) return;

    const numer = d1343 * d4321 - d1321 * d4343;

    const mua = numer / denom;
    const Pa = target.set(p1c.x + mua * p21.x, p1c.y + mua * p21.y, p1c.z + mua * p21.z);

    // const mub = (d1343 + d4321 * mua) / d4343;
    // const Pb = new Vector3(p3.x + mub * p43.x, p3.y + mub * p43.y, p3.z + mub * p43.z);

    return Pa;
  }
}
