import PropTypes from 'prop-types';
import { useTable, useSortBy } from 'react-table';
import classNames from 'classnames';

import TableHeader from './table-header';
import TableRow from './table-row';

import style from './style.module.css';

function Table({ className, columns, data, loading, initialState }) {
  const customClassName = classNames(
    style['table-container'],
    'table-container',
    className,
    {
      '-loading': loading,
    }
  );

  const {
    headerGroups,
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useSortBy
  );

  return (
    <div className={customClassName}>
      <table {...getTableProps()}>
        <TableHeader headerGroups={headerGroups} />
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return <TableRow key={row.index} row={row} loading={loading} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  initialState: PropTypes.shape({}),
};

Table.defaultProps = {
  loading: false,
  className: null,
  initialState: {},
};

export default Table;
