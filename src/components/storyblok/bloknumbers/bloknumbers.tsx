import { storyblokEditable, SbBlokData } from '@storyblok/react/rsc';
import styles from './bloknumbers.module.sass';
import AnimatedNumber from '@/components/animated-number/animated-number';

interface BlokNumbersProps extends SbBlokData {
  number?: number | string;
  unit?: string;
  text: string;
}

interface BlokNumbersProps {
  blok: BlokNumbersProps;
}

const BlokNumbers: React.FunctionComponent<BlokNumbersProps> = ({ blok }) => {
  const numericValue =
    typeof blok.number === 'string' ? parseFloat(blok.number) : blok.number;
  const shouldAnimate =
    typeof blok.number === 'number' ||
    (numericValue !== undefined && !isNaN(numericValue));

  return (
    <div className={styles.block} {...storyblokEditable(blok)}>
      <div className={styles.number_top}>
        <div className={styles.number_top_left}>
          {shouldAnimate ? (
            <AnimatedNumber
              targetValue={numericValue!}
              duration={2000}
              delay={0}
            />
          ) : (
            <>{blok.number}</>
          )}
        </div>
        <div className={styles.number_top_right}>
          <p>{blok.unit}</p>
        </div>
      </div>
      <div className={styles.number_bottom}>
        <p>{blok.text}</p>
      </div>
    </div>
  );
};

export default BlokNumbers;
