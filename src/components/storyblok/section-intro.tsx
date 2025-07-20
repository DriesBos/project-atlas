'use client';

import { storyblokEditable, SbBlokData } from '@storyblok/react/rsc';
import { SectionCounter } from '../section-counter';
import styles from './section-intro.module.sass';
import Button from '@/components/button/button';
import { useCallback } from 'react';
import { scrollToSection } from '@/utils/scrollToSection';

interface SectionIntroBlok extends SbBlokData {
  component: 'section-intro';
  title?: string;
  text?: string;
  tag?: string;
}

interface SectionIntroProps {
  blok: SectionIntroBlok;
}

const SectionIntro = ({ blok }: SectionIntroProps) => {
  const handleScrollToSection = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return (
    <section
      className={`${styles.sectionIntro} animateSectionBlock`}
      id="sectionIntro"
      {...storyblokEditable(blok)}
    >
      <div className={styles.sectionCounter}>
        <p>{blok.tag}</p>
        <SectionCounter />
      </div>

      <div className={styles.slogan}>
        <h2>{blok.title}</h2>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.copy}>
          <p>{blok.text}</p>
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
