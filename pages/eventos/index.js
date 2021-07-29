import { Client } from '@notionhq/client';

import EventsView from 'views/events';

import { parseEvents } from 'utils/notion';

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export default function Eventos(props) {
  return <EventsView {...props} />;
}

export async function getServerSideProps() {
  const data = await notion.databases.query({
    database_id: '6f48ba5a2dc24aa9b8d4a65105352aff',
  });

  const { results: events } = data;

  return {
    props: { events: parseEvents(events) },
  };
}
