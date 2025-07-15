'use client';

import styles from './footer.module.sass';
import Logo from '@/components/icons/logo';
import TimeDisplays from '@/components/time-displays/time-displays';
import ScreenInfo from '@/components/screen-info';
import ThemeIcon from '@/components/theme-icon/theme-icon';
import { useCallback } from 'react';
import { scrollToSection } from '@/utils/scrollToSection';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

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
              <p onClick={() => handleScrollToSection('sectionIntro')}>About</p>
              <p onClick={() => handleScrollToSection('sectionNumbers')}>
                Data
              </p>
              <p onClick={() => handleScrollToSection('sectionProblems')}>
                Issues
              </p>
              <p onClick={() => handleScrollToSection('sectionSolutions')}>
                Solutions
              </p>
              <p onClick={() => handleScrollToSection('sectionOhio')}>Ohio</p>
              <p onClick={() => handleScrollToSection('sectionMail')}>
                Join Us
              </p>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>
              <p>Online</p>
            </div>
            <div className={styles.columnLinks}>
              <a
                className={styles.link}
                target="_blank"
                href="https://www.linkedin.com/in/andrew-burchwell-a7284994/"
              >
                LinkedIn
              </a>
              <a
                className={styles.link}
                target="_blank"
                href="https://x.com/AndrewBurchwell"
              >
                Twitter
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>
              <p>Address</p>
            </div>
            <div className={styles.columnLinks}>
              <a href="mailto:info@americatransmission.org">
                info@americatransmission.org
              </a>
              <p>
                34 S. 3rd St., Suite 100,
                <br />
                Columbus, OH 43215
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_bottom}>
        <ul>
          <li className={styles.copyright}>
            ©{currentYear} American Transmission Leadership and Security
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
