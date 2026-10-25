import { FiGithub, FiMap, FiMenu, FiBarChart2 } from 'react-icons/fi';
import Link from 'next/link';

import Button from 'components/button';
import type { Studio } from 'types';

import TrafficLightIndicator from './traffic-light-indicator';

import style from './style.module.css';

type StudiosHeaderProps = {
  isTable?: boolean;
  isMap?: boolean;
  isStats?: boolean;
  data: Studio[];
};

function StudiosHeader({
  isTable = true,
  isMap = false,
  isStats = false,
  data,
}: StudiosHeaderProps) {
  return (
    <header className={style.header}>
      <Button className={style.support} href="/estudios/agregar">
        <span>Agregar Estudio</span>
        <FiGithub />
      </Button>

      <TrafficLightIndicator data={data} />

      <div className={style['actions-view']}>
        <Link
          href="/estudios?vista=tabla"
          className={`${style.button} ${isTable ? style['-active'] : null}`}
        >
          <FiMenu />
        </Link>
        <Link
          href="/estudios?vista=mapa"
          className={`${style.button} ${isMap ? style['-active'] : null}`}
        >
          <FiMap />
        </Link>
        <Link
          href="/estudios?vista=estadisticas"
          className={`${style.button} ${isStats ? style['-active'] : null}`}
        >
          <FiBarChart2 />
        </Link>
      </div>
    </header>
  );
}

export default StudiosHeader;
