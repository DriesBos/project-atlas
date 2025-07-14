import { Subscribe } from '../subscribe/subscribe';
import styles from './section-mail.module.sass';
import { SectionCounter } from '../section-counter';

const SectionMail = () => {
  return (
    <section
      className={`${styles.sectionMail} animateSectionBlock`}
      id="sectionMail"
    >
      <div className={styles.sectionCounter}>
        <p>Join Us</p>
        <SectionCounter />
      </div>
      <div className={`${styles.column} ${styles.columnOne}`}>
        <h2>Join Us</h2>
      </div>
      <div className={`${styles.column} ${styles.columnTwo}`}>
        <h2> Get Updates from ATLAS</h2>
        <Subscribe />
      </div>
    </section>
  );
};

export default SectionMail;
