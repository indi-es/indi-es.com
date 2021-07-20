import { FiGithub } from 'react-icons/fi';
import { useRouter } from 'next/router';

import { Page } from 'components/layouts';
import Bot from 'components/bot';
import Button from 'components/button';
import Callout from 'components/callout';
import Markdown from 'components/markdown';

import style from './style.module.css';

function Exito() {
  const router = useRouter();
  const {
    query: { issueURL },
  } = router;
  const text = `
## ¡Gracias!

Alguien del equipo revisara tu contribución y esperamos pronto sea parte de la base de datos, si tienes alguna duda puedes preguntar en nuestro discord o puedes checar la discucción en **[Github](https://github.com/indi-es/estudios)**.
`;
  return (
    <Page className={style.page}>
      <Callout className={`${style['success-callout']} wrapper`}>
        <div className={style['success-message-wrapper']}>
          <Bot className={style['success-bot']} />
          <Markdown className={`${style['success-message']}`}>{text}</Markdown>
        </div>
        {issueURL ? (
          <Button
            href={issueURL}
            className={style['success-button']}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Revisa tu issue en Github</span>
            <FiGithub />
          </Button>
        ) : null}
      </Callout>
    </Page>
  );
}

Exito.propTypes = {};

export default Exito;
