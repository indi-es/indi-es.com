import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { ICalendar } from 'datebook';
import { saveAs } from 'file-saver';

import Markdown from 'components/markdown';
import Button from 'components/button';

import style from './style.module.css';

const OPTIONS_DAY_MOTH = { weekday: 'long', day: 'numeric', month: 'long' };
const OPTIONS_HOUR_MINUTE = {
  hour: 'numeric',
  minute: 'numeric',
};

function parseAndFormatDate(date, options) {
  const parsed = new Date(date);
  return parsed.toLocaleString('es-mx', options);
}

function Event({
  id,
  name,
  description,
  image,
  channel,
  // user_count: userCount,
  scheduled_start_time: startDate,
  scheduled_end_time: endDate,
  // channel_id: channelId,
}) {
  const config = {
    name,
    location: 'INDI·ES Discord server',
    description,
    start: new Date(startDate),
    end: endDate ? new Date(endDate) : null,
  };
  const icalendar = new ICalendar(config);

  const download = useCallback(() => {
    const ics = icalendar.render();
    const blob = new Blob([ics], {
      type: 'text/calendar',
    });
    saveAs(blob, `${name}.ics`);
  }, [icalendar, name]);

  // TODO: fetch channel name
  // we are currently not doing it because we could get rate limited
  const channelName = channel?.name;

  return (
    <article className={style.event}>
      <div className={style['event-media']}>
        {channelName ? (
          <span className={style['event-badge']}>
            <span>#{channelName}</span>
            {/* {userCount ? <span>{userCount} interesados</span> : null} */}
          </span>
        ) : null}
        {image ? (
          <img
            src={`https://cdn.discordapp.com/guild-events/${id}/${image}?size=1024`}
            alt={name}
          />
        ) : (
          <img src="/preview.png" alt={name} />
        )}
      </div>

      <div className={style['event-content']}>
        <header className={style['event-header']}>
          <h3 className={style['event-title']}>{name}</h3>
          <div className={style['event-subheader']}>
            <Button
              className={style['event-dates']}
              onClick={() => {
                download();
              }}
            >
              <span>
                <time>
                  {parseAndFormatDate(startDate, OPTIONS_HOUR_MINUTE)}{' '}
                </time>
                {endDate ? (
                  <>
                    <span>-</span>
                    <time>
                      {parseAndFormatDate(endDate, OPTIONS_HOUR_MINUTE)}{' '}
                    </time>
                  </>
                ) : null}
              </span>
              <time>{parseAndFormatDate(startDate, OPTIONS_DAY_MOTH)} </time>
            </Button>
          </div>
        </header>
        <div className={style['event-info']}>
          <Markdown>{description}</Markdown>
        </div>
      </div>
    </article>
  );
}

Event.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  scheduled_start_time: PropTypes.string.isRequired,
  scheduled_end_time: PropTypes.string,
  image: PropTypes.string,
  channel: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  // user_count: PropTypes.number,
  // channel_id: PropTypes.string.isRequired,
};

export default Event;
