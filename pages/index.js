/* eslint filenames/match-exported: 0 */
import { fetchDiscordEvents, fetchDiscordWidget } from 'utils/discord';

import HomeView from 'views/home';

export default function Home(props) {
  return <HomeView {...props} />;
}

export async function getServerSideProps() {
  const widget = await fetchDiscordWidget();
  const events = await fetchDiscordEvents();

  return {
    props: { events, widget },
  };
}
