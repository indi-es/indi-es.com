import React from 'react';
import { FbCell, IgCell, TwCell, WebCell } from 'components/cells';
import { HeaderCenter } from 'components/table-headers';

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Ciudad',
    accessor: 'city',
  },
  {
    Header: 'Estado',
    accessor: 'state',
  },
  // {
  //   Header: 'Country',
  //   accessor: 'country',
  // },
  {
    Header: () => <HeaderCenter label="Web" />,
    accessor: 'website',
    headerClassName: '-center',
    disableSortBy: true,
    Cell: WebCell,
  },
  {
    Header: () => <HeaderCenter label="Twitter" />,
    accessor: 'twitter',
    headerClassName: '-center',
    disableSortBy: true,
    Cell: TwCell,
  },
  {
    Header: () => <HeaderCenter label="Facebook" />,
    accessor: 'facebook',
    headerClassName: '-center',
    disableSortBy: true,
    Cell: FbCell,
  },
  {
    Header: () => <HeaderCenter label="Instagram" />,
    accessor: 'instagram',
    headerClassName: '-center',
    disableSortBy: true,
    Cell: IgCell,
  },
];

export default columns;
