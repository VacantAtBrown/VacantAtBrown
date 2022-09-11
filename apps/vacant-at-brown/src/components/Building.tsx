import { LatLng } from 'leaflet';
import { useMemo } from 'react';
import { Polygon } from 'react-leaflet';

interface Building {
  positions: LatLng[];
  name: string;
  key: number;
}

const Building = (props: Building) => {
  const { positions, name } = props;

  const handleClick = useMemo(
    () => ({
      click() {
        console.log(name);
      },
    }),
    [name]
  );

  return (
    <Polygon
      positions={positions}
      eventHandlers={handleClick}
      pathOptions={{ opacity: 0, fillOpacity: 0 }}
    />
  );
};

export default Building;
