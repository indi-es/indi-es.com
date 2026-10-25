import { Pie, patterns } from 'components/viz';

import type { PieChartProps } from './utils';

function PieLegendless({ data, headers }: PieChartProps) {
  return (
    <Pie
      margin={{ top: 0, right: 100, bottom: 0, left: 100 }}
      data={data}
      fill={headers.map((item, i) => ({
        match: {
          id: item,
        },
        id: patterns[i % patterns.length].id,
      }))}
      padAngle={0.1}
      cornerRadius={1}
      borderWidth={0.5}
    />
  );
}

export default PieLegendless;
