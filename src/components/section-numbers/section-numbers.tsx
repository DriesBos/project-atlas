import styles from './section-numbers.module.sass';
import SectionNumbersBlock from './block/block';

const SectionNumbers = () => {
  const animationDuration = 2000; // 2 seconds

  return (
    <div className={`${styles.sectionNumbers} animateSectionBlock`}>
      <div className={styles.column}>
        <SectionNumbersBlock
          number={2.6}
          description="Energy projects waiting for grid connections nationwide"
          denominator="Gigawatts"
          large
          animationDelay={0}
          animationDuration={animationDuration}
        />
      </div>
      <div className={styles.column}>
        <SectionNumbersBlock
          number={55}
          description="New high voltage transmission built in the US in 2023."
          denominator="miles"
          animationDelay={0}
          animationDuration={animationDuration}
        />
        <SectionNumbersBlock
          number={28.8}
          description="Annual cost to consumers from grid congestion in 2022."
          denominator="Billion"
          symbol="$"
          animationDelay={0}
          animationDuration={animationDuration}
        />
        <SectionNumbersBlock
          number={28.8}
          description="Annual cost to consumers from grid congestion in 2022."
          denominator="Billion"
          symbol="$"
          animationDelay={0}
          animationDuration={animationDuration}
        />
      </div>
    </div>
  );
};

export default SectionNumbers;
