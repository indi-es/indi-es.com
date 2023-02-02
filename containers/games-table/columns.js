import { ListFormattedCell } from 'components/cells';
import CellPlaforms from './cell-platforms';

const columns = [
  {
    Header: 'Nombre',
    accessor: 'name',
  },
  {
    Header: 'Desarrolladores',
    accessor: 'developers',
    Cell: ListFormattedCell,
  },
  {
    Header: 'Publisher',
    accessor: 'publishers',
    Cell: ListFormattedCell,
  },
  {
    Header: 'Fecha de lanzamiento',
    accessor: 'date-launch',
  },
  {
    Header: 'Plataformas',
    accessor: 'platforms',
    Cell: CellPlaforms,
    disableSortBy: true,
  },
];

export default columns;
