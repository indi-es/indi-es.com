import PropTypes from 'prop-types';

import { Bar, patterns } from 'components/viz';

function GamesBarYear({ data, layout, keys, legend, ...rest }) {
  const fill = keys
    ? keys.map((item, i) => ({
        match: {
          id: item,
        },
        id: patterns[i % patterns.length].id,
      }))
    : undefined;

  return (
    <Bar
      data={data}
      indexBy="year"
      layout={layout}
      borderWidth={2}
      margin={{ top: 0, left: 40, bottom: 50, right: 0 }}
      keys={keys}
      fill={fill}
      axisBottom={{
        tickSize: 4,
        tickPadding: 4,
        tickRotation: 0,
        legend,
        legendPosition: 'middle',
        legendOffset: 40,
      }}
      axisLeft={{
        tickSize: 4,
        tickPadding: 4,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      {...rest}
    />
  );
}

GamesBarYear.propTypes = {
  layout: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string),
};

GamesBarYear.defaultProps = {
  keys: undefined,
};

export default GamesBarYear;
