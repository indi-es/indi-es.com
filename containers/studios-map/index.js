import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap, useMapEvents, Marker, Popup } from 'react-leaflet';
import classNames from 'classnames';

import Map from 'components/map';

import cities from 'data/cities.json';

import style from './style.module.css';

function getPosition(city) {
  const res = cities.find((item) => {
    return item.city.toUpperCase() === city.toUpperCase();
  });

  if (!res) {
    return null;
  }

  return [parseFloat(res.lat, 10), parseFloat(res.lng, 10)];
}

function Locate() {
  const map = useMap();
  useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, 7);
    },
  });
  useEffect(() => {
    map.locate();
  }, []);
  return '';
}

function StudiosMap({ studios, className }) {
  const customClassName = classNames(
    style['studios-map'],
    'studios-map',
    className
  );

  const studiosByCity = studios
    .filter(({ city }) => city != null && city !== '')
    .map((item) => ({
      ...item,
      url: item.website || item.facebook || item.twitter || item.instagram,
    }))
    .reduce((acc, curr) => {
      if (!acc[curr.city]) acc[curr.city] = [];
      acc[curr.city].push(curr);
      return acc;
    }, {});

  const markers = Object.entries(studiosByCity)
    .map(([key, value]) => {
      const position = getPosition(key);
      if (!position) {
        const formatter = new Intl.ListFormat('en', {
          style: 'long',
          type: 'conjunction',
        });
        const studiosName = value.map((item) => {
          return item.name;
        });
        console.warn(
          `City |${key}| with developers: ${formatter.format(studiosName)} was not found on database`
        );
      }
      return {
        city: key,
        position,
        studios: value,
      };
    })
    .filter(({ position }) => position);

  return (
    <Map className={customClassName} center={[26.0425996, -99.739565]} zoom={4}>
      {markers.map((item) => {
        return (
          <Marker position={item.position} key={item.city}>
            <Popup className={style.popup}>
              <div className={style['studio-list']}>
                {item.studios.map((j) => {
                  return (
                    <a
                      key={j.name}
                      href={j.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {j.name}
                    </a>
                  );
                })}
              </div>
            </Popup>
          </Marker>
        );
      })}
      <Locate />
    </Map>
  );
}

StudiosMap.propTypes = {
  studios: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default StudiosMap;
