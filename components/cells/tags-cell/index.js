import PropTypes from 'prop-types';

import Tag from 'components/tag';

import style from './style.module.css';

function TagsCell({ cell: { value } = {} }) {
  if (!value) return null;

  return (
    <div className={style['tags-cell']}>
      {value.map((tag) => {
        return <Tag>{tag}</Tag>;
      })}
    </div>
  );
}

TagsCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default TagsCell;
