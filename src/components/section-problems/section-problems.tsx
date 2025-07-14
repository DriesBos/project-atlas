import styles from './section-problems.module.sass';
import { SectionCounter } from '@/components/section-counter';

const SectionProblems = () => {
  return (
    <section className={styles.sectionProblems} id="sectionProblems">
      <div className={styles.sectionCounter}>
        <p>ISSUES</p>
        <SectionCounter />
      </div>
      <div className={`${styles.column} ${styles.columnOne}`}>
        <h2>
          America&#39;s Prosperity and Security Depends on How We Move
          Electrons.
        </h2>
      </div>
      <div className={`${styles.column} ${styles.columnTwo}`}>
        <div className={styles.columnTwoOne}>
          <h3>We need more grid infrastructure.</h3>
          <p>
            Data centers and manufacturing facilities are driving an
            unprecedented surge in demand for energy, but it still takes up to a
            decade to build new transmission and other power infrastructure
            infrastructure. Project ATLAS is working to create accelerated
            pathways for new transmission to ensure that large energy customers
            are able to get electrons where and when they need them most.
          </p>
        </div>
        <div className={styles.columnTwoTwo}>
          <h3>We need better grid infrastructure.</h3>
          <p>
            The risk of blackouts and brownouts due to insufficient generation
            capacity, natural disasters, and adversarial attacks is increasing.
            Project ATLAS is working to deploy transmission and other energy
            infrastructure that combines advanced physical technologies with
            digital intelligence to create a more robust and resilient grid.
          </p>
        </div>
      </div>
    </section>
  );
};
export default SectionProblems;
