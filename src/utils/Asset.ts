import { Loader, LoadingManager, Object3D, Scene } from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils';

export type Nodes = { [x: string]: Object3D };

export interface LoadingConfig {
  onProgress?: (ratio: number) => void;
  onError?: (error: unknown) => void;
  /** @internal */ progress?: number;
  /** @internal */ total?: number;
}

export interface Resource {
  loader: typeof Loader<any>;
  paths: (string | NodesConfig)[];
}

export interface NodesConfig {
  path: string;
  getNodes: boolean; // default true
}

export class Asset {
  public static onProgress: (ratio: number) => void;
  public static onError: (error: unknown) => void;
  protected static _loadingManager = new LoadingManager();
  protected static _loaders: { [x: string]: Loader } = {};
  protected static _results: { [x: string]: any } = {};
  protected static _nodes: { [x: string]: Nodes } = {};

  public static get<T>(path: string): T;
  public static get<T>(...path: string[]): T[];
  public static get<T>(args: string | string[]): T | T[] {
    if (typeof args === "string") return this._results[args];

    const ret = [];
    for (const path of args) {
      ret.push(this._results[path]);
    }
    return ret;
  }

  public static getLoader(loaderType: typeof Loader<any>): Loader {
    if (!this._loaders[loaderType.name]) {
      return (this._loaders[loaderType.name] = new loaderType(this._loadingManager));
    }
    return this._loaders[loaderType.name];
  }

  public static getNodes(path: string): Nodes {
    return this._nodes[path];
  }

  public static getNode(path: string, name: string): Object3D {
    return this._nodes[path][name];
  }

  public static getClonedNode(path: string, name: string): Object3D {
    return SkeletonUtils.clone(this.getNode(path, name)); // consider to use only object.clone() if no animations
  }

  public static loadAll(resources: Resource[], config: LoadingConfig = {}): Promise<void[]> {
    const promises: Promise<void>[] = [];
    config.total = 0;
    config.progress = 0;

    for (const resource of resources) {
      this.loadByLoader(resource, promises, config);
    }

    return Promise.all(promises);
  }

  protected static loadByLoader(resource: Resource, promises: Promise<void>[], config: LoadingConfig): void {
    if (resource?.paths?.length > 0) {
      const loader = this.getLoader(resource.loader);

      for (const path of resource.paths) {
        promises.push(this.startLoad(loader, path, config));
      }
    }
  }

  protected static startLoad(loader: Loader, value: string | NodesConfig, config: LoadingConfig): Promise<void> {
    return new Promise<void>((resolve) => {
      const path = (value as NodesConfig).path ?? value as string;
      if (this._results[path]) return resolve();
      const getNodes = (value as NodesConfig).getNodes ?? true;
      config.total++;

      loader.load(path, (result) => {
        this._results[path] = result;

        if (getNodes) {
          this.generateNodes(path, result);
        }

        config.onProgress(++config.progress / config.total);
        resolve();
      }, undefined, config.onError);
    });
  }

  protected static generateNodes(path: string, resource: any): void {
    const nodes = this._nodes[path] = {};
    const nameCollision: { [x: string]: number } = {};

    if ((resource as Object3D).isObject3D) return this.generateNodesFromObject(resource, nodes, nameCollision);

    if ((resource.scenes as Scene[])?.at(0)?.isObject3D) { // scenes is from GLTF
      for (const scene of resource.scenes) {
        this.generateNodesFromObject(scene, nodes, nameCollision);
      }
    }
  }

  protected static generateNodesFromObject(object: Object3D, nodes: Nodes, nameCollision: { [x: string]: number }): void {
    const name = this.getName(object, nameCollision);
    nodes[name] = object;

    for (const child of object.children) {
      this.generateNodesFromObject(child, nodes, nameCollision);
    }
  }

  protected static getName(object: Object3D, nameCollision: { [x: string]: number }): string {
    const key = object.name;

    if (nameCollision[key] === undefined) {
      nameCollision[key] = 0;
      return key;
    }

    return `${key}_${++nameCollision[key]}`;
  }
}
