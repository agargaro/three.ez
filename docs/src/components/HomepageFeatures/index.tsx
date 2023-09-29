import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { examples } from './examples';
import CodeBlock from '@theme/CodeBlock';
import { Main } from './intro-cube/main';

type FeatureItem = {
  title: string;
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

interface FeatureProps extends FeatureItem {
  className: string;
}
function Feature({ title, description, code, className }: FeatureProps) {
  return (
    <div className={className} data-title={title}>
      <div className="text--center">
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
  let main: Main;

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = FeatureList.findIndex((feature) => feature.title === entry.target.getAttribute('data-title'));
        if (index !== main.currentStep) {
          if (index !== -1) {
            if (index > main.currentStep) {
              main.next();
            } else {
              main.back();
            }
          }
        }
      }
    });
  };

  useEffect(() => {
    main = new Main();
    const options = {
      root: document.querySelector('#scrollcontainer'),
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    FeatureList.forEach((feature) => {
      const element = document.querySelector(`[data-title="${feature.title}"]`);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <section className={styles.featuresContainer}>
        {FeatureList.map((props) => (
          <Feature key={props.title} {...props} className={styles.features} />
        ))}
      </section>
      <canvas id="cubecanvas" className={styles.cubeCanvas}></canvas>
    </div>
  );
}
