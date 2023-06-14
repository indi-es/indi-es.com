import PropTypes from 'prop-types';

import { Bar } from 'components/viz';

function GamesBarYear({ data, layout, ...rest }) {
  return (
    <Bar
      data={data}
      indexBy="year"
      colors={['var(--fg)']}
      layout={layout}
      borderWidth={2}
      margin={{ top: 0, left: 40, bottom: 50, right: 0 }}
      axisBottom={{
        tickSize: 4,
        tickPadding: 4,
        tickRotation: 0,
        legend: 'Número de juegos publicados por año',
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
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

GamesBarYear.defaultProps = {};

export default GamesBarYear;
