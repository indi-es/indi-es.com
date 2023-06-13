const dateKey = 'date-launch';

export function getYears(items) {
  return [
    ...new Set(
      items
        .filter((item) => item[dateKey] != null)
        .map((item) => {
          const date = new Date(Date.parse(item[dateKey]));
          const year = date.getFullYear();
          return year;
        })
    ),
  ];
}

export function getByYear(items) {
  const grouped = items
    .filter((item) => item[dateKey] != null)
    .reduce((acc, curr) => {
      const dateString = curr[dateKey];
      const date = new Date(Date.parse(dateString));
      const year = date.getFullYear();

      if (!acc[year]) acc[year] = [];
      acc[year].push(curr);
      return acc;
    }, {});

  const t = Object.entries(grouped)
    .map((entry) => {
      return {
        year: entry[0],
        total: entry[1].length,
      };
    })
    .sort((a, b) => {
      return b.total - a.total;
    });
  console.log(t);
  return t;
}
