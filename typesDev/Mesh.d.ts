import { BufferGeometry, Material, Object3D, Scene, WebGLRenderer } from "three";
import { Mesh as MeshBase, Object3D as Object3DBase } from "three/index";
import { BindingCallback, Cursor, Events, EventsDispatcher, InteractionEvents, Object3DExtPrototypeInternal, Tween } from "../src/index";

export class Mesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends MeshBase<TGeometry, TMaterial> implements Object3DExtPrototypeInternal {
    __baseVisibleDescriptor: PropertyDescriptor;
    __isDropTarget: boolean;
    __boundCallbacks: BindingCallback[];
    __manualDetection: boolean;
    __eventsDispatcher: EventsDispatcher;
    __vec3Patched: boolean;
    __rotationPatched: boolean;
    __smartRenderingPatched: boolean;
    __enabled: boolean;
    __visible: boolean;
    __onChangeBaseQuat: () => void;
    __onChangeBaseEuler: () => void;
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
    hovered: boolean;
    focused: boolean;
    clicking: boolean;
    dragging: boolean;
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
    tween<T extends Object3D = Mesh>(): Tween<T>;
    override parent: Object3D;
    override children: Object3D[];
    override add(...object: (Object3DBase | Object3D)[]): this;
    override remove(...object: (Object3DBase | Object3D)[]): this;
    override attach(object: Object3DBase | Object3D): this;
    override traverse(callback: (object: Object3D) => any): void;
    override traverseAncestors(callback: (object: Object3D) => any): void;
    override traverseVisible(callback: (object: Object3D) => any): void;
    override getObjectById(id: number): Object3D;
    override getObjectByName(name: string): Object3D;
    override getObjectByProperty(name: string, value: any): Object3D;
    override getObjectsByProperty(name: string, value: any): Object3D[];
    override onBeforeRender: (renderer: WebGLRenderer, scene: any, camera: any, geometry: BufferGeometry, material: Material, group: any) => void;
    override onAfterRender: (renderer: WebGLRenderer, scene: any, camera: any, geometry: BufferGeometry, material: Material, group: any) => void;
}
