import React from 'react';
import Link from 'next/link';
import styles from './footer.module.sass';
import Logo from '@/components/icons/logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} footer`}>
      <div className={styles.container_top}>
        <div className={styles.content}>
          <div className={`${styles.columnOne} ${styles.column}`}>
            <Logo />
            <p className={styles.description}>A New Grid for a New Amerika.</p>
          </div>

          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Site</h2>
            <Link href="/" className={styles.link}>
              HOME
            </Link>
            <Link href="/play" className={styles.link}>
              PLAYGROUND
            </Link>
          </div>

          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Site</h2>
            <Link href="/" className={styles.link}>
              HOME
            </Link>
            <Link href="/play" className={styles.link}>
              PLAYGROUND
            </Link>
          </div>

          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Site</h2>
            <Link href="/" className={styles.link}>
              HOME
            </Link>
            <Link href="/play" className={styles.link}>
              PLAYGROUND
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.container_bottom}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} Project Atlas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
