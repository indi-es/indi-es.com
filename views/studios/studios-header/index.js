import PropTypes from 'prop-types';
import { FiGithub, FiMap, FiMenu, FiBarChart2 } from 'react-icons/fi';
import Link from 'next/link';

import Button from 'components/button';

import TrafficLightIndicator from './traffic-light-indicator';

import style from './style.module.css';

function StudiosHeader({ isTable, isMap, isStats, data }) {
  return (
    <header className={style.header}>
      <Button className={style.support} href="/estudios/agregar">
        <span>Agregar Estudio</span>
        <FiGithub />
      </Button>

      <TrafficLightIndicator data={data} />

      <div className={style['actions-view']}>
        <Link href="/estudios?vista=tabla">
          <a className={`${style.button} ${isTable ? style['-active'] : null}`}>
            <FiMenu />
          </a>
        </Link>
        <Link href="/estudios?vista=mapa">
          <a className={`${style.button} ${isMap ? style['-active'] : null}`}>
            <FiMap />
          </a>
        </Link>
        <Link href="/estudios?vista=estadisticas">
          <a className={`${style.button} ${isStats ? style['-active'] : null}`}>
            <FiBarChart2 />
          </a>
        </Link>
      </div>
    </header>
  );
}

StudiosHeader.propTypes = {
  isTable: PropTypes.bool,
  isMap: PropTypes.bool,
  isStats: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      error: PropTypes.shape({}),
    })
  ).isRequired,
};

StudiosHeader.defaultProps = {
  isTable: true,
  isMap: false,
  isStats: false,
};

export default StudiosHeader;
