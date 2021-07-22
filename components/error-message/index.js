import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.css';

function ErrorMessage({ children, className }) {
  const customClassName = classNames(
    style['error-message'],
    'error-message',
    className
  );
  return <div className={customClassName}>{children}</div>;
}

ErrorMessage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ErrorMessage.defaultProps = {
  children: null,
  className: null,
};

export default ErrorMessage;
