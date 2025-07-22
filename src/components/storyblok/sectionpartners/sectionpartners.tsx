'use client';

import { storyblokEditable, SbBlokData } from '@storyblok/react/rsc';
import Image from 'next/image';
import { SectionCounter } from '../../section-counter';
import styles from './sectionpartners.module.sass';

interface SectionPartnersBlok extends SbBlokData {
  tag?: string;
  title?: string;
  partnerlogos?: Array<{ filename: string; alt?: string }> | string[];
}

interface SectionPartnersProps {
  blok: SectionPartnersBlok;
}

const SectionPartners: React.FunctionComponent<SectionPartnersProps> = ({
  blok,
}) => {
  console.log('SectionPartners blok:', blok);

  // Create an array of exactly 100 images by repeating the partner logos
  const createLogoArray = () => {
    if (!Array.isArray(blok.partnerlogos) || blok.partnerlogos.length === 0) {
      return [];
    }

    const logos = blok.partnerlogos;
    const targetCount = 100;
    const repeatedLogos = [];

    for (let i = 0; i < targetCount; i++) {
      repeatedLogos.push(logos[i % logos.length]);
    }

    return repeatedLogos;
  };

  const logoArray = createLogoArray();

  return (
    <section
      className={`${styles.sectionPartners} animateSectionBlock`}
      id="sectionPartners"
      {...storyblokEditable(blok)}
    >
      <div className={styles.sectionCounter}>
        <p>{blok.tag}</p>
        <SectionCounter />
      </div>

      <div className={styles.title}>
        <h2>{blok.title}</h2>
      </div>

      <div className={styles.logos}>
        <div className={`${styles.logosContainer} ${styles.infiniteScroll}`}>
          {logoArray.map((item, index) => {
            // Handle both string and object types
            const logoSrc = typeof item === 'string' ? item : item.filename;
            const logoAlt = typeof item === 'string' ? '' : item.alt || '';

            return (
              <div key={index} className={styles.logo}>
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={120}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionPartners;
