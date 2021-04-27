import PropTypes from 'prop-types';

import EstudiosView from 'views/estudios';

function Estudios({ data }) {
  return <EstudiosView data={data} />;
}

export async function getServerSideProps() {
  const url =
    'https://raw.githubusercontent.com/indi-es/estudios/main/developers.json';
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}

Estudios.propTypes = {
  data: PropTypes.shape({
    developers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
export default Estudios;
