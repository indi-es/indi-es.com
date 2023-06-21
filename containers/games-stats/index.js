import { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import GamesBarYear from './games-bar-year';

import {
  getByStatus,
  getByYear,
  getStatuses,
  getPlatforms,
  getByPlatforms,
  getByCrowdfundedStatus,
  getCrowdfundedStatuses,
  getGenres,
  getByGenres,
  getByYearFiltered,
  getByYearPlatforms,
} from './utils';

import PieRight from './pie-right';
import PieLeft from './pie-left';
import PieBig from './pie-big';

import styles from './styles.module.css';
import PieLegendless from './pie-legendless';
import ChartWrapper from './chart-wrapper';

function GamesStats({ games, className }) {
  const customClassName = classNames(
    styles['games-stats'],
    'games-stats',
    className
  );

  const byYear = useMemo(() => getByYear(games), [games]);
  const byYearFiltered = useMemo(() => getByYearFiltered(games), [games]);
  const byYearPlatforms = useMemo(() => getByYearPlatforms(games), [games]);
  const byStatus = useMemo(() => getByStatus(games), [games]);
  const byPlatform = useMemo(() => getByPlatforms(games), [games]);
  const byGenres = useMemo(() => getByGenres(games), [games]);
  const byCrowdfundingStatus = useMemo(
    () => getByCrowdfundedStatus(games),
    [games]
  );
  const byCrowdfundingStatusFiltered = byCrowdfundingStatus.filter(
    (item) => item.id !== 'Not Crowdfunded'
  );

  const statuses = useMemo(() => getStatuses(games), [games]);
  const genres = useMemo(() => getGenres(games), [games]);
  const platforms = useMemo(() => getPlatforms(games), [games]);
  const crowdfundStatuses = getCrowdfundedStatuses();

  return (
    <div className={customClassName}>
      <ChartWrapper
        data-hide-mobile=""
        data-columns="full-width"
        id="game-bar-year-filtered-vertical"
      >
        <GamesBarYear
          data={byYearFiltered}
          layout="vertical"
          legend="Juegos publicados por año"
        />
      </ChartWrapper>

      <ChartWrapper
        data-hide-desktop=""
        id="game-bar-year-filtered-horizontal"
        data-rows="2"
      >
        <GamesBarYear
          data={byYearFiltered}
          layout="horizontal"
          legend="Juegos publicados por año"
        />
      </ChartWrapper>

      <ChartWrapper
        data-hide-mobile=""
        data-columns="full-width"
        id="game-bar-year-vertical"
      >
        <GamesBarYear
          data={byYear}
          keys={statuses}
          layout="vertical"
          legend="Juegos por año"
        />
      </ChartWrapper>

      <ChartWrapper
        data-hide-desktop=""
        id="game-bar-year-horizontal"
        data-rows="2"
      >
        <GamesBarYear
          data={byYear}
          keys={statuses}
          layout="horizontal"
          legend="Juegos por año"
        />
      </ChartWrapper>

      <ChartWrapper
        data-hide-mobile=""
        data-columns="full-width"
        id="game-bar-year-filtered-vertical"
      >
        <GamesBarYear
          data={byYearPlatforms}
          layout="vertical"
          legend="Juegos por año en Consolas, Dispositivos Móbiles y PC"
          keys={['console', 'mobile', 'pc']}
        />
      </ChartWrapper>

      <ChartWrapper
        data-hide-desktop=""
        id="game-bar-year-filtered-horizontal"
        data-rows="2"
      >
        <GamesBarYear
          data={byYearPlatforms}
          layout="horizontal"
          legend="Juegos por año en Consolas, Dispositivos Móbiles y PC"
          keys={['console', 'mobile', 'pc']}
        />
      </ChartWrapper>

      <ChartWrapper
        className={styles['pie-article']}
        data-hide-mobile=""
        id="pie-status-desktop"
      >
        <PieLeft data={byStatus} headers={statuses} />
      </ChartWrapper>

      <ChartWrapper data-hide-desktop="" id="pie-status-mobile">
        <PieLegendless data={byStatus} headers={statuses} />
      </ChartWrapper>

      <ChartWrapper data-hide-mobile="" id="pie-by-platform-desktop">
        <PieRight data={byPlatform} headers={platforms} />
      </ChartWrapper>

      <ChartWrapper data-hide-desktop="" id="pie-by-platform-mobile">
        <PieLegendless data={byPlatform} headers={platforms} />
      </ChartWrapper>

      <ChartWrapper data-hide-mobile="" id="pie-crowdfunding-desktop">
        <PieLeft data={byCrowdfundingStatus} headers={crowdfundStatuses} />
      </ChartWrapper>

      <ChartWrapper data-hide-desktop="" id="pie-by-platform-mobile">
        <PieLegendless
          data={byCrowdfundingStatus}
          headers={crowdfundStatuses}
        />
      </ChartWrapper>

      <ChartWrapper data-hide-mobile="" id="pie-crowdfunding-filter-desktop">
        <PieRight
          data={byCrowdfundingStatusFiltered}
          headers={crowdfundStatuses}
        />
      </ChartWrapper>

      <ChartWrapper data-hide-desktop="" id="pie-crowdfunding-filter-mobile">
        <PieLegendless
          data={byCrowdfundingStatusFiltered}
          headers={crowdfundStatuses}
        />
      </ChartWrapper>

      <ChartWrapper
        data-columns="full-width"
        data-rows="2"
        data-hide-mobile=""
        id="pie-genres-desktop"
      >
        <PieBig data={byGenres} headers={genres} />
      </ChartWrapper>

      <ChartWrapper data-hide-desktop="" id="pie-genres-mobile">
        <PieLegendless data={byGenres} headers={genres} />
      </ChartWrapper>
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
