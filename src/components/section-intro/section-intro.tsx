'use client';

import { SectionCounter } from '../section-counter';
import styles from './section-intro.module.sass';
import Button from '@/components/button/button';
import { useCallback } from 'react';
import { scrollToSection } from '@/utils/scrollToSection';

const SectionIntro = () => {
  const handleScrollToSection = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return (
    <section
      className={`${styles.sectionIntro} animateSectionBlock`}
      id="sectionIntro"
    >
      <div className={styles.sectionCounter}>
        <p>About</p>
        <SectionCounter />
      </div>

      <div className={styles.slogan}>
        <h2>Powering the New American Industrial Base.</h2>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.copy}>
          <p>
            ATLAS is a coalition uniting technologists, industrialists, and
            policymakers to deploy transmission faster than ever before with
            advanced technologies and customer-led development.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <Button onClick={() => handleScrollToSection('sectionMail')}>
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
};
export default SectionIntro;
