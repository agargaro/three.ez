import { RunningTween } from './RunningTween.js';
import { Tween } from './Tween.js';

const _running: RunningTween[] = [];
const _runningChildren: RunningTween[] = [];

/** @internal */
export function create<T>(target: T, tween: Tween<T>): RunningTween<T> {
  const runningTween = new RunningTween(target, tween);
  runningTween.getBlock();
  _running.push(runningTween);
  return runningTween;
}

/** @internal */
export function createChildren<T>(target: T, tween: Tween<T>, root: RunningTween<T>): RunningTween<T> {
  const runningTween = new RunningTween(target, tween);
  runningTween.root = root;
  runningTween.getBlock();
  return runningTween;
}

/** @internal */
export function addChildren<T>(runningTween: RunningTween<T>): void {
  _runningChildren.push(runningTween);
}

/** @internal */
export function update(delta: number): void {
  const runningChildren = _runningChildren;
  for (let i = runningChildren.length - 1; i >= 0; i--) {
    const rc = runningChildren[i];
    if (!rc.execute(delta * rc.root.timeScale)) {
      runningChildren.splice(i, 1);
    }
  }

  const running = _running;
  for (let i = running.length - 1; i >= 0; i--) {
    if (!running[i].execute(delta)) {
      running[i]._finished = true;
      running.splice(i, 1);
    }
  }
}

/** @internal */
export function stop<T>(runningTween: RunningTween<T>): void {
  const index = _running.indexOf(runningTween);
  if (index < 0) return;
  _running.splice(index, 1);
  runningTween._finished = true;
  runningTween.paused = false;

  const runningChildren = _runningChildren;
  for (let i = runningChildren.length - 1; i >= 0; i--) {
    if (runningChildren[i].root === runningTween) {
      runningChildren.splice(i, 1);
    }
  }
}

/** @internal */
export function complete<T>(runningTween: RunningTween<T>): void {
  const index = _running.indexOf(runningTween);
  if (index < 0) return;
  runningTween.paused = false;

  const runningChildren = _runningChildren;
  for (let i = runningChildren.length - 1; i >= 0; i--) {
    if (runningChildren[i].root === runningTween && !runningChildren[i].execute(Infinity)) {
      runningChildren.splice(i, 1);
    }
  }

  if (runningTween.tween.infiniteLoop || !runningTween.execute(Infinity)) {
    _running.splice(index, 1);
    runningTween._finished = true;
  }
}

/**
   * Stop the running tween with a specific id.
   * @param id Tween identifier.
   */
export function stopById(id: string): void {
  for (let i = _running.length - 1; i >= 0; i--) {
    if (_running[i].tween.id === id) {
      _running[i].stop();
      return;
    }
  }
}

/**
   * Stop all running tweens.
   */
export function stopAll(): void {
  for (let i = _running.length - 1; i >= 0; i--) {
    _running[i].stop();
  }
}

/**
   * Stop all running tweens with a specific tag.
   * @param tag - The tag to filter running tweens.
   */
export function stopAllByTag(tag: string): void {
  for (let i = _running.length - 1; i >= 0; i--) {
    if (_running[i].tween.tags.indexOf(tag) > -1) {
      _running[i].stop();
    }
  }
}

/**
   * Complete all running tweens.
   */
export function completeAll(): void {
  for (let i = _running.length - 1; i >= 0; i--) {
    _running[i].complete();
  }
}

/**
   * Complete all running tweens with a specific tag.
   * @param tag - The tag to filter running tweens.
   */
export function completeAllByTag(tag: string): void {
  for (let i = _running.length - 1; i >= 0; i--) {
    if (_running[i].tween.tags.indexOf(tag) > -1) {
      _running[i].complete();
    }
  }
}
