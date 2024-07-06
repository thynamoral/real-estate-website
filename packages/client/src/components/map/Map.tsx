import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import TCard from "@/entities/Card";
import Pin from "../pin/Pin";

const position = [51.505, -0.09];

type Props = {
  items: TCard[];
};

const Map = ({ items }: Props) => {
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
};

export default Map;
