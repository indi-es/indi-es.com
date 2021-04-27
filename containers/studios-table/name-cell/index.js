import PropTypes from 'prop-types';
import { FiAlertCircle } from 'react-icons/fi';
import Tooltip from '@reach/tooltip';

import Tag from 'components/tag';

import style from './style.module.css';

function getUrl({ website, twitter, facebook, instagram }) {
  if (website && website !== '') return website;
  if (twitter && twitter !== '') return twitter;
  if (facebook && facebook !== '') return facebook;
  if (instagram && instagram !== '') return instagram;
  return null;
}

const NameCell = ({
  cell: {
    value,
    row: { original },
  },
}) => {
  if (!value) return null;

  const url = getUrl(original);
  const {
    inactive: isInactive,
    last_time_active: lastTimeActive,
    type,
    tags,
  } = original;

  const date = new Date(lastTimeActive);
  const dateFormatted = date.toLocaleDateString('es-MX');
  const isSingle = type === 'individual';
  const label = `La última vez que lo${isSingle ? '' : 's'} vimo${
    isSingle ? '' : 's'
  } activo fue el ${dateFormatted}`;

  return (
    <span className={style['name-cell']}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
      {isInactive ? (
        <Tooltip label={label}>
          <div className={style['inactive-indicator']}>
            <FiAlertCircle />
          </div>
        </Tooltip>
      ) : null}
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </span>
  );
};

NameCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
    row: PropTypes.shape({
      original: PropTypes.shape({
        inactive: PropTypes.bool,
        last_time_active: PropTypes.string,
        type: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  }),
};

NameCell.defaultProps = {
  cell: {
    value: null,
  },
};

export default NameCell;
