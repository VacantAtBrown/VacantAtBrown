import { latLng, LatLng } from 'leaflet';
import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Polygon,
} from 'react-leaflet';
import places from '../assets/locations.json';

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

const Locations = () => {
  const [shapes, setShapes] = useState<LatLng[][]>([]);

  useEffect(() => {
    for (const place in places) {
      const vertices = places[place as keyof typeof places].map((obj) =>
        latLng(obj)
      );
      setShapes((prevShapes) => [...prevShapes, vertices]);
    }
  }, []);

  return (
    <>
      {shapes.map((latlng, i) => (
        <Polygon positions={latlng} key={i} pathOptions={{ color: 'red' }} />
      ))}
    </>
  );
};

const MapView = () => {
  return (
    <MapContainer
      className="h-screen"
      center={[41.82611606734716, -71.4031504947082]}
      zoom={30}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Locations />
      {/* <Markers /> */}
    </MapContainer>
  );
};

export default MapView;
