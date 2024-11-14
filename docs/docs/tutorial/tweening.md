---
sidebar_position: 11
---

# Tweening: Creating Smooth Animations in 3D

In this guide, you’ll learn how to create dynamic, smooth animations using the tweening system in your 3D scenes. Tweening enables objects to glide, bounce, and transition seamlessly between states, making your animations look more natural and engaging.

By the end of this tutorial, you’ll be able to:
- Animate objects smoothly using both predefined and custom easing functions.
- Chain multiple animations together for more complex effects.
- Control timing with delay, looping, and yoyo effects.
- Customize your own easing functions for unique motion behaviors.

---

## Introduction to Tweening

Tweening allows you to interpolate an object's properties over time. Whether you’re changing position, scale, rotation, or any other property, you can control the rate of change using easing functions, which determine how the animation accelerates or decelerates. 

### Why Tweening Matters
In animations, sudden changes feel unnatural. Tweening smooths these transitions, making movements glide from one state to another, adding realism and fluidity.

---

## Moving an Object with Basic Tweening

Let’s start with a simple example. We’ll move an object vertically, and use the `yoyo` effect to reverse the animation and repeat it forever.

```typescript
sphere.tween()
  .by(1000, { position: new Vector3(0, 0.5, 0) }, { easing: 'easeInOutBack' })
  .yoyoForever()
  .start();
```

### Explanation:
- **`by(1000, { position: new Vector3(0, 0.5, 0) })`**: Moves the object up by 0.5 units over 1 second.
- **`easing: 'easeInOutBack'`**: Eases the animation in and out with a slight overshoot, creating a soft transition.
- **`yoyoForever()`**: Reverses the animation and repeats indefinitely.

---

## Custom Easing Functions

While predefined easing functions offer plenty of flexibility, sometimes you need something more specific. Here’s how you can define a **custom easing function** that blends linear movement with a bounce effect at the end.

```typescript
// Custom easing function that starts linear and ends with a bounce
const customEasing: EasingFunction = (x: number): number => {
  if (x < 0.7) {
    // Linear easing for the first 70% of the animation
    return x;
  } else {
    // Bounce effect for the last 30%
    return 1 - Math.pow(1 - (x - 0.7) / 0.3, 2);
  }
};

// Applying the custom easing function to a tween
box.tween()
  .by(1000, { position: new Vector3(0, 1, 0) }, { easing: customEasing })
  .start();
```

### Explanation:
- **`customEasing(x)`**: For the first 70% of the tween, the object moves linearly. For the last 30%, it bounces to its final position.
  
Using custom easing functions allows you to create unique animations tailored to your specific needs.

---

## Advanced Tweens

You can also chain multiple tweens together to create more complex animations. Here, we’ll rotate and scale an object, with delays between each animation.

```typescript
const rotationTween = new Tween(box)
  .by(2000, { scale: 1, rotation: new Euler(Math.PI * 2, Math.PI, 0) }, { easing: 'easeOutElastic' })
  .delay(200)
  .to(1000, { scale: 1 }, { easing: 'easeOutBounce' })
  .delay(200);

box.tween()
  .then(rotationTween)
  .repeatForever()
  .start();
```

### Explanation:
- **Chaining**: The object first rotates and scales with an elastic easing, then after a delay, it returns to its original size with a bounce effect.
- **`repeatForever()`**: Loops the entire animation sequence indefinitely.

This technique is perfect for more complex animations that involve multiple steps.

<!-- TODO:  we want to add the Challenges and Exercise section? let me know.
---

## Challenges and Exercises

Now it’s time to put your new skills to the test! Here’s a challenge to reinforce what you’ve learned:

### Challenge: Spinning and Bouncing Object

Create an object that bounces up and down while rotating continuously. Use `yoyo()` and `repeatForever()` to create the desired effect.

**Hint**: You can combine bouncing and rotating tweens to achieve this:

```typescript
object.tween()
  .by(1000, { position: new Vector3(0, 1, 0) }, { easing: 'easeOutBounce' })
  .yoyo()
  .repeatForever()
  .start();

object.rotation.tween()
  .by(1000, { z: Math.PI / 2 }, { easing: 'easeOutElastic' })
  .repeatForever()
  .start();
``` -->

---

## Best Practices:
- Always remember to call `.start()` to begin a tween, as forgetting this step can lead to confusion when nothing happens.

---

## Conclusion

You’ve now mastered tweening in your 3D scenes! By combining predefined and custom easing functions, you can create smooth, dynamic animations for any object. Experiment with different easing types and motion patterns to bring your scenes to life.

Feel free to try out the interactive playground and create your own animations:

[⚡ Interactive Playground](https://stackblitz.com/edit/three-ez-tweening?file=src%2Fmain.ts)
