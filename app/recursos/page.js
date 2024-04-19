import { FiGithub } from 'react-icons/fi';

import { Page } from 'components/layouts';
import Markdown from 'components/markdown';
import Button from 'components/button';

import style from './style.module.css';

const url = 'https://raw.githubusercontent.com/indi-es/enlaces/main/README.md';

async function Recursos() {
  const res = await fetch(url);
  const data = await res.text();

  return (
    <Page className={style.page}>
      <div className={`${style.wrapper} wrapper`}>
        <Button
          className={style.contribute}
          href="https://github.com/indi-es/enlaces"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Puedes aportar a la lista de enlances en Github</span>
          <FiGithub />
        </Button>
        <Markdown>{data}</Markdown>
      </div>
    </Page>
  );
}

Recursos.propTypes = {};

export default Recursos;
