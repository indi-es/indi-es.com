import type { ReactNode } from 'react';

import style from './style.module.css';

type TagProps = {
  children?: ReactNode;
};

function Tag({ children }: TagProps) {
  return <span className={style.tag}>{children}</span>;
}

export default Tag;
