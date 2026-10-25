import { flexRender } from '@tanstack/react-table';
import type { Row } from '@tanstack/react-table';

import Skeleton from 'components/skeleton';

import style from './style.module.css';

type TableRowProps<TData> = {
  row: Row<TData>;
  loading?: boolean;
};

function TableRow<TData>({ row, loading = false }: TableRowProps<TData>) {
  return (
    <tr className={style['table-row']}>
      {row.getVisibleCells().map((cell) => {
        return (
          <td key={cell.id}>
            {loading ? (
              <Skeleton />
            ) : (
              flexRender(cell.column.columnDef.cell, cell.getContext())
            )}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
