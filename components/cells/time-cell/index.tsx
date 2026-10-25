import Time from 'components/time';

import type { CellProps } from '../types';

import style from './style.module.css';

function TimeCell({ cell }: CellProps<string | null | undefined>) {
  const value = cell.getValue();
  if (!value) return null;

  return <Time className={style['time-cell']}>{value}</Time>;
}

export default TimeCell;
