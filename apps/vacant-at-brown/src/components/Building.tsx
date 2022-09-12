import { LatLng } from 'leaflet';
import { useMemo } from 'react';
import { Polygon } from 'react-leaflet';
import { useSidePanel } from '../state/useSidePanel';

interface Building {
  positions: LatLng[];
  name: string;
  key: number;
}

const Building = (props: Building) => {
  const { positions, name } = props;
  const toggleExpanded = useSidePanel((state) => state.toggleExpanded);

  const handleClick = {
    click() {
      toggleExpanded();
    },
  };

  return (
    <Polygon
      positions={positions}
      eventHandlers={handleClick}
      pathOptions={{ opacity: 0.1, fillOpacity: 0.1 }}
    />
  );
};

export default Building;
