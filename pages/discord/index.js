import PropTypes from 'prop-types';

import { createDiscordInvite, fetchDiscordWidget } from 'utils/discord';

import { Page } from 'components/layouts';
import DiscordWidget from 'components/discord-widget';

import style from './style.module.css';

export default function Discord({ data, invite }) {
  return (
    <Page className={style.page}>
      <div className={`${style['discord-wrapper']} wrapper`}>
        {data ? <DiscordWidget {...data} invite={invite} /> : null}
      </div>
    </Page>
  );
}

Discord.propTypes = {
  invite: PropTypes.shape({
    code: PropTypes.string,
  }),
  data: PropTypes.shape({
    name: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.shape({})),
    presence_count: PropTypes.number,
    instant_invite: PropTypes.string,
  }),
};

export async function getStaticProps() {
  const data = await fetchDiscordWidget();
  const invite = await createDiscordInvite();

  return {
    props: { data, invite },
  };
}
