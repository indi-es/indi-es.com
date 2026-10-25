import classNames from 'classnames';
import { FaDiscord } from 'react-icons/fa';

import type { DiscordInvite, DiscordWidget as DiscordWidgetData } from 'types';
import Button from 'components/button';

import style from './style.module.css';

type DiscordWidgetProps = DiscordWidgetData & {
  invite?: DiscordInvite | null;
  className?: string;
};

function DiscordWidget({
  name,
  presence_count: online,
  instant_invite: instantInvite,
  invite = null,
  className = '',
}: DiscordWidgetProps) {
  const customClassName = classNames(
    style['discord-widget-container'],
    'discord-widget-container',
    className
  );
  const inviteUrl = invite?.code
    ? `https://discord.com/invite/${invite.code}`
    : instantInvite;
  return (
    <article className={customClassName}>
      <header className={style['discord-widget-header']}>
        <h1 className={style['discord-widget-title']}>Discord de {name}</h1>
      </header>
      <div className={style['discord-widget-info']}>
        <b>Personas online</b>
        <code>{online}</code>
      </div>
      <footer className={style['discord-widget-footer']}>
        <Button
          className={style['join-server']}
          href={inviteUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Entrar al servidor</span>
          <FaDiscord />
        </Button>
      </footer>
    </article>
  );
}

export default DiscordWidget;
