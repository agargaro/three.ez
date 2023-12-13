import { OrthographicCamera } from "three";

/**
 * Extends the OrthographicCamera to automatically resize based on a fixed width or height dimension.
 */
export class OrthographicCameraAuto extends OrthographicCamera {
    private _size: number;
    private _fixedWidth: boolean;
    private _width = -1;
    private _height = -1;

    /**
     * Gets or sets the fixed width or height dimension based on the 'fixedWidth' property.
     */
    public get size(): number { return this._size }
    public set size(value: number) {
        this._size = value;
        this.update();
    }

    /**
     * Determines whether the 'size' property refers to the width (true) or height (false).
     */
    public get fixedWidth(): boolean { return this._fixedWidth }
    public set fixedWidth(value: boolean) {
        this._fixedWidth = value;
        this.update();
    }

    /**
     * @param size Fixed width or height dimension based on the 'fixedWidth' property. Default `2`.
     * @param fixedWidth If true, the 'size' property will refer to the width. If not, to the height. Default `true`.
     * @param near Camera frustum near plane. Default `0.1`.
     * @param far Camera frustum far plane. Default `2000`.
     */
    constructor(size = 2, fixedWidth = true, near?: number, far?: number) {
        super(-1, 1, 1, -1, near, far);
        this._size = size;
        this._fixedWidth = fixedWidth;

        this.on("viewportresize", (e) => {
            this._width = e.width;
            this._height = e.height;
            this.update();
        });
    }

    private update(): void {
        const halfSize = 0.5 * this._size;

        if (this._fixedWidth) {
            const aspect = this._height / this._width;
            this.left = -halfSize;
            this.right = halfSize;
            this.top = halfSize  * aspect;
            this.bottom = -halfSize  * aspect;
        } else {
            const aspect = this._width / this._height;
            this.left = -halfSize * aspect;
            this.right = halfSize * aspect;
            this.top = halfSize;
            this.bottom = -halfSize;
        }

        this.updateProjectionMatrix();
    }
}
