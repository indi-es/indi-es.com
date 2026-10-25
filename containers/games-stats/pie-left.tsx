import { Pie, patterns } from 'components/viz';

import type { PieChartProps } from './utils';

function PieLeft({ data, headers }: PieChartProps) {
  return (
    <Pie
      margin={{ top: 80, right: 100, bottom: 80, left: 200 }}
      data={data}
      legends={[
        {
          anchor: 'left',
          direction: 'column',
          justify: false,
          translateX: -200,
          translateY: 0,
          itemsSpacing: 8,
          itemWidth: 100,
          itemHeight: 18,
          itemDirection: 'left-to-right',
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

export default PieLeft;
