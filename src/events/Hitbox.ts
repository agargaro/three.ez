import { BufferGeometry, Mesh, MeshBasicMaterial } from "three";

const sharedMaterial = new MeshBasicMaterial();

/**
 * Hitbox for collision detection.
 */
export class Hitbox extends Mesh {
    constructor(geometry: BufferGeometry) {
        super(geometry, sharedMaterial);
    }
}
