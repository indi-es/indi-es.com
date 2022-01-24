import PropTypes from 'prop-types';

import style from './styles.module.css';

const options = {
  individual: 'Solo',
  studio: 'Estudio',
};

function TypeCell({ cell: { value } }) {
  if (!value) return null;

  const label = options[value];

  if (!label) return null;

  return <span className={style['type-cell']}>{label}</span>;
}

TypeCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

TypeCell.defaultProps = {
  cell: {
    value: null,
  },
};

export default TypeCell;
