import PropTypes from 'prop-types';
// import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';

import { months } from 'utils/dates';

import { Page } from 'components/layouts';
import Callout from 'components/callout';

import NewsletterItem from './newsletter-item';

import style from './style.module.css';

function formatPages(item) {
  const { id, blocks, properties } = item;
  const titleProperty = properties['Título'];
  const title = titleProperty.title[0].plain_text;
  const dateElements = title.split(' ');
  const [days, month, year] = dateElements;

  const startDay = parseInt(`${days[0]}${days[1]}`, 10);
  const endDay = parseInt(`${days[3]}${days[4]}`, 10);

  let startMonth = months.findIndex((m) => m === month.toLowerCase());
  const endMonth = startMonth;

  let startYear = year;
  const endYear = year;

  if (endDay < startDay) {
    startMonth -= 1;
    if (startMonth === -1) {
      startMonth = 11;
      startYear -= 1;
    }
  }

  const startDate = new Date(startYear, startMonth, startDay);
  const endDate = new Date(endYear, endMonth, endDay);

  return {
    id,
    title,
    blocks,
    startMonth,
    endMonth,
    startDate,
    endDate,
  };
}

function groupByMonth(acc, curr) {
  const key = `${curr.endDate.getMonth()}-${curr.endDate.getFullYear()}`;
  if (!acc[key]) acc[key] = [];
  acc[key].push(curr);
  return acc;
}

function Newsletter({ items }) {
  const pages = items.map(formatPages);
  const grouped = pages.reduce(groupByMonth, {});

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
            const sectionTitle = value[0].endDate.toLocaleString('es-mx', {
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
                {value.map((item) => {
                  return <NewsletterItem {...item} key={item.id} />;
                })}
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

Newsletter.defaultProps = {
  items: [],
};

export default Newsletter;
