import { ResponsiveBar } from '@nivo/bar';

import theme from '../theme';

function Bar(props) {
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
      animate
      theme={theme}
      {...props}
    />
  );
}
Bar.propTypes = {};

export default Bar;
