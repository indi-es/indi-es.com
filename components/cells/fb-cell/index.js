import React from 'react';
import PropTypes from 'prop-types';
import { FiFacebook } from 'react-icons/fi';

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
      <FiFacebook />
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
