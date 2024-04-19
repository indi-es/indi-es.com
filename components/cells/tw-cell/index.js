import PropTypes from 'prop-types';
import { FaTwitter } from 'react-icons/fa';

import style from './style.module.css';

function TwCell({ cell: { getValue } }) {
  const value = getValue();
  if (!value) return null;
  return (
    <a
      className={style['tw-cell']}
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <FaTwitter />
    </a>
  );
}

TwCell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
  }).isRequired,
};

TwCell.defaultProps = {};

export default TwCell;
