import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero shadow--lw', styles.heroBanner)}>
      <div className="container">
        <h1 className="blurb">
          The General Purpose Zero-Knowledge VM.<br />
          Prove any Computation. <br />
          Verify Instantly.
        </h1>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} : General-Purpose Verifiable Computing`}
      description="Zero-Knowledge powered VM based on the RISC-V instruction set.">
      <img className={styles.large} style={{width : '100%'}} src={require('@site/static/img/banner.png').default} alt="Risc0 Logo"/>
      <img className={styles.small} style={{width : '100%'}} src={require('@site/static/img/banner-small.png').default} alt="Risc0 Logo"/>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
