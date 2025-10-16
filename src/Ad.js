import React from "react";
import "./Ad.css";

const Ad = () => {
  return (
    <div className="container">
      <h1 id="heroH1">Find a Home that suits your lifestyle.</h1>
      <p>Discover your perfect home with our personalized listings.</p>
      <div className="search-container">
        <select>
          <option>Category</option>
        </select>
        <select>
          <option>Property Type</option>
        </select>
        <select>
          <option>Location</option>
        </select>
        <button className="filter-btn">⚙️</button>
        <button className="search-btn">🔍 Search</button>
      </div>
    </div>
  );
};

export default Ad;
