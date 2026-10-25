import EventsView from 'views/events';
import type { EventsProps } from 'views/events';

import { fetchDiscordEventsWithChannelName } from 'utils/discord';

export default function Eventos(props: EventsProps) {
  return <EventsView {...props} />;
}

export async function getStaticProps() {
  const events = await fetchDiscordEventsWithChannelName();

  return {
    props: { events },
  };
}
