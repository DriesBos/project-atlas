'use client';

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
              <p>Contact</p>
            </div>
            <div className={styles.columnLinks}>
              <a href="mailto:americantransmission@protonmail.com">
                americantransmission@protonmail.com
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
