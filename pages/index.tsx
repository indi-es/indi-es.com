/* eslint filenames/match-exported: 0 */
import {
  fetchDiscordEventsWithChannelName,
  fetchDiscordWidget,
} from 'utils/discord';
import { genNewsletterFeed } from 'utils/newsletter';

import HomeView from 'views/home';
import type { HomeProps } from 'views/home';

export default function Home(props: HomeProps) {
  return <HomeView {...props} />;
}

export async function getStaticProps() {
  const events = await fetchDiscordEventsWithChannelName();
  const widget = await fetchDiscordWidget();

  genNewsletterFeed();

  return {
    props: { events, widget },
  };
}
