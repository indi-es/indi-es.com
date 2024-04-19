import PropTypes from 'prop-types';

import { fetchDiscordWidget } from 'utils/discord';

import { Page } from 'components/layouts';
import DiscordWidget from 'components/discord-widget';

import style from './style.module.css';

export default async function Discord() {
  const data = await fetchDiscordWidget();
  return (
    <Page className={style.page}>
      <div className={`${style['discord-wrapper']} wrapper`}>
        {data ? <DiscordWidget {...data} /> : null}
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
  }),
};

Discord.defaultProps = {
  data: null,
};
