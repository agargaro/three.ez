import { ActionCallback, ActionDelay, ActionMotion, ActionRepeat, ActionTween, ActionYoyo, IAction, Motion, MotionConfig } from "./Actions";
import { RunningTween } from "./RunningTween";
import { TweenManager } from "./TweenManager";

/**
 * A Tween represents a series of actions that can be applied to a target object to create animations or sequences of events.
 * @template T - The type of the target object.
 */
export class Tween<T = any> {
    /** @internal */ public actions: IAction<T>[] = [];
    /** @internal */ public blockHistory = false;
    /** @internal */ public infiniteLoop = false;
    /** The object to apply the tween to. */
    public target: T;
    /** Tags used for filtering and management. */
    public tags: string[] = [];

    /**
     * @param target - The object to apply the tween to.
     */
    constructor(target: T) {
        this.target = target;
    }

    /**
     * Set tags for the Tween, which can be used for filtering and management.
     * @param tags - Tags to associate with the Tween.
     * @returns The updated Tween instance.
     */
    public setTags(...tags: string[]): this {
        this.tags = tags;
        return this;
    }

    /**
     * Set the target object for the Tween.
     * @param target - The object to apply the tween to.
     * @returns The updated Tween instance.
     */
    public setTarget(target: T): this {
        this.target = target;
        return this;
    }

    /**
     * Define a motion from the current state to a new state over a specified time.
     * @param time - The duration of the motion in milliseconds.
     * @param action - The motion configuration.
     * @param config - Additional motion configuration options.
     * @returns The updated Tween instance.
     */
    public to(time: number, action: Motion<T>, config?: MotionConfig<T>): this {
        this.actions.push(new ActionMotion(time, action, config, false));
        return this;
    }

    /**
     * Define a relative motion from the current state.
     * @param time - The duration of the motion in milliseconds.
     * @param action - The motion configuration.
     * @param config - Additional motion configuration options.
     * @returns The updated Tween instance.
     */
    public by(time: number, action: Motion<T>, config?: MotionConfig<T>): this {
        this.actions.push(new ActionMotion(time, action, config, true));
        return this;
    }

    /**
     * Add a callback action to the Tween.
     * @param callback - The callback function to execute.
     * @returns The updated Tween instance.
     */
    public call(callback: () => void): this {
        this.actions.push(new ActionCallback(callback));
        return this;
    }

    /**
     * Add a delay before executing the next action.
     * @param time - The duration of the delay in milliseconds.
     * @returns The updated Tween instance.
     */
    public delay(time: number): this {
        this.actions.push(new ActionDelay(time));
        return this;
    }

    /**
     * Repeat the last action for a specific number of times.
     * @param times - The number of times to repeat the action.
     * @returns The updated Tween instance.
     */
    public repeat(times = 1): this {
        if (times === Infinity) {
            this.blockHistory = true;
            this.infiniteLoop = true;
        }
        if (this.actions[this.actions.length - 1].isRepeat) {
            this.actions[this.actions.length - 1].times += times;
        } else {
            this.actions.push(new ActionRepeat(times));
        }
        return this;
    }

    /**
     * Repeat the last action indefinitely.
     * @returns The updated Tween instance.
     */
    public repeatForever(): this {
        return this.repeat(Infinity);
    }

    /**
     * Apply a yoyo effect to the last action, making it reverse its motion, for a specific number of times.
     * @param times - The number of times to yoyo the last action.
     * @returns The updated Tween instance.
     */
    public yoyo(times = 1): this {
        if (times === Infinity) {
            this.infiniteLoop = true;
        }
        if (this.actions[this.actions.length - 1].isYoyo) {
            this.actions[this.actions.length - 1].times += times;
        } else {
            this.actions.push(new ActionYoyo(times));
        }
        return this;
    }

    /**
     * Apply a yoyo effect to the last action, making it reverse its motion, indefinitely.
     * @returns The updated Tween instance.
     */
    public yoyoForever(): this {
        return this.yoyo(Infinity);
    }

    /**
     * Chain another Tween to execute after this Tween.
     * @param tween - The Tween to chain.
     * @returns The updated Tween instance.
     */
    public then(tween: Tween<T>): this {
        this.actions.push(new ActionTween(tween));
        this.infiniteLoop ||= tween.infiniteLoop;
        return this;
    }

    /**
     * Run multiple Tweens in parallel.
     * @param tweens - The Tweens to run in parallel.
     * @returns The updated Tween instance.
     */
    public parallel(...tweens: Tween<T>[]): this {
        this.actions.push(new ActionTween(...tweens));
        this.infiniteLoop ||= tweens.some((x) => x.infiniteLoop);
        return this;
    }

    /**
     * Run multiple Tweens in sequence.
     * @param tweens - The Tweens to run in sequence.
     * @returns The updated Tween instance.
     */
    public sequence(...tweens: Tween<T>[]): this {
        for (const tween of tweens) {
            this.actions.push(new ActionTween(tween));
            this.infiniteLoop ||= tween.infiniteLoop;
        }
        return this;
    }

    /**
     * Chain actions from another Tween to this Tween.
     * @param tween - The Tween containing actions to chain.
     * @returns The updated Tween instance.
     */
    public chain(tween: Tween<T>): this {
        this.actions.push(...tween.actions);
        this.infiniteLoop ||= tween.infiniteLoop;
        return this;
    }

    /**
     * Clone the Tween instance.
     * @returns A new Tween instance with the same configuration.
     */
    public clone(): Tween<T> {
        const tween = new Tween(this.target);
        tween.actions = [...this.actions];
        tween.tags = [...this.tags];
        tween.infiniteLoop = this.infiniteLoop;
        return tween;
    }

    /**
     * Start the Tween and create a RunningTween instance.
     * @returns A RunningTween instance that controls the execution of the Tween.
     */
    public start(): RunningTween<T> {
        return TweenManager.create(this.target, this);
    }

}
