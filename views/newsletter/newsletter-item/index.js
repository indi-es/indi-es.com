import PropTypes from 'prop-types';
import { getPageURL } from 'utils/notion';

import style from './style.module.css';

const options = { day: '2-digit', month: '2-digit', year: '2-digit' };

const NewsletterItem = ({ id, startDate, endDate }) => {
  return (
    <article key={id} className={style['newsletter-item']}>
      <header>
        <h2 className={style['newsletter-item-title']}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={getPageURL('indies', id)}
          >
            {startDate.toLocaleString('es-mx', options)} -{' '}
            {endDate.toLocaleString('es-mx', options)}
          </a>
        </h2>
      </header>
    </article>
  );
};

NewsletterItem.propTypes = {
  id: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
};

NewsletterItem.defaultProps = {};

export default NewsletterItem;
