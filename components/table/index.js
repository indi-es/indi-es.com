import PropTypes from 'prop-types';
import React from 'react';
import {
  useReactTable,
  getSortedRowModel,
  getCoreRowModel,
} from '@tanstack/react-table';
import classNames from 'classnames';

import TableHeader from './table-header';
import TableRow from './table-row';

import style from './style.module.css';

function Table({
  className,
  initialSort,
  columns,
  data,
  loading,
  sortingFns = {},
}) {
  const customClassName = classNames(
    style['table-container'],
    'table-container',
    className,
    {
      '-loading': loading,
    }
  );
  const [sorting, setSorting] = React.useState(initialSort);

  const table = useReactTable({
    columns,
    data,
    sortingFns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={customClassName}>
      <table>
        <TableHeader headerGroups={table.getHeaderGroups()} />
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return <TableRow key={row.id} row={row} loading={loading} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  initialSort: PropTypes.arrayOf(PropTypes.shape({})),
  sortingFns: PropTypes.shape({}),
};

export default Table;
