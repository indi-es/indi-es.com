import PropTypes from 'prop-types';

import style from './style.module.css';

function CellCrowdfunding({ cell: { getValue } }) {
  const value = getValue();
  if (!value) return null;
  if (value.url == null) return null;

  return (
    <span className={style['cell-platforms']}>
      <a
        href={value.url}
        target="_blank"
        rel="noopener noreferrer"
        key={value.url}
      >
        {value.funded ? 'Fundeado' : 'No fundeado'}
      </a>
    </span>
  );
}

CellCrowdfunding.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
  }).isRequired,
};

CellCrowdfunding.defaultProps = {};

export default CellCrowdfunding;
