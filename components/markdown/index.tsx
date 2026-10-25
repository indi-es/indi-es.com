import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

import style from './style.module.css';

type MarkdownProps = {
  children?: string | null;
  className?: string;
};

function Markdown({ children, className }: MarkdownProps) {
  const customClassName = classNames(
    style['markdown-container'],
    'markdown-container',
    className
  );

  return <ReactMarkdown className={customClassName}>{children}</ReactMarkdown>;
}

export default Markdown;
