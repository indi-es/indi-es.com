import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { Page } from 'components/layouts';
import type { Studio } from 'types';

import StudiosTable from 'containers/studios-table';
import StudiosStats from 'containers/studios-stats';

import StudiosHeader from './studios-header';
import StudiosResources from './studios-resources';

import style from './style.module.css';

const StudiosMap = dynamic(() => import('containers/studios-map'), {
  ssr: false,
});

type StudiosProps = {
  data: Studio[];
};

function Studios({ data }: StudiosProps) {
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

export default Studios;
