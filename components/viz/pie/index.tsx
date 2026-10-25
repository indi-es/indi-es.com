import { ResponsivePie } from '@nivo/pie';
import type { MayHaveLabel } from '@nivo/pie';

import theme from '../theme';
import { themedPatterns } from '../patterns';

export type PieProps<D extends MayHaveLabel> = Parameters<
  typeof ResponsivePie<D>
>[0];

type LegendDatum = { id: string | number; label?: string | number };

function getLegendData<D extends MayHaveLabel>({
  data,
  fill = [],
}: PieProps<D>) {
  return data.map((item) => {
    const datum = item as unknown as LegendDatum;
    const rule = fill.find(({ match }) =>
      match === '*'
        ? true
        : typeof match === 'object' &&
          Object.entries(match).every(
            ([key, value]) => (datum as Record<string, unknown>)[key] === value
          )
    );
    return {
      id: datum.id,
      label: datum.label ?? datum.id,
      color: 'var(--fg)',
      fill: rule ? `url(#${rule.id})` : undefined,
    };
  });
}

function Pie<D extends MayHaveLabel>(props: PieProps<D>) {
  const { legends } = props;
  const legendData = legends ? getLegendData(props) : undefined;

  return (
    <ResponsivePie
      animate
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.8}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor="var(--border)"
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="var(--fg)"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor="var(--fg)"
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="var(--bg)"
      defs={themedPatterns}
      colors={['var(--fg)']}
      theme={theme}
      {...props}
      legends={legends?.map((legend) => ({ data: legendData, ...legend }))}
    />
  );
}

export default Pie;
