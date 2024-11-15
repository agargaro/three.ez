import { Loader } from 'three';

/**
 * Configuration options for resource loading.
 */
export interface LoadingConfig {
  /**
   * A callback function for reporting progress during resource loading.
   * function is called with a ratio (0 to 1) to indicate the loading progress.
   */
  onProgress?: (ratio: number) => void;
  /**
   * A callback function for handling errors during resource loading.
   * function is called with an `error` object in case of loading errors.
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
   * The type of loader to use for resource.
   */
  loader: typeof Loader<any>;
  /**
   * An array of resource paths or configurations to be loaded by the loader.
   */
  paths: (string | ResourceConfig)[];
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
 * Default callback function for reporting progress during resource loading.
 * function is called with a ratio (0 to 1) to indicate the loading progress.
 */
const _onProgress: (ratio: number) => void = null;
/**
 * Default callback function for handling errors during resource loading.
 * function is called with an `error` object in case of loading errors.
 */
const _onError: (error: unknown) => void = null;
const _loaders = new Map<new () => Loader, Loader>();
const _results: { [x: string]: any } = {};
const _pending: Resource[] = [];

/**
 * Get a previously loaded result object for a specific path.
 * @param path The path of the resource.
 * @returns A previously loaded result object.
 */
export function getAsset<T>(path: string): T;
/**
 * Get a list of previously loaded result objects for a series of specific paths.
 * @param path An array of resource paths.
 * @returns An array of previously loaded result objects.
 */
export function getAsset<T>(...path: string[]): T[];
export function getAsset<T>(args: string | string[]): T | T[] {
  if (typeof args === 'string') return _results[args];

  const ret = [];
  for (const path of args) {
    ret.push(_results[path]);
  }
  return ret;
}

/**
 * Get a specific loader based on the resource type.
 * @param loaderType The desired loader type.
 * @returns The loader associated with the resource type.
 */
export function getLoader<T extends Loader>(loaderType: new () => T): T {
  if (!_loaders.has(loaderType)) {
    _loaders.set(loaderType, new loaderType());
  }
  return _loaders.get(loaderType) as T;
}

/**
 * Load a resource using a specified loader type and path.
 * @param loaderType The type of loader to use for loading the resource.
 * @param path The path to the resource to be loaded.
 * @param onProgress (optional) A callback function to report loading progress with a ProgressEvent.
 * @returns A Promise that resolves with the loaded resource when loading is complete.
 */
export function loadAsset<T>(loaderType: typeof Loader<any>, path: string, onProgress?: (event: ProgressEvent) => void, onError?: (error: unknown) => void): Promise<T> {
  return new Promise<T>((resolve) => {
    if (_results[path]) return resolve(_results[path]);
    const loader = getLoader(loaderType);
    loader.load(path, (result) => {
      _results[path] = result;
      resolve(result as T);
    }, onProgress, (e) => {
      if (onError) onError(e);
      resolve(undefined);
    });
  });
}

/**
 * Preload resources for future use.
 * @param loader The loader type to be used for preloading.
 * @param paths An array of resource paths or configurations to preload.
 */
export function preloadAsset(loader: typeof Loader<any>, ...paths: (string | ResourceConfig)[]): void {
  _pending.push({ loader, paths });
}

/**
 * Preload all pending resources and return a promise that resolves when all resources are loaded.
 * @param config Optional configuration for the loading process.
 * @returns A promise that resolves when all pending resources are loaded.
 */
export function preloadAllPendingAsset(config: LoadingConfig = {}): Promise<void[]> {
  const promise = loadAllAsset(config, ..._pending);
  _pending.length = 0;
  return promise;
}

/**
 * Load all specified resources and return a promise that resolves when all resources are loaded.
 * @param config Configuration for the loading process.
 * @param resources An array of resource objects to load.
 * @returns A promise that resolves when all resources are loaded.
 */
export function loadAllAsset(config: LoadingConfig = {}, ...resources: Resource[]): Promise<void[]> {
  const promises: Promise<void>[] = [];
  config.onProgress ??= _onProgress;
  config.onError ??= _onError;
  config.total = 0;
  config.progress = 0;

  for (const resource of resources) {
    loadByLoader(resource, promises, config);
  }

  return Promise.all(promises);
}

function loadByLoader(resource: Resource, promises: Promise<void>[], config: LoadingConfig): void {
  if (resource?.paths) {
    const loader = getLoader(resource.loader);

    for (const path of resource.paths) {
      promises.push(startLoad(loader, path, config));
    }
  }
}

function startLoad(loader: Loader, value: string | ResourceConfig, config: LoadingConfig): Promise<void> {
  return new Promise<void>((resolve) => {
    const path = (value as ResourceConfig).path ?? value as string;
    if (_results[path]) return resolve();
    const onLoad = (value as ResourceConfig).onLoad;
    config.total++;

    loader.load(path, (result) => {
      _results[path] = result;
      if (config.onProgress) config.onProgress(++config.progress / config.total);
      if (onLoad) onLoad(result);
      resolve();
    }, undefined, (e) => {
      if (config.onError) config.onError(e);
      if (config.onProgress) config.onProgress(++config.progress / config.total);
      resolve();
    });
  });
}
