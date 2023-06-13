import PropTypes from 'prop-types';

import { Pie, patterns } from 'components/viz';

function PieLeft({ data, headers }) {
  return (
    <Pie
      margin={{ top: 40, right: 0, bottom: 80, left: 120 }}
      data={data}
      legends={[
        {
          anchor: 'left',
          direction: 'column',
          justify: false,
          translateX: -110,
          translateY: 0,
          itemsSpacing: 8,
          itemWidth: 100,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'square',
        },
      ]}
      fill={headers.map((item, i) => ({
        match: {
          id: item,
        },
        id: patterns[i % patterns.length].id,
      }))}
    />
  );
}

PieLeft.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  headers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

PieLeft.defaultProps = {};

export default PieLeft;
