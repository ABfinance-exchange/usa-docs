import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          ABFinance <span className={styles.heroTitleAccent}>API</span><br />Documentation
        </h1>
        <p className={styles.heroSubtitle}>Build powerful trading integrations with our APIs</p>
        <div className={styles.buttons}>
          <Link
            className={styles.heroButton}
            to="/v1/guide">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="ABFinance API Documentation">
      <HomepageHeader />
    </Layout>
  );
}
