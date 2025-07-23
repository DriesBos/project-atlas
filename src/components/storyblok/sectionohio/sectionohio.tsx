'use client';

import {
  storyblokEditable,
  SbBlokData,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { useState, useEffect } from 'react';
import styles from './sectionohio.module.sass';
import { SectionCounter } from '@/components/section-counter';

interface SectionOhioBlok extends SbBlokData {
  body?: SbBlokData[];
  tag?: string;
  title?: string;
}

interface SectionOhioProps {
  blok: SectionOhioBlok;
}

const SectionOhio: React.FunctionComponent<SectionOhioProps> = ({ blok }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if window width is less than 900px
  const checkMobileWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 900;
    }
    return false;
  };

  useEffect(() => {
    // Set initial state
    setIsMobile(checkMobileWidth());

    // Handle window resize
    const handleResize = () => {
      setIsMobile(checkMobileWidth());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className={styles.sectionOhio}
      id="sectionOhio"
      {...storyblokEditable(blok)}
    >
      {isMobile && (
        <div className={`${styles.sectionCounter} ${styles.mobile}`}>
          <p>{blok.tag}</p>
          <SectionCounter />
        </div>
      )}
      {blok.body?.map((nestedBlok, index) => (
        <div
          className={`${styles.column} animateSectionBlock`}
          key={nestedBlok._uid}
          data-index={index}
        >
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        </div>
      ))}
    </section>
  );
};
export default SectionOhio;
