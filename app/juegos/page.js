import GamesView from 'views/games';

async function getGithubFile(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function Juegos() {
  const baseUrl = `https://raw.githubusercontent.com/indi-es/juegos`;
  const { games: data } = await getGithubFile(`${baseUrl}/main/data.json`);
  return <GamesView data={data} />;
}

Juegos.propTypes = {};

export default Juegos;
