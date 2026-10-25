import type { ReactNode } from 'react';
import classNames from 'classnames';

import style from './style.module.css';

type CalloutProps = {
  children?: ReactNode;
  className?: string;
};

function Callout({ className, children }: CalloutProps) {
  const customClassName = classNames(style.callout, 'callout', className);
  return <div className={customClassName}>{children}</div>;
}

export default Callout;
