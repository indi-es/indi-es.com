import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { Page } from 'components/layouts';

import StudiosTable from 'containers/studios-table';
import StudiosStats from 'containers/studios-stats';

import EstudiosHeader from './estudios-header';
import EstudiosResources from './estudios-resources';

import style from './style.module.css';

const StudiosMap = dynamic(() => import('containers/studios-map'), {
  ssr: false,
});

function Estudios({ data }) {
  const { developers = [] } = data;
  const router = useRouter();
  const { vista = 'tabla' } = router.query;

  const isTable = vista === 'tabla';
  const isMap = vista === 'mapa';
  const isStats = vista === 'estadisticas';

  return (
    <Page className={style.page}>
      <div className={`${style.wrapper}`}>
        <div className={style.content}>
          <EstudiosHeader isMap={isMap} isStats={isStats} isTable={isTable} />
          {isStats ? <StudiosStats studios={developers} /> : null}
          {isMap ? <StudiosMap studios={developers} /> : null}
          {isTable ? (
            <StudiosTable studios={developers} className={style.table} />
          ) : null}
        </div>
        <EstudiosResources />
      </div>
    </Page>
  );
}

Estudios.propTypes = {
  data: PropTypes.shape({
    developers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
export default Estudios;
