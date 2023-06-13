import PropTypes from 'prop-types';
import classNames from 'classnames';
import { flexRender } from '@tanstack/react-table';

import Skeleton from 'components/skeleton';

import SortIndicator from '../sort-indicator';

import style from './style.module.css';

function TableHeader({ className, headerGroups, loading }) {
  const customClassName = classNames(
    style['table-header'],
    'table-header',
    className,
    {
      '-loading': loading,
    }
  );

  return (
    <thead className={customClassName}>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <th key={header.id} colSpan={header.colSpan}>
                <button
                  type="button"
                  className={style['table-header-wrapper']}
                  data-can-sort={header.column.getCanSort()}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {loading ? (
                    <Skeleton />
                  ) : (
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  )}
                  <SortIndicator isSorted={header.column.getIsSorted()} />
                </button>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
}

TableHeader.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  headerGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

TableHeader.defaultProps = {
  loading: false,
  className: null,
};

export default TableHeader;
