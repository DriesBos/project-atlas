'use client';

import { SbBlokData } from '@storyblok/react/rsc';
import { useState, useEffect } from 'react';
import styles from './blokohio.module.sass';
import { SectionCounter } from '@/components/section-counter';

interface BlokOhioProps extends SbBlokData {
  title?: string;
  text?: string;
  tag?: string;
}

interface BlokOhioProps {
  blok: BlokOhioProps;
}

const BlokOhio: React.FunctionComponent<BlokOhioProps> = ({ blok }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Function to check if window width is 900px or more
  const checkDesktopWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 900;
    }
    return false;
  };

  useEffect(() => {
    // Set initial state
    setIsDesktop(checkDesktopWidth());

    // Handle window resize
    const handleResize = () => {
      setIsDesktop(checkDesktopWidth());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop && (
        <div className={`${styles.sectionCounter} ${styles.desktop}`}>
          <p>{blok.tag}</p>
          <SectionCounter />
        </div>
      )}
      <h2>{blok.title}</h2>
      <p>{blok.text}</p>
    </>
  );
};

export default BlokOhio;
