import Map from "@/components/map/Map";
import "./SinglePage.scss";
import Slider from "@/components/slider/Slider";
import { singlePostData, userData } from "@/lib/mockData";
import {
  Bath,
  BedDouble,
  Bookmark,
  BusFront,
  HandCoins,
  MapPin,
  MessageSquareMore,
  PawPrint,
  PencilRuler,
  Scaling,
  School,
  Soup,
} from "lucide-react";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <MapPin className="icons" />
                  {singlePostData.address}
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="profile-image" />
                <span className="username">{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="general">
            <div className="feature">
              <PencilRuler className="icons" />
              <div className="details">
                <span>Utilities</span>
                <span>Renter is responsible</span>
              </div>
            </div>
            <div className="feature">
              <PawPrint className="icons" />
              <div className="details">
                <span>Pet Policy</span>
                <span>Pet Allowed</span>
              </div>
            </div>
            <div className="feature">
              <HandCoins className="icons" />
              <div className="details">
                <span>Property Fees</span>
                <span>Must have 3x the rent in total household income</span>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div>
              <Scaling className="icons" />
              <span>{singlePostData.size} sqft</span>
            </div>
            <div>
              <BedDouble className="icons" />
              <span>{singlePostData.bedRooms} bedroom</span>
            </div>
            <div>
              <Bath className="icons" />
              <span>{singlePostData.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="nearbyPlaces">
            <div className="feature">
              <School className="icons" />
              <div className="details">
                <span>School</span>
                <span>{singlePostData.school}</span>
              </div>
            </div>
            <div className="feature">
              <BusFront className="icons" />
              <div className="details">
                <span>Bus Stop</span>
                <span>{singlePostData.bus}</span>
              </div>
            </div>
            <div className="feature">
              <Soup className="icons" />
              <div className="details">
                <span>Restaurant</span>
                <span>{singlePostData.restaurant}</span>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <MessageSquareMore className="icons" />
              <span>Send a message</span>
            </button>
            <button>
              <Bookmark className="icons" />
              <span>Save the place</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
