---
sidebar_position: 11
---

# Tweening

In this tutorial, we'll walk through creating smooth animations using the Tweening system from scratch. You'll learn how to create basic tweens, use easing functions, and manage complex animations with delays, looping, and more.

## Setup the Scene

First, set up a simple Three.js scene with a camera, lighting, and a few objects. We'll animate these objects using tweens later.

```typescript
import { Scene, Mesh, SphereGeometry, MeshLambertMaterial, BoxGeometry, Vector3, AmbientLight, DirectionalLight, Euler } from 'three';
import { Main, OrthographicCameraAuto, Tween } from '@three.ez/main';

// Create a simple scene
const scene = new Scene();
const ambientLight = new AmbientLight();
const directionalLight = new DirectionalLight();
directionalLight.position.set(0, 1, 1);

scene.add(ambientLight, directionalLight);

// Create the main class to start the scene
const main = new Main();
const camera = new OrthographicCameraAuto(2, false).translateZ(1);
main.createView({ scene, camera });
```

Here, we set up a basic scene with ambient and directional lighting. We've also created a camera that we'll use to view the animations.

## Create Objects to Animate

Next, let's create the objects we want to animate. We'll use a sphere and two boxes.

```typescript
// Create a blue sphere
const sphere = new Mesh(new SphereGeometry(0.15), new MeshLambertMaterial({ color: 'blue' }));
sphere.position.set(-0.5, 0, 0);

// Create two boxes: red and green
const redBox = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshLambertMaterial({ color: 'red' }));
const greenBox = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshLambertMaterial({ color: 'green' }));

// Add objects to the scene
scene.add(sphere, redBox, greenBox);

// Position the green box
greenBox.position.set(0.5, 0, 0);
```

Now, we have a blue sphere and two boxes (red and green) that are placed at different positions in the scene. Next, we'll animate them using tweens.

## Create Your First Tween

Now let’s create a simple tween for the `sphere`. We’ll move the sphere up and down using a `yoyo` animation, where the object will move back and forth forever.

```typescript
sphere
  .tween()
  .by(1000, { position: new Vector3(0, 0.5, 0) }, { easing: 'easeInOutBack' })
  .yoyoForever()
  .start();
```

### Explanation:
- `by(1000, { position: new Vector3(0, 0.5, 0) })`: This moves the `sphere` 0.5 units upwards over 1 second.
- `easing: 'easeInOutBack'`: Adds a smooth easing effect.
- `yoyoForever()`: This makes the animation reverse itself after completion and continue forever.

## Chain Multiple Tweens

Next, let's create a more complex animation by chaining multiple tweens together for the `redBox`.

```typescript
const rotationTween = new Tween(redBox)
  .by(2000, { scale: 1, rotation: new Euler(Math.PI * 2, Math.PI, 0) }, { easing: 'easeOutElastic' })
  .delay(200)
  .to(1000, { scale: 1 }, { easing: 'easeOutBounce' })
  .delay(200);

redBox
  .tween()
  .then(rotationTween)
  .repeatForever()
  .start();
```

### Explanation:
- We create a rotation and scale tween for the `redBox` that animates the object’s rotation and scaling with different easing functions.
- `then(rotationTween)`: After the `redBox` completes its initial animation, it transitions into the `rotationTween`.
- `repeatForever()`: This repeats the entire sequence forever.

## Animate the Green Box Rotation

Finally, let’s animate the `greenBox` by rotating it continuously.

```typescript
new Tween(greenBox.rotation)
  .by(1000, { z: Math.PI / 2 }, { easing: 'easeOutElastic' })
  .repeatForever()
  .start();
```

### Explanation:
- We rotate the `greenBox` along the Z-axis by 90 degrees (`Math.PI / 2`) every second using an elastic easing.
- `repeatForever()`: The rotation repeats endlessly.

## Bringing It All Together

Now that we have the animations for each object, let's bring them together in the scene.

```typescript
const main = new Main();
main.createView({ scene, camera: new OrthographicCameraAuto(2, false).translateZ(1) });
```

You should now see:
- The `sphere` moving up and down smoothly.
- The `redBox` scaling and rotating with easing and delays, repeating forever.
- The `greenBox` rotating continuously.

## Live Example

You can view a live demo and experiment with the code using the link below:

[⚡ Stackblitz - Tweening Tutorial](https://stackblitz.com/edit/three-ez-tweening?file=src%2Fmain.ts)
