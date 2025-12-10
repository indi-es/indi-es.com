import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import classNames from 'classnames';

import styles from './style.module.css';

function Spinner({ className }) {
  const customClassName = classNames('spinner', styles.spinner, className);
  return <AiOutlineLoading3Quarters className={customClassName} />;
}

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
