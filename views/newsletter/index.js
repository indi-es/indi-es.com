import PropTypes from 'prop-types';
// import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';

import { Page } from 'components/layouts';
import Callout from 'components/callout';

import NewsletterItem from './newsletter-item';

import style from './style.module.css';

function groupByMonth(acc, curr) {
  const endDate = new Date(curr.endDate);
  const key = `${endDate.getMonth()}-${endDate.getFullYear()}`;
  if (!acc[key]) acc[key] = [];
  acc[key].push(curr);
  return acc;
}

function Newsletter({ items = [] }) {
  const grouped = items.reduce(groupByMonth, {});

  return (
    <Page className={style.page}>
      <div className={`${style['newsletter-wrapper']} wrapper`}>
        <header className={style['newsletter-header']}>
          <h1>Newsletter</h1>
        </header>

        <Callout className={style['newsletter-info']}>
          Bienvenidos al Newsletter de INDI.ES donde compartimos lo mejor de la
          semana de la industria de desarrollo de juegos en Español.
        </Callout>

        <section className={style['newsletter-list']}>
          {Object.entries(grouped).map((entry) => {
            const value = entry[1];
            const titleDate = new Date(value[0].endDate);
            const sectionTitle = titleDate.toLocaleString('es-mx', {
              year: 'numeric',
              month: 'long',
            });

            return (
              <section
                className={style['newsletter-section']}
                key={sectionTitle}
              >
                <header className={style['newsletter-section-header']}>
                  <h2 className={style['newsletter-section-title']}>
                    {sectionTitle}
                  </h2>
                </header>
                <div className={style['newsletter-list-entries']}>
                  {value.map((item) => {
                    return <NewsletterItem {...item} key={item.id} />;
                  })}
                </div>
              </section>
            );
          })}
        </section>
      </div>
    </Page>
  );
}

Newsletter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Newsletter;
