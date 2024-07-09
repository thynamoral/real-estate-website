import { Search } from "lucide-react";
import "./SearchBar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const navigate = useNavigate();

  const switchType = (type: string) => setQuery((prev) => ({ ...prev, type }));

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            className={type === query.type ? "active" : ""}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form className="form">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
        <button onClick={() => navigate("/list")}>
          <Search id="searchBtn" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
