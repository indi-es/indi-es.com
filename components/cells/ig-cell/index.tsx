import { FiInstagram } from 'react-icons/fi';

import type { CellProps } from '../types';

import style from './style.module.css';

function IgCell({ cell: { getValue } }: CellProps<string | null | undefined>) {
  const value = getValue();
  if (!value) return null;
  return (
    <a
      className={style['ig-cell']}
      href={value}
      target="_blank"
      aria-label="Instagram"
      rel="noopener noreferrer"
    >
      <FiInstagram />
    </a>
  );
}

export default IgCell;
