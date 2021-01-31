/* eslint filenames/match-exported: 0 */
import React from 'react';
import Image from 'next/image';

import { Page } from 'components/layouts';

import style from '../styles/home.module.css';

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
        <div className={style['iframe-container']}>
          <iframe
            title="discord"
            src="https://discord.com/widget?id=323937940462108672&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </div>
      </div>
    </Page>
  );
}
