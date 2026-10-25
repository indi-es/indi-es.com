import Tag from 'components/tag';

import style from './style.module.css';

type TagsCellProps = {
  cell?: {
    value?: string[] | null;
  };
};

function TagsCell({ cell: { value } = {} }: TagsCellProps) {
  if (!value) return null;

  return (
    <div className={style['tags-cell']}>
      {value.map((tag) => {
        return <Tag>{tag}</Tag>;
      })}
    </div>
  );
}

export default TagsCell;
