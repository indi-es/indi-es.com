import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { Page } from 'components/layouts';
import type { Game } from 'types';
import { filterGames, getFilterOptions, getGameFilters } from 'utils/games';

import GamesTable from 'containers/games-table';
import GamesStats from 'containers/games-stats';
import GamesHeader from './games-header';
import GamesFilters from './games-filters';
import GamesNotes from './games-notes';

import style from './style.module.css';

export type GamesVista = 'tabla' | 'estadisticas';

type GamesProps = {
  data: Game[];
  vista: GamesVista;
};

const paths: Record<GamesVista, string> = {
  tabla: '/juegos',
  estadisticas: '/juegos/estadisticas',
};

function Games({ data, vista }: GamesProps) {
  const { query } = useRouter();
  const isTable = vista === 'tabla';
  const isStats = vista === 'estadisticas';

  const filters = useMemo(() => getGameFilters(query), [query]);
  const games = useMemo(() => filterGames(data, filters), [data, filters]);
  const options = useMemo(() => getFilterOptions(data), [data]);

  return (
    <Page className={style.page}>
      <div className={`${style.wrapper} wrapper`}>
        <GamesNotes />
        <div className={style.content}>
          <GamesHeader
            isTable={isTable}
            isStats={isStats}
            data={games}
            total={data.length}
            filters={filters}
          />
          <GamesFilters
            filters={filters}
            options={options}
            pathname={paths[vista]}
          />
          {isTable ? (
            <GamesTable games={games} className={style.table} />
          ) : null}
          {isStats ? (
            <GamesStats games={games} className={style.stats} />
          ) : null}
        </div>
      </div>
    </Page>
  );
}

export default Games;
