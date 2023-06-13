import { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Bar, Pie, patterns } from 'components/viz';

import {
  getByStatus,
  getByYear,
  getStatuses,
  getPlatforms,
  getByPlatforms,
  getByCrowdfundedStatus,
  getCrowdfundedStatuses,
} from './utils';

import styles from './styles.module.css';

function GamesStats({ games, className }) {
  const customClassName = classNames(
    styles['games-stats'],
    'games-stats',
    className
  );

  const byYear = useMemo(() => getByYear(games), [games]);
  const byStatus = useMemo(() => getByStatus(games), [games]);
  const byPlatform = useMemo(() => getByPlatforms(games), [games]);
  const byCrowdfundingStatus = useMemo(
    () => getByCrowdfundedStatus(games),
    [games]
  );

  const statuses = useMemo(() => getStatuses(games), [games]);
  const platforms = useMemo(() => getPlatforms(games), [games]);
  const crowdfundStatuses = getCrowdfundedStatuses();

  return (
    <div className={customClassName}>
      <section>
        <Bar
          data={byYear}
          indexBy="year"
          colors={['var(--fg)']}
          layout="vertical"
          borderWidth={2}
          margin={{ top: 0, left: 25, bottom: 50, right: 0 }}
          axisBottom={{
            tickSize: 4,
            tickPadding: 4,
            tickRotation: 0,
            legend: 'Número de juegos lanzados por año',
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
      <section className={styles.cluster}>
        <div className={styles['pie-wrapper']}>
          <Pie
            margin={{ top: 40, right: 0, bottom: 80, left: 120 }}
            data={byStatus}
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
            fill={statuses.map((item, i) => ({
              match: {
                id: item,
              },
              id: patterns[i % patterns.length].id,
            }))}
          />
        </div>
        <div className={styles['pie-wrapper']}>
          <Pie
            margin={{ top: 40, right: 120, bottom: 80, left: 80 }}
            data={byPlatform}
            legends={[
              {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 110,
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
            fill={platforms.map((item, i) => ({
              match: {
                id: item,
              },
              id: patterns[i % patterns.length].id,
            }))}
          />
        </div>
      </section>
      <section className={styles.cluster}>
        <div className={styles['pie-wrapper']}>
          <Pie
            margin={{ top: 40, right: 0, bottom: 80, left: 120 }}
            data={byCrowdfundingStatus}
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
            fill={crowdfundStatuses.map((item, i) => ({
              match: {
                id: item,
              },
              id: patterns[i % patterns.length].id,
            }))}
          />
        </div>
        <div className={styles['pie-wrapper']}>
          <Pie
            margin={{ top: 40, right: 120, bottom: 80, left: 80 }}
            data={byCrowdfundingStatus.filter(
              (item) => item.id !== 'Not Crowdfunded'
            )}
            legends={[
              {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 110,
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
            fill={crowdfundStatuses.map((item, i) => ({
              match: {
                id: item,
              },
              id: patterns[i % patterns.length].id,
            }))}
          />
        </div>
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
