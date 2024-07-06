import SearchBar from "@/components/searchBar/SearchBar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            praesentium et perferendis magni obcaecati. Id libero nulla
            doloribus iusto inventore.
          </p>
          <SearchBar />
        </div>
        <div className="boxes">
          <div className="box">
            <h2>16+</h2>
            <h3>Years of Experience</h3>
          </div>
          <div className="box">
            <h2>200</h2>
            <h3>Award Gained</h3>
          </div>
          <div className="box">
            <h2>1200+</h2>
            <h3>Property Ready</h3>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg_homePage.png" alt="homePage-background" />
      </div>
    </div>
  );
};

export default HomePage;
