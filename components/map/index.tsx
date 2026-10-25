import { useEffect } from 'react';
import classNames from 'classnames';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import type { MapContainerProps } from 'react-leaflet';

import style from './style.module.css';

function Map({
  children,
  className,
  center = [18.9768282, -99.0822867],
  zoom = 15,
  ...rest
}: MapContainerProps) {
  const customClassName = classNames(
    style['map-container'],
    'map-container',
    className
  );

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      {children}
    </MapContainer>
  );
}

export default Map;
