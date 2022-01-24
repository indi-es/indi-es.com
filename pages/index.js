/* eslint filenames/match-exported: 0 */
import { fetchDiscordEvents, fetchDiscordWidget } from 'utils/discord';

import HomeView from 'views/home';

export default function Home(props) {
  return <HomeView {...props} />;
}

export async function getStaticProps() {
  const events = await fetchDiscordEvents();
  const widget = await fetchDiscordWidget();

  return {
    props: { events, widget },
  };
}
