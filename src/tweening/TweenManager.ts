import { RunningTween } from "./RunningTween";
import { Tween } from "./Tween";

/**
 * This class is responsible for managing and controlling running tweens.
 */
export class TweenManager {
    private static _running: RunningTween[] = [];
    private static _runningChildren: RunningTween[] = [];

    /** @internal */
    public static create<T>(target: T, tween: Tween<T>): RunningTween<T> {
        const runningTween = new RunningTween(target, tween);
        runningTween.getBlock();
        this._running.push(runningTween);
        return runningTween;
    }

    /** @internal */
    public static createChildren<T>(target: T, tween: Tween<T>, root: RunningTween<T>): RunningTween<T> {
        const runningTween = new RunningTween(target, tween);
        runningTween.root = root;
        runningTween.timeScale = root.timeScale;
        runningTween.getBlock();
        this._runningChildren.push(runningTween);
        return runningTween;
    }

    /** @internal */
    public static addChildren<T>(runningTween: RunningTween<T>): void {
        this._runningChildren.push(runningTween);
    }

    /** @internal */
    public static update(delta: number): void {
        const runningChildren = this._runningChildren;
        for (let i = runningChildren.length - 1; i >= 0; i--) {
            if (!runningChildren[i].execute(delta)) {
                runningChildren.splice(i, 1);
            }
        }

        const running = this._running;
        for (let i = running.length - 1; i >= 0; i--) {
            if (!running[i].execute(delta)) {
                running[i]._finished = true;
                running.splice(i, 1);
            }
        }
    }

    /** @internal */
    public static stop<T>(runningTween: RunningTween<T>): void {
        const index = this._running.indexOf(runningTween);
        if (index < 0) return;
        this._running.splice(index, 1);
        runningTween._finished = true;
        runningTween.paused = false;

        const runningChildren = this._runningChildren;
        for (let i = runningChildren.length - 1; i >= 0; i--) {
            if (runningChildren[i].root === runningTween) {
                runningChildren.splice(i, 1);
            }
        }
    }

    /** @internal */
    public static complete<T>(runningTween: RunningTween<T>): void {
        const index = this._running.indexOf(runningTween);
        if (index < 0) return;
        runningTween.paused = false;

        const runningChildren = this._runningChildren;
        for (let i = runningChildren.length - 1; i >= 0; i--) {
            if (runningChildren[i].root === runningTween && !runningChildren[i].execute(Infinity)) {
                runningChildren.splice(i, 1);
            }
        }

        if (runningTween.tween.infiniteLoop || !runningTween.execute(Infinity)) {
            this._running.splice(index, 1);
            runningTween._finished = true;
        }
    }

    /**
     * Stop all running tweens.
     */
    public static stopAll() {
        for (let i = this._running.length - 1; i >= 0; i--) {
            this._running[i].stop();
        }
    }

    /**
     * Stop all running tweens with a specific tag.
     * @param tag - The tag to filter running tweens.
     */
    public static stopAllByTag(tag: string) {
        for (let i = this._running.length - 1; i >= 0; i--) {
            if (this._running[i].tween.tags.indexOf(tag) > -1) {
                this._running[i].stop();
            }
        }
    }

    /**
     * Complete all running tweens.
     */
    public static completeAll() {
        for (let i = this._running.length - 1; i >= 0; i--) {
            this._running[i].complete();
        }
    }

    /**
     * Complete all running tweens with a specific tag.
     * @param tag - The tag to filter running tweens.
     */
    public static completeAllByTag(tag: string) {
        for (let i = this._running.length - 1; i >= 0; i--) {
            if (this._running[i].tween.tags.indexOf(tag) > -1) {
                this._running[i].complete();
            }
        }
    }
}
