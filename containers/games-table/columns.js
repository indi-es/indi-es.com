import { ListFormattedCell, TimeCell } from 'components/cells';

import CellPlaforms from './cell-platforms';
import CellCrowdfunding from './cell-crowdfunding';

function getCrowdfundingSortValue(value) {
  const { funded, url } = value;
  if (funded) return 2;
  if (url) return 1;
  return 0;
}

const columns = [
  {
    header: 'Nombre',
    accessorKey: 'name',
  },
  {
    header: 'Desarrolladores',
    accessorKey: 'developers',
    cell: ListFormattedCell,
  },
  {
    header: 'Publisher',
    accessorKey: 'publishers',
    cell: ListFormattedCell,
  },
  {
    header: 'Fecha de lanzamiento',
    accessorKey: 'date-launch',
    cell: TimeCell,
    sortingFn: 'datetime',
  },
  {
    header: 'Estado',
    accessorKey: 'status',
  },
  {
    header: 'Crowdfunding',
    accessorKey: 'crowdfunding',
    cell: CellCrowdfunding,
    disableSortBy: true,
    sortingFn: (rowA, rowB, columnId) => {
      const a = getCrowdfundingSortValue(rowA.getValue(columnId));
      const b = getCrowdfundingSortValue(rowB.getValue(columnId));

      return a - b;
    },
  },
  {
    header: 'Plataformas',
    accessorKey: 'platforms',
    cell: CellPlaforms,
    disableSortBy: true,
  },
];

export default columns;
