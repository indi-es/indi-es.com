import classNames from 'classnames';

import style from './style.module.css';

type BotProps = {
  className?: string;
};

function Bot({ className }: BotProps) {
  const customClassName = classNames(style.bot, 'bot', className);
  return <img src="/img/bot.png" alt="bot" className={customClassName} />;
}

export default Bot;
