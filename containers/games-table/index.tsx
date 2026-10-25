import classNames from 'classnames';

import Table from 'components/table';
import type { Game } from 'types';

import columns from './columns';

import style from './style.module.css';

type GamesTableProps = {
  games: Game[];
  className?: string;
};

function GamesTable({ games, className }: GamesTableProps) {
  const customClassName = classNames(
    style['games-table'],
    'games-table',
    className
  );

  return (
    <Table
      className={customClassName}
      columns={columns}
      data={games}
      initialSort={[
        {
          id: 'name',
          desc: true,
        },
      ]}
    />
  );
}

export default GamesTable;
