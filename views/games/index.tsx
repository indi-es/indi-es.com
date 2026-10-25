import { Page } from 'components/layouts';
import type { Game } from 'types';

import GamesTable from 'containers/games-table';
import GamesStats from 'containers/games-stats';
import GamesHeader from './games-header';
import GamesNotes from './games-notes';

import style from './style.module.css';

export type GamesVista = 'tabla' | 'estadisticas';

type GamesProps = {
  data: Game[];
  vista: GamesVista;
};

function Games({ data, vista }: GamesProps) {
  const isTable = vista === 'tabla';
  const isStats = vista === 'estadisticas';

  return (
    <Page className={style.page}>
      <div className={`${style.wrapper} wrapper`}>
        <GamesNotes />
        <div className={style.content}>
          <GamesHeader isTable={isTable} isStats={isStats} data={data} />
          {isTable ? <GamesTable games={data} className={style.table} /> : null}
          {isStats ? <GamesStats games={data} className={style.stats} /> : null}
        </div>
      </div>
    </Page>
  );
}

export default Games;
