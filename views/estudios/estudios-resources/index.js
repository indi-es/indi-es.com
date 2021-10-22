import Markdown from 'components/markdown';
import Callout from 'components/callout';

import style from './style.module.css';

const text = `
## Otros recursos

Proyectos similares que nos hemos encontrado a lo largo del camino:

- [Reporte VMX 2018-2019](https://comohacervideojuegos.weebly.com/blog/reporte-2018-2019)
- [Gamedev Map](https://www.gamedevmap.com/index.php)
- [Latam.vg](http://latam.vg/)
- [Wikipedia Videojuegos en México](https://es.wikipedia.org/wiki/Videojuegos_en_M%C3%A9xico)
- [AMEXVID](https://amexvid.com/directorio/)
`;

function EstudiosResources() {
  return (
    <Callout>
      <Markdown className={`${style['estudios-resources']}`}>{text}</Markdown>
    </Callout>
  );
}

export default EstudiosResources;
