import PropTypes from 'prop-types';

import 'modern-css-reset';
import 'leaflet/dist/leaflet.css';

import 'styles/variables.css';
import 'styles/globals.css';
import 'styles/leaflet.css';

import Filters from 'svg/filters';

export const metadata = {
  title: 'INDI·ES',
  description: 'Comunidad de desarrolladores de videojuegos en español',
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Filters />
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;
