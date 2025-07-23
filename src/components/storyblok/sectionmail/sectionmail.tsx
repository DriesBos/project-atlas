import styles from './sectionmail.module.sass';
import { SectionCounter } from '../../section-counter';
import { Subscribe } from '@/components/subscribe/subscribe';
import { storyblokEditable, SbBlokData } from '@storyblok/react/rsc';

interface SectionMailBlok extends SbBlokData {
  tag?: string;
  title?: string;
}

interface SectionMailProps {
  blok: SectionMailBlok;
}

const SectionMail: React.FunctionComponent<SectionMailProps> = ({ blok }) => {
  return (
    <section
      className={`${styles.sectionMail} animateSectionBlock`}
      id="sectionMail"
      {...storyblokEditable(blok)}
    >
      <div className={styles.sectionCounter}>
        <p>{blok.tag}</p>
        <SectionCounter />
      </div>
      <div className={`${styles.column} ${styles.columnOne}`}>
        <h2>Join Us</h2>
      </div>
      <div className={`${styles.column} ${styles.columnTwo}`}>
        <h1>{blok.title}</h1>
        <Subscribe />
      </div>
    </section>
  );
};

export default SectionMail;
