import type { InferGetStaticPropsType } from 'next';
import classNames from 'classnames';
import QRCode from 'react-qr-code';

import { fetchDiscordWidget } from 'utils/discord';

import { Page } from 'components/layouts';

import style from './style.module.css';

function QR({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const customClassName = classNames(style.page, {});
  const invite = data?.instant_invite;

  return (
    <Page className={customClassName}>
      <div className={`${style['qr-wrapper']} wrapper`}>
        <figure>
          <div className={`${style['qr-image-wrapper']}`}>
            <QRCode
              className={`${style['qr-image']}`}
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value="https://indi-es.com"
              viewBox="0 0 256 256"
            />
          </div>
          <figcaption>
            <span>Pagina web</span>
          </figcaption>
        </figure>
        {invite ? (
          <figure>
            <QRCode
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={invite}
              viewBox="0 0 256 256"
            />
            <figcaption>
              <span>Discord</span>
            </figcaption>
          </figure>
        ) : null}
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const data = await fetchDiscordWidget();

  return {
    props: { data },
  };
}

export default QR;
