import { BufferGeometry, Camera, Group, Material, Mesh, Object3D, WebGLRenderer } from "three";
import { Scene as SceneBase } from "three/index";
import { Cursor, Events, InteractionEvents, IntersectionExt, Object3DExtPrototype, SceneExtPrototype, Tween } from "../index";

export class Scene extends SceneBase implements Object3DExtPrototype, SceneExtPrototype {
    continousRaycasting: boolean;
    continousRaycastingDropTarget: boolean;
    intersections: IntersectionExt[];
    intersectionsDropTarget: IntersectionExt[];
    focusedObject: Object3D;
    blurOnClickOut: boolean;
    timeScale: number;
    totalTime: number;
    activeSmartRendering(): this;
    focus(target?: Object3D): void;
    enabled: boolean;
    interceptByRaycaster: boolean;
    hitboxes: Mesh[];
    focusable: boolean;
    draggable: boolean;
    findDropTarget: boolean;
    scene: Scene;
    cursor: Cursor;
    cursorDrag: Cursor;
    cursorDrop: Cursor;
    needsRender: boolean;
    get hovered(): boolean;
    get focused(): boolean;
    get clicking(): boolean;
    get dragging(): boolean;
    get enabledState(): boolean;
    get firstFocusable(): Object3D;
    applyFocus(): void;
    applyBlur(): void;
    on<K extends keyof Events>(type: K | K[], listener: (args?: Events[K]) => void): (args?: Events[K]) => void;
    hasEvent<K extends keyof Events>(type: K, listener: (args?: Events[K]) => void): boolean;
    off<K extends keyof Events>(type: K, listener: (args?: Events[K]) => void): void;
    trigger<K extends keyof Events>(type: K, args?: Events[K]): void;
    triggerAncestor<K extends keyof InteractionEvents>(type: K, args?: InteractionEvents[K]): void;
    setManualDetectionMode(): void;
    detectChanges(recursive?: boolean): void;
    bindProperty<T extends keyof this>(property: T, getCallback: () => this[T], renderOnChange?: boolean): this;
    unbindProperty<T extends keyof this>(property: T): this;
    tween(): Tween<Scene>;
    override traverse(callback: (object: Object3D) => any): void;
    override traverseAncestors(callback: (object: Object3D) => any): void;
    override traverseVisible(callback: (object: Object3D) => any): void;
    override getObjectById(id: number): Object3D;
    override getObjectByName(name: string): Object3D;
    override getObjectByProperty(name: string, value: any): Object3D;
    override getObjectsByProperty(name: string, value: any): Object3D[];
    override onBeforeRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: BufferGeometry, material: Material, group: Group) => void;
    override onAfterRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: BufferGeometry, material: Material, group: Group) => void;
}
