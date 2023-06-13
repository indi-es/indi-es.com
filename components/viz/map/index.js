import { ResponsiveGeoMap } from '@nivo/geo';

import theme from '../theme';

function Map() {
  return (
    <ResponsiveGeoMap
      features="/* please have a look at the description for usage */"
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
