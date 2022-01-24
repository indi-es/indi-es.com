import PropTypes from 'prop-types';

import Skeleton from 'components/skeleton';

import style from './style.module.css';

function TableRow({ row, loading }) {
  return (
    <tr {...row.getRowProps()} className={style['table-row']}>
      {row.cells.map((cell) => (
        <td {...cell.getCellProps()}>
          {loading ? <Skeleton /> : cell.render('Cell')}
        </td>
      ))}
    </tr>
  );
}

TableRow.propTypes = {
  row: PropTypes.shape({
    index: PropTypes.number,
    cells: PropTypes.arrayOf(PropTypes.shape({})),
    getRowProps: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool,
};

TableRow.defaultProps = {
  loading: false,
};

export default TableRow;
