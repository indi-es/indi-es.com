import PropTypes from 'prop-types';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

function SortIndicator({ isSorted, isSortedDesc }) {
  if (!isSorted) return null;

  if (isSortedDesc) {
    return <FiChevronUp />;
  }

  return <FiChevronDown />;
}

SortIndicator.propTypes = {
  isSorted: PropTypes.bool,
  isSortedDesc: PropTypes.bool,
};

SortIndicator.defaultProps = {
  isSorted: false,
  isSortedDesc: false,
};

export default SortIndicator;
