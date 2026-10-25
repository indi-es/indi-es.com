import Markdown from 'components/markdown';
import Callout from 'components/callout';

import { Page } from 'components/layouts';
import Event from 'components/event';
import type { DiscordEvent } from 'types';

import style from './style.module.css';

const text = `
## Sin eventos esta semana

Normalmente aquí aparecen los próximos eventos pero parece que no tenemos ninguno programado.

---

Mientras tanto puedes checar:

- [Nuestra base de datos de estudios mexicanos.](/estudios)
- [El newsletter con lo mejor de la semana.](/newsletter)
- [El servidor de discord.](https://discord.com/invite/z9eyp8a)
- [Nuestra lista de recursos.](/recursos)
`;

export type EventsProps = {
  events: DiscordEvent[];
};

function Events({ events }: EventsProps) {
  const hasEvents = events.length > 0;
  return (
    <Page className={style.page}>
      <div className={`${style['events-wrapper']} wrapper`}>
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
            {events.map((event) => {
              return <Event {...event} key={event.id} />;
            })}
          </section>
        ) : null}
      </div>
    </Page>
  );
}

export default Events;
