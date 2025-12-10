import PropTypes from 'prop-types';
import { FiGlobe } from 'react-icons/fi';

import style from './style.module.css';

function WebCell({ cell: { getValue } }) {
  const value = getValue();
  if (!value) return null;
  return (
    <a
      className={style['web-cell']}
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Webpage"
    >
      <FiGlobe />
    </a>
  );
}

WebCell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
  }).isRequired,
};

export default WebCell;
