/* eslint filenames/match-exported: 0 */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Page } from 'components/layouts';

import style from 'styles/home.module.css';

export default function Home() {
  return (
    <Page className={style.page}>
      <div className={`${style.wrapper}`}>
        <Image
          className={style.logo}
          src="/icon.png"
          alt="INDI·ES"
          width="200"
          height="200"
        />
        <nav className={style.nav}>
          <ul>
            <li>
              <Link href="/discord">Discod</Link>
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
          </ul>
        </nav>
      </div>
    </Page>
  );
}
