import PropTypes from 'prop-types';

import style from './style.module.css';

const formatter = new Intl.ListFormat('es-mx', {
  style: 'long',
  type: 'conjunction',
});

function CellPlatforms({ cell: { value } }) {
  if (!value) return null;

  return (
    <span className={style['cell-platforms']}>
      {formatter.format(value.map((item) => item.name))}
    </span>
  );
}

CellPlatforms.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

CellPlatforms.defaultProps = {
  cell: {
    value: null,
  },
};

export default CellPlatforms;
