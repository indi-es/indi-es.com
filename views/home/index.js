import PropTypes from 'prop-types';
import Link from 'next/link';

import { Page } from 'components/layouts';
import Event from 'components/event';

import { richTextToMarkdown } from 'utils/notion';

import style from './style.module.css';

function parseEvents(events) {
  return events.map((event) => {
    const { properties } = event;
    const {
      Date: dateProp,
      Title: titleProp,
      Description: descriptionProp,
      Guest: guestProp,
      GuestURL: guestURLProp,
      GuestImage: guestImageProp,
      Channel: channelProp,
      Publish: publishProp,
    } = properties;
    const { date } = dateProp;

    const { start, end } = date;
    return {
      isPublished: publishProp.checkbox,
      title: titleProp.title[0].plain_text,
      description: richTextToMarkdown(descriptionProp),
      channel: richTextToMarkdown(channelProp),
      guest: {
        name: richTextToMarkdown(guestProp),
        url: guestURLProp.url,
        img: guestImageProp.url,
      },
      startDate: start,
      endDate: end,
    };
  });
}

function getNewEvents(events) {
  return events.filter(({ endDate, isPublished }) => {
    if (!isPublished) return false;
    const end = new Date(endDate);
    const now = new Date();
    return end > now;
  });
}

function Home({ events }) {
  const newEvents = getNewEvents(parseEvents(events));
  return (
    <Page className={style.page} header={false}>
      <div className={`${style.wrapper}`}>
        <img className={style.logo} src="/icon.png" alt="INDI·ES" />
        <nav className={style.nav}>
          <ul className={style['nav-routes']}>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://discord.com/invite/Z9eyP8A"
              >
                Discord
              </a>
            </li>
            <li>
              <Link href="/estudios">Estudios</Link>
            </li>
            <li>
              <Link href="/recursos">Recursos</Link>
            </li>
            <li>
              <Link href="/newsletter">Newsletter</Link>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.joinclubhouse.com/club/indies"
              >
                Clubhouse
              </a>
            </li>
          </ul>
        </nav>
        {newEvents.length > 0 ? (
          <section className={style['events-list']}>
            {newEvents.map((event) => {
              return <Event {...event} />;
            })}
          </section>
        ) : null}
      </div>
    </Page>
  );
}

Home.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Home;
