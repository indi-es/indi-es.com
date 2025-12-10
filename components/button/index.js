import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.css';

function LinkButton({ children, href, ...rest }) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
};

function InputButton(props) {
  return <button type="button" {...props} />;
}

function getBaseButton(href) {
  if (href) return LinkButton;

  return InputButton;
}

function Button({ href, children, className, ...rest }) {
  const BaseButton = getBaseButton(href);

  const customClassName = classNames(className, style.button, 'button');
  return (
    <BaseButton className={customClassName} href={href} {...rest}>
      {children}
    </BaseButton>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
