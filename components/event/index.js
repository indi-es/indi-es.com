import PropTypes from 'prop-types';
import { ICalendar } from 'datebook';

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

function Event({ title, channel, description, guest, startDate, endDate }) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const config = {
    title,
    location: 'INDI·ES Discord server',
    description,
    start,
    end,
  };
  const icalendar = new ICalendar(config);
  return (
    <article className={style.event}>
      <div className={style['event-media']}>
        <span className={style['event-badge']}>{channel}</span>
        <img src={guest.img} alt={guest.name} />
      </div>

      <div className={style['event-content']}>
        <header className={style['event-header']}>
          <h3 className={style['event-title']}>{title}</h3>
          <div className={style['event-subheader']}>
            <h4 className={style['event-subtitle']}>
              con{' '}
              <a rel="noopener noreferrer" target="_blank" href={guest.url}>
                {guest.name}
              </a>{' '}
            </h4>
            <Button
              className={style['event-dates']}
              onClick={() => {
                icalendar.download();
              }}
            >
              <time>{parseAndFormatDate(startDate, OPTIONS_HOUR_MINUTE)} </time>
              {' - '}
              <time>{parseAndFormatDate(endDate, OPTIONS_HOUR_MINUTE)} </time>
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
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  guest: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

Event.defaultProps = {};

export default Event;
