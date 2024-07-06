import { Marker, Popup } from "react-leaflet";
import "./Pin.scss";
import TCard from "@/entities/Card";
import { Link } from "react-router-dom";

type Props = {
  item: TCard;
};

const Pin = ({ item }: Props) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt={item.address} />
          <div className="textContainer">
            <Link to={`${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
