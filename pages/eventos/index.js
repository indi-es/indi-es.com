import EventsView from 'views/events';

import { fetchDiscordEvents } from 'utils/discord';

export default function Eventos(props) {
  return <EventsView {...props} />;
}

export async function getServerSideProps() {
  const events = await fetchDiscordEvents();

  return {
    props: { events },
  };
}
