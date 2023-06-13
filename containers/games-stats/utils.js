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
        value: entry[1].length,
      };
    })
    .sort((a, b) => {
      return a.year - b.year;
    });
  return t;
}

export function getStatuses(items) {
  const grouped = items
    .filter((item) => item.status != null)
    .reduce((acc, curr) => {
      if (!acc[curr.status]) acc[curr.status] = [];
      acc[curr.status].push(curr);
      return acc;
    }, {});

  return Object.keys(grouped);
}

export function getPlatforms(items) {
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

  return Object.keys(grouped);
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

export function getByPlatforms(items) {
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
  const grouped = items
    .filter((item) => item.status != null)
    .reduce((acc, curr) => {
      if (!acc[curr.status]) acc[curr.status] = [];
      acc[curr.status].push(curr);
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
