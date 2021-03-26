import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Skeleton from 'components/skeleton';

import SortIndicator from '../sort-indicator';

import style from './style.module.css';

const TableHeader = ({ className, headerGroups, loading }) => {
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
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              <div className={style['table-header-wrapper']}>
                {loading ? <Skeleton /> : column.render('Header')}
                <span>
                  <SortIndicator
                    isSorted={column.isSorted}
                    isSortedDesc={column.isSortedDesc}
                  />
                </span>
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

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
