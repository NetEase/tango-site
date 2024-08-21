import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
}

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.code-driven',
      message: 'Code Driven',
    }),
    Svg: require('@site/static/img/html-d.svg').default,
    description: (
      <Translate id="homepage.features.code-driven-content">
        Provide low-code capabilities based on the project source code and offer
        source-level custom extension capabilities.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.low-code',
      message: 'Code In, Code Out',
    }),
    Svg: require('@site/static/img/digital-content-4.svg').default,
    description: (
      <Translate id="homepage.features.low-code-content">
        Source code in, source code out, with the ability to freely switch
        between visual and source code views at any time.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.outbox',
      message: 'Out of the Box',
    }),
    Svg: require('@site/static/img/cpu-f.svg').default,
    description: (
      <Translate id="homepage.features.outbox-content">
        Provide a flexible and easy-to-use designer framework that supports
        developers in freely extending and encapsulating functionality.
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
