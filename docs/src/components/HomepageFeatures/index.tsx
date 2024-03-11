import CodeBlock from '@theme/CodeBlock';
import { HtmlHTMLAttributes, default as React, useEffect, useRef } from 'react';
import { examples } from './examples';
import { Main } from './intro-cube/main';
import styles from './styles.module.css';
import './style.css';

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
        Automatically resizes <code>Renderer</code>, <code>Camera</code>, <code>EffectComposer</code>. Using the <code>viewportResize</code> event, you can easily set the resolution for custom
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
  {
    title: 'Asset Management',
    description: <>Efficiently load and manage external assets and resources for your 3D projects.</>,
    code: examples[0],
  },
];

interface FeatureProps extends FeatureItem {
  className: string;
}
function Feature({ title, description, code, className }: FeatureProps) {
  return (
    <div className={className} data-title={title}>
      <div className={styles.featureDesc}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.windowsCode}>
        <CodeBlock className={styles.transparentCodeBlock} language="ts">
          {code}
        </CodeBlock>
        <div className={styles.windowsCodeHeader}>
          <div className={styles.windowsCodeHeaderDotContainer}>
            <div className={styles.windowsCodeHeaderDot}></div>
            <div className={styles.windowsCodeHeaderDot}></div>
            <div className={styles.windowsCodeHeaderDot}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  let main: Main;
  let showFeature = true;
  const cardContainerRef = useRef(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = FeatureList.findIndex((feature) => feature.title === entry.target.getAttribute('data-title'));
        // if (index !== main.currentStep) {
          // if (index !== -1) {
            // if (index > main.currentStep) {
              // main.next();
            // } else {
              // main.back();
            // }
          // }
        // }
      }
    });
  };

  useEffect(() => {
    // main = new Main();
    showFeature = false;
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

    // Get all card elements as an array
    const cards = Array.from<HTMLDivElement>(cardContainerRef.current.children);

    const handleMouseMove = (e: MouseEvent) => {
      // Get all card elements as an array

      cards.forEach((card: HTMLDivElement) => {
        const rect = card.querySelector('.windowsCode_src-components-HomepageFeatures-styles-module')?.getBoundingClientRect();
        if (rect) {
          // get mouse position
          const x = e.clientX ;
          const y = e.clientY ;
          // console.log(x, y)

          // find the middle
          const middleX = window.innerWidth / 2;
          const middleY = window.innerHeight / 2;
          // console.log(middleX, middleY)

          // get offset from middle as a percentage
          // and tone it down a little
          const offsetX = ((x - middleX) / middleX) * 15;
          const offsetY = ((y - middleY) / middleY) * 15;
          // console.log(offsetX, offsetY);

          // set rotation
          card.style.setProperty('--rotateX', -1 * offsetX + 'deg');
          card.style.setProperty('--rotateY', offsetY + 'deg');
        }
      });
    };

    const currentContainer = cardContainerRef.current;
    // Add mousemove event listener to the card container
    currentContainer.addEventListener('pointermove', handleMouseMove);

    return () => {
      currentContainer.removeEventListener('pointermove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* <canvas id="cubecanvas" className={styles.cubeCanvas}></canvas> */}
      {showFeature && (
        <section className={styles.featuresContainer} ref={cardContainerRef}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} className={styles.features} />
          ))}
        </section>
      )}
    </div>
  );
}
