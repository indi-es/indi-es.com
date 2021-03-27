import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import style from './style.module.css';

const Map = ({ children, className, center, zoom, ...rest }) => {
  const customClassName = classNames(
    style['map-container'],
    'map-container',
    className
  );

  React.useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/img/marker-icon-2x.png',
      iconUrl: '/img/marker-icon.png',
      shadowUrl: '/img/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={customClassName}
      {...rest}
    >
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}"
        ext="png"
      />
      {children}
    </MapContainer>
  );
};

Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
};

Map.defaultProps = {
  children: null,
  className: null,
  center: [18.9768282, -99.0822867],
  zoom: 15,
};

export default Map;
