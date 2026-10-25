import Tag from 'components/tag';
import type { Studio } from 'types';

import NameError from './name-error';

import style from './style.module.css';

function getUrl({
  website,
  twitter,
  facebook,
  instagram,
}: Pick<Studio, 'website' | 'twitter' | 'facebook' | 'instagram'>) {
  if (website && website !== '') return website;
  if (twitter && twitter !== '') return twitter;
  if (facebook && facebook !== '') return facebook;
  if (instagram && instagram !== '') return instagram;
  return undefined;
}

type NameCellProps = {
  cell: {
    getValue: () => string | null | undefined;
    row: {
      original: Studio;
    };
  };
};

function NameCell({ cell }: NameCellProps) {
  const value = cell.getValue();
  if (!value) return null;

  const { original } = cell.row;
  const url = getUrl(original);
  const { error, tags } = original;

  return (
    <span className={style['name-cell']}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
      {error ? <NameError {...error} /> : null}
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </span>
  );
}

export default NameCell;
