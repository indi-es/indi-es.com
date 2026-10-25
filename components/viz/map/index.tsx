import { ResponsiveGeoMap } from '@nivo/geo';
import type { GeoMapProps } from '@nivo/geo';

import theme from '../theme';

type MapProps = {
  features: GeoMapProps['features'];
};

function Map({ features }: MapProps) {
  return (
    <ResponsiveGeoMap
      features={features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      fillColor="#eeeeee"
      borderWidth={0.5}
      borderColor="#333333"
      enableGraticule
      graticuleLineColor="#666666"
      theme={theme}
    />
  );
}

export default Map;
