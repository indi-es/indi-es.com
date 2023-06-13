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
} from './utils';

import PieRight from './pie-right';
import PieLeft from './pie-left';

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
      <section data-hide-mobile="">
        <div className={styles['bar-wrapper']}>
          <GamesBarYear data={byYear} layout="horizontal" />
        </div>
      </section>
      <section data-hide-desktop="">
        <div className={styles['bar-wrapper']}>
          <GamesBarYear data={byYear} layout="vertical" />
        </div>
      </section>
      <section className={styles.cluster}>
        <div className={styles['pie-wrapper']}>
          <PieLeft data={byStatus} headers={statuses} />
        </div>
        <div className={styles['pie-wrapper']}>
          <PieRight data={byPlatform} headers={platforms} />
        </div>
      </section>
      <section className={styles.cluster}>
        <div className={styles['pie-wrapper']}>
          <PieLeft data={byCrowdfundingStatus} headers={crowdfundStatuses} />
        </div>
        <div className={styles['pie-wrapper']}>
          <PieRight
            data={byCrowdfundingStatus.filter(
              (item) => item.id !== 'Not Crowdfunded'
            )}
            headers={crowdfundStatuses}
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
