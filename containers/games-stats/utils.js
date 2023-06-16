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

export function groupByStatus(items) {
  const grouped = items
    .filter((item) => item.status != null)
    .reduce((acc, curr) => {
      if (!acc[curr.status]) acc[curr.status] = [];
      acc[curr.status].push(curr);
      return acc;
    }, {});

  return grouped;
}

export function getStatuses(items) {
  const grouped = groupByStatus(items);

  return Object.keys(grouped);
}

export function groupByPlatforms(items, cutOff = 5) {
  const grouped = items
    .filter((item) => item.platforms != null)
    .reduce((acc, curr) => {
      curr.platforms.forEach((platform) => {
        const id = platform.name;
        if (!acc[id]) acc[id] = [];
        acc[id].push(curr);
      });

      return acc;
    }, {});

  return Object.entries(grouped).reduce(
    (acc, [key, value]) => {
      if (value.length < cutOff) {
        acc.Otro = [...acc.Otro, ...value];
      } else {
        acc[key] = value;
      }

      return acc;
    },
    { Otro: [] }
  );
}

export function getPlatforms(items) {
  const grouped = groupByPlatforms(items);
  return Object.keys(grouped);
}

export function getByPlatforms(items) {
  const grouped = groupByPlatforms(items);

  const t = Object.entries(grouped).map((entry) => {
    return {
      id: entry[0],
      label: entry[0],
      value: entry[1].length,
    };
  });

  return t;
}

function getCrowdfundedStatus(item) {
  if (item.url && item.funded) return 'Funded';
  if (item.url && !item.funded) return 'Not funded';
  return 'Not Crowdfunded';
}

export function getCrowdfundedStatuses() {
  return ['Funded', 'Not funded', 'Not Crowdfunded'];
}

export function getByCrowdfundedStatus(items) {
  const grouped = items
    .filter((item) => item.platforms != null)
    .reduce((acc, curr) => {
      const id = getCrowdfundedStatus(curr.crowdfunding);
      if (!acc[id]) acc[id] = [];
      acc[id].push(curr);

      return acc;
    }, {});

  const t = Object.entries(grouped).map((entry) => {
    return {
      id: entry[0],
      label: entry[0],
      value: entry[1].length,
    };
  });

  return t;
}

export function getByStatus(items) {
  const grouped = groupByStatus(items);
  const t = Object.entries(grouped).map((entry) => {
    return {
      id: entry[0],
      label: entry[0],
      value: entry[1].length,
    };
  });

  return t;
}

export function groupByGenres(items, cutOff = 5) {
  const grouped = items
    .filter((item) => item.genre != null)
    .reduce((acc, curr) => {
      curr.genre.forEach((id) => {
        if (!acc[id]) acc[id] = [];
        acc[id].push(curr);
      });

      return acc;
    }, {});

  return Object.entries(grouped).reduce(
    (acc, [key, value]) => {
      if (value.length < cutOff) {
        acc.Otro = [...acc.Otro, ...value];
      } else {
        acc[key] = value;
      }

      return acc;
    },
    { Otro: [] }
  );
}

export function getGenres(items) {
  const grouped = groupByGenres(items);
  const t = Object.entries(grouped)
    .map((entry) => {
      return {
        id: entry[0],
        value: entry[1].length,
      };
    })
    .sort((a, b) => a.value - b.value);

  return t.map((item) => item.id);
}

export function getByGenres(items) {
  const grouped = groupByGenres(items);

  const t = Object.entries(grouped)
    .map((entry) => {
      return {
        id: entry[0],
        label: entry[0],
        value: entry[1].length,
        items: entry[1],
      };
    })
    .sort((a, b) => a.value - b.value);

  return t;
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
      const byStatus = Object.entries(groupByStatus(entry[1])).reduce(
        (acc, [key, value]) => {
          acc[key] = value.length;
          return acc;
        },
        {}
      );

      return {
        year: entry[0],
        value: entry[1],
        ...byStatus,
      };
    })
    .sort((a, b) => {
      return a.year - b.year;
    });
  return t;
}

export function getByYearFiltered(items) {
  const filtered = items.filter((item) => item.status === 'Publicado');

  const grouped = filtered
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
        value: entry[1].length,
      };
    })
    .sort((a, b) => {
      return a.year - b.year;
    });

  return t;
}
