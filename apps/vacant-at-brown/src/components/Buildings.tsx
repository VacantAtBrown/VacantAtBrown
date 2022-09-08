import { LatLng, latLng } from 'leaflet';
import { useState, useEffect } from 'react';
import Building from './Building';
import places from '../assets/locations.json';

interface BuildingShapes {
  vertices: LatLng[];
  name: string;
}

const Buildings = () => {
  const [buildingShapes, setBuildingShapes] = useState<BuildingShapes[]>([]);

  useEffect(() => {
    for (const place in places) {
      const vertices = places[place as keyof typeof places].map((obj) =>
        latLng(obj)
      );
      setBuildingShapes((prevShapes) => [
        ...prevShapes,
        { vertices: vertices, name: place },
      ]);
    }
  }, []);

  return (
    <>
      {buildingShapes.map((shape, i) => {
        const { name, vertices } = shape;
        return <Building positions={vertices} name={name} key={i} />;
      })}
    </>
  );
};

export default Buildings;
