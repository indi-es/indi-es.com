import PropTypes from 'prop-types';
import { flexRender } from '@tanstack/react-table';

import Skeleton from 'components/skeleton';

import style from './style.module.css';

function TableRow({ row, loading }) {
  return (
    <tr className={style['table-row']}>
      {row.getVisibleCells().map((cell) => {
        return (
          <td key={cell.id}>
            {loading ? (
              <Skeleton />
            ) : (
              flexRender(cell.column.columnDef.cell, cell.getContext())
            )}
          </td>
        );
      })}
    </tr>
  );
}

TableRow.propTypes = {
  row: PropTypes.shape({
    index: PropTypes.number,
    cells: PropTypes.arrayOf(PropTypes.shape({})),
    getRowProps: PropTypes.func,
    getVisibleCells: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool,
};

TableRow.defaultProps = {
  loading: false,
};

export default TableRow;
