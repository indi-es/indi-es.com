import PropTypes from 'prop-types';

import Time from 'components/time';

import style from './style.module.css';

function TimeCell({ cell: { getValue } }) {
  const value = getValue();
  if (!value) return null;

  return <Time className={style['time-cell']}>{value}</Time>;
}

TimeCell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
  }).isRequired,
};

TimeCell.defaultProps = {};

export default TimeCell;
