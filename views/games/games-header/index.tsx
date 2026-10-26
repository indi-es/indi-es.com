import { FiMenu, FiBarChart2 } from 'react-icons/fi';
import Link from 'next/link';

import type { Game } from 'types';
import type { GameFilters } from 'utils/games';

import style from './styles.module.css';

type GamesHeaderProps = {
  isTable?: boolean;
  isStats?: boolean;
  data: Game[];
  total?: number;
  filters?: GameFilters;
};

function GamesHeader({
  isTable = true,
  isStats,
  data,
  total = data.length,
  filters = {},
}: GamesHeaderProps) {
  return (
    <header className={style.header}>
      <span className={style.info}>
        Total de juegos:{' '}
        {data.length === total ? total : `${data.length} de ${total}`}
      </span>

      <div className={style['actions-view']}>
        <Link
          href={{ pathname: '/juegos', query: filters }}
          className={`${style.button} ${isTable ? style['-active'] : null}`}
        >
          <FiMenu />
        </Link>
        <Link
          href={{ pathname: '/juegos/estadisticas', query: filters }}
          className={`${style.button} ${isStats ? style['-active'] : null}`}
        >
          <FiBarChart2 />
        </Link>
      </div>
    </header>
  );
}

export default GamesHeader;
