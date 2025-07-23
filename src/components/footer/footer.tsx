'use client';

import styles from './footer.module.sass';
import Logo from '@/components/icons/logo';
import TimeDisplays from '@/components/time-displays/time-displays';
import ScreenInfo from '@/components/screen-info';
import ThemeIcon from '@/components/theme-icon/theme-icon';
import Link from 'next/link';
import { useGlobalData } from '@/providers/global-data-provider';
import Markdown from '../markdown/markdown';
import IconUp from '@/components/icons/icon-up';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { globalData } = useGlobalData();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={`${styles.footer} footer`} id="footer">
      <div className={styles.container_top}>
        <div className={styles.content}>
          <div className={`${styles.columnOne} ${styles.column}`}>
            <Logo />
            <h2 className={styles.description}>{globalData.slogan}</h2>
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
                  LinkedIn
                </a>
                <a
                  className={styles.links}
                  target="_blank"
                  href={`${globalData.twitter}`}
                >
                  Twitter
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
          <div className={styles.icons}>
            <li className={styles.scrollUpIcon} onClick={handleScrollToTop}>
              <IconUp />
            </li>
            <li className={styles.themeIcon}>
              <ThemeIcon />
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
