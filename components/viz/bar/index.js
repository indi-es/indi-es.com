import { ResponsiveBar } from '@nivo/bar';
import usePrefersColorScheme from 'hooks/use-prefers-color-scheme';

import theme from '../theme';

import { lightPatterns, darkPatterns } from '../patterns';

function Bar(props) {
  const preferredColorSchema = usePrefersColorScheme();
  const isDarkMode = preferredColorSchema === 'dark';

  return (
    <ResponsiveBar
      margin={{ top: 0, left: 100, bottom: 50, right: 0 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="var(--bg)"
      borderColor="var(--bg)"
      motionStiffness={90}
      motionDamping={15}
      theme={theme}
      defs={isDarkMode ? lightPatterns : darkPatterns}
      colors={isDarkMode ? ['#fff'] : ['#000']}
      animate
      {...props}
    />
  );
}
Bar.propTypes = {};

export default Bar;
