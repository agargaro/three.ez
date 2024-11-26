/** Type representing an easing function that takes a single numeric parameter and returns a numeric result. */
export type EasingFunction = (x: number) => number;
/** Type representing an easing type, which can be either a predefined easing function or a custom easing function. */
export type Easing = keyof Easings | EasingFunction;

/**
 * Class that provides various easing functions for tweening animations.
 * For more info on these easing functions, check https://easings.net.
 */
export class Easings {
  /** The default easing function used when no easing is specified. */
  public static DEFAULT_EASING: keyof Easings = 'easeInOutExpo';

  public linear(x: number): number {
    return x;
  }

  public easeInSine(x: number): number {
    return 1 - Math.cos((x * Math.PI) / 2);
  }

  public easeOutSine(x: number): number {
    return Math.sin((x * Math.PI) / 2);
  }

  public easeInOutSine(x: number): number {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }

  public easeInQuad(x: number): number {
    return x * x;
  }

  public easeOutQuad(x: number): number {
    return 1 - (1 - x) * (1 - x);
  }

  public easeInOutQuad(x: number): number {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  }

  public easeInCubic(x: number): number {
    return x * x * x;
  }

  public easeOutCubic(x: number): number {
    return 1 - Math.pow(1 - x, 3);
  }

  public easeInOutCubic(x: number): number {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  public easeInQuart(x: number): number {
    return x * x * x * x;
  }

  public easeOutQuart(x: number): number {
    return 1 - Math.pow(1 - x, 4);
  }

  public easeInOutQuart(x: number): number {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
  }

  public easeInQuint(x: number): number {
    return x * x * x * x * x;
  }

  public easeOutQuint(x: number): number {
    return 1 - Math.pow(1 - x, 5);
  }

  public easeInOutQuint(x: number): number {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  }

  public easeInExpo(x: number): number {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  }

  public easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  public easeInOutExpo(x: number): number {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
  }

  public easeInCirc(x: number): number {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
  }

  public easeOutCirc(x: number): number {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  }

  public easeInOutCirc(x: number): number {
    return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
  }

  public easeInBack(x: number): number {
    return 2.70158 * x * x * x - 1.70158 * x * x;
  }

  public easeOutBack(x: number): number {
    return 1 + 2.70158 * Math.pow(x - 1, 3) + 1.70158 * Math.pow(x - 1, 2);
  }

  public easeInOutBack(x: number): number {
    const c2 = 1.70158 * 1.525;
    return x < 0.5 ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
  }

  public easeInElastic(x: number): number {
    return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * (2 * Math.PI) / 3);
  }

  public easeOutElastic(x: number): number {
    return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * (2 * Math.PI) / 3) + 1;
  }

  public easeInOutElastic(x: number): number {
    const c5 = (2 * Math.PI) / 4.5;
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
  }

  public easeInBounce(x: number): number {
    return 1 - this.easeOutBounce(1 - x);
  }

  public easeOutBounce(x: number): number {
    if (x < 1 / 2.75) {
      return 7.5625 * x * x;
    } else if (x < 2 / 2.75) {
      return 7.5625 * (x -= 1.5 / 2.75) * x + 0.75;
    } else if (x < 2.5 / 2.75) {
      return 7.5625 * (x -= 2.25 / 2.75) * x + 0.9375;
    } else {
      return 7.5625 * (x -= 2.625 / 2.75) * x + 0.984375;
    }
  }

  public easeInOutBounce(x: number): number {
    return x < 0.5 ? (1 - this.easeOutBounce(1 - 2 * x)) / 2 : (1 + this.easeOutBounce(2 * x - 1)) / 2;
  }
}
