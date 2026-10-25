import type { CellProps } from '../types';

import style from './style.module.css';

const formatter = new Intl.ListFormat('es-mx', {
  style: 'long',
  type: 'conjunction',
});

function ListFormattedCell({ cell }: CellProps<string[] | null | undefined>) {
  const value = cell.getValue();
  if (!value) return null;

  return (
    <span className={style['list-formatted-cell']}>
      {formatter.format(value)}
    </span>
  );
}

export default ListFormattedCell;
