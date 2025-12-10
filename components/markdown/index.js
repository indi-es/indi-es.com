import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

import style from './style.module.css';

function Markdown({ children, className }) {
  const customClassName = classNames(
    style['markdown-container'],
    'markdown-container',
    className
  );

  return <ReactMarkdown className={customClassName}>{children}</ReactMarkdown>;
}

Markdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Markdown;
