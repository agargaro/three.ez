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
    title: 'Events',
    // TODO: aggiungiamo delle imagini?? (così non devono essere perfette solo per dare colore fiditi)
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, 
    description: (
      <>
        Introduces a comprehensive event system designed to enhance interactivity within your 3D scenes. This includes a
        range of events inspired by DOM-like interactions, making it intuitive for developers familiar with web
        development. Additionally, Three-Keko offers a variety of specialized events tailored for 3D environments,
        providing the tools needed to create captivating user experiences.
      </>
    ),
  },
  {
    title: 'Binding',
    description: (
      <>
        Simplify your code structure with the powerful binding capabilities of Three-Keko. Bind properties of different
        objects together, ensuring they stay synchronized without the need for manual updates. This feature is
        particularly useful for creating dynamic relationships between different elements in your scene.
      </>
    ),
  },
  {
    title: 'Customizable Raycasting',
    description: (
      <>
        Three-Keko offers a customizable raycasting feature, empowering you to project rays within your 3D scene to
        identify object intersections. This versatile functionality is indispensable for implementing diverse
        interactive mechanics such as object selection, targeting, and more.{' '}
      </>
    ),
  },
  {
    title: 'Smart Rendering',
    description: <>Executes rendering operations exclusively when required, minimizing unnecessary updates.</>,
  },
  {
    title: 'Hitbox',
    description: (
      <>
        The Hitbox feature simplifies intersection calculations by employing geometries with fewer vertices, effectively
        reducing computational complexity.
      </>
    ),
  },
  {
    title: 'Focus',
    description: <>Implement focus and blur control in your 3D scenes.</>,
  },
  {
    title: 'Drag and Drop',
    description: <>Facilitating object dragging and dropping onto designated drop targets.</>,
  },
  {
    title: 'Tween',
    description: (
      <>Enabling the creation of animations with ease, the Tween feature simplifies the process of animating objects.</>
    ),
  },
];

function Feature({title, Svg=null, description}: FeatureItem) {
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
