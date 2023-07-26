import PropTypes from 'prop-types';

import Markdown from 'components/markdown';

import style from './style.module.css';

function NewsletterItem({ id, title, url, description, image }) {
  return (
    <article key={id} className={style['newsletter-item']}>
      <header className={style['newsletter-item-header']}>
        <a
          className={style['newsletter-item-header-wrapper']}
          rel="noopener noreferrer"
          target="_blank"
          href={url}
        >
          <div className={style['newsletter-item-image-wrapper']}>
            {image ? (
              <img
                className={style['newsletter-item-image']}
                src={image}
                alt={`${title}`}
                loading="lazy"
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
};

NewsletterItem.defaultProps = { image: null };

export default NewsletterItem;
