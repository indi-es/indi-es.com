import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.css';

function Skeleton({ className }) {
  const customClassName = classNames(style.skeleton, 'skeleton', className);

  return <span className={customClassName}>&zwnj;</span>;
}

Skeleton.propTypes = {
  className: PropTypes.string,
};

export default Skeleton;
