import { Color, ColorRepresentation, Euler, MathUtils, Quaternion, Vector3 } from "three";
import { DEFAULT_EASING, Easing, EasingFunction, Easings } from "./Easings";
import { RunningAction } from "./RunningTween";
import { Tween } from "./Tween";

const easings = new Easings();
export type AllowedTypes = number | Vector3 | Quaternion | Euler | Color;
export type Omitype<T, U> = { [P in keyof T as T[P] extends U ? never : P]: T[P] };
export type PickType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] };
export type TransformType<T, U, V> = { [P in keyof T]: T[P] extends U ? T[P] | V : T[P] };
export type FilteredType<T> = PickType<Partial<TransformType<T, Vector3, number>>, AllowedTypes>;
export type Motion<T> = { [key in keyof FilteredType<T>]: FilteredType<T>[key] };

/**
 * Interface for configuring motion animations in a Tween.
 * You can specify easing, callback functions, and progress tracking functions.
 * @template T - The type of the target object being tweened.
 */
export interface MotionConfig<T = any> {
    /** The easing function to control the animation's progression. */
    easing?: Easing;
    /**
     * A callback function to execute when the animation completes.
     * @param target - The target object that was tweened.
     */
    onComplete?: (target: T) => void;
    /**
     * A callback function to execute when the animation starts.
     * @param target - The target object that is being tweened.
     */
    onStart?: (target: T) => void;
    /**
     * A callback function to be executed after each property has been updated.
     * @param target - The target object that is being tweened.
     */
    onUpdate?: (target: T) => void;
    /**
     * A callback function to be executed before each property is updated.
     * @param target - The target object that is being tweened.
     * @param key - The key or property being animated.
     * @param start - The initial value of the animated property.
     * @param end - The final value of the animated property.
     * @param alpha - The current animation progress as a normalized value (0 to 1).
     * @returns If `false` will not assign new value to property.
     */
    onProgress?: (target: T, key: string, start: AllowedTypes, end: AllowedTypes, alpha: number) => boolean | void;
}

/** @internal */
export interface ActionDescriptor {
    actions?: RunningAction[];
    tweens?: Tween[];
    config?: MotionConfig;
}

/** @internal */
export interface IAction<T> {
    init?(target: T): ActionDescriptor;
    hasActions: boolean;
    isRepeat?: boolean;
    isYoyo?: boolean;
    isTween?: boolean;
    times?: number;
}

/** @internal */
export class ActionRepeat<T> implements IAction<T> {
    public hasActions = false;
    public isRepeat = true;
    constructor(public times: number) { }
}

/** @internal */
export class ActionYoyo<T> implements IAction<T> {
    public hasActions = false;
    public isYoyo = true;
    constructor(public times: number) { }
}

/** @internal */
export class ActionTween<T> implements IAction<T> {
    public hasActions = true;
    public isTween = true;
    public tweens: Tween<T>[] = [];

    constructor(...tweens: Tween<T>[]) {
        for (const tween of tweens) {
            this.tweens.push(tween.clone());
        }
    }
}

/** @internal */
export class ActionCallback<T> implements IAction<T> {
    public hasActions = true;
    constructor(public callback: () => void) { }

    public init(): ActionDescriptor {
        return { actions: [{ callback: this.callback, time: 0 }] };
    }
}

/** @internal */
export class ActionDelay<T> implements IAction<T> {
    public hasActions = true;
    constructor(public time: number) { }

    public init(): ActionDescriptor {
        return { actions: [{ callback: () => { }, time: this.time }] };
    }
}

/** @internal */
export class ActionMotion<T> implements IAction<T> {
    public hasActions = true;
    constructor(public time: number, public motion: Motion<T>, public config: MotionConfig<T>, public isBy: boolean) { }

    public init(target: T): ActionDescriptor {
        const actions: RunningAction[] = [];
        for (const key in this.motion) {
            if (key === "easing") continue;
            const actionValue = this.motion[key];
            const targetValue = target[key];
            const action = this.vector3(key, actionValue as Vector3, targetValue as Vector3)
                ?? this.quaternion(key, actionValue as Quaternion, targetValue as Quaternion)
                ?? this.euler(key, actionValue as Euler, targetValue as Euler)
                ?? this.color(key, actionValue as Color, targetValue as Color)
                ?? this.number(target, key, actionValue as number);
            if (action) {
                actions.push(action);
            }
        }
        return { actions, config: this.config };
    }

    private getEasing(): EasingFunction {
        const easing = this.config?.easing ?? DEFAULT_EASING;
        return typeof easing === "string" ? (easings[easing] ?? easings.linear) : easing;
    }

    private vector3(key: string, actionValue: Vector3 | number, targetValue: Vector3): RunningAction<Vector3> {
        if (targetValue?.isVector3) {
            const value = typeof actionValue === "number" ? new Vector3(actionValue, actionValue, actionValue) : actionValue;
            return {
                key,
                time: this.time,
                easing: this.getEasing(),
                start: targetValue.clone(),
                end: this.isBy ? value.clone().add(targetValue) : value,
                callback: (start, end, alpha) => { targetValue.lerpVectors(start, end, alpha) }
            };
        }
    }

    private quaternion(key: string, actionValue: Quaternion, targetValue: Quaternion): RunningAction<Quaternion> {
        if (targetValue?.isQuaternion) {
            return {
                key,
                time: this.time,
                easing: this.getEasing(),
                start: targetValue.clone(),
                end: this.isBy ? actionValue.clone().premultiply(targetValue) : actionValue,
                callback: (start, end, alpha) => { targetValue.slerpQuaternions(start, end, alpha) }
            };
        }
    }

    private euler(key: string, actionValue: Euler, targetValue: Euler): RunningAction<Euler> {
        if (targetValue?.isEuler) {
            return {
                key,
                time: this.time,
                easing: this.getEasing(),
                start: targetValue.clone(),
                end: this.isBy ? new Euler(actionValue.x + targetValue.x, actionValue.y + targetValue.y, actionValue.z + targetValue.z) : actionValue,
                callback: (start, end, alpha) => {
                    targetValue.set(MathUtils.lerp(start.x, end.x, alpha), MathUtils.lerp(start.y, end.y, alpha), MathUtils.lerp(start.z, end.z, alpha));
                }
            };
        }
    }

    private color(key: string, actionValue: ColorRepresentation, targetValue: Color): RunningAction<Color> {
        if (targetValue?.isColor) {
            return {
                key,
                time: this.time,
                easing: this.getEasing(),
                start: targetValue.clone(),
                end: this.isBy ? new Color(actionValue).add(targetValue) : new Color(actionValue),
                callback: (start, end, alpha) => { targetValue.lerpColors(start, end, alpha) }
            };
        }
    }

    private number(target: T, key: string, actionValue: number): RunningAction<number> {
        if (typeof actionValue === "number")
            return {
                key,
                time: this.time,
                easing: this.getEasing(),
                start: target[key],
                end: this.isBy ? actionValue + target[key] : actionValue,
                callback: (start, end, alpha) => { target[key] = MathUtils.lerp(start, end, alpha) }
            };
    }

}
