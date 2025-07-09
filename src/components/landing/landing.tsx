import styles from './landing.module.sass';
import LogoName from '@/components/icons/logo-name';

const Landing = () => {
  return (
    <div className={`${styles.landing} animateSectionBlock`}>
      <div className={styles.bottomBar}>
        <p>Atlas Project</p>
        <p>S01</p>
      </div>
      <div className={styles.circleContainer}>
        <div className={`${styles.circleItem} ${styles.spinningX}`} />
        <div className={`${styles.circleItem} ${styles.spinningY}`} />
        <div className={styles.circleItem} />
      </div>
      <div className={styles.textContainer}>
        <LogoName />
      </div>
    </div>
  );
};

export default Landing;
