import { PerspectiveCamera } from "three";

/**
 * Perspective camera that resizes automatically.
 */
export class PerspectiveCameraAuto extends PerspectiveCamera {
    
    /**
     * @param fov Camera frustum vertical field of view. Default `50`.
     * @param near Camera frustum near plane. Default `0.1`.
     * @param far Camera frustum far plane. Default `2000`.
     */
    constructor(fov?: number, near?: number, far?: number) {
        super(fov, undefined, near, far);
        
        this.on("rendererresize", (e) => {
            this.aspect = e.width / e.height;
            this.updateProjectionMatrix();
        });
    }
}
