import PropTypes from 'prop-types';

import style from './style.module.css';

function HeaderCenter({ label }) {
  return <span className={style['table-header-center']}>{label}</span>;
}

HeaderCenter.propTypes = {
  label: PropTypes.string,
};

HeaderCenter.defaultProps = {
  label: null,
};

export default HeaderCenter;
