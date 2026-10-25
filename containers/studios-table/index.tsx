import classNames from 'classnames';

import Table from 'components/table';
import type { Studio } from 'types';

import columns from './columns';

import style from './style.module.css';

type StudiosTableProps = {
  studios: Studio[];
  className?: string;
};

function StudiosTable({ studios, className }: StudiosTableProps) {
  const customClassName = classNames(
    style['studios-table'],
    'studios-table',
    className
  );

  return (
    <Table
      columns={columns}
      data={studios}
      className={customClassName}
      initialSort={[
        {
          id: 'name',
          desc: false,
        },
      ]}
    />
  );
}

export default StudiosTable;
