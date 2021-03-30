import React from 'react';

import Markdown from 'components/markdown';

import style from './style.module.css';

const text = `
## Otros recursos

Proyectos similares que nos hemos encontrado a lo largo del camino:

- [Gamedev Map](https://www.gamedevmap.com/index.php)
- [Latam.vg](http://latam.vg/)
- [Wikipedia Videojuegos en México](https://es.wikipedia.org/wiki/Videojuegos_en_M%C3%A9xico)
`;

function EstudiosResources() {
  return (
    <Markdown className={`${style['estudios-resources']} wrapper`}>
      {text}
    </Markdown>
  );
}

export default EstudiosResources;
