import PropTypes from 'prop-types';

import { Pie, patterns } from 'components/viz';

function PieRight({ data, headers }) {
  return (
    <Pie
      margin={{ top: 80, right: 100, bottom: 80, left: 200 }}
      data={data}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 200,
          translateY: 0,
          itemsSpacing: 8,
          itemWidth: 100,
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

PieRight.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PieRight.defaultProps = {};

export default PieRight;
