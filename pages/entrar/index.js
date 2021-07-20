import PropTypes from 'prop-types';
import { getProviders, getSession, signIn } from 'next-auth/client';
import { FiGithub } from 'react-icons/fi';

import { Page } from 'components/layouts';
import Bot from 'components/bot';
import Button from 'components/button';
import Callout from 'components/callout';
import Markdown from 'components/markdown';

import { getFullUrl } from 'utils/url';

import style from './style.module.css';

const loginText = `
## HOLA

Toda la información la tenemos disponible en el repositorio de la comunidad, puedes hacer manualmente tu contribución en **[Github](https://github.com/indi-es/estudios/blob/main/CONTRIBUTING.md)** o utilizar nuestra página para automatizar el proceso.
`;

function Entrar({ providers }) {
  const { github } = providers;
  return (
    <Page className={style.page}>
      <Callout className={`${style['login-callout']} wrapper`}>
        <div className={style['login-message-wrapper']}>
          <Bot className={style['login-bot']} />
          <Markdown className={`${style['login-message']}`}>
            {loginText}
          </Markdown>
        </div>
        <Button
          onClick={() => {
            signIn(github.id);
          }}
          className={style['login-button']}
        >
          <span>Iniciar sesión con Github</span>
          <FiGithub />
        </Button>
      </Callout>
    </Page>
  );
}

// http://localhost:3000/entrar?callbackUrl=http://localhost:3000/estudios
export async function getServerSideProps({ req, res }) {
  // TODO: Get protocol depending on if it's dev env or not
  const parsed = new URL(getFullUrl(req));
  const session = await getSession({ req });
  const callback = parsed.searchParams.get('callbackUrl');
  if (session && res) {
    res.writeHead(302, {
      Location: callback || '/estudios',
    });
    res.end();
    return { props: {} };
  }

  const providers = await getProviders();
  return {
    props: { providers },
  };
}

Entrar.propTypes = {
  providers: PropTypes.shape({
    github: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Entrar;
