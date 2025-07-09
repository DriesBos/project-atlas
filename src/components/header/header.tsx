import React from 'react';
import styles from './header.module.sass';
import Logo from '@/components/icons/logo';
import IconPlus from '@/components/icons/icon-plus';

const Header = ({}) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.logo} ${styles.block}`}>
        <Logo />
      </div>
      <div className={`${styles.join} ${styles.block}`}>
        <div>JOIN US</div>
      </div>
      <div className={`${styles.nav} ${styles.block}`}>
        <IconPlus />
      </div>
    </header>
  );
};

export default Header;
