import type { GetStaticPaths, GetStaticProps } from 'next';

import GamesView, { type GamesVista } from 'views/games';
import type { Game } from 'types';
import { getGames } from 'utils/games';

type JuegosVistaProps = {
  data: Game[];
  vista: GamesVista;
};

function JuegosVista({ data, vista }: JuegosVistaProps) {
  return <GamesView data={data} vista={vista} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { vista: 'estadisticas' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps<JuegosVistaProps> = async ({
  params,
}) => {
  const data = await getGames();
  return {
    props: { data, vista: params?.vista as GamesVista },
  };
};

export default JuegosVista;
