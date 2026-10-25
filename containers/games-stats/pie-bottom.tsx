import { Pie, patterns } from 'components/viz';

import type { PieChartProps } from './utils';

function PieBottom({ data, headers }: PieChartProps) {
  return (
    <Pie
      margin={{ top: 40, right: 120, bottom: 80, left: 80 }}
      data={data}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 110,
          translateY: 0,
          itemsSpacing: 8,
          itemWidth: 60,
          itemHeight: 18,
          itemDirection: 'right-to-left',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'square',
        },
      ]}
      fill={headers.map((item, i) => ({
        match: {
          id: item,
        },
        id: patterns[i % patterns.length].id,
      }))}
    />
  );
}

export default PieBottom;
