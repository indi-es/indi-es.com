import PropTypes from 'prop-types';

import style from './style.module.css';

function ErrorMessage({ children }) {
  return <div className={style['error-message']}>{children}</div>;
}

ErrorMessage.propTypes = {
  children: PropTypes.node,
};

ErrorMessage.defaultProps = {
  children: null,
};

export default ErrorMessage;
