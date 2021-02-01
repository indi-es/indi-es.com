/* eslint filenames/match-exported: 0 */
import React from 'react';
import Link from 'next/link';

import { Page } from 'components/layouts';

import style from 'styles/home.module.css';

export default function Home() {
  return (
    <Page className={style.page}>
      <div className={`${style.wrapper}`}>
        <img className={style.logo} src="/icon.png" alt="INDI·ES" />
        <nav className={style.nav}>
          <ul>
            <li>
              <Link href="/discord">Discord</Link>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/indi-es/estudios"
              >
                Estudios
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.notion.so/indies/820b50fe5398486cbd062603c3f4529b?v=17f8d19621604b75bb1845f420b213db"
              >
                Newsletter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Page>
  );
}
