import { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RichText from 'components/rich-text';
import { Bar } from 'components/viz';

import { getByState, getCities } from './utils';

import style from './style.module.css';

function StudiosStats({ studios, className }) {
  const customClassName = classNames(
    style['studios-stats'],
    'studios-stats',
    className
  );

  const byState = useMemo(() => getByState(studios, 'state'), [studios]);
  const keys = useMemo(() => getCities(studios), [studios]);

  return (
    <div className={customClassName}>
      <section>
        <Bar
          data={byState.map((item) => ({
            state: item.state,
            total: item.total,
            ...item.cities,
          }))}
          keys={keys}
          indexBy="state"
          colors={['var(--fg)']}
          layout="horizontal"
          borderWidth={2}
          axisBottom={{
            tickSize: 4,
            tickPadding: 4,
            tickRotation: 0,
            legend: 'Número de estudios',
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

      <details>
        <summary>Detalles</summary>
        <RichText className={`${style['stats-info']}`}>
          <ul>
            {byState.map((item) => {
              const cities = Object.entries(item.cities);
              const hasCities = cities[0][0] !== item.state;
              return (
                <li>
                  <span>
                    {item.state}: {item.total}
                  </span>
                  {hasCities ? (
                    <ul>
                      {cities.map(([city, total]) => {
                        const text = `${city}: ${total}`;
                        return <li>{text}</li>;
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </RichText>
      </details>
    </div>
  );
}

StudiosStats.propTypes = {
  studios: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

StudiosStats.defaultProps = {
  className: null,
};

export default StudiosStats;
