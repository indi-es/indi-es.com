import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// import Header from 'components/header';

import style from './style.module.css';

const Page = ({ header, footer, children, className, ...rest }) => (
  <div className={`${style.page} ${className}`} {...rest}>
    <Head>
      <title>INDI·ES</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    {/* {header ? <Header /> : null} */}
    <main>{children}</main>
    {/* {footer ? <footer id="footer" /> : null} */}
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.bool,
  footer: PropTypes.bool,
  css: PropTypes.shape({}),
};

Page.defaultProps = {
  className: null,
  header: true,
  footer: true,
  children: null,
  css: null,
};

export default Page;
