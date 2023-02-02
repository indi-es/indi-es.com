import PropTypes from 'prop-types';

import style from './style.module.css';

const formatter = new Intl.ListFormat('es-mx', {
  style: 'long',
  type: 'conjunction',
});

function ListFormattedCell({ cell: { value } }) {
  if (!value) return null;

  return (
    <span className={style['list-formatted-cell']}>
      {formatter.format(value)}
    </span>
  );
}

ListFormattedCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
  }),
};

ListFormattedCell.defaultProps = {
  cell: {
    value: null,
  },
};

export default ListFormattedCell;
