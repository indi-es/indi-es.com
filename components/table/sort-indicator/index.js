import PropTypes from 'prop-types';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

function SortIndicator({ isSorted }) {
  if (!isSorted) return null;

  if (isSorted === 'asc') {
    return <FiChevronUp />;
  }

  return <FiChevronDown />;
}

SortIndicator.propTypes = {
  isSorted: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

SortIndicator.defaultProps = {
  isSorted: false,
};

export default SortIndicator;
