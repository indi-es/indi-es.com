import PropTypes from 'prop-types';
import { useSession, getSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import { Page } from 'components/layouts';
import Spinner from 'components/spinner';

import StudiosAddForm from 'containers/studios-add-form';

import { getFullUrl } from 'utils/url';

import style from './style.module.css';

function Agregar({ data }) {
  const { developers } = data;
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) {
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

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  if (!session) {
    const url = getFullUrl(req);
    res.writeHead(302, {
      Location: `/entrar?callbackUrl=${url}`,
    });
    res.end();
    return { props: {} };
  }
  const url =
    'https://raw.githubusercontent.com/indi-es/estudios/main/developers.json';
  const call = await fetch(url);
  const data = await call.json();

  return {
    props: { data },
  };
}

Agregar.propTypes = {
  data: PropTypes.shape({
    developers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default Agregar;
