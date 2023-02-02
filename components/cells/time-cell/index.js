import PropTypes from 'prop-types';

import Time from 'components/time';

import style from './style.module.css';

function TimeCell({ cell: { value } }) {
  if (!value) return null;
  console.log('value');

  return <Time className={style['time-cell']}>{value}</Time>;
}

TimeCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

TimeCell.defaultProps = {
  cell: {
    value: null,
  },
};

export default TimeCell;
