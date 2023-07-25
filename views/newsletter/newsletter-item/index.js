import PropTypes from 'prop-types';

import { getPageURL } from 'utils/notion';

import Markdown from 'components/markdown';

import style from './style.module.css';

const options = { day: '2-digit', month: '2-digit', year: '2-digit' };

function NewsletterItem({ id, startDate, endDate, description, image }) {
  const startDateParsed = new Date(startDate);
  const endDateParsed = new Date(endDate);
  const title = `${startDateParsed.toLocaleString(
    'es-mx',
    options
  )} - ${endDateParsed.toLocaleString('es-mx', options)}`;

  return (
    <article key={id} className={style['newsletter-item']}>
      <header className={style['newsletter-item-header']}>
        <a
          className={style['newsletter-item-header-wrapper']}
          rel="noopener noreferrer"
          target="_blank"
          href={getPageURL('indies', id)}
        >
          <div className={style['newsletter-item-image-wrapper']}>
            {image ? (
              <img
                className={style['newsletter-item-image']}
                src={image}
                alt={`${title}`}
              />
            ) : (
              <img
                className={style['newsletter-item-image']}
                src="/banner.png"
                alt={title}
              />
            )}
          </div>
          <span className={style['newsletter-item-title']}>
            <span>{title}</span>
          </span>
        </a>
      </header>
      <Markdown className={style['newsletter-item-content']}>
        {description}
      </Markdown>
    </article>
  );
}

NewsletterItem.propTypes = {
  id: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

NewsletterItem.defaultProps = { image: null };

export default NewsletterItem;
