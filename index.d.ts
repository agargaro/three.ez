import { Object3DExtPrototypeInternal } from "./src/patch/Object3D";
import { SceneExtPrototypeInternal } from "./src/patch/Scene";

declare module 'three/src/core/Object3D' {
    export interface Object3D extends Object3DExtPrototypeInternal { }
}

declare module 'three/src/scenes/Scene' {
    export interface Scene extends SceneExtPrototypeInternal { }
}
