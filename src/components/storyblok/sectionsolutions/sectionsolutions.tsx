'use client';

import {
  storyblokEditable,
  SbBlokData,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { useState, useEffect } from 'react';
import styles from './sectionsolutions.module.sass';
import { SectionCounter } from '@/components/section-counter';

interface SectionSolutionsBlok extends SbBlokData {
  body?: SbBlokData[];
  tag?: string;
  title?: string;
}

interface SectionSolutionsProps {
  blok: SectionSolutionsBlok;
}

const SectionSolutions: React.FunctionComponent<SectionSolutionsProps> = ({
  blok,
}) => {
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const totalRows = 4; // Speed, Innovation, Abundance, Security

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRowIndex((prevIndex) => (prevIndex + 1) % totalRows);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [totalRows]);

  return (
    <section
      className={styles.sectionSolutions}
      id="sectionSolutions"
      {...storyblokEditable(blok)}
    >
      <div className={styles.sectionCounter}>
        <p>{blok.tag}</p>
        <SectionCounter />
      </div>
      <div className={`${styles.column} ${styles.columnOne}`}>
        <h2>{blok.title}</h2>
      </div>
      <div className={`${styles.column} ${styles.columnTwo}`}>
        {blok.body?.map((nestedBlok, index) => (
          <div
            className={`${styles.columnRow} 
              ${activeRowIndex === index ? styles.active : ''}`}
            data-index={index}
            key={nestedBlok._uid}
          >
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default SectionSolutions;
