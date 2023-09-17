import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { examples } from './examples';
import CodeBlock from '@theme/CodeBlock';
import { Main } from './intro-cube/main';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  code: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Automatic Resize Handling',
    description: (
      <>
        Automatically resizes <code>Renderer</code>, <code>Camera</code>, <code>EffectComposer</code>. Using the <code>rendererResize</code> event, you can easily set the resolution for custom
        shaders.
      </>
    ),
    code: examples[0],
  },
  {
    title: 'Smart Rendering',
    description: <>Optimize performance by rendering frames only when necessary, reducing computational load.</>,
    code: examples[0],
  },
  {
    title: 'Simplified Multiple Rendering',
    description: <>Easily handle rendering for multiple scenes or viewports on a single canvas.</>,
    code: examples[0],
  },
  {
    title: 'Object3D Property Binding',
    description: (
      <>
        Simplify <code>Object3D</code> property management.
      </>
    ),
    code: examples[0],
  },
  {
    title: 'Event Programming',
    description: (
      <>
        Add interactions to <code>Object3D</code> through programmable events, similar to <code>DOM events</code>. It is possible to bind events on changing position, scale, rotation, visibility and
        enabled state.
      </>
    ),
    code: examples[0],
  },
  {
    title: 'Focus and Blur',
    description: <>Enhance interactivity with focus and blur events.</>,
    code: examples[0],
  },
  {
    title: 'Drag and Drop',
    description: <>Seamlessly integrate drag and drop functionality.</>,
    code: examples[0],
  },
  {
    title: 'Hitbox Functionality',
    description: <>Utilize hitboxes for customized intersections or simplified calculations.</>,
    code: examples[0],
  },
  {
    title: 'Raycasting Options',
    description: <>Choose between continuous or mouse movement-based raycasting, optimizing intersection operations.</>,
    code: examples[0],
  },
  {
    title: 'Tweening',
    description: <>Create smooth animations effortlessly with built-in tweening.</>,
    code: examples[0],
  },
  {
    title: 'Simplified InstancedMesh',
    description: (
      <>
        Manage <code>InstancedMesh</code> instances as if they were <code>Object3D</code>, simplifying creation and manipulation.
      </>
    ),
    code: examples[0],
  },
];

function Feature({ title, Svg = null, description, code }: FeatureItem) {
  return (
    <div className={clsx('col col--10')}>
      <div className="text--center">{Svg && <Svg className={styles.featureSvg} role="img" />}</div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <CodeBlock className={styles.transparentCodeBlock} language="ts">
        {code}
      </CodeBlock>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const [examplesCode, setExamplesCode] = useState(examples);
  const [index, setIndex] = useState(0);
  let main: Main;
  useEffect(() => {
    // Update the document title using the browser API
    main = new Main();
  });

  function back(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    main.back();
  }

  function next(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    main.next();
  }

  return (
    <section className={styles.featureContainer}>
      <section className={styles.features}>
        <div>
          <button onClick={back}>⬆️</button>
          <button onClick={next}>⬇️</button>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </section>
      <canvas id="cubecanvas" className={styles.cubeCanvas}></canvas>
    </section>
  );
}
