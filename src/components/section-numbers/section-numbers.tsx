import styles from './section-numbers.module.sass';
import SectionNumbersBlock from './block/block';
import { SectionCounter } from '../section-counter';

const SectionNumbers = () => {
  const animationDuration = 1500; // 2 seconds

  return (
    <section
      className={`${styles.sectionNumbers} animateSectionBlock`}
      id="sectionNumbers"
    >
      <div className={styles.sectionCounter}>
        <p>data</p>
        <SectionCounter />
      </div>
      <div className={`${styles.column} ${styles.columnOne} ${styles.desktop}`}>
        <SectionNumbersBlock
          number={2600}
          description="Energy projects waiting for grid connections nationwide"
          denominator="Gigawatts"
          large
          animationDelay={0}
          animationDuration={animationDuration}
        />
      </div>
      <div className={`${styles.column} ${styles.columnTwo}`}>
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
        />
      </div>
    </section>
  );
};

export default SectionNumbers;
