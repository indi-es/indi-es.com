import PropTypes from 'prop-types';
import { FiMenu, FiBarChart2 } from 'react-icons/fi';
import Link from 'next/link';

import style from './styles.module.css';

function GamesHeader({ isTable = true, isStats, data }) {
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

GamesHeader.propTypes = {
  isTable: PropTypes.bool,
  isStats: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default GamesHeader;
