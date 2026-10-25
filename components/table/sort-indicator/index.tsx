import type { SortDirection } from '@tanstack/react-table';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

type SortIndicatorProps = {
  isSorted?: false | SortDirection;
};

function SortIndicator({ isSorted = false }: SortIndicatorProps) {
  if (!isSorted) return null;

  if (isSorted === 'asc') {
    return <FiChevronUp />;
  }

  return <FiChevronDown />;
}

export default SortIndicator;
