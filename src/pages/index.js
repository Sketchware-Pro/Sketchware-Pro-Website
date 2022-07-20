import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.hero} data-theme="dark">
    <img
            alt={{message: 'Sketchware Pro with Keytar'}}
            className={styles.heroLogo}
            src={('/img/logo.png')}
            width="200"
            height="200"
          />
          
      <div className="container">
        <h1 className={styles.heroProjectTagline}><p className={styles.heroTitleTextHtml}>Build <b>Android</b> Apps <b>quickly</b>, focus on your <b>content</b></p></h1>

        <div className={styles.indexCtas}>
          <Link
            className="button button--primary"
            to="/docs">
            Get Started
          </Link>
          
          
                    <Link
            className="button button--info"
            to="https://github.com/Sketchware-Pro/Sketchware-Pro/releases">
            Try for Free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Sketchware Pro's official website">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
