import type { Studio } from 'types';

export function byCity(items: Studio[]) {
  const grouped = items
    .filter((item) => item.city !== '')
    .reduce<Record<string, number>>((acc, curr) => {
      const city = curr.city as string;
      if (!acc[city]) acc[city] = 0;
      acc[city] += 1;
      return acc;
    }, {});

  return grouped;
}

export function getByState(items: Studio[]) {
  const grouped = items
    .filter((item) => item.state !== '')
    .reduce<Record<string, Studio[]>>((acc, curr) => {
      const state = curr.state as string;
      if (!acc[state]) acc[state] = [];
      acc[state].push(curr);
      return acc;
    }, {});

  const t = Object.entries(grouped)
    .map((entry) => {
      const cities = byCity(entry[1]);
      return {
        state: entry[0],
        total: entry[1].length,
        cities,
      };
    })
    .sort((a, b) => {
      return a.total - b.total;
    });

  return t;
}

export function getCities(items: Studio[]) {
  return [
    ...new Set(
      items.filter((item) => item.city !== '').map(({ city }) => city as string)
    ),
  ];
}
