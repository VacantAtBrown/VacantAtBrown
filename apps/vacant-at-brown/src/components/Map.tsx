import { MapContainer, TileLayer } from 'react-leaflet';
import Buildings from './Buildings';

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
      <Buildings />
    </MapContainer>
  );
};

export default MapView;
