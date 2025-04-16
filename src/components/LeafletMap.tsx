import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix default marker icon for Leaflet in React
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

interface LeafletMapProps {
  height?: string;
}

const position: [number, number] = [37.7749, -122.4194]; // San Francisco

const LeafletMap = ({ height = "400px" }: LeafletMapProps) => {
  useEffect(() => {
    // Fix for leaflet's default icon path issue in webpack/Vite
    (L.Marker.prototype as any).options.icon = icon;
  }, []);

  return (
    <div style={{ width: "100%", height }}>
      <MapContainer center={position} zoom={13} style={{ width: "100%", height: "100%", borderRadius: "12px" }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            Cogniflow Office<br />123 Innovation Drive, San Francisco
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
