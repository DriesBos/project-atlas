import styles from './grid-lines.module.sass';

interface GridLinesProps {
  className?: string;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

const GridLines: React.FunctionComponent<GridLinesProps> = ({
  className = '',
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <div
      className={`${styles.gridLine} ${className}`}
      data-top={top ? true : false}
      data-bottom={bottom ? true : false}
      data-left={left ? true : false}
      data-right={right ? true : false}
    >
      <div className={styles.gridLine} />
      <div className={styles.gridLine} />
      <div className={styles.gridLine} />
    </div>
  );
};
export default GridLines;
