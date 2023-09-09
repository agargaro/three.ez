import { ActionTween, MotionConfig } from "./Actions";
import { EasingFunction } from "./Easings";
import { Tween } from "./Tween";
import { TweenManager } from "./TweenManager";

type updateCallback<T> = (start?: T, end?: T, alpha?: number) => void;

interface RunningBlock {
    tweens?: Tween[];
    runningTweens?: RunningTween[];
    actions?: RunningAction[];
    elapsedTime: number;
    totalTime: number;
    reversed?: boolean;
    originallyReversed?: boolean;
    tweensStarted?: boolean;
    config?: MotionConfig;
}

/** @internal */
export interface RunningAction<T = any> {
    time: number;
    callback: updateCallback<T>;
    easing?: EasingFunction;
    start?: T;
    end?: T;
    key?: string;
}

/**
 * This class represents a running tween for a specific target object.
 * It manages the execution of actions and tweens associated with the tween.
 * Don't instance this manually.
 * @template T - The type of the target object.
 */
export class RunningTween<T = any> {
    /** @internal */ public root: RunningTween<T>;
    /** @internal */ public tween: Tween<T>;
    /** @internal */ public target: T;
    /** @internal */ public actionIndex = -1;
    /** @internal */ public currentBlock?: RunningBlock;
    /** @internal */ public history: RunningBlock[] = [];
    /** @internal */ public reversed?: boolean;
    /** @internal */ public originallyReversed?: boolean;
    /** @internal */ public repeat?: boolean;
    /** @internal */ public ripetitions: { [x: number]: number } = {};
    /** @internal */ public _finished = false;
    /**
    * Indicates whether the execution of the running tween is paused.
    * If set to `true`, the tween will not progress until it is resumed.
    */
    public paused = false;
    /**
     * The time scale factor for the running tween.
     * It determines the speed at which the tween progresses.
     * A value of `1` represents normal speed, while `0.5` would be half-speed, and `2` would be double-speed.
     */
    public timeScale = 1;

    /**
     * Indicates whether the running tween has finished executing.
     */
    public get finished(): boolean { return this._finished }

    /**
     * Don't instance this manually.
     */
    constructor(target: T, tween: Tween<T>) {
        this.target = target;
        this.tween = tween;
    }

    /**
    * Set the time scale for the running tween.
    * @param value - The time scale value to apply.
    * @returns The updated RunningTween instance.
    */
    public setTimeScale(value: number): this {
        this.timeScale = value;
        return this;
    }

    /**
     * Pause the execution of the running tween.
     */
    public pause(): void {
        this.paused = true;
    }

    /**
     * Resume the execution of the running tween if it was paused.
     */
    public resume(): void {
        this.paused = false;
    }

    /**
     * Stop the running tween, causing it to finish immediately.
     */
    public stop(): void {
        TweenManager.stop(this);
    }

    /**
    * Complete the running tween, causing it to finish immediately.
    */
    public complete(): void {
        TweenManager.complete(this);
    }

    /**
     * Revert the running tween to its initial state (Not implemented yet).
     */
    public revert(): void {
        console.error("Revert method not implemented yet."); // handle (!blockHistory)
    }

    /** @internal */
    public getBlock(): RunningBlock {
        this.currentBlock?.config?.onComplete?.call(this.target, this.target);
        const block = this.getCurrentBlock();
        block?.config?.onStart?.call(this.target, this.target);
        if (!this.tween.blockHistory && !this.reversed && !this.repeat && block) {
            this.history.push(block);
        }
        this.currentBlock = block;
        return block;
    }

    /** @internal */
    private getCurrentBlock(): RunningBlock {
        if (this.reversed) return this.getPrevBlock();
        return this.repeat ? this.getRepeatBlock() : this.getNextBlock();
    }

    /** @internal */
    private getPrevBlock(): RunningBlock {
        if (this.actionIndex > 0) {
            const block = this.history[--this.actionIndex];
            block.reversed = !block.originallyReversed;
            block.elapsedTime = 0;
            block.tweensStarted = false;
            return block;
        }
    }

    /** @internal */
    private getRepeatBlock(): RunningBlock {
        if (this.actionIndex < this.history.length - 1) {
            const block = this.history[++this.actionIndex];
            block.reversed = block.originallyReversed;
            block.elapsedTime = 0;
            block.tweensStarted = false;
            return block;
        }
    }

    /** @internal */
    private getNextBlock(): RunningBlock {
        while (++this.actionIndex < this.tween.actions.length) {
            const action = this.tween.actions[this.actionIndex];
            if (action.isRepeat) {
                this.handleRepetition(action.times);
            } else if (action.isYoyo) {
                const block = this.handleYoyo(action.times);
                if (block) return block;
            } else if (action.isTween) {
                return this.handleTween(action as ActionTween<T>);
            } else {
                return this.handleMotion();
            }
        }
    }

    /** @internal */
    private cloneBlock(block: RunningBlock): RunningBlock {
        return {
            elapsedTime: 0,
            totalTime: block.totalTime,
            reversed: !block.reversed,
            originallyReversed: !block.reversed,
            actions: block.actions,
            tweens: block.tweens,
            config: block.config,
            runningTweens: this.cloneRunningTweens(block.runningTweens)
        }
    }

    /** @internal */
    private cloneRunningTweens(runningTweens: RunningTween<T>[]): RunningTween<T>[] {
        if (!runningTweens) return;
        const ret: RunningTween<T>[] = [];
        for (const runningTween of runningTweens) {
            const runningCloned = new RunningTween(runningTween.target, runningTween.tween);
            runningCloned.root = runningTween.root;
            runningCloned.history = runningTween.history;
            runningCloned.actionIndex = !runningTween.reversed ? runningTween.history.length : -1;
            runningCloned.originallyReversed = !runningTween.reversed;
            runningCloned.repeat = runningTween.reversed
            ret.push(runningCloned);
        }
        return ret;
    }

    /** @internal */
    private handleMotion(): RunningBlock {
        const descriptor = this.tween.actions[this.actionIndex].init(this.target);
        return {
            config: descriptor.config,
            actions: descriptor.actions,
            elapsedTime: 0,
            totalTime: Math.max(...descriptor.actions.map(x => x.time)),
        };
    }

    /** @internal */
    private handleTween(action: ActionTween<T>): RunningBlock {
        return {
            tweens: action.tweens,
            elapsedTime: 0,
            totalTime: 0
        };
    }

    /** @internal */
    private handleRepetition(times: number): void {
        const repeat = this.ripetitions;
        repeat[this.actionIndex] ??= 0;
        if (repeat[this.actionIndex] < times) {
            repeat[this.actionIndex]++;
            do {
                this.actionIndex--;
            } while (this.actionIndex > -1 && !this.tween.actions[this.actionIndex].hasActions);
            this.actionIndex--;
        }
    }

    /** @internal */
    private handleYoyo(times: number): RunningBlock {
        const repeat = this.ripetitions;
        repeat[this.actionIndex] ??= 0;
        if (repeat[this.actionIndex] < times) {
            repeat[this.actionIndex]++;
            if (repeat[this.actionIndex--] < 3) {
                return this.cloneBlock(this.history[this.history.length - 1]);
            }
            const block = this.history[this.history.length - 2];
            block.elapsedTime = 0;
            block.tweensStarted = false;
            return block;
        }
    }

    /** @internal */
    public execute(delta: number): boolean {
        if (this.paused) return true;
        delta *= this.timeScale;
        do {
            delta = Math.min(this.executeBlock(delta), this.getTweensDelta(this.currentBlock));
        } while (delta >= 0 && this.getBlock());
        return delta < 0;
    }

    /** @internal */
    private executeBlock(delta: number): number {
        const block = this.currentBlock;
        block.elapsedTime += delta;
        this.executeActions(block);
        this.executeTweens(block, delta);
        return block.elapsedTime - block.totalTime;
    }

    /** @internal */
    private executeActions(block: RunningBlock): void {
        if (block.actions) {
            for (const action of block.actions) {
                const alpha = block.reversed ? 1 - Math.min(1, block.elapsedTime / action.time) : Math.min(1, block.elapsedTime / action.time);
                const easedAlpha = action.easing?.call(this, alpha) ?? alpha;
                const applyValue = block.config?.onProgress?.call(this.target, this.target, action.key, action.start, action.end, easedAlpha);
                if (applyValue !== false) {
                    action.callback(action.start, action.end, easedAlpha);
                }
            }
            block.config?.onUpdate?.call(this.target, this.target);
        }
    }

    /** @internal */
    private executeTweens(block: RunningBlock, delta: number): void {
        if (block.tweens && !block.tweensStarted) {
            if (!block.runningTweens) {
                block.runningTweens = [];
                for (const tween of block.tweens) {
                    this.executeTween(block, delta, tween);
                }
            } else {
                for (const runningTween of block.runningTweens) {
                    runningTween.executeExistingTween(delta, this.reversed);
                }
            }
            block.tweensStarted = true;
        }
    }

    /** @internal */
    private executeTween(block: RunningBlock, delta: number, tween: Tween<T>): void {
        const runningTween = TweenManager.createChildren(this.target, tween, this.root ?? this);
        block.runningTweens.push(runningTween);
        runningTween.execute(delta);
    }

    /** @internal */
    private executeExistingTween(delta: number, reversed: boolean): void {
        this.reversed = reversed ? !this.originallyReversed : this.originallyReversed;
        this.repeat = !this.reversed;
        this.actionIndex = this.reversed ? this.history.length : -1;
        TweenManager.addChildren(this);
        this.getBlock();
        this.execute(delta);
    }

    /** @internal */
    public getTweensDelta(block: RunningBlock): number {
        let delta = Number.MAX_SAFE_INTEGER;
        if (block.runningTweens) {
            for (const exTween of block.runningTweens) {
                const indexLastBlock = (exTween.repeat || exTween.reversed) ? exTween.actionIndex : exTween.history.length - 1;
                const lastBlock = exTween.history[indexLastBlock];
                delta = Math.min(delta, lastBlock.elapsedTime - lastBlock.totalTime, this.getTweensDelta(lastBlock));
            }
        }
        return delta;
    }

}

//TODO write rever function and consider also to create set action
