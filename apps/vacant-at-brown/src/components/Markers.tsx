import { LatLng } from 'leaflet';
import { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';

const Markers = () => {
  const [markers, setMarkers] = useState<LatLng[]>([]);

  useMapEvents({
    click: (location) => {
      const { latlng } = location;
      console.log(markers);
      return setMarkers([...markers, latlng]);
    },
  });

  return (
    <>
      {markers.map((latlng, i) => (
        <Marker position={latlng} key={i} />
      ))}
    </>
  );
};

export default Markers;
