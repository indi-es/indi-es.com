import { FiMenu, FiBarChart2 } from 'react-icons/fi';
import Link from 'next/link';

import type { Game } from 'types';

import style from './styles.module.css';

type GamesHeaderProps = {
  isTable?: boolean;
  isStats?: boolean;
  data: Game[];
};

function GamesHeader({ isTable = true, isStats, data }: GamesHeaderProps) {
  return (
    <header className={style.header}>
      <span className={style.info}>Total de juegos: {data.length}</span>

      <div className={style['actions-view']}>
        <Link
          href="/juegos?vista=tabla"
          className={`${style.button} ${isTable ? style['-active'] : null}`}
        >
          <FiMenu />
        </Link>
        <Link
          href="/juegos?vista=estadisticas"
          className={`${style.button} ${isStats ? style['-active'] : null}`}
        >
          <FiBarChart2 />
        </Link>
      </div>
    </header>
  );
}

export default GamesHeader;
