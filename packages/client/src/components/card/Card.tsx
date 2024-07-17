import { Link } from "react-router-dom";
import "./Card.scss";
import TCard from "@/entities/Card";
import {
  Bath,
  BedDouble,
  Bookmark,
  MapPin,
  MessageSquareMore,
} from "lucide-react";

type Props = {
  item: TCard;
};

const Card = ({ item }: Props) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imgContainer">
        <img src={item.img} alt={item.title} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <MapPin className="icons" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="bedroom">
              <BedDouble className="icons" />
              <span>{item.bathroom} bedroom</span>
            </div>
            <div className="bathroom">
              <Bath className="icons" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <button className="icon">
              <Bookmark className="icons" />
            </button>
            <button className="icon">
              <MessageSquareMore className="icons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
