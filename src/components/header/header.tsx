import React from 'react';
import Link from 'next/link';
import styles from './header.module.sass';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Project Atlas</h1>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
