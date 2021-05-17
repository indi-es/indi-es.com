/* eslint filenames/match-exported: 0 */
import { Client } from '@notionhq/client';

import HomeView from 'views/home';

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export default function Home(props) {
  return <HomeView {...props} />;
}

export async function getServerSideProps() {
  const data = await notion.databases.query({
    database_id: '6f48ba5a2dc24aa9b8d4a65105352aff',
  });

  const { results: events } = data;

  return {
    props: { events },
  };
}
