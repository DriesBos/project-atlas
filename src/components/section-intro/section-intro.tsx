import { SectionCounter } from '../section-counter';
import styles from './section-intro.module.sass';
import Button from '@/components/button/button';

const SectionIntro = () => {
  return (
    <section className={`${styles.sectionIntro} animateSectionBlock`}>
      <div className={styles.sectionCounter}>
        <p>Welcome</p>
        <SectionCounter />
      </div>

      <div className={styles.slogan}>
        <h2>A New Grid for a New Amerika.</h2>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.copy}>
          <p>
            We’re building a new grid for a new Amerika. One that’s faster,
            cheaper, and more reliable than ever before. One that’s built on
            innovation, collaboration, and the power of the people.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <Button>Join Us</Button>
        </div>
      </div>
    </section>
  );
};
export default SectionIntro;
