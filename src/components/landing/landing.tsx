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

  useEffect(() => {
    console.log('Current image index:', currentImageIndex);
    console.log('Images array:', images);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 165); // 0.1s timer

    return () => clearInterval(interval);
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
      </div>
    </div>
  );
};

export default Landing;
