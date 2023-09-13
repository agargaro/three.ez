import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Automatic Resize Handling',
    description: (
      <>
        Automatically resizes `Renderer`, `Camera`, `EffectComposer`. Using `rendererResize` event is also possibile to set resolution for custom shaders.
      </>
    )
  },
  {
    title: 'Smart Rendering',
    description: (
      <>
        Smart rendering allows a frame to render only when it is needed, which is particularly useful when using mostly static scenes, optimizing performance and reducing unnecessary computational overhead. <br />
        It is based on a `Scene` property called `needsRender`, which is changed automatically when there is a change in position, scale, rotation, visiblity, focus, removal or addition of `Object3D`.
        It is also possible to change it manually, in cases where changes are not automatically identified.
      </>
    )
  },
  {
    title: 'Simplified Rendering',
    description: (
      <>
        The rendering of viewports is handled by the `Main` class, using the `createView` method, which returns an instance of `RenderView`. <br />
        By modifying the various properties of this instance, various parameters can be changed, including: the size, position, background, interaction state, and visibility.
        It is also possible to specify an `EffectComposer` for each RenderView to handle post-processing effects.
      </>
    )
  },
  {
    title: 'Object3D Property Binding',
    description: (
      <>
        It is possible to bind to a property of an `Object3D` the result of a callback, using the `bindProperty` method. <br />
        The bindings are computed automatically during each animate cycle.
        To manually compute the various bindings using the `setManualDetectionMode` and `detectChanges` methods.
      </>
    )
  },
  {
    title: 'Event Programming',
    description: (
      <>
        It facilitates interaction with `Object3D` by adding a series of programmable events. <br />
        Interaction events work similarly to DOM events, with the same propagation and methods such as `preventDefault` or `stopPropagation`. <br />
      </>
    )
  },
  {
    title: 'Focus and Blur',
    description: (
      <>
        Implements focus handling and related events to handle certain interactions more easily. <br />
        By setting the value of the `focusable` property of an `Object3D` you can determine whether it can receive focus.
      </>
    )
  },
  {
    title: 'Drag and Drop',
    description: (
      <>
        Implements drag and drop handling and related events by adding two properties to each `Object3D`: <br />
        `draggable`: makes an object draggable. <br />
        `findDropTarget`: determines whether intersections with drop targets will be checked during dragging. <br />
        The drag can be cancelled by pressing 'Esc'.
      </>
    )
  },
  {
    title: 'Hitbox Functionality',
    description: (
      <>
        Hitboxes can be used to handle a different intersection area or to simplify intersection calculations.
      </>
    )
  },
  {
    title: 'Raycasting Options',
    description: (
      <>
        It is possible to choose between continuous raycasting (every frame) or raycasting only during mouse movement, providing the flexibility to optimise raycasting operations according to application requirements. <br />
        In addition, it is possible to choose which objects can be intersected, setting `interceptByRaycaster` property.
      </>
    )
  },
  {
    title: 'Tweening',
    description: (
      <>
        Implements smooth animations effortlessly with built-in tweening functionality. `Vector3`, `Euler`, `Quaternion`, `Color` are supported.
      </>
    )
  },
  {
    title: 'Simplified InstancedMesh',
    description: (
      <>
        With the class `InstancedMesh2` it is possible to handle each sub-entity of an `InstancedMesh` as if it were an `Object3D`. This makes development much simpler and more intuitive.
      </>
    )
  }
];

function Feature({ title, Svg = null, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(props => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
