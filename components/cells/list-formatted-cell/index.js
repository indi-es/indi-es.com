import PropTypes from 'prop-types';

import style from './style.module.css';

const formatter = new Intl.ListFormat('es-mx', {
  style: 'long',
  type: 'conjunction',
});

function ListFormattedCell({ cell: { getValue } }) {
  const value = getValue();
  if (!value) return null;

  return (
    <span className={style['list-formatted-cell']}>
      {formatter.format(value)}
    </span>
  );
}

ListFormattedCell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
  }).isRequired,
};

ListFormattedCell.defaultProps = {};

export default ListFormattedCell;
