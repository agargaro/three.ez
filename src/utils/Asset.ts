import { Loader } from 'three';

/**
 * Configuration options for resource loading.
 */
export interface LoadingConfig {
  /**
   * A callback function for reporting progress during resource loading.
   * This function is called with a ratio (0 to 1) to indicate the loading progress.
   */
  onProgress?: (ratio: number) => void;
  /**
   * A callback function for handling errors during resource loading.
   * This function is called with an `error` object in case of loading errors.
   */
  onError?: (error: unknown) => void;
  /** @internal */ progress?: number;
  /** @internal */ total?: number;
}

/**
 * An interface representing a resource, specifying the loader type and paths to be loaded.
 */
export interface Resource {
  /**
   * The type of loader to use for this resource.
   */
  loader: typeof Loader<any, any>;
  /**
   * An array of resource paths or configurations to be loaded by the loader.
   */
  paths: (string | ResourceConfig) | (string | ResourceConfig)[];
}

/**
 * An interface representing the configuration of a resource, including its path and optional callbacks.
 */
export interface ResourceConfig {
  /**
   * The path to the resource that needs to be loaded.
   */
  path: string;
  /**
   * A callback function to be called when the resource is successfully loaded.
   */
  onLoad: (result: unknown) => void;
}


/**
 * The Asset class is a manager for loading and handling resources in a scene.
 */
export class Asset {
  /**
   * Default callback function for reporting progress during resource loading.
   * This function is called with a ratio (0 to 1) to indicate the loading progress.
   */
  public static onProgress: (ratio: number) => void;
  /**
   * Default callback function for handling errors during resource loading.
   * This function is called with an `error` object in case of loading errors.
   */
  public static onError: (error: unknown) => void;
  protected static _loaders: { [x: string]: Loader } = {};
  protected static _results: { [x: string]: any } = {};
  protected static _pending: Resource[] = [];

  /**
   * Get a previously loaded result object for a specific path.
   * @param path The path of the resource.
   * @returns A previously loaded result object.
   */
  public static get<T>(path: string): T;
  /**
   * Get a list of previously loaded result objects for a series of specific paths.
   * @param path An array of resource paths.
   * @returns An array of previously loaded result objects.
   */
  public static get<T>(...path: string[]): T[];
  public static get<T>(args: string | string[]): T | T[] {
    if (typeof args === "string") return this._results[args];

    const ret = [];
    for (const path of args) {
      ret.push(this._results[path]);
    }
    return ret;
  }

  /**
   * Get a specific loader based on the resource type.
   * @param loaderType The desired loader type.
   * @returns The loader associated with the resource type.
   */
  public static getLoader<T extends Loader>(loaderType: typeof Loader<any>): T {
    if (!this._loaders[loaderType.name]) {
      this._loaders[loaderType.name] = new loaderType();
    }
    return this._loaders[loaderType.name] as T;
  }

  /**
   * Load a resource using a specified loader type and path.
   * @param loaderType The type of loader to use for loading the resource.
   * @param path The path to the resource to be loaded.
   * @param onProgress (optional) A callback function to report loading progress with a ProgressEvent.
   * @returns A Promise that resolves with the loaded resource when loading is complete.
   */
  public static load<T>(loaderType: typeof Loader<any>, path: string, onProgress?: (event: ProgressEvent) => void): Promise<T> {
    return new Promise<T>((resolve) => {
      if (this._results[path]) return resolve(this._results[path]);
      const loader = this.getLoader(loaderType);
      loader.load(path, (result) => {
        this._results[path] = result;
        resolve(result as T);
      }, onProgress);
    });
  }

  /**
   * Preload resources for future use.
   * @param loader The loader type to be used for preloading.
   * @param paths An array of resource paths or configurations to preload.
   */
  public static preload(loader: typeof Loader<any>, paths: (string | ResourceConfig) | (string | ResourceConfig)[]): void {
    this._pending.push({ loader, paths });
  }

  /**
   * Preload all pending resources and return a promise that resolves when all resources are loaded.
   * @param config Optional configuration for the loading process.
   * @returns A promise that resolves when all pending resources are loaded.
   */
  public static preloadAllPending(config: LoadingConfig = {}): Promise<void[]> {
    const promise = this.loadAll(config, ...this._pending);
    this._pending = [];
    return promise;
  }

  /**
   * Load all specified resources and return a promise that resolves when all resources are loaded.
   * @param config Configuration for the loading process.
   * @param resources An array of resource objects to load.
   * @returns A promise that resolves when all resources are loaded.
   */
  public static loadAll(config: LoadingConfig = {}, ...resources: Resource[]): Promise<void[]> {
    const promises: Promise<void>[] = [];
    config.onProgress ??= this.onProgress;
    config.onError ??= this.onError;
    config.total = 0;
    config.progress = 0;

    for (const resource of resources) {
      this.loadByLoader(resource, promises, config);
    }

    return Promise.all(promises);
  }

  protected static loadByLoader(resource: Resource, promises: Promise<void>[], config: LoadingConfig): void {
    if (resource?.paths) {
      const loader = this.getLoader(resource.loader);

      if (Array.isArray(resource.paths)) {
        for (const path of resource.paths) {
          promises.push(this.startLoad(loader, path, config));
        }
      } else {
        promises.push(this.startLoad(loader, resource.paths, config));
      }
    }
  }

  protected static startLoad(loader: Loader, value: string | ResourceConfig, config: LoadingConfig): Promise<void> {
    return new Promise<void>((resolve) => {
      const path = (value as ResourceConfig).path ?? value as string;
      if (this._results[path]) return resolve();
      const onLoad = (value as ResourceConfig).onLoad;
      config.total++;

      loader.load(path, (result) => {
        this._results[path] = result;
        if (config.onProgress) config.onProgress(++config.progress / config.total);
        if (onLoad) onLoad(result);
        resolve();
      }, undefined, config.onError);
    });
  }
}
