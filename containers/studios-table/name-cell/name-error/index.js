import PropTypes from 'prop-types';

import { FiAlertCircle } from 'react-icons/fi';
import Tooltip from 'components/tooltip';

import style from './style.module.css';

function NameError({ message, date }) {
  const dateFormatted = new Date(date).toLocaleDateString('es-MX');
  return (
    <Tooltip label={`[${dateFormatted}] ${message}`}>
      <div className={style['inactive-indicator']}>
        <FiAlertCircle />
      </div>
    </Tooltip>
  );
}

NameError.propTypes = {
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NameError;
