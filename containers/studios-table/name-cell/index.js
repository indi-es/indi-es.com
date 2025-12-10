import PropTypes from 'prop-types';

import Tag from 'components/tag';

import NameError from './name-error';

import style from './style.module.css';

function getUrl({ website, twitter, facebook, instagram }) {
  if (website && website !== '') return website;
  if (twitter && twitter !== '') return twitter;
  if (facebook && facebook !== '') return facebook;
  if (instagram && instagram !== '') return instagram;
  return null;
}

function NameCell({ cell: { getValue, row: { original } } = {} }) {
  const value = getValue();
  if (!value) return null;

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

NameCell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
    row: PropTypes.shape({
      original: PropTypes.shape({
        inactive: PropTypes.bool,
        last_time_active: PropTypes.string,
        type: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        error: PropTypes.shape({
          message: PropTypes.string,
          date: PropTypes.string,
        }),
      }),
    }),
  }),
};

export default NameCell;
