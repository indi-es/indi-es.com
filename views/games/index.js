import PropTypes from 'prop-types';

import Markdown from 'components/markdown';
import Callout from 'components/callout';
import { Page } from 'components/layouts';

import GamesTable from 'containers/games-table';

import style from './style.module.css';

const text = `
La información en esta página fue recopilada originalmente en su mayoría por [Cataxis](https://www.flowcode.com/page/cataxis).

- Base de datos original en [Google Docs](https://docs.google.com/spreadsheets/d/1qZNjZOXthLsm_NQynQ2VOPgVUMK6hfAuLeTj1HG-bV0/edit#gid=1938942876)
- [JSON de INDI·ES](https://github.com/indi-es/juegos/blob/main/data.json)

`;

function Games({ data }) {
  return (
    <Page className={style.page}>
      <div className={`${style.wrapper} wrapper`}>
        <Callout>
          <Markdown className={`${style['juegos-resources']}`}>{text}</Markdown>
        </Callout>
        <div className={style.content}>
          <span className={style.info}>Total de juegos: {data.length}</span>
          <GamesTable games={data} className={style.table} />
        </div>
      </div>
    </Page>
  );
}

Games.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};
export default Games;
