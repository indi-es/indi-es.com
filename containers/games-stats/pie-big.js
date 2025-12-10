import PropTypes from 'prop-types';

import { Pie, patterns } from 'components/viz';

function PieBig({ data, headers }) {
  return (
    <Pie
      margin={{ top: 40, right: 80, bottom: 200, left: 80 }}
      data={data}
      legends={[
        {
          anchor: 'left',
          direction: 'column',
          justify: false,
          translateX: -80,
          translateY: 0,
          itemsSpacing: 8,
          itemWidth: 80,
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
      padAngle={0.1}
      cornerRadius={1}
      borderWidth={0.5}
    />
  );
}

PieBig.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PieBig;
