import { getPageURL, notion, richTextToMarkdown } from 'utils/notion';
import { months } from 'utils/dates';
import { generateRssFeed } from './rss';

export const NEWSLETTER_PAGE = '820b50fe5398486cbd062603c3f4529b';

export async function getNewsletterPages() {
  const data = await notion.databases.query({
    database_id: NEWSLETTER_PAGE,
  });

  const { results: items } = data;

  return items;
}

export async function getNewsletterPagesWithContent() {
  const pages = await getNewsletterPages();

  const blocks = await Promise.all(
    pages.map(({ id }) =>
      notion.blocks.children.list({ block_id: id, page_size: 10 })
    )
  );

  const items = pages.map((page, i) => {
    return {
      ...page,
      blocks: blocks[i],
    };
  });

  return items;
}

export function getNewsletterPageDescription(blocks) {
  const { results } = blocks;
  const [block] = results;
  const { text } = block[block.type];
  const markdown = richTextToMarkdown(text);
  return markdown;
}

export function getNewsletterImage(blocks) {
  const { results } = blocks;
  const images = results.filter(({ type }) => type === 'image');
  if (images.length === 0) return null;

  const [first] = images;
  const { url } = first?.image?.file || {};

  return url || null;
}

export function formatNewsletterPages(item) {
  const { id, properties, blocks } = item;
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

  const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
  const startDate = new Date(startYear, startMonth, startDay);
  const endDate = new Date(endYear, endMonth, endDay);
  const description = getNewsletterPageDescription(blocks);
  const image = getNewsletterImage(blocks);
  const titleFormatted = `${startDate.toLocaleString(
    'es-mx',
    options
  )} - ${endDate.toLocaleString('es-mx', options)}`;

  return {
    id,
    title,
    titleFormatted,
    description,
    image,
    startMonth,
    endMonth,
    url: getPageURL('indies', id),
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };
}

export async function getNewsletterPagesFormated() {
  const items = await getNewsletterPagesWithContent();
  return items.map(formatNewsletterPages);
}

export async function genNewsletterFeed() {
  const data = await getNewsletterPagesFormated();
  const items = data.map((item) => {
    return {
      url: item.url,
      title: item.title,
      description: item.description,
      content: item.description,
      date: item.endDate,
      image: item.image,
    };
  });

  generateRssFeed({
    items,
    name: 'newsletter',
    title: 'INDI·ES Newsletter',
    description:
      'Bienvenidos al Newsletter de INDI.ES donde compartimos lo mejor de la semana de la industria de desarrollo de juegos en Español.',
  });
}
