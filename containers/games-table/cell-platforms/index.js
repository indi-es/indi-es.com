import PropTypes from 'prop-types';

import style from './style.module.css';

const formatter = new Intl.ListFormat('es-mx', {
  style: 'long',
  type: 'conjunction',
});

function CellPlatforms({ cell: { value } }) {
  if (!value) return null;

  return (
    <span className={style['cell-platforms']}>
      {formatter.formatToParts(value.map((item) => item.name)).map((item) => {
        if (item.type === 'literal') {
          return item.value;
        }

        const { url } =
          value.find((platform) => platform.name === item.value) || {};

        if (url == null || url === '') {
          return item.value;
        }

        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.value}
          >
            {item.value}
          </a>
        );
      })}
    </span>
  );
}

CellPlatforms.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      })
    ),
  }),
};

CellPlatforms.defaultProps = {
  cell: {
    value: null,
  },
};

export default CellPlatforms;
