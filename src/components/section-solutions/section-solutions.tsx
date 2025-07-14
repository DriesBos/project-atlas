'use client';

import { useState, useEffect } from 'react';
import styles from './section-solutions.module.sass';
import { SectionCounter } from '@/components/section-counter';

const SectionSolutions = () => {
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const totalRows = 4; // Speed, Innovation, Abundance, Security

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRowIndex((prevIndex) => (prevIndex + 1) % totalRows);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [totalRows]);

  return (
    <section className={styles.sectionSolutions} id="sectionSolutions">
      <div className={styles.sectionCounter}>
        <p> Solutions</p>
        <SectionCounter />
      </div>
      <div className={`${styles.column} ${styles.columnOne}`}>
        <h2>Innovative Solutions</h2>
      </div>
      <div className={`${styles.column} ${styles.columnTwo}`}>
        <div
          className={`${styles.columnRow} ${
            activeRowIndex === 0 ? styles.active : ''
          }`}
        >
          <div className={styles.columnSubtitle}>
            <h3>Speed</h3>
          </div>
          <div className={styles.columnParagraph}>
            <p>
              Open transmission development delivers advanced energy
              infrastructure in months, not years.
            </p>
          </div>
        </div>
        <div
          className={`${styles.columnRow} ${
            activeRowIndex === 1 ? styles.active : ''
          }`}
        >
          <div className={styles.columnSubtitle}>
            <h3>Innovation</h3>
          </div>
          <div className={styles.columnParagraph}>
            <p>
              Transmission markets deliver technology innovation and cost
              benefits through competition.
            </p>
          </div>
        </div>
        <div
          className={`${styles.columnRow} ${
            activeRowIndex === 2 ? styles.active : ''
          }`}
        >
          <div className={styles.columnSubtitle}>
            <h3>Abundance</h3>
          </div>
          <div className={styles.columnParagraph}>
            <p>
              Lowering the barrier to building transmission infrastructure
              creates more reliable energy for everyone.
            </p>
          </div>
        </div>
        <div
          className={`${styles.columnRow} ${
            activeRowIndex === 3 ? styles.active : ''
          }`}
        >
          <div className={styles.columnSubtitle}>
            <h3>Security</h3>
          </div>
          <div className={styles.columnParagraph}>
            <p>
              An enhanced grid protects American industry from natural disasters
              and adversarial attacks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionSolutions;
