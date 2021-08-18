import PropTypes from 'prop-types';

import { fetchDiscordWidget } from 'utils/discord';

import { Page } from 'components/layouts';
import DiscordWidget from 'components/discord-widget';

import style from './style.module.css';

export default function Discord({ data }) {
  return (
    <Page className={style.page}>
      <div className={`${style['discord-wrapper']} wrapper`}>
        <DiscordWidget {...data} />
      </div>
    </Page>
  );
}

Discord.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.shape({})),
    presence_count: PropTypes.number,
    instant_invite: PropTypes.string,
  }).isRequired,
};

export async function getServerSideProps() {
  const data = await fetchDiscordWidget();

  return {
    props: { data },
  };
}
