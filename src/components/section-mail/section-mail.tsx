import { Subscribe } from '../subscribe/subscribe';
import styles from './section-mail.module.sass';

const SectionMail = () => {
  return (
    <section
      className={`${styles.sectionMail} animateSectionBlock`}
      id="sectionMail"
    >
      <Subscribe />
    </section>
  );
};

export default SectionMail;
