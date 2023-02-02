import PropTypes from 'prop-types';

import GamesView from 'views/games';

function Juegos({ data }) {
  return <GamesView data={data} />;
}

async function getGithubFile(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getServerSideProps() {
  const baseUrl = `https://raw.githubusercontent.com/indi-es/juegos`;
  const { games: data } = await getGithubFile(`${baseUrl}/main/data.json`);

  return {
    props: { data },
  };
}

Juegos.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default Juegos;
