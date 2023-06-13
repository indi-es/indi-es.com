import { FbCell, IgCell, TwCell, WebCell } from 'components/cells';
import { HeaderCenter } from 'components/table-headers';

import NameCell from './name-cell';

const columns = [
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
    headerClassName: '-center',
    enableSorting: false,
    cell: WebCell,
  },
  {
    header: () => <HeaderCenter label="Twitter" />,
    accessorKey: 'twitter',
    headerClassName: '-center',
    enableSorting: false,
    cell: TwCell,
  },
  {
    header: () => <HeaderCenter label="Facebook" />,
    accessorKey: 'facebook',
    headerClassName: '-center',
    enableSorting: false,
    cell: FbCell,
  },
  {
    header: () => <HeaderCenter label="Instagram" />,
    accessorKey: 'instagram',
    headerClassName: '-center',
    enableSorting: false,
    cell: IgCell,
  },
];

export default columns;
