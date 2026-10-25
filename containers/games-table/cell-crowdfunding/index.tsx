import type { CellProps } from 'components/cells/types';
import type { GameCrowdfunding } from 'types';

import style from './style.module.css';

function CellCrowdfunding({
  cell,
}: CellProps<GameCrowdfunding | null | undefined>) {
  const value = cell.getValue();
  if (!value) return null;
  if (value.url == null) return null;

  return (
    <span className={style['cell-platforms']}>
      <a
        href={value.url}
        target="_blank"
        rel="noopener noreferrer"
        key={value.url}
      >
        {value.funded ? 'Fondeado' : 'No fondeado'}
      </a>
    </span>
  );
}

export default CellCrowdfunding;
