import React from "react";
import "./Ad.css";
import Buton from "./assets/search.png";
import Setting from "./assets/settings.png";

const Ad = () => {
  return (
    <div className="container">
      <h1>Find a Home that suits your lifestyle.</h1>
      <p>Discover your perfect home with our personalized listings.</p>
      <div className="searchbar">
        <select>
          <option selected>Category</option>
          <option>Apartments</option>
          <option>Houses</option>
          <option>Rent</option>
        </select>

        <select>
          <option selected>Category</option>
          <option>Apartments</option>
          <option>Houses</option>
          <option>Rent</option>
        </select>

        <select>
          <option selected>Category</option>
          <option>Apartments</option>
          <option>Houses</option>
          <option>Rent</option>
        </select>

        <button className="button">
          <img className="setting-icon" src={Setting} alt="Setting"></img>
        </button>

        <button className="searchButton">
          <img className="search-icon" src={Buton} alt="Search" />{" "}
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default Ad;
