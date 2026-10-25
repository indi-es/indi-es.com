import classNames from 'classnames';

import style from './style.module.css';

type SkeletonProps = {
  className?: string;
};

function Skeleton({ className }: SkeletonProps) {
  const customClassName = classNames(style.skeleton, 'skeleton', className);

  return <span className={customClassName}>&zwnj;</span>;
}

export default Skeleton;
