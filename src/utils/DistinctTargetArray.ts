import { Object3D } from "three";

/** @internal */
export class DistinctTargetArray<T extends Object3D = Object3D> {
    private _set = new Set();
    public data: T[] = [];

    public push(target: T): void {
        if (!this._set.has(target.id)) {
            this._set.add(target.id);
            this.data.push(target);
        }
    }

    public has(target: T): boolean {
        return this._set.has(target.id);
    }

    public remove(target: T): void {
        if (this.has(target)) {
            const index = this.data.indexOf(target);
            if (index > -1) {
                this.data.splice(index, 1);
            }
            this._set.delete(target.id);
        }
    }

    public clear(): void {
        this._set.clear();
        this.data = [];
    }
}
