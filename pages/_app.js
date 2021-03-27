/* eslint filenames/match-exported: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import 'modern-css-reset';
import 'leaflet/dist/leaflet.css';

import 'styles/variables.css';
import 'styles/globals.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({}),
};

App.defaultProps = {
  Component: null,
  pageProps: null,
};

export default App;
