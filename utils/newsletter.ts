import { isFullBlock, isFullPage } from '@notionhq/client';
import type {
  ImageBlockObjectResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

import type { NewsletterEntry } from 'types';
import { getPageURL, notion, richTextToMarkdown } from 'utils/notion';
import { months } from 'utils/dates';
import { generateRssFeed } from './rss';

export const NEWSLETTER_PAGE = '820b50fe5398486cbd062603c3f4529b';

type NewsletterBlocks = Pick<ListBlockChildrenResponse, 'results'>;
type NewsletterPage = PageObjectResponse & { blocks: NewsletterBlocks };

export async function getNewsletterPages(): Promise<PageObjectResponse[]> {
  try {
    const data = await notion.databases.query({
      database_id: NEWSLETTER_PAGE,
    });

    const { results: items } = data;

    return items.filter(isFullPage);
  } catch (e) {
    console.error('Error fetching newsletter pages', e);
    return [];
  }
}

export async function getNewsletterPagesWithContent(): Promise<
  NewsletterPage[]
> {
  const pages = await getNewsletterPages();

  const blocks = await Promise.allSettled(
    pages.map(({ id }) =>
      notion.blocks.children.list({ block_id: id, page_size: 10 })
    )
  );

  const items = pages.map((page, i) => {
    const result = blocks[i];
    if (result.status === 'rejected') {
      console.error(
        `Error fetching newsletter page ${page.id} content`,
        result.reason
      );
    }

    return {
      ...page,
      blocks: result.status === 'fulfilled' ? result.value : { results: [] },
    };
  });

  return items;
}

export function getNewsletterPageDescription(blocks: NewsletterBlocks) {
  const { results } = blocks;
  const [block] = results;
  if (!block || !isFullBlock(block)) return null;

  const content = (block as unknown as Record<string, unknown>)[block.type] as
    | { rich_text?: RichTextItemResponse[] }
    | undefined;
  const text = content?.rich_text;
  if (!text) return null;

  const markdown = richTextToMarkdown(text);
  return markdown;
}

export function getNewsletterImage(blocks: NewsletterBlocks) {
  const { results } = blocks;
  const images = results.filter(
    (block): block is ImageBlockObjectResponse =>
      isFullBlock(block) && block.type === 'image'
  );
  if (images.length === 0) return null;

  const [first] = images;
  const url = first.image.type === 'file' ? first.image.file.url : null;

  return url || null;
}

export function formatNewsletterPages(item: NewsletterPage): NewsletterEntry {
  const { id, properties, blocks } = item;
  const titleProperty = properties['Título'];
  const title =
    titleProperty.type === 'title' ? titleProperty.title[0].plain_text : '';
  const dateElements = title.split(' ');
  const [days, month, year] = dateElements;

  const startDay = parseInt(`${days[0]}${days[1]}`, 10);
  const endDay = parseInt(`${days[3]}${days[4]}`, 10);

  let startMonth = months.findIndex((m) => m === month.toLowerCase());
  const endMonth = startMonth;

  let startYear = parseInt(year, 10);
  const endYear = parseInt(year, 10);

  if (endDay < startDay) {
    startMonth -= 1;
    if (startMonth === -1) {
      startMonth = 11;
      startYear -= 1;
    }
  }

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  };
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
      description: item.description || item.title,
      content: `${item.description || item.title} lee más en: ${item.url}`,
      date: item.endDate,
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
