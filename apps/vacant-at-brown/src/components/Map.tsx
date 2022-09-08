import { LatLng } from "leaflet";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

const Markers = () => {
    const [markers, setMarkers] = useState<LatLng[]>([]);

    const map = useMapEvents({
        click: (location) => {
            const {latlng} = location
            console.log(markers)
            return setMarkers([...markers, latlng])
        },
      })

    return <>
        {markers.map((latlng, i) => <Marker position={latlng} key={i}/>)}
        </>
}

const MapView = () => {

    return (
            <MapContainer className="h-screen" center={[41.82611606734716, -71.4031504947082]} zoom={30} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers />
            </MapContainer>
    );
}

export default MapView;