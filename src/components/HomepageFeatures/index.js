import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/mountain.svg').default,
    description: (
      <>
        Sketchware Pro was designed to be easily installed and
        used to get your app up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/tree.svg').default,
    description: (
      <>
        Sketchware Pro lets you focus on your apps, and we&apos;ll do the chores. Go
        ahead and get started.
      </>
    ),
  },
  {
    title: 'Free Forever',
    Svg: require('@site/static/img/freelancer.svg').default,
    description: (
      <>
        Sketchware Pro is completely free. Sketchware Pro's source code is available on our GitHub repository.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
