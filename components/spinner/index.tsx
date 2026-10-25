import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import classNames from 'classnames';

import styles from './style.module.css';

type SpinnerProps = {
  className?: string;
};

function Spinner({ className }: SpinnerProps) {
  const customClassName = classNames('spinner', styles.spinner, className);
  return <AiOutlineLoading3Quarters className={customClassName} />;
}

export default Spinner;
