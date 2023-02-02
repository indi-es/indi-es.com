import PropTypes from 'prop-types';
import classNames from 'classnames';

import Table from 'components/table';

import columns from './columns';

import style from './style.module.css';

function GamesTable({ studios, className }) {
  const customClassName = classNames(
    style['games-table'],
    'games-table',
    className
  );

  return (
    <Table
      columns={columns}
      data={studios}
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
  studios: PropTypes.arrayOf(
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
