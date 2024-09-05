import classNames from 'classnames';
import QRCode from 'react-qr-code';
import PropTypes from 'prop-types';

import { fetchDiscordWidget } from 'utils/discord';

import { Page } from 'components/layouts';

import style from './style.module.css';

function QR({ data }) {
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

QR.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.shape({})),
    presence_count: PropTypes.number,
    instant_invite: PropTypes.string,
  }),
};

QR.defaultProps = {
  data: null,
};

export async function getStaticProps() {
  const data = await fetchDiscordWidget();

  return {
    props: { data },
  };
}

export default QR;
