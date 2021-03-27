import React from 'react';
import PropTypes from 'prop-types';
import { FiGithub, FiMap, FiMenu } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Page } from 'components/layouts';

import StudiosTable from 'containers/studios-table';

import style from './style.module.css';

const StudiosMap = dynamic(() => import('containers/studios-map'), {
  ssr: false,
});

function Estudios({ data }) {
  const { studios } = data;
  const router = useRouter();
  const { vista = 'tabla' } = router.query;

  const isTable = vista === 'tabla';
  const isMap = vista === 'mapa';

  return (
    <Page className={style.page}>
      <div className={`${style.wrapper}`}>
        <header className={style.header}>
          <a
            className={style.support}
            href="https://github.com/indi-es/estudios"
            target="__blank"
          >
            Puedes aportar a la lista de estudios en Github
            <FiGithub />
          </a>
          <div className={style['actions-view']}>
            <Link href="/estudios?vista=tabla">
              <a
                className={`${style.button} ${
                  isTable ? style['-active'] : null
                }`}
              >
                <FiMenu />
              </a>
            </Link>
            <Link href="/estudios?vista=mapa">
              <a
                className={`${style.button} ${isMap ? style['-active'] : null}`}
              >
                <FiMap />
              </a>
            </Link>
          </div>
        </header>
        {isMap ? <StudiosMap studios={studios} /> : null}
        {isTable ? (
          <StudiosTable studios={studios} className={style.table} />
        ) : null}
      </div>
    </Page>
  );
}

export async function getServerSideProps() {
  const url =
    'https://raw.githubusercontent.com/indi-es/estudios/main/estudios-mexico.json';
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}

Estudios.propTypes = {
  data: PropTypes.shape({
    studios: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
export default Estudios;
