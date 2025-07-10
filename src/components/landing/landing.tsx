'use client';

import { useState, useEffect } from 'react';
import styles from './landing.module.sass';
import LogoName from '@/components/icons/logo-name';
import { SectionCounter } from '@/components/section-counter';

const images = [
  '/slideshow/one.jpg',
  '/slideshow/two.jpg',
  '/slideshow/three.jpg',
  '/slideshow/four.jpg',
  '/slideshow/five.jpg',
  '/slideshow/six.jpg',
];

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideInterval = 1500; // 1.5 seconds

  useEffect(() => {
    console.log('Current image index:', currentImageIndex);
    console.log('Images array:', images);

    // Reset progress when slide changes
    setProgress(0);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (slideInterval / 50); // Update every 50ms
        return prev >= 100 ? 100 : prev + increment;
      });
    }, 50);

    // Slide transition
    const slideTimer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };
  }, [currentImageIndex]);

  return (
    <div className={`${styles.landing} animateSectionBlock`}>
      <div className={styles.bottomBar}>
        <p>Atlas Project</p>
        <SectionCounter />
      </div>
      <div className={styles.circleContainer}>
        <div className={`${styles.circleItem} ${styles.spinningX}`} />
        <div className={`${styles.circleItem} ${styles.spinningY}`} />
        <div className={styles.circleItem} />
      </div>
      <div className={styles.textContainer}>
        <LogoName />
      </div>
      <div className={styles.slideshow}>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Slideshow image ${index + 1}`}
            className={index === currentImageIndex ? 'active' : ''}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 0.1s ease-in-out',
            }}
          />
        ))}
        <div className={styles.progressIndicator}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
