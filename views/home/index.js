import PropTypes from 'prop-types';
import classNames from 'classnames';
import Markdown from 'components/markdown';
import Callout from 'components/callout';

import { Page } from 'components/layouts';
import Event from 'components/event';

import style from './style.module.css';

function getNewEvents(events) {
  return events.filter(
    ({ scheduled_start_time: startDate, scheduled_end_time: endDate }) => {
      const now = new Date();
      if (endDate) {
        const end = new Date(endDate);
        return end > now;
      }
      const start = new Date(startDate);
      // NOTE: Add two hours so it won't filter out
      // if the event is running and doesn't have a end datetime
      start.setHours(start.getHours() + 2);
      return start > now;
    }
  );
}

function Home({ events, widget }) {
  const eventList = getNewEvents(events);
  const hasEvents = eventList.length > 0;

  const siteDescription =
    'Bienvenido a INDI·ES, somos una comunidad de desarrollo de videojuegos en español, ¡tod@s son bienvenid@s!';

  const customClassName = classNames(style.page, {
    [style['-empty-events']]: !hasEvents,
  });
  const text = `
## Sin eventos esta semana

Normalmente aquí aparecen los próximos eventos pero parece que no tenemos ninguno programado.

---

Mientras tanto puedes checar:

- [Nuestra base de datos de estudios mexicanos.](/estudios)
- [El servidor de discord.](${widget?.instant_invite})
- [El newsletter con lo mejor de la semana.](/newsletter)
- [Nuestra lista de recursos.](/recursos)
- [La lista de eventos pasados.](/eventos)
`;

  return (
    <Page className={customClassName}>
      <div className={`${style['home-wrapper']} wrapper`}>
        <Callout>
          <Markdown className={`${style['empty-events-message']}`}>
            {siteDescription}
          </Markdown>
        </Callout>
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
              return <Event {...event} key={event.id} />;
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
  }),
};

Home.defaultProps = {
  widget: null,
};

export default Home;
