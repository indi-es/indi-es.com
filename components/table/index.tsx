import React from 'react';
import { useTable } from '@tanstack/react-table';
import type { ColumnDef, SortingState } from '@tanstack/react-table';
import classNames from 'classnames';

import { features } from './features';
import type { Features } from './features';

import TableHeader from './table-header';
import TableRow from './table-row';

import style from './style.module.css';

type TableProps<TData extends object> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<Features, TData, any>[];
  data: TData[];
  className?: string;
  loading?: boolean;
  initialSort?: SortingState;
};

function Table<TData extends object>({
  className,
  initialSort = [],
  columns,
  data,
  loading,
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

  const table = useTable({
    features,
    columns,
    data,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
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
