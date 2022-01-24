import PropTypes from 'prop-types';

import style from './style.module.css';

function Tag({ children }) {
  return <span className={style.tag}>{children}</span>;
}

Tag.propTypes = {
  children: PropTypes.node,
};

Tag.defaultProps = {
  children: null,
};

export default Tag;
