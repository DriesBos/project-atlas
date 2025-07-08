import React from 'react';
import Link from 'next/link';
import styles from './header.module.sass';
import Logo from '@/components/icons/logo';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                HOME
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/play" className={styles.navLink}>
                PLAYGROUND
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
