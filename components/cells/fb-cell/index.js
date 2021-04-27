import PropTypes from 'prop-types';
import { FaFacebookSquare } from 'react-icons/fa';

import style from './style.module.css';

const FbCell = ({ cell: { value } }) => {
  if (!value) return null;
  return (
    <a
      className={style['fb-cell']}
      href={value}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookSquare />
    </a>
  );
};

FbCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

FbCell.defaultProps = {
  cell: {
    value: null,
  },
};

export default FbCell;
