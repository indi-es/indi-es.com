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
      columns={columns}
      data={games}
      className={customClassName}
      initialState={{
        sortBy: [
          {
            id: 'date-launch',
            desc: false,
          },
        ],
      }}
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

GamesTable.defaultProps = {
  className: null,
};

export default GamesTable;
