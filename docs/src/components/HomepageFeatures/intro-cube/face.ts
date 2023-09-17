import { Mesh, MeshPhongMaterial, PlaneGeometry, Vector3, ReplaceStencilOp, ColorRepresentation, Material, EqualStencilFunc, Object3D } from 'three';
import { Cube } from './cube';

export abstract class Face extends Mesh {
  public static yAxis = new Vector3(0, 1, 0);
  public declare parent: Cube;
  public declare material: MeshPhongMaterial;
  protected step: number;

  constructor(step: number, color: ColorRepresentation) {
    super(new PlaneGeometry(1, 1), new MeshPhongMaterial({ color }));
    this.step = step;
    this.initStencil();
    this.rotateOnWorldAxis(Face.yAxis, (Math.PI / 2) * step);
    this.translateZ(0.5);
    this.bindProperty('visible', () => (!this.parent?.changing ? this.parent?.currentStep == step : this.parent?.currentStep >= step - 1 && this.parent?.currentStep <= step + 1));
  }

  public override add(...object: Object3D[]): this {
    super.add(...object);
    this.applyStencilRef(object);
    return this;
  }

  private initStencil(): void {
    this.material.depthWrite = false;
    this.material.stencilWrite = true;
    this.material.stencilRef = this.step + 1;
    this.material.stencilZPass = ReplaceStencilOp;
  }

  private applyStencilRef(objects: Object3D[]) {
    for (const obj of objects) {
      if ((obj as Mesh).isMesh) {
        const material = (obj as Mesh).material as Material;
        material.stencilWrite = true;
        material.stencilRef = this.step + 1;
        material.stencilFunc = EqualStencilFunc;
      }
    }
  }
}
