import { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import type { BarDatum, ResponsiveBarSvgProps } from '@nivo/bar';

import theme from '../theme';

import { themedPatterns } from '../patterns';

function Bar<D extends BarDatum>(props: ResponsiveBarSvgProps<D>) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

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
      theme={theme}
      defs={themedPatterns}
      colors={['var(--fg)']}
      animate={isMounted}
      defaultWidth={900}
      defaultHeight={700}
      {...props}
    />
  );
}

export default Bar;
