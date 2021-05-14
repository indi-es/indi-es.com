import PropTypes from 'prop-types';
import { FiGithub } from 'react-icons/fi';

import { Page } from 'components/layouts';
import Markdown from 'components/markdown';
import Button from 'components/button';

import style from './style.module.css';

function Recursos({ data }) {
  return (
    <Page className={style.page}>
      <div className={`${style.wrapper} wrapper`}>
        <Button
          className={style.contribute}
          href="https://github.com/indi-es/enlaces"
        >
          <span>Puedes aportar a la lista de enlances en Github</span>
          <FiGithub />
        </Button>
        <Markdown>{data}</Markdown>
      </div>
    </Page>
  );
}

export async function getServerSideProps() {
  const url =
    'https://raw.githubusercontent.com/indi-es/enlaces/main/README.md';
  const res = await fetch(url);
  const data = await res.text();

  return {
    props: { data },
  };
}

Recursos.propTypes = {
  data: PropTypes.shape({
    developers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default Recursos;
