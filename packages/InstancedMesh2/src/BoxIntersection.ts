export function intersectRayBox(box: Float32Array, origin: Float32Array, dirInv: Float32Array, sign: Uint8Array, distance: number): boolean {
    let tmin = 0, tmax = Infinity;

    for (let axis = 0; axis < 3; axis++) {
        const bmin = box[sign[axis] * 3 + axis];
        const bmax = box[(sign[axis] + 1) % 2 * 3 + axis];

        const dmin = (bmin - origin[axis]) * dirInv[axis];
        const dmax = (bmax - origin[axis]) * dirInv[axis];

        tmin = dmin > tmin ? dmin : tmin;
        tmax = dmax < tmax ? dmax : tmax;
    }

    return tmin <= tmax && distance >= tmin;
}

// const bmin = box[sign[d]][d]; si potrebbe ricreare la struttura dati in questo modo