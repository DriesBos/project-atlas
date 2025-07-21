import { SbBlokData } from '@storyblok/react/rsc';
import styles from './blokohio.module.sass';
import { SectionCounter } from '@/components/section-counter';

interface BlokOhioProps extends SbBlokData {
  title?: string;
  text?: string;
  tag?: string;
}

interface BlokOhioProps {
  blok: BlokOhioProps;
}

const BlokOhio: React.FunctionComponent<BlokOhioProps> = ({ blok }) => {
  return (
    <>
      <div className={`${styles.sectionCounter} ${styles.desktop}`}>
        <p>{blok.tag}</p>
        <SectionCounter />
      </div>
      <h2>{blok.title}</h2>
      <p>{blok.text}</p>
    </>
  );
};

export default BlokOhio;
