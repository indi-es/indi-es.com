import { FiGlobe } from 'react-icons/fi';

import type { CellProps } from '../types';

import style from './style.module.css';

function WebCell({ cell }: CellProps<string | null | undefined>) {
  const value = cell.getValue();
  if (!value) return null;
  return (
    <a
      className={style['web-cell']}
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Webpage"
    >
      <FiGlobe />
    </a>
  );
}

export default WebCell;
