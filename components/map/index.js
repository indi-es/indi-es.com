import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import usePrefersColorScheme from 'hooks/use-prefers-color-scheme';

import style from './style.module.css';

const Map = ({ children, className, center, zoom, ...rest }) => {
  const preferredColorSchema = usePrefersColorScheme();
  const isDarkMode = preferredColorSchema === 'dark';
  const customClassName = classNames(
    style['map-container'],
    'map-container',
    className
  );

  useEffect(() => {
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
      {isDarkMode ? (
        <TileLayer
          attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          ext="png"
        />
      ) : (
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          ext="png"
        />
      )}
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
