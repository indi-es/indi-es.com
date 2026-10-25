import type { CellProps } from 'components/cells/types';
import type { GamePlatform } from 'types';

import style from './style.module.css';

const formatter = new Intl.ListFormat('es-mx', {
  style: 'long',
  type: 'conjunction',
});

function CellPlatforms({
  cell: { getValue },
}: CellProps<GamePlatform[] | null | undefined>) {
  const value = getValue();
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

export default CellPlatforms;
