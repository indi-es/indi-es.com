// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const config = {
  productionBrowserSourceMaps: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['es-MX', 'en-US'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'es-MX',
    localeDetection: false,
  },
};

export default config;
