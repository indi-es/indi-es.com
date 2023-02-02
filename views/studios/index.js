import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { Page } from 'components/layouts';

import StudiosTable from 'containers/studios-table';
import StudiosStats from 'containers/studios-stats';

import StudiosHeader from './studios-header';
import StudiosResources from './studios-resources';

import style from './style.module.css';

const StudiosMap = dynamic(() => import('containers/studios-map'), {
  ssr: false,
});

function Studios({ data }) {
  const router = useRouter();
  const { vista = 'tabla' } = router.query;

  const isTable = vista === 'tabla';
  const isMap = vista === 'mapa';
  const isStats = vista === 'estadisticas';

  return (
    <Page className={style.page}>
      <div className={`${style.wrapper} wrapper`}>
        <div className={style.content}>
          <StudiosHeader
            isMap={isMap}
            isStats={isStats}
            isTable={isTable}
            data={data}
          />
          {isStats ? <StudiosStats studios={data} /> : null}
          {isMap ? <StudiosMap studios={data} /> : null}
          {isTable ? (
            <StudiosTable studios={data} className={style.table} />
          ) : null}
        </div>
        <StudiosResources />
      </div>
    </Page>
  );
}

Studios.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};
export default Studios;
