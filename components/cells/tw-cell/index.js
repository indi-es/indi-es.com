import React from 'react';
import PropTypes from 'prop-types';
import { FiTwitter } from 'react-icons/fi';

import style from './style.module.css';

const TwCell = ({ cell: { value } }) => {
  if (!value) return null;
  return (
    <a
      className={style['tw-cell']}
      href={value}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiTwitter />
    </a>
  );
};

TwCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

TwCell.defaultProps = {
  cell: {
    value: null,
  },
};

export default TwCell;
