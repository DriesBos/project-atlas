'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './sectionlanding.module.sass';
import LogoName from '@/components/icons/logo-name';
import { SectionCounter } from '@/components/section-counter';
import { useGlobalData } from '@/providers/global-data-provider';
import { storyblokEditable, SbBlokData } from '@storyblok/react/rsc';

interface SectionLandingBlok extends SbBlokData {
  images?: Array<{ filename: string; alt?: string }> | string[];
}

interface SectionLandingProps {
  blok: SectionLandingBlok;
}

const SectionLanding: React.FunctionComponent<SectionLandingProps> = ({
  blok,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const slideInterval = 1500; // 1.5 seconds
  const { globalData } = useGlobalData();

  useEffect(() => {
    // Don't run slideshow if no blok or no images or images not loaded yet
    if (!blok || !blok.images || blok.images.length === 0 || !imagesLoaded)
      return;

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
        prevIndex === (blok.images?.length || 0) - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };
  }, [currentImageIndex, blok, imagesLoaded]);

  // Don't render if no blok data
  if (!blok) {
    return null;
  }

  return (
    <section
      className={`${styles.landing} animateSectionBlock`}
      {...storyblokEditable(blok)}
    >
      <div className={styles.sectionCounter}>
        <p>{globalData.companyname}</p>
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
        {blok.images && blok.images.length > 0 ? (
          blok.images.map((src, index) => {
            const imageSrc = typeof src === 'string' ? src : src.filename;
            const imageAlt =
              typeof src === 'object' && src.alt
                ? src.alt
                : `Slideshow image ${index + 1}`;

            return (
              <Image
                key={index}
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="100vw"
                quality={85}
                priority={index === 0} // Only prioritize the first image
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                className={index === currentImageIndex ? 'active' : ''}
                onLoad={() => {
                  // Only start slideshow when first image loads
                  if (index === 0 && !imagesLoaded) {
                    setImagesLoaded(true);
                  }
                }}
                style={{
                  objectFit: 'cover',
                  opacity: index === currentImageIndex ? 1 : 0,
                  transition: 'opacity 0.1s ease-in-out',
                }}
              />
            );
          })
        ) : (
          <div className={styles.placeholder}>
            <p>No images available</p>
          </div>
        )}
        {blok.images && blok.images.length > 0 && imagesLoaded && (
          <div className={styles.progressIndicator}>
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionLanding;
