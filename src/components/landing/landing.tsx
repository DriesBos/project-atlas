import styles from './landing.module.sass';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.circleContainer}>
        <div className={`${styles.circleItem} ${styles.spinningX}`} />
        <div className={`${styles.circleItem} ${styles.spinningY}`} />
        <div className={styles.circleItem} />
      </div>
    </div>
  );
};

export default Landing;
