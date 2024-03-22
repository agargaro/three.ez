import { Object3D } from "three";

/** @internal Override compose method because is called for every rendered object and can be performance critical after Vector3 patch. */
export function applyMatrix4Patch(parent: Object3D): void {
    parent.matrix.compose = function (position: any, quaternion: any, scale: any) {
        const te = this.elements;

        const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
        const x2 = x + x, y2 = y + y, z2 = z + z;
        const xx = x * x2, xy = x * y2, xz = x * z2;
        const yy = y * y2, yz = y * z2, zz = z * z2;
        const wx = w * x2, wy = w * y2, wz = w * z2;

        const sx = scale._x, sy = scale._y, sz = scale._z;

        te[0] = (1 - (yy + zz)) * sx;
        te[1] = (xy + wz) * sx;
        te[2] = (xz - wy) * sx;
        te[3] = 0;

        te[4] = (xy - wz) * sy;
        te[5] = (1 - (xx + zz)) * sy;
        te[6] = (yz + wx) * sy;
        te[7] = 0;

        te[8] = (xz + wy) * sz;
        te[9] = (yz - wx) * sz;
        te[10] = (1 - (xx + yy)) * sz;
        te[11] = 0;

        te[12] = position._x;
        te[13] = position._y;
        te[14] = position._z;
        te[15] = 1;

        return this;
    };
}
