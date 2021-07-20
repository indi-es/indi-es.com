import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.css';

function Bot({ className }) {
  const customClassName = classNames(style.bot, 'bot', className);
  return <img src="/img/bot.png" alt="bot" className={customClassName} />;
}

Bot.propTypes = {
  className: PropTypes.string,
};

Bot.defaultProps = {
  className: null,
};

export default Bot;
