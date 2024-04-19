import classNames from 'classnames';

import { Page } from 'components/layouts';
import { FiDownload } from 'react-icons/fi';
import { logos, emojis } from './data';

import styles from './style.module.css';

function Brand() {
  const customClassName = classNames(styles.page, {});

  return (
    <Page className={customClassName}>
      <div className={`${styles['brand-wrapper']} wrapper`}>
        <header>
          <h1>Logos</h1>
        </header>
        <div className={styles['resources-grid']}>
          {logos.map(({ name, src, description, theme }) => {
            return (
              <figure data-theme={theme}>
                <div className={styles['resource-img-wrapper']}>
                  <img src={src} alt={name} />
                </div>
                <figcaption>
                  <a href={src} download>
                    <div>
                      <span>{name}</span>
                      {description ? <span>{description}</span> : null}
                    </div>
                    <FiDownload />
                  </a>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <header>
          <h1>Emojis</h1>
        </header>
        <div className={styles['resources-grid']} data-resource="emoji">
          {emojis.map(({ name, src, description, theme }) => {
            return (
              <figure data-theme={theme}>
                <div className={styles['resource-img-wrapper']}>
                  <img src={src} alt={name} />
                </div>
                <figcaption>
                  <a href={src} download>
                    <div>
                      <span>{name}</span>
                      {description ? <span>{description}</span> : null}
                    </div>
                    <FiDownload />
                  </a>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </Page>
  );
}

export default Brand;
