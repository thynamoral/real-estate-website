import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import TCard from "@/entities/Card";
import Pin from "../pin/Pin";
import TSinglePost from "@/entities/SinglePost";

const position = [51.505, -0.09];

type Props = {
  items: TCard[] | TSinglePost[];
};

const Map = ({ items }: Props) => {
  return (
    <MapContainer
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {items.map((item) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
};

export default Map;
