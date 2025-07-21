import { storyblokEditable, SbBlokData } from '@storyblok/react/rsc';
import styles from './bloktext.module.sass';

interface BlokTextProps extends SbBlokData {
  title?: string;
  text?: string;
}

interface BlokTextProps {
  blok: BlokTextProps;
}

const BlokText: React.FunctionComponent<BlokTextProps> = ({ blok }) => {
  return (
    <div className={styles.blokText} {...storyblokEditable(blok)}>
      <h2>{blok.title}</h2>
      <p>{blok.text}</p>
    </div>
  );
};

export default BlokText;
