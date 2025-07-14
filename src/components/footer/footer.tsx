'use client';

import Link from 'next/link';
import styles from './footer.module.sass';
import Logo from '@/components/icons/logo';
import TimeDisplays from '@/components/time-displays/time-displays';
import ScreenInfo from '@/components/screen-info';
import ThemeIcon from '@/components/theme-icon/theme-icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} footer`} id="footer">
      <div className={styles.container_top}>
        <div className={styles.content}>
          <div className={`${styles.columnOne} ${styles.column}`}>
            <Logo />
            <p className={styles.description}>
              Powering the New American Industrial Base.
            </p>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>
              <p>Site</p>
            </div>
            <div className={styles.columnLinks}>
              <p>about</p>
              <p>data</p>
              <p>Issues</p>
              <p>Solutions</p>
              <p>Ohio</p>
              <p>Join Us</p>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>
              <p>Unite</p>
            </div>
            <div className={styles.columnLinks}>
              <Link href="/" className={styles.link}>
                Twitter
              </Link>
              <Link href="/play" className={styles.link}>
                LinkedIn
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>
              <p>Contact</p>
            </div>
            <div className={styles.columnLinks}>
              <p>info@projectatlas.com</p>
              <p>
                2431 Main St, Findlay,
                <br />
                Ohio, 45840
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_bottom}>
        <p className={styles.copyright}>
          ©{currentYear} American Transmission Leadership and Security
        </p>
        <TimeDisplays className={styles.timeZones} />
        <div className={styles.userinfoContainer}>
          <p className={styles.screenres}>
            <ScreenInfo />
          </p>
          <ThemeIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
