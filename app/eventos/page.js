import EventsView from 'views/events';

import { fetchDiscordEventsWithChannelName } from 'utils/discord';

export default async function Eventos() {
  const events = await fetchDiscordEventsWithChannelName();
  return <EventsView events={events} />;
}
