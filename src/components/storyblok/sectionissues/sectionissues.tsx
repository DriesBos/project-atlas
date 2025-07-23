import {
  storyblokEditable,
  SbBlokData,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import styles from './sectionissues.module.sass';
import { SectionCounter } from '@/components/section-counter';

interface SectionIssuesBlok extends SbBlokData {
  body?: SbBlokData[];
  tag?: string;
  title?: string;
}

interface SectionIssuesProps {
  blok: SectionIssuesBlok;
}

const SectionIssues: React.FunctionComponent<SectionIssuesProps> = ({
  blok,
}) => {
  return (
    <section
      className={styles.sectionProblems}
      id="sectionProblems"
      {...storyblokEditable(blok)}
    >
      <div className={styles.sectionCounter}>
        <p>{blok.tag}</p>
        <SectionCounter />
      </div>
      <div className={`${styles.column} ${styles.columnOne}`}>
        <h1>{blok.title}</h1>
      </div>
      <div className={`${styles.column} ${styles.columnTwo}`}>
        {blok.body?.map((nestedBlok, index) => (
          <div
            className={styles.columnTwo_Item}
            data-index={index}
            key={nestedBlok._uid}
          >
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default SectionIssues;
