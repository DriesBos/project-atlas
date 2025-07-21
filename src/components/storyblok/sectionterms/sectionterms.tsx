import styles from './sectionterms.module.sass';
import { SectionCounter } from '../../section-counter';
import { storyblokEditable, SbBlokData } from '@storyblok/react/rsc';
import Markdown from '../../markdown/markdown';

interface SectionTermsBlok extends SbBlokData {
  tag?: string;
  title?: string;
  content?: string;
}

interface SectionTermsProps {
  blok: SectionTermsBlok;
}

const SectionTerms: React.FunctionComponent<SectionTermsProps> = ({ blok }) => {
  console.log('SectionTerms Blok:', blok);
  return (
    <section
      className={`${styles.sectionTerms} animateSectionBlock`}
      id="sectionTerms"
      {...storyblokEditable(blok)}
    >
      <div className={styles.sectionCounter}>
        <p>{blok.tag}</p>
        <SectionCounter />
      </div>
      <div className={styles.title}>
        <h2>{blok.title}</h2>
      </div>
      <div className={styles.content}>
        {blok.content && <Markdown content={blok.content} />}
      </div>
    </section>
  );
};

export default SectionTerms;
