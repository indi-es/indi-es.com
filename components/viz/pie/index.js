import { ResponsivePie } from '@nivo/pie';
import usePrefersColorScheme from 'hooks/use-prefers-color-scheme';

import theme from '../theme';
import { lightPatterns, darkPatterns } from '../patterns';

function Pie(props) {
  const preferredColorSchema = usePrefersColorScheme();
  const isDarkMode = preferredColorSchema === 'dark';
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
      defs={isDarkMode ? lightPatterns : darkPatterns}
      colors={isDarkMode ? ['#fff'] : ['#000']}
      theme={theme}
      {...props}
    />
  );
}

Pie.propTypes = {};

export default Pie;
