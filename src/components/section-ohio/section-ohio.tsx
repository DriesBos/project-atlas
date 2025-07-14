import styles from './section-ohio.module.sass';
import { SectionCounter } from '@/components/section-counter';

const SectionOhio = () => {
  return (
    <section className={styles.sectionOhio} id="sectionOhio">
      <div className={`${styles.sectionCounter} ${styles.mobile}`}>
        <p>Ohio Leadership</p>
        <SectionCounter />
      </div>
      <div className={`${styles.column} animateSectionBlock`}>
        <div className={`${styles.sectionCounter} ${styles.desktop}`}>
          <p>Ohio Leadership</p>
          <SectionCounter />
        </div>
        <h2>
          Heartland Innovation.
          <br />
          Homeland Industrialization.
        </h2>
        <p>
          They call Ohio “America’s Industrial Capital” for a reason. We’re home
          to the nation’s largest steel foundry and lead the country in glass,
          rubber, and plastic production. We manufacture aircraft, automobiles,
          life-saving drugs, solar cells, fuel cells, tanks, missiles, robots,
          and chemicals. We made the first airplane and invented the LCD screen.
          We know how to build.
        </p>
      </div>
      <div className={`${styles.column} animateSectionBlock`}>
        <div className={`${styles.sectionCounter} ${styles.desktop}`}>
          <p>Ohio Leadership</p>
          <SectionCounter />
        </div>
        <h2>A Blueprint for America’s Grid</h2>
        <p>
          Ohio was the first in the US to let consumers choose their electricity
          supplier and this model was quickly adopted across the country. Now,
          we have the opportunity to leverage our heritage as innovators in
          energy markets and manufacturing to create a blueprint for building
          new transmission infrastructure in the US faster and more efficiently
          than ever before.
        </p>
      </div>
    </section>
  );
};
export default SectionOhio;
