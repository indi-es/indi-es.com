import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.css';

function Callout({ className, children }) {
  const customClassName = classNames(style.callout, 'callout', className);
  return <div className={customClassName}>{children}</div>;
}

Callout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Callout;
