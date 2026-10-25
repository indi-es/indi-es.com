import GamesView from 'views/games';
import type { Game } from 'types';
import { getGames } from 'utils/games';

type JuegosProps = {
  data: Game[];
};

function Juegos({ data }: JuegosProps) {
  return <GamesView data={data} vista="tabla" />;
}

export async function getStaticProps() {
  const data = await getGames();
  return {
    props: { data },
  };
}

export default Juegos;
