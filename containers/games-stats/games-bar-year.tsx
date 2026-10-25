import type { BarDatum, ResponsiveBarSvgProps } from '@nivo/bar';

import { Bar, patterns } from 'components/viz';

type GamesBarYearProps<D extends BarDatum> = Omit<
  ResponsiveBarSvgProps<D>,
  'layout' | 'keys'
> & {
  layout: 'horizontal' | 'vertical';
  legend: string;
  keys?: string[];
};

function GamesBarYear<D extends BarDatum>({
  data,
  layout,
  keys,
  legend,
  ...rest
}: GamesBarYearProps<D>) {
  const fill = keys
    ? keys.map((item, i) => ({
        match: {
          id: item,
        },
        id: patterns[i % patterns.length].id,
      }))
    : undefined;

  return (
    <Bar
      data={data}
      indexBy="year"
      layout={layout}
      borderWidth={2}
      margin={{ top: 0, left: 40, bottom: 50, right: 0 }}
      keys={keys}
      fill={fill}
      axisBottom={{
        tickSize: 4,
        tickPadding: 4,
        tickRotation: 0,
        legend,
        legendPosition: 'middle',
        legendOffset: 40,
      }}
      axisLeft={{
        tickSize: 4,
        tickPadding: 4,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      {...rest}
    />
  );
}

export default GamesBarYear;
