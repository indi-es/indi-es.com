import CellPlaforms from './cell-platforms';

const columns = [
  {
    Header: 'Nombre',
    accessor: 'name',
  },
  {
    Header: 'Desarrolladores',
    accessor: 'developer',
  },
  {
    Header: 'Publisher',
    accessor: 'publisher',
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
