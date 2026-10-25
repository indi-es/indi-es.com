import type { ColumnDef } from '@tanstack/react-table';

import { TimeCell } from 'components/cells';
import type { Features } from 'components/table/features';
import type { Game, GameCrowdfunding } from 'types';

import CellPlaforms from './cell-platforms';
import CellCrowdfunding from './cell-crowdfunding';

const formatter = new Intl.ListFormat('es-mx', {
  style: 'long',
  type: 'conjunction',
});

function getCrowdfundingSortValue(value: GameCrowdfunding) {
  const { funded, url } = value;
  if (funded) return 2;
  if (url) return 1;
  return 0;
}

function formatList(items: string[]) {
  return formatter.format(items.sort());
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<Features, Game, any>[] = [
  {
    header: 'Nombre',
    accessorKey: 'name',
    sortFn: 'alphanumericCaseSensitive',
  },
  {
    header: 'Género',
    id: 'genre',
    accessorFn: (row) => formatList(row.genre || []),
    sortFn: 'alphanumericCaseSensitive',
  },
  {
    header: 'Desarrolladores',
    id: 'developers',
    accessorFn: (row) => formatList(row.developers || []),
    sortFn: 'alphanumericCaseSensitive',
  },
  {
    header: 'Publisher',
    id: 'publishers',
    accessorFn: (row) => formatList(row.publishers || []),
    sortFn: 'alphanumericCaseSensitive',
  },
  {
    header: 'Engine',
    accessorKey: 'engine',
    sortFn: 'alphanumericCaseSensitive',
  },
  {
    header: 'Fecha de lanzamiento',
    accessorKey: 'date-launch',
    cell: TimeCell,
    sortFn: (rowA, rowB, columnId) => {
      const valueA = rowA.getValue<string | null>(columnId);
      const valueB = rowB.getValue<string | null>(columnId);

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
    sortFn: (rowA, rowB, columnId) => {
      const a = getCrowdfundingSortValue(rowA.getValue(columnId));
      const b = getCrowdfundingSortValue(rowB.getValue(columnId));

      return a - b;
    },
  },
  {
    header: 'Plataformas',
    accessorKey: 'platforms',
    cell: CellPlaforms,
  },
];

export default columns;
