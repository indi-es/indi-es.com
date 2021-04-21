import React from 'react';
import PropTypes from 'prop-types';
import { FiGithub, FiMap, FiMenu, FiBarChart2 } from 'react-icons/fi';
import Link from 'next/link';

import style from './style.module.css';

function EstudiosHeader({ isTable, isMap, isStats }) {
  return (
    <header className={style.header}>
      <a
        className={style.support}
        href="https://github.com/indi-es/estudios/blob/main/contributing.md"
        target="__blank"
      >
        Puedes aportar a la lista de estudios en Github
        <FiGithub />
      </a>
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

EstudiosHeader.propTypes = {
  isTable: PropTypes.bool,
  isMap: PropTypes.bool,
  isStats: PropTypes.bool,
};

EstudiosHeader.defaultProps = {
  isTable: true,
  isMap: false,
  isStats: false,
};

export default EstudiosHeader;
