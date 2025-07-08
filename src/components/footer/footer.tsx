import React from 'react';
import Link from 'next/link';
import styles from './footer.module.sass';
import Logo from '@/components/icons/logo';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <Logo />
            <p className={styles.description}>
              Building innovative solutions for the modern web.
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Legal</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.link}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Project Atlas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
