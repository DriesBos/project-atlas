'use client';

import {
  storyblokEditable,
  SbBlokData,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import styles from './sectionnumbers.module.sass';
import { SectionCounter } from '../../section-counter';
import { useState, useEffect } from 'react';

interface SectionNumbersBlok extends SbBlokData {
  body?: SbBlokData[];
  tag?: string;
}

interface SectionNumbersProps {
  blok: SectionNumbersBlok;
}

const SectionNumbers: React.FunctionComponent<SectionNumbersProps> = ({
  blok,
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsDesktop(windowWidth > 950);
      setIsMobile(windowWidth <= 950);
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create the three arrays based on body
  const arrayOne = blok.body ? [blok.body[0]].filter(Boolean) : [];
  const arrayTwo = blok.body ? blok.body.slice(1) : [];
  const arrayThree = blok.body || [];

  return (
    <section
      className={`${styles.sectionNumbers} animateSectionBlock`}
      id="sectionNumbers"
      {...storyblokEditable(blok)}
    >
      <div className={styles.sectionCounter}>
        <p>{blok.tag}</p>
        <SectionCounter />
      </div>
      {isDesktop && (
        <div
          className={`${styles.column} ${styles.columnOne} ${styles.desktop}`}
        >
          {arrayOne.map((nestedBlok) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      )}
      <div className={`${styles.column} ${styles.columnTwo}`}>
        {isDesktop && (
          <>
            {arrayTwo.map((nestedBlok) => (
              <StoryblokServerComponent
                blok={nestedBlok}
                key={nestedBlok._uid}
              />
            ))}
          </>
        )}
        {isMobile && (
          <>
            {arrayThree.map((nestedBlok) => (
              <StoryblokServerComponent
                blok={nestedBlok}
                key={nestedBlok._uid}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default SectionNumbers;
