import { FiAlertCircle } from 'react-icons/fi';
import Tooltip from 'components/tooltip';
import type { StudioError } from 'types';

import style from './style.module.css';

function NameError({ message, date }: StudioError) {
  const dateFormatted = new Date(date).toLocaleDateString('es-MX');
  return (
    <Tooltip label={`[${dateFormatted}] ${message}`}>
      <div className={style['inactive-indicator']}>
        <FiAlertCircle />
      </div>
    </Tooltip>
  );
}

export default NameError;
