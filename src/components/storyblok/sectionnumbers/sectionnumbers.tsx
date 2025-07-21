import {
  storyblokEditable,
  SbBlokData,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import styles from './sectionnumbers.module.sass';
import SectionNumbersBlock from '../bloknumbers/bloknumbers';
import { SectionCounter } from '../../section-counter';

interface SectionNumbersBlok extends SbBlokData {
  body?: SbBlokData[];
  tag?: string;
}

interface SectionNumbersProps {
  blok: SectionNumbersBlok;
}

const SectionNumbers: React.FunctionComponent<SectionNumbersProps> = ({
  blok,
}) => {
  // const animationDuration = 1500; // 2 seconds

  return (
    <section
      className={`${styles.sectionNumbers} animateSectionBlock`}
      id="sectionNumbers"
      {...storyblokEditable(blok)}
    >
      <div className={styles.sectionCounter}>
        <p>{blok.tag}</p>
        <SectionCounter />
      </div>
      <div className={`${styles.column} ${styles.columnOne} ${styles.desktop}`}>
        {/* <SectionNumbersBlock
          number={2600}
          description="Energy projects waiting for grid connections nationwide"
          denominator="Gigawatts"
          large
          animationDelay={0}
          animationDuration={animationDuration}
        /> */}
      </div>
      <div className={`${styles.column} ${styles.columnTwo}`}>
        {blok.body?.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
        {/* 
        <SectionNumbersBlock
          number={2600}
          description="Energy projects waiting for grid connections nationwide"
          denominator="Gigawatts"
          large
          animationDelay={0}
          animationDuration={animationDuration}
          className={styles.mobile}
        />
        <SectionNumbersBlock
          number={55}
          description="New high voltage transmission built in the US in 2023"
          denominator="miles"
          animationDelay={0}
          animationDuration={animationDuration}
        />
        <SectionNumbersBlock
          number={20.8}
          description=" Annual cost to consumers from grid congestion in 2022"
          denominator="Billion"
          symbol="$"
          animationDelay={0}
          animationDuration={animationDuration}
        />
        <SectionNumbersBlock
          number={10}
          description="Average timeline for traditional transmission projects"
          denominator="Years"
          animationDelay={0}
          animationDuration={animationDuration}
        /> */}
      </div>
    </section>
  );
};

export default SectionNumbers;
