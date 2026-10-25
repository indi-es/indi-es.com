/* eslint filenames/match-exported: 0 */
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import 'modern-css-reset/dist/reset.min.css';
import 'leaflet/dist/leaflet.css';

import 'styles/variables.css';
import 'styles/globals.css';
import 'styles/leaflet.css';

import Filters from 'svg/filters';

function App({ Component, pageProps }: AppProps<{ session?: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Filters />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
