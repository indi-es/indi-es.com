import type { Game, GameCrowdfunding } from 'types';
import { getGithubFile } from 'utils/github';

export async function getGames(): Promise<Game[]> {
  const baseUrl = `https://raw.githubusercontent.com/indi-es/juegos`;
  const { games } = await getGithubFile<{ games: Game[] }>(
    `${baseUrl}/main/data.json`
  );
  return games;
}

export const gameFilterKeys = [
  'name',
  'genre',
  'developers',
  'publishers',
  'engine',
  'status',
  'crowdfunding',
  'platforms',
  'from',
  'to',
] as const;

export type GameFilterKey = (typeof gameFilterKeys)[number];
export type GameFilters = Partial<Record<GameFilterKey, string>>;

type Query = Record<string, string | string[] | undefined>;

export function getGameFilters(query: Query): GameFilters {
  return gameFilterKeys.reduce<GameFilters>((acc, key) => {
    const raw = query[key];
    const value = (Array.isArray(raw) ? raw[0] : raw)?.trim();
    if (value) acc[key] = value;
    return acc;
  }, {});
}

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function matches(value: string | string[] | null | undefined, term?: string) {
  if (!term) return true;
  if (!value) return false;
  const text = Array.isArray(value) ? value.join(' ') : value;
  return normalize(text).includes(normalize(term));
}

// same labels the table shows in the crowdfunding column
export const crowdfundingOptions = [
  'Fondeado',
  'No fondeado',
  'Sin crowdfunding',
];

function getCrowdfundingStatus({ url, funded }: GameCrowdfunding) {
  if (url && funded) return 'Fondeado';
  if (url) return 'No fondeado';
  return 'Sin crowdfunding';
}

function getUniqueSorted(values: (string | null | undefined)[]): string[] {
  const unique = new Set(values.filter((value) => value != null));
  return [...unique].sort((a, b) => a.localeCompare(b, 'es'));
}

export type GameSelectKey = 'engine' | 'status' | 'crowdfunding' | 'platforms';
export type GameFilterOptions = Record<GameSelectKey, string[]>;

export function getFilterOptions(games: Game[]): GameFilterOptions {
  return {
    engine: getUniqueSorted(games.map((game) => game.engine)),
    status: getUniqueSorted(games.map((game) => game.status)),
    crowdfunding: crowdfundingOptions,
    platforms: getUniqueSorted(
      games.flatMap((game) => game.platforms?.map(({ name }) => name) ?? [])
    ),
  };
}

export function filterGames(games: Game[], filters: GameFilters): Game[] {
  const {
    name,
    genre,
    developers,
    publishers,
    engine,
    status,
    crowdfunding,
    platforms,
    from,
    to,
  } = filters;
  if (!Object.keys(filters).length) return games;

  return games.filter((game) => {
    if (!matches(game.name, name)) return false;
    if (!matches(game.genre, genre)) return false;
    if (!matches(game.developers, developers)) return false;
    if (!matches(game.publishers, publishers)) return false;
    if (engine && game.engine !== engine) return false;
    if (status && game.status !== status) return false;

    const gameCrowdfunding = getCrowdfundingStatus(game.crowdfunding);
    if (crowdfunding && gameCrowdfunding !== crowdfunding) return false;

    const gamePlatforms = game.platforms?.map(({ name: p }) => p) ?? [];
    if (platforms && !gamePlatforms.includes(platforms)) return false;

    if (from || to) {
      // dates come as ISO strings, compare the YYYY-MM-DD part
      const date = game['date-launch']?.slice(0, 10);
      if (!date) return false;
      if (from && date < from) return false;
      if (to && date > to) return false;
    }

    return true;
  });
}
