import PropTypes from 'prop-types';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

function SortIndicator({ isSorted = false }) {
  if (!isSorted) return null;

  if (isSorted === 'asc') {
    return <FiChevronUp />;
  }

  return <FiChevronDown />;
}

SortIndicator.propTypes = {
  isSorted: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default SortIndicator;
