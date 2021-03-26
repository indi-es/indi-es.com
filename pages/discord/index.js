import React from 'react';

import { Page } from 'components/layouts';

import style from './style.module.css';

export default function Discord() {
  return (
    <Page className={style.page}>
      <div className={`${style.wrapper}`}>
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
