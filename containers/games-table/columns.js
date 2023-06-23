import { TimeCell } from 'components/cells';

import CellPlaforms from './cell-platforms';
import CellCrowdfunding from './cell-crowdfunding';

const formatter = new Intl.ListFormat('es-mx', {
  style: 'long',
  type: 'conjunction',
});

function getCrowdfundingSortValue(value) {
  const { funded, url } = value;
  if (funded) return 2;
  if (url) return 1;
  return 0;
}

function formatList(items) {
  return formatter.format(items.sort());
}

const columns = [
  {
    header: 'Nombre',
    accessorKey: 'name',
    sortingFn: 'alphanumericCaseSensitive',
  },
  {
    header: 'Género',
    id: 'genre',
    accessorFn: (row) => formatList(row.genre || []),
    sortingFn: 'alphanumericCaseSensitive',
  },
  {
    header: 'Desarrolladores',
    id: 'developers',
    accessorFn: (row) => formatList(row.developers || []),
    sortingFn: 'alphanumericCaseSensitive',
  },
  {
    header: 'Publisher',
    id: 'publishers',
    accessorFn: (row) => formatList(row.publishers || []),
    sortingFn: 'alphanumericCaseSensitive',
  },
  {
    header: 'Engine',
    accessorKey: 'engine',
    sortingFn: 'alphanumericCaseSensitive',
  },
  {
    header: 'Fecha de lanzamiento',
    accessorKey: 'date-launch',
    cell: TimeCell,
    sortingFn: (rowA, rowB, columnId) => {
      const valueA = rowA.getValue(columnId);
      const valueB = rowB.getValue(columnId);

      if (valueA == null) return -1;
      if (valueB == null) return 1;

      const a = Date.parse(valueA);
      const b = Date.parse(valueB);

      return a - b;
    },
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
