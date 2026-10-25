import { FaFacebookSquare } from 'react-icons/fa';

import type { CellProps } from '../types';

import style from './style.module.css';

function FbCell({ cell: { getValue } }: CellProps<string | null | undefined>) {
  const value = getValue();
  if (!value) return null;
  return (
    <a
      className={style['fb-cell']}
      href={value}
      target="_blank"
      aria-label="Facebook"
      rel="noopener noreferrer"
    >
      <FaFacebookSquare />
    </a>
  );
}

export default FbCell;
