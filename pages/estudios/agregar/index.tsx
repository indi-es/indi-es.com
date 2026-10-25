import type { GetServerSidePropsContext } from 'next';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Page } from 'components/layouts';
import Spinner from 'components/spinner';

import StudiosAddForm from 'containers/studios-add-form';
import type { Studio } from 'types';

import { getFullUrl } from 'utils/url';

import style from './style.module.css';

type AgregarProps = {
  data: {
    developers: Studio[];
  };
};

function Agregar({ data }: AgregarProps) {
  const { developers } = data;
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <Page className={`${style.page} ${style['-loading']}`}>
        <Spinner className={style.spinner} />
      </Page>
    );
  }
  return (
    <Page className={style.page}>
      {session ? (
        <StudiosAddForm
          items={developers}
          onSubmit={({ res }) => {
            const { html_url: url } = res;
            if (url) {
              router.push(`/estudios/exito?issueURL=${url}`);
            } else {
              router.push(`/estudios/exito`);
            }
          }}
        />
      ) : null}
    </Page>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req });
  if (!session) {
    const url = getFullUrl(req);
    return {
      redirect: {
        permanent: false,
        destination: `/entrar?callbackUrl=${url}`,
      },
    };
  }

  const url =
    'https://raw.githubusercontent.com/indi-es/estudios/main/developers.json';
  const call = await fetch(url);
  const data: AgregarProps['data'] = await call.json();

  return {
    props: { data },
  };
}

export default Agregar;
