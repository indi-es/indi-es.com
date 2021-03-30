import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Table from 'components/table';

import columns from './columns';

import style from './style.module.css';

function StudiosTable({ studios, className }) {
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
      initialState={{
        sortBy: [
          {
            id: 'name',
            desc: false,
          },
        ],
      }}
    />
  );
}

StudiosTable.propTypes = {
  studios: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

StudiosTable.defaultProps = {
  className: null,
};

export default StudiosTable;
