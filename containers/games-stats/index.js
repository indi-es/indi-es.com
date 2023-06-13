import { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Bar } from 'components/viz';

import { getByYear } from './utils';

import style from './styles.module.css';

function GamesStats({ games, className }) {
  const customClassName = classNames(
    style['games-stats'],
    'games-stats',
    className
  );

  const byYear = useMemo(() => getByYear(games), [games]);

  return (
    <div className={customClassName}>
      <section>
        <Bar
          data={byYear.map((item) => ({
            year: item.year,
            value: item.total,
          }))}
          indexBy="year"
          colors={['var(--fg)']}
          layout="vertical"
          borderWidth={2}
          margin={{ top: 0, left: 25, bottom: 50, right: 0 }}
          axisBottom={{
            tickSize: 4,
            tickPadding: 4,
            tickRotation: 0,
            legend: 'Número de juegos',
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
        />
      </section>
    </div>
  );
}

GamesStats.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

GamesStats.defaultProps = {
  className: null,
};

export default GamesStats;
