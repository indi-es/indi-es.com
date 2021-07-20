/* eslint filenames/match-exported: 0 */
import PropTypes from 'prop-types';
import { Provider } from 'next-auth/client';

import 'modern-css-reset';
import 'leaflet/dist/leaflet.css';
import '@reach/tooltip/styles.css';

import 'styles/variables.css';
import 'styles/globals.css';
import 'styles/leaflet.css';

function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({ session: PropTypes.shape({}) }),
};

App.defaultProps = {
  Component: null,
  pageProps: null,
};

export default App;
