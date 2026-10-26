import type { Game, GameCrowdfunding } from 'types';

const dateKey = 'date-launch';

type Grouped = Record<string, Game[]>;

export type PieDatum = {
  id: string;
  label: string;
  value: number;
};

export type PieChartProps = {
  data: PieDatum[];
  headers: string[];
};

export function hasEntries(data: { value: number }[]) {
  return data.some((item) => item.value > 0);
}

export function getYears(items: Game[]) {
  return [
    ...new Set(
      items
        .filter((item) => item[dateKey] != null)
        .map((item) => {
          const date = new Date(Date.parse(item[dateKey] as string));
          const year = date.getFullYear();
          return year;
        })
    ),
  ];
}

export function groupByStatus(items: Game[]) {
  const grouped = items
    .filter((item) => item.status != null)
    .reduce<Grouped>((acc, curr) => {
      const status = curr.status as string;
      if (!acc[status]) acc[status] = [];
      acc[status].push(curr);
      return acc;
    }, {});

  return grouped;
}

export function getStatuses(items: Game[]) {
  const grouped = groupByStatus(items);

  return Object.keys(grouped);
}

export function groupByPlatforms(items: Game[], cutOff = 5) {
  const grouped = items
    .filter((item) => item.platforms != null)
    .reduce<Grouped>((acc, curr) => {
      curr.platforms?.forEach((platform) => {
        const id = platform.name;
        if (!acc[id]) acc[id] = [];
        acc[id].push(curr);
      });

      return acc;
    }, {});

  return Object.entries(grouped).reduce<Grouped>(
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

export function getPlatforms(items: Game[]) {
  const grouped = groupByPlatforms(items);
  return Object.keys(grouped);
}

export function getByPlatforms(items: Game[]): PieDatum[] {
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

function getCrowdfundedStatus(item: GameCrowdfunding) {
  if (item.url && item.funded) return 'Funded';
  if (item.url && !item.funded) return 'Not funded';
  return 'Not Crowdfunded';
}

export function getCrowdfundedStatuses() {
  return ['Funded', 'Not funded', 'Not Crowdfunded'];
}

export function getByCrowdfundedStatus(items: Game[]): PieDatum[] {
  const grouped = items
    .filter((item) => item.platforms != null)
    .reduce<Grouped>((acc, curr) => {
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

export function getByStatus(items: Game[]): PieDatum[] {
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

export function groupByGenres(items: Game[], cutOff = 5) {
  const grouped = items
    .filter((item) => item.genre != null)
    .reduce<Grouped>((acc, curr) => {
      curr.genre?.forEach((id) => {
        if (!acc[id]) acc[id] = [];
        acc[id].push(curr);
      });

      return acc;
    }, {});

  return Object.entries(grouped).reduce<Grouped>(
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

export function getGenres(items: Game[]) {
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

export function getByGenres(items: Game[]) {
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

export function getGroupedByYear(items: Game[]) {
  return items
    .filter((item) => item[dateKey] != null)
    .reduce<Grouped>((acc, curr) => {
      const dateString = curr[dateKey] as string;
      const date = new Date(Date.parse(dateString));
      const year = date.getFullYear();

      if (!acc[year]) acc[year] = [];
      acc[year].push(curr);
      return acc;
    }, {});
}

export function getByYear(items: Game[]) {
  const grouped = getGroupedByYear(items);
  const t = Object.entries(grouped)
    .map((entry) => {
      const byStatus = Object.entries(groupByStatus(entry[1])).reduce<
        Record<string, number>
      >((acc, [key, value]) => {
        acc[key] = value.length;
        return acc;
      }, {});

      return {
        year: entry[0],
        value: entry[1].length,
        ...byStatus,
      };
    })
    .sort((a, b) => {
      return Number(a.year) - Number(b.year);
    });
  return t;
}

export function getByYearFiltered(items: Game[]) {
  const filtered = items.filter((item) => item.status === 'Publicado');
  const grouped = getGroupedByYear(filtered);

  const t = Object.entries(grouped)
    .map((entry) => {
      return {
        year: entry[0],
        value: entry[1].length,
      };
    })
    .sort((a, b) => {
      return Number(a.year) - Number(b.year);
    });

  return t;
}

type CollapsedPlatforms = {
  console: Game[];
  mobile: Game[];
  pc: Game[];
};

export function getCollapsedPlatforms(dict: Grouped) {
  return Object.entries(dict).reduce<CollapsedPlatforms>(
    (acc, curr) => {
      const [key, value] = curr;

      switch (key.toLowerCase()) {
        case 'nintendo':
        case 'play station':
        case 'xbox':
          acc.console = [...acc.console, ...value];
          break;
        case 'play store':
        case 'app store':
          acc.mobile = [...acc.mobile, ...value];
          break;
        case 'steam':
        case 'epic store':
        case 'microsoft store':
          acc.pc = [...acc.pc, ...value];
          break;
        default:
          break;
      }

      return acc;
    },
    { console: [], mobile: [], pc: [] }
  );
}

export function getByYearPlatforms(items: Game[]) {
  const grouped = getGroupedByYear(items);

  const t = Object.entries(grouped)
    .map((entry) => {
      const [year, value] = entry;
      const byPlatforms = groupByPlatforms(value, 0);
      const collapsed = getCollapsedPlatforms(byPlatforms);

      return {
        year,
        ...collapsed,
      };
    })
    .filter((item) => {
      const count = item.console.length + item.mobile.length + item.pc.length;
      return count > 0;
    })
    .map((item) => {
      const { console, mobile, pc } = item;
      return {
        year: item.year,
        console: console.length,
        mobile: mobile.length,
        pc: pc.length,
      };
    })
    .sort((a, b) => {
      return Number(a.year) - Number(b.year);
    });

  return t;
}

export function groupByEngine(items: Game[], cutOff = 5) {
  const grouped = items
    .filter((item) => item.engine != null && item.engine !== 'Desconocido')
    .reduce<Grouped>((acc, curr) => {
      const engine = curr.engine as string;
      if (!acc[engine]) acc[engine] = [];
      acc[engine].push(curr);
      return acc;
    }, {});

  return Object.entries(grouped).reduce<Grouped>(
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

export function getEngines(items: Game[]) {
  const grouped = groupByEngine(items);
  return Object.keys(grouped);
}

export function getByEngines(items: Game[]): PieDatum[] {
  const grouped = groupByEngine(items);
  const t = Object.entries(grouped)
    .map((entry) => {
      return {
        id: entry[0],
        label: entry[0],
        value: entry[1].length,
      };
    })
    .sort((a, b) => a.value - b.value);

  return t;
}
