import classNames from 'classnames';
import { flexRender } from '@tanstack/react-table';
import type { HeaderGroup } from '@tanstack/react-table';

import Skeleton from 'components/skeleton';

import SortIndicator from '../sort-indicator';

import style from './style.module.css';

type TableHeaderProps<TData> = {
  headerGroups: HeaderGroup<TData>[];
  className?: string;
  loading?: boolean;
};

function TableHeader<TData>({
  className,
  headerGroups,
  loading = false,
}: TableHeaderProps<TData>) {
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

export default TableHeader;
