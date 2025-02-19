import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const position = [6.531774, 3.431697]; // Coordinates for the address (28 Efon Alaye Street)

  return (
    <div className="bg-blue-400 h-screen flex justify-center items-center px-8 py-10">
        <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              28 Efon Alaye Street, Off Orisunbare Road, ShaSha, Lagos, Nigeria
            </Popup>
          </Marker>
        </MapContainer>
      
    </div>
  );
};

export default Contact;
