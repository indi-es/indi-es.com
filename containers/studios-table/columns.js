import { FbCell, IgCell, TwCell, WebCell } from 'components/cells';

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  // {
  //   Header: 'Country',
  //   accessor: 'country',
  // },
  {
    Header: 'Website',
    accessor: 'website',
    headerClassName: '-center',
    disableSortBy: true,
    Cell: WebCell,
  },
  {
    Header: 'Twitter',
    accessor: 'twitter',
    headerClassName: '-center',
    disableSortBy: true,
    Cell: TwCell,
  },
  {
    Header: 'Facebook',
    accessor: 'facebook',
    headerClassName: '-center',
    disableSortBy: true,
    Cell: FbCell,
  },
  {
    Header: 'instagram',
    accessor: 'instagram',
    headerClassName: '-center',
    disableSortBy: true,
    Cell: IgCell,
  },
];

export default columns;
