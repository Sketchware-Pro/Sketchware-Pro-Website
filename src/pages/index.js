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
            Download Now
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
              <div>
          <div className={styles.banner}>
                    <p id="homepage.banner.link">
                      Sketchware Pro is a mod. <Link to="/about">Tap to read more.
                   </Link> </p>
          </div>
        </div>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
