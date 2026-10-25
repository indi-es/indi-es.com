import GamesView from 'views/games';
import type { Game } from 'types';

type JuegosProps = {
  data: Game[];
};

function Juegos({ data }: JuegosProps) {
  return <GamesView data={data} />;
}

async function getGithubFile<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getStaticProps() {
  const baseUrl = `https://raw.githubusercontent.com/indi-es/juegos`;
  const { games: data } = await getGithubFile<{ games: Game[] }>(
    `${baseUrl}/main/data.json`
  );

  return {
    props: { data },
  };
}

export default Juegos;
