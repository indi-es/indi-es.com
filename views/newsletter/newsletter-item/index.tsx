import Markdown from 'components/markdown';
import type { NewsletterEntry } from 'types';

import style from './style.module.css';

type NewsletterItemProps = Pick<
  NewsletterEntry,
  'id' | 'title' | 'url' | 'description'
> & {
  image?: string | null;
};

function NewsletterItem({
  id,
  title,
  url,
  description,
  image = null,
}: NewsletterItemProps) {
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

export default NewsletterItem;
