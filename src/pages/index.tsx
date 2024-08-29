import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { translate } from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {translate({
            id: 'homepage.hero.title',
            message: 'A Code Driven LowCode Builder Framework',
          })}
        </h1>
        <p className="hero__subtitle">
          {translate({
            id: 'homepage.hero.subtitle',
            message: 'Develop low-code app on your codebase.',
          })}
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            {translate({
              id: 'homepage.hero.button.document',
              message: 'Getting Started',
            })}
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://tango-demo.musicfe.com/designer/">
            {translate({
              id: 'homepage.hero.button.playground',
              message: 'Try a Demo',
            })}
          </Link>
        </div>
        <div className={styles.heroImageBox}>
          <img
            className={styles.heroImage}
            src="img/builder-preview.png"
            alt="preview"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({
        id: 'homepage.hero.title',
        message: 'Code Driven LowCode Builder',
      })}
      description={translate({
        id: 'homepage.hero.subtitle',
        message: 'Description will go into a meta tag in <head /> ',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
