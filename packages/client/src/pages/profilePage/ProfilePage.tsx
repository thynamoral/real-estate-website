import CardList from "@/components/cardList/CardList";
import "./ProfilePage.scss";
import { userData } from "@/lib/mockData";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={userData.img} alt="profile-picture" />
            </span>
            <span>
              Username: <b>{userData.name}</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <CardList />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <CardList />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">{/* <Chat /> */}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
