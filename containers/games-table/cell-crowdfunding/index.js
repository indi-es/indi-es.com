import PropTypes from 'prop-types';

import style from './style.module.css';

function CellCrowdfunding({ cell: { value } }) {
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
    value: PropTypes.shape({
      funded: PropTypes.bool,
      url: PropTypes.string,
    }),
  }),
};

CellCrowdfunding.defaultProps = {
  cell: {
    value: null,
  },
};

export default CellCrowdfunding;
