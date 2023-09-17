import { PlaneGeometry, Vector3, MeshPhongMaterial, DoubleSide } from 'three';
import { InstancedMesh2, InstancedMeshEntity } from '@three.ez/main';

class Particle extends InstancedMeshEntity {
  constructor(parent: InstancedMesh2, index: number) {
    super(parent, index, Math.random() * 0xffffff);
    const rotationAxis = new Vector3().randomDirection();
    this.rotateOnWorldAxis(rotationAxis, Math.random() * Math.PI);
    this.scale.setScalar(Math.random() * 0.7);

    const angleY = Math.random() * Math.PI * 2;
    const angleX = Math.random() * Math.PI * 2;
    const radius = Math.random() + 0.3;
    const multiplier = Math.random() * 2 + 1;

    this.on('animate', (e) => {
      this.position.setFromSphericalCoords(radius, angleX + e.total / multiplier, angleY + e.total / multiplier);
      this.rotateOnWorldAxis(rotationAxis, e.delta * multiplier);
      this.updateMatrix();
    });
  }
}

export class Particles extends InstancedMesh2 {
  constructor(count: number) {
    super(new PlaneGeometry(0.05, 0.05), new MeshPhongMaterial({ side: DoubleSide }), count, Particle, true);
    this.interceptByRaycaster = false;
  }
}
