import PropTypes from 'prop-types';
import classNames from 'classnames';

import Table from 'components/table';

import columns from './columns';

import style from './style.module.css';

function GamesTable({ games, className }) {
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

GamesTable.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default GamesTable;
