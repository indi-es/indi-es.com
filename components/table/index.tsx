import React from 'react';
import {
  useReactTable,
  getSortedRowModel,
  getCoreRowModel,
} from '@tanstack/react-table';
import type { ColumnDef, SortingFn, SortingState } from '@tanstack/react-table';
import classNames from 'classnames';

import TableHeader from './table-header';
import TableRow from './table-row';

import style from './style.module.css';

type TableProps<TData> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  data: TData[];
  className?: string;
  loading?: boolean;
  initialSort?: SortingState;
  sortingFns?: Record<string, SortingFn<TData>>;
};

function Table<TData>({
  className,
  initialSort = [],
  columns,
  data,
  loading,
  sortingFns = {},
}: TableProps<TData>) {
  const customClassName = classNames(
    style['table-container'],
    'table-container',
    className,
    {
      '-loading': loading,
    }
  );
  const [sorting, setSorting] = React.useState<SortingState>(initialSort);

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

export default Table;
