import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Bar } from 'components/viz';

import style from './style.module.css';

function byCity(items) {
  const grouped = items
    .filter((item) => item.city !== '')
    .reduce(
      (acc, curr) => {
        if (!acc[curr.city]) acc[curr.city] = 0;
        acc[curr.city] += 1;
        acc.total += 1;
        return acc;
      },
      { total: 0 }
    );

  return grouped;
}

function getByState(items) {
  const grouped = items
    .filter((item) => item.state !== '')
    .reduce((acc, curr) => {
      if (!acc[curr.state]) acc[curr.state] = [];
      acc[curr.state].push(curr);
      return acc;
    }, {});

  const t = Object.entries(grouped)
    .map((entry) => {
      return {
        state: entry[0],
        ...byCity(entry[1]),
      };
    })
    .sort((a, b) => {
      return b.total - a.total;
    });
  return t;
}

function getCities(items) {
  return [
    ...new Set(
      items.filter((item) => item.city !== '').map(({ city }) => city)
    ),
  ];
}

function StudiosStats({ studios, className }) {
  const customClassName = classNames(
    style['studios-stats'],
    'studios-stats',
    className
  );

  const byState = React.useMemo(() => getByState(studios, 'state'), [studios]);
  const keys = React.useMemo(() => getCities(studios), [studios]);

  return (
    <div className={customClassName}>
      <section>
        <Bar
          data={byState}
          keys={keys}
          indexBy="state"
          colors={['#f33bb6', '#aee73c']}
          axisBottom={{
            tickSize: 4,
            tickPadding: 4,
            tickRotation: 0,
            legend: 'Ciudad',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 4,
            tickPadding: 4,
            tickRotation: 0,
            legend: 'Número de estudios',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
        />
      </section>
      {/* <section> */}
      {/*   <Map /> */}
      {/* </section> */}
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
