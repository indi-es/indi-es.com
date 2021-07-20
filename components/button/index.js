import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.css';

function getBaseButton(href) {
  if (href)
    // eslint-disable-next-line react/prop-types
    return ({ children, ...rest }) => {
      return (
        <a href={href} {...rest}>
          {children}
        </a>
      );
    };

  return (props) => <button type="button" {...props} />;
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

Button.defaultProps = {
  href: null,
  children: null,
  className: null,
};

export default Button;
