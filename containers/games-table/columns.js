import { ListFormattedCell, TimeCell } from 'components/cells';

import CellPlaforms from './cell-platforms';
import CellCrowdfunding from './cell-crowdfunding';

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
    Cell: TimeCell,
  },
  {
    Header: 'Estado',
    accessor: 'status',
  },
  {
    Header: 'Crowdfunding',
    accessor: 'crowdfunding',
    Cell: CellCrowdfunding,
    disableSortBy: true,
  },
  {
    Header: 'Plataformas',
    accessor: 'platforms',
    Cell: CellPlaforms,
    disableSortBy: true,
  },
];

export default columns;
