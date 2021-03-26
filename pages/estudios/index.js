import React from 'react';
import PropTypes from 'prop-types';
import { FiGithub } from 'react-icons/fi';
// import Link from 'next/link';

import { Page } from 'components/layouts';

import StudiosTable from 'containers/studios-table';

import style from './style.module.css';

function Estudios({ data }) {
  const { studios } = data;

  return (
    <Page className={style.page}>
      <div className={`${style.wrapper}`}>
        <a
          className={style.support}
          href="https://github.com/indi-es/estudios"
          target="__blank"
        >
          Puedes aportar a la lista de estudios en Github
          <FiGithub />
        </a>
        <StudiosTable studios={studios} className={style.table} />
      </div>
    </Page>
  );
}

export async function getServerSideProps() {
  const url =
    'https://raw.githubusercontent.com/indi-es/estudios/main/estudios-mexico.json';
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}

Estudios.propTypes = {
  data: PropTypes.shape({
    studios: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
export default Estudios;
