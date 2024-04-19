import {
  fetchDiscordEventsWithChannelName,
  fetchDiscordWidget,
} from 'utils/discord';

import HomeView from 'views/home';

export default async function Home() {
  const events = await fetchDiscordEventsWithChannelName();
  const widget = await fetchDiscordWidget();

  return <HomeView events={events} widget={widget} />;
}
