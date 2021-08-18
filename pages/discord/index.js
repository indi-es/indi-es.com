import PropTypes from 'prop-types';
import { FaDiscord } from 'react-icons/fa';

import { Page } from 'components/layouts';
import Button from 'components/button';

import style from './style.module.css';

export default function Discord({ data }) {
  const { name, presence_count: online, instant_invite: invite } = data;
  return (
    <Page className={style.page}>
      <div className={`${style.wrapper}`}>
        <article className={`${style['widget-container']}`}>
          <header className={style['widget-header']}>
            <h1 className={style['widget-title']}>Discord de {name}</h1>
          </header>
          <div className={style['widget-info']}>
            <b>Personas online</b>
            <code>{online}</code>
          </div>
          <footer className={style['widget-footer']}>
            <Button
              className={style['join-server']}
              href={invite}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Entrar al servidor</span>
              <FaDiscord />
            </Button>
          </footer>
        </article>
      </div>
    </Page>
  );
}

Discord.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.shape({})),
    presence_count: PropTypes.number,
    instant_invite: PropTypes.number,
  }).isRequired,
};

export async function getServerSideProps() {
  const url = 'https://discord.com/api/guilds/323937940462108672/widget.json';
  const res = await fetch(url);
  const json = await res.json();

  return {
    props: { data: json },
  };
}
