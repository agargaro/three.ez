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
        Automatically resizes <code>Renderer</code>, <code>Camera</code>, <code>EffectComposer</code>.
        Using the <code>rendererResize</code> event, you can easily set the resolution for custom shaders.
      </>
    )
  },
  {
    title: 'Smart Rendering',
    description: (
      <>
        Optimize performance by rendering frames only when necessary, reducing computational load.
      </>
    )
  },
  {
    title: 'Simplified Multiple Rendering',
    description: (
      <>
        Easily handle rendering for multiple scenes or viewports on a single canvas.
      </>
    )
  },
  {
    title: 'Object3D Property Binding',
    description: (
      <>
        Simplify <code>Object3D</code> property management.
      </>
    )
  },
  {
    title: 'Event Programming',
    description: (
      <>
        Add interactions to <code>Object3D</code> through programmable events, similar to <code>DOM events</code>.
        It is possible to bind events on changing position, scale, rotation, visibility and enabled state.
      </>
    )
  },
  {
    title: 'Focus and Blur',
    description: (
      <>
        Enhance interactivity with focus and blur events.
      </>
    )
  },
  {
    title: 'Drag and Drop',
    description: (
      <>
        Seamlessly integrate drag and drop functionality.
      </>
    )
  },
  {
    title: 'Hitbox Functionality',
    description: (
      <>
        Utilize hitboxes for customized intersections or simplified calculations.
      </>
    )
  },
  {
    title: 'Raycasting Options',
    description: (
      <>
        Choose between continuous or mouse movement-based raycasting, optimizing intersection operations.
      </>
    )
  },
  {
    title: 'Tweening',
    description: (
      <>
        Create smooth animations effortlessly with built-in tweening.
      </>
    )
  },
  {
    title: 'Simplified InstancedMesh',
    description: (
      <>
        Manage <code>InstancedMesh</code> instances as if they were <code>Object3D</code>, simplifying creation and manipulation.
      </>
    )
  },
  {
    title: 'Asset Management',
    description: (
      <>
       Efficiently load and manage external assets and resources for your 3D projects.
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
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
