import PropTypes from 'prop-types';
import { FaFacebookSquare } from 'react-icons/fa';

import style from './style.module.css';

function FbCell({ cell: { getValue } }) {
  const value = getValue();
  if (!value) return null;
  return (
    <a
      className={style['fb-cell']}
      href={value}
      target="_blank"
      aria-label="Facebook"
      rel="noopener noreferrer"
    >
      <FaFacebookSquare />
    </a>
  );
}

FbCell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
  }).isRequired,
};

export default FbCell;
