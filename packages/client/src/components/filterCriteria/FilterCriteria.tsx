import { Search } from "lucide-react";
import "./FilterCriteria.scss";

const FilterCriteria = () => {
  return (
    <div className="filterCriteria">
      <h1 className="title">Search results for</h1>
      <form>
        <div className="location">
          <label htmlFor="location">Location</label>
          <input id="location" type="text" placeholder="City Location" />
        </div>
        <div className="bottom">
          <div className="filterItem">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="any">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="filterItem">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
              <option value="any">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="filterItem">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              min={0}
              max={1000000}
              placeholder="any"
            />
          </div>
          <div className="filterItem">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              min={0}
              max={1000000}
              placeholder="any"
            />
          </div>
          <div className="filterItem">
            <label htmlFor="bedroom">Bedroom</label>
            <input
              type="number"
              id="bedroom"
              min={0}
              max={1000000}
              placeholder="any"
            />
          </div>
          <button id="searchBtnContainer">
            <Search id="searchIcon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterCriteria;
