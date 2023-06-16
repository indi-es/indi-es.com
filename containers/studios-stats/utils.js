export function byCity(items) {
  const grouped = items
    .filter((item) => item.city !== '')
    .reduce((acc, curr) => {
      if (!acc[curr.city]) acc[curr.city] = 0;
      acc[curr.city] += 1;
      return acc;
    }, {});

  return grouped;
}

export function getByState(items) {
  const grouped = items
    .filter((item) => item.state !== '')
    .reduce((acc, curr) => {
      if (!acc[curr.state]) acc[curr.state] = [];
      acc[curr.state].push(curr);
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

export function getCities(items) {
  return [
    ...new Set(
      items.filter((item) => item.city !== '').map(({ city }) => city)
    ),
  ];
}
