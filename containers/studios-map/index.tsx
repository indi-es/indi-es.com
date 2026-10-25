import { useEffect } from 'react';
import { useMap, useMapEvents, Marker, Popup } from 'react-leaflet';
import type { LatLngTuple } from 'leaflet';
import classNames from 'classnames';

import Map from 'components/map';
import type { Studio } from 'types';

import cities from 'data/cities.json';

import style from './style.module.css';

type StudioWithUrl = Studio & { url?: string };

function getPosition(city: string): LatLngTuple | null {
  const res = cities.find((item) => {
    return item.city.toUpperCase() === city.toUpperCase();
  });

  if (!res) {
    return null;
  }

  return [parseFloat(res.lat), parseFloat(res.lng)];
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

type StudiosMapProps = {
  studios: Studio[];
  className?: string;
};

function StudiosMap({ studios, className }: StudiosMapProps) {
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
    .reduce<Record<string, StudioWithUrl[]>>((acc, curr) => {
      const city = curr.city as string;
      if (!acc[city]) acc[city] = [];
      acc[city].push(curr);
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
    .filter(
      (marker): marker is typeof marker & { position: LatLngTuple } =>
        marker.position != null
    );

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

export default StudiosMap;
