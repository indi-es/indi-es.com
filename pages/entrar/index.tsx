import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { getProviders, getSession, signIn } from 'next-auth/react';
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

function Entrar({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const github = providers?.github;
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
            signIn(github?.id);
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
export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  const parsed = new URL(getFullUrl(req));
  const session = await getSession({ req });
  const callback = parsed.searchParams.get('callbackUrl');
  if (session && res) {
    return {
      redirect: {
        permanent: false,
        destination: callback || '/estudios',
      },
    };
  }

  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default Entrar;
