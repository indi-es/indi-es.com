import type { ReactNode } from 'react';
import classNames from 'classnames';

import style from './style.module.css';

type ErrorMessageProps = {
  children?: ReactNode;
  className?: string;
};

function ErrorMessage({ children, className }: ErrorMessageProps) {
  const customClassName = classNames(
    style['error-message'],
    'error-message',
    className
  );
  return <div className={customClassName}>{children}</div>;
}

export default ErrorMessage;
