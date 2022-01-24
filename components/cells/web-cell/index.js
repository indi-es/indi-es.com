import PropTypes from 'prop-types';
import { FiGlobe } from 'react-icons/fi';

import style from './style.module.css';

function WebCell({ cell: { value } }) {
  if (!value) return null;
  return (
    <a
      className={style['web-cell']}
      href={value}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiGlobe />
    </a>
  );
}

WebCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

WebCell.defaultProps = {
  cell: {
    value: null,
  },
};

export default WebCell;
