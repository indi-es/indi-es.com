/* eslint filenames/match-exported: 0 */
import React from 'react';

import { Page } from 'components/layouts';

import style from '../styles/home.module.css';

export default function Home() {
  return (
    <Page className={style.page}>
      <main className="page -home">
        <div className="wrapper">
          <h1 className={style.title}>INDI·ES</h1>
        </div>
      </main>
    </Page>
  );
}
