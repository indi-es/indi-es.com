import type { Game } from 'types';
import { getGithubFile } from 'utils/github';

export async function getGames(): Promise<Game[]> {
  const baseUrl = `https://raw.githubusercontent.com/indi-es/juegos`;
  const { games } = await getGithubFile<{ games: Game[] }>(
    `${baseUrl}/main/data.json`
  );
  return games;
}
