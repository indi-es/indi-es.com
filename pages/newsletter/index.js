// import PropTypes from 'prop-types';
import { Client } from '@notionhq/client';

import NewsletterView from 'views/newsletter';

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

function Newsletter(props) {
  return <NewsletterView {...props} />;
}

export async function getStaticProps() {
  const data = await notion.databases.query({
    database_id: '820b50fe5398486cbd062603c3f4529b',
  });

  const { results: pages } = data;

  const blocks = await Promise.all(
    pages.map(({ id }) => notion.blocks.children.list({ block_id: id }))
  );

  const items = pages.map((page, i) => {
    return {
      ...page,
      blocks: blocks[i],
    };
  });

  return {
    props: { pages, blocks, items },
  };
}

Newsletter.propTypes = {};

export default Newsletter;
