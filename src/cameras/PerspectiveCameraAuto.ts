import { PerspectiveCamera } from "three";

/**
 * Extends the PerspectiveCamera to automatically adjust its aspect ratio on renderer resize.
 */
export class PerspectiveCameraAuto extends PerspectiveCamera {
    
    /**
     * @param fov Camera frustum vertical field of view in degrees. Default `50`.
     * @param near Camera frustum near plane distance. Default `0.1`.
     * @param far Camera frustum far plane distance. Default `2000`.
     */
    constructor(fov?: number, near?: number, far?: number) {
        super(fov, undefined, near, far);
        
        this.on("rendererresize", (e) => {
            this.aspect = e.width / e.height;
            this.updateProjectionMatrix();
        });
    }
}
