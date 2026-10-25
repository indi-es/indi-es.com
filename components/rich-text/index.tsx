import type { ReactNode } from 'react';
import classNames from 'classnames';

import style from './style.module.css';

type RichTextProps = {
  children?: ReactNode;
  className?: string;
};

function RichText({ children, className }: RichTextProps) {
  const customClassName = classNames(
    style['rich-text-container'],
    'rich-text-container',
    className
  );

  return <div className={customClassName}>{children}</div>;
}

export default RichText;
