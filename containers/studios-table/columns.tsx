import type { ColumnDef } from '@tanstack/react-table';

import { FbCell, IgCell, TwCell, WebCell } from 'components/cells';
import { HeaderCenter } from 'components/table-headers';
import type { Studio } from 'types';

import NameCell from './name-cell';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<Studio, any>[] = [
  {
    header: 'Nombre',
    accessorKey: 'name',
    cell: NameCell,
  },
  {
    header: 'País',
    accessorKey: 'country',
  },
  {
    header: 'Ciudad',
    accessorKey: 'city',
  },
  {
    header: 'Estado',
    accessorKey: 'state',
  },
  // {
  //   header: 'Country',
  //   accessorKey: 'country',
  // },
  // {
  //   header: 'Tags',
  //   accessorKey: 'tags',
  //   enableSorting: false,
  //   cell: TagsCell,
  // },
  {
    header: () => <HeaderCenter label="Web" />,
    accessorKey: 'website',
    enableSorting: false,
    cell: WebCell,
  },
  {
    header: () => <HeaderCenter label="Twitter" />,
    accessorKey: 'twitter',
    enableSorting: false,
    cell: TwCell,
  },
  {
    header: () => <HeaderCenter label="Facebook" />,
    accessorKey: 'facebook',
    enableSorting: false,
    cell: FbCell,
  },
  {
    header: () => <HeaderCenter label="Instagram" />,
    accessorKey: 'instagram',
    enableSorting: false,
    cell: IgCell,
  },
];

export default columns;
