'use client';

import styles from './footer.module.sass';
import Logo from '@/components/icons/logo';
import TimeDisplays from '@/components/time-displays/time-displays';
import ScreenInfo from '@/components/screen-info';
import ThemeIcon from '@/components/theme-icon/theme-icon';
import Link from 'next/link';
import { useGlobalData } from '@/providers/global-data-provider';
import Markdown from '../markdown/markdown';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { globalData } = useGlobalData();

  return (
    <footer className={`${styles.footer} footer`} id="footer">
      <div className={styles.container_top}>
        <div className={styles.content}>
          <div className={`${styles.columnOne} ${styles.column}`}>
            <Logo />
            <p className={styles.description}>{globalData.slogan}</p>
          </div>

          <div className={`${styles.column} ${styles.columnTwo}`}>
            <div className={styles.columnTitle}>
              <p>Site</p>
            </div>
            <div className={styles.columnLinks}>
              <Link className={styles.links} href="/">
                Home
              </Link>
              <Link className={styles.links} href="/terms">
                Privacy Policy
              </Link>
            </div>
          </div>

          {(globalData.linkedin || globalData.twitter) && (
            <div className={styles.column}>
              <div className={styles.columnTitle}>
                <p>Online</p>
              </div>
              <div className={styles.columnLinks}>
                <a
                  className={styles.links}
                  target="_blank"
                  href={`${globalData.linkedin}`}
                >
                  {globalData.linkedin}
                </a>
                <a
                  className={styles.links}
                  target="_blank"
                  href={`${globalData.twitter}`}
                >
                  {globalData.twitter}
                </a>
              </div>
            </div>
          )}

          {(globalData.email || globalData.address) && (
            <div className={styles.column}>
              <div className={styles.columnTitle}>
                <p>Address</p>
              </div>
              <div className={styles.columnLinks}>
                <a className={styles.links} href={`mailto:${globalData.email}`}>
                  {globalData.email}
                </a>
                {globalData.address && (
                  <Markdown content={globalData.address} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.container_bottom}>
        <ul>
          <li className={styles.copyright}>
            ©{currentYear} {globalData.copyrightname}
          </li>
          <li className={styles.userinfoContainer}>
            <TimeDisplays className={styles.timeZones} />
          </li>
          <li className={styles.screenres}>
            <ScreenInfo />
          </li>
          <li className={styles.themeIcon}>
            <ThemeIcon />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
