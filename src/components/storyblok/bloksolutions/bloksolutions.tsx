import { storyblokEditable, SbBlokData } from '@storyblok/react/rsc';
import styles from './bloksolutions.module.sass';

interface BlokSolutionProps extends SbBlokData {
  title?: string;
  text?: string;
}

interface BlokSolutionProps {
  blok: BlokSolutionProps;
}

const BlokSolution: React.FunctionComponent<BlokSolutionProps> = ({ blok }) => {
  return (
    <div className={styles.blokSolutions} {...storyblokEditable(blok)}>
      <div className={styles.subtitle}>
        <h3>{blok.title}</h3>
      </div>
      <div className={styles.paragraph}>
        <p>{blok.text}</p>
      </div>
    </div>
  );
};

export default BlokSolution;
