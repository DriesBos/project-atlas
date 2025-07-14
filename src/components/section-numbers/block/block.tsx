import styles from './block.module.sass';
import AnimatedNumber from '@/components/animated-number/animated-number';

interface SectionNumbersBlockProps {
  number: number | string;
  description: string;
  denominator?: string;
  symbol?: string;
  large?: boolean;
  animationDelay?: number;
  animationDuration?: number;
  className?: string;
}

const SectionNumbersBlock: React.FunctionComponent<
  SectionNumbersBlockProps
> = ({
  number,
  description,
  denominator,
  symbol,
  large,
  animationDelay = 0,
  animationDuration = 2000,
  className,
}) => {
  const numericValue = typeof number === 'string' ? parseFloat(number) : number;
  const shouldAnimate = typeof number === 'number' || !isNaN(numericValue);

  return (
    <div
      className={`${styles.block} ${className || ''}`}
      data-large={large ? true : false}
    >
      <div className={styles.number_top}>
        <div className={styles.number_top_left}>
          {shouldAnimate ? (
            <AnimatedNumber
              targetValue={numericValue}
              duration={animationDuration}
              delay={animationDelay}
              symbol={symbol}
            />
          ) : (
            <>
              {symbol}
              {number}
            </>
          )}
        </div>
        <div className={styles.number_top_right}>
          <p>{denominator}</p>
        </div>
      </div>
      <div className={styles.number_bottom}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionNumbersBlock;
