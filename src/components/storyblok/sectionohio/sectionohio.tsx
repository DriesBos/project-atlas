import {
  storyblokEditable,
  SbBlokData,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
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
  return (
    <section
      className={styles.sectionOhio}
      id="sectionOhio"
      {...storyblokEditable(blok)}
    >
      <div className={`${styles.sectionCounter} ${styles.mobile}`}>
        <p>{blok.tag}</p>
        <SectionCounter />
      </div>
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
