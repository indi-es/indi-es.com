import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.css';

function Button({ href, children, className }) {
  const customClassName = classNames(style.button, 'button', className);
  return (
    <a className={customClassName} href={href} target="__blank">
      {children}
    </a>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  href: null,
  children: null,
  className: null,
};

export default Button;
