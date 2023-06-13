import PropTypes from 'prop-types';
import { FiInstagram } from 'react-icons/fi';

import style from './style.module.css';

function IgCell({ cell: { getValue } }) {
  const value = getValue();
  if (!value) return null;
  return (
    <a
      className={style['ig-cell']}
      href={value}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiInstagram />
    </a>
  );
}

IgCell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
  }).isRequired,
};

IgCell.defaultProps = {};

export default IgCell;
