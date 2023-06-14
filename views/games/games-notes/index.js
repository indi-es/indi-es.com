import Markdown from 'components/markdown';
import Callout from 'components/callout';

import style from './styles.module.css';

const text = `
La información en esta página fue recopilada originalmente en su mayoría por [Cataxis](https://www.flowcode.com/page/cataxis).

- Base de datos original en [Google Docs](https://docs.google.com/spreadsheets/d/1qZNjZOXthLsm_NQynQ2VOPgVUMK6hfAuLeTj1HG-bV0/edit#gid=1938942876)
- [JSON de INDI·ES](https://github.com/indi-es/juegos/blob/main/data.json)

Este trabajo esta licenciado con la [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/)
`;

function GamesNotes() {
  return (
    <Callout>
      <Markdown className={`${style['juegos-resources']}`}>{text}</Markdown>
    </Callout>
  );
}

GamesNotes.propTypes = {};

export default GamesNotes;
