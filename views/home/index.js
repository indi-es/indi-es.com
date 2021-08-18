import PropTypes from 'prop-types';
import classNames from 'classnames';
import Markdown from 'components/markdown';
import Callout from 'components/callout';

import { Page } from 'components/layouts';
import Event from 'components/event';

import style from './style.module.css';

function getNewEvents(events) {
  return events.filter(({ endDate, isPublished }) => {
    if (!isPublished) return false;
    const end = new Date(endDate);
    const now = new Date();
    return end > now;
  });
}

function Home({ events, widget }) {
  const newEvents = getNewEvents(events);
  const eventList = newEvents;
  const hasEvents = eventList.length > 0;

  const customClassName = classNames(style.page, {
    [style['-empty-events']]: !hasEvents,
  });
  const text = `
## Sin eventos esta semana

Normalmente aquí aparecen los próximos eventos pero parece que no tenemos ninguno programado.

---

Mientras tanto puedes checar:

- [Nuestra base de datos de estudios mexicanos.](/estudios)
- [El servidor de discord.](${widget.instant_invite})
- [El newsletter con lo mejor de la semana.](/newsletter)
- [Nuestra lista de recursos.](/recursos)
`;

  return (
    <Page className={customClassName}>
      <div className={`${style['home-wrapper']} wrapper`}>
        {!hasEvents ? (
          <section className={style['empty-events']}>
            <Callout>
              <Markdown className={`${style['empty-events-message']}`}>
                {text}
              </Markdown>
            </Callout>
          </section>
        ) : null}
        {hasEvents ? (
          <section className={style['events-list']}>
            {eventList.map((event) => {
              return <Event {...event} key={event.title} />;
            })}
          </section>
        ) : null}
      </div>
    </Page>
  );
}

Home.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  widget: PropTypes.shape({
    name: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.shape({})),
    presence_count: PropTypes.number,
    instant_invite: PropTypes.string,
  }).isRequired,
};

export default Home;
