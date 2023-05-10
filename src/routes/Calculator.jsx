import MyCulc from '../components/MyCulc';
import styles from '../styles/Calculator.module.css';

const Calculator = () => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2> Lets do some math!</h2>
      </div>
      <div className={styles.calculator}>
        <MyCulc />
      </div>
    </div>
  </>
);
export default Calculator;
