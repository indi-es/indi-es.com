import { FaTwitter } from 'react-icons/fa';

import type { CellProps } from '../types';

import style from './style.module.css';

function TwCell({ cell: { getValue } }: CellProps<string | null | undefined>) {
  const value = getValue();
  if (!value) return null;
  return (
    <a
      className={style['tw-cell']}
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <FaTwitter />
    </a>
  );
}

export default TwCell;
