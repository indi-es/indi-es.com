import PropTypes from 'prop-types';

import { Pie, patterns } from 'components/viz';

function PieBottom({ data, headers }) {
  return (
    <Pie
      margin={{ top: 40, right: 120, bottom: 80, left: 80 }}
      data={data}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 110,
          translateY: 0,
          itemsSpacing: 8,
          itemWidth: 60,
          itemHeight: 18,
          itemDirection: 'right-to-left',
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

PieBottom.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PieBottom;
