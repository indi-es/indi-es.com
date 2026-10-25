import { flexRender } from '@tanstack/react-table';
import type { Row } from '@tanstack/react-table';

import Skeleton from 'components/skeleton';

import type { Features } from '../features';

import style from './style.module.css';

type TableRowProps<TData extends object> = {
  row: Row<Features, TData>;
  loading?: boolean;
};

function TableRow<TData extends object>({
  row,
  loading = false,
}: TableRowProps<TData>) {
  return (
    <tr className={style['table-row']}>
      {row.getAllCells().map((cell) => {
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
