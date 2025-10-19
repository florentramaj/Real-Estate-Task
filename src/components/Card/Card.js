import React from "react";
import "./Card.css";
import House from "../../assets/images/property1.png";

function Card({ image, name, price, rooms }) {
  return (
    <div class="property-card">
      <div class="image-container">
        <img src={House} alt="Division Road house" />
        <span class="status-badge">For sale</span>
      </div>
      <div class="card-body">
        <h3 class="title">Division Road house</h3>
        <p class="address">506 Division Road Pembroke Pines, FL 33028</p>
        <p class="price">$250,000</p>
        <br />
        <hr />
        <div class="details">
          <div>
            <i>🛏</i> 3 Bedrooms
          </div>
          <div>
            <i>🛁</i> 2 Bathrooms
          </div>
        </div>
        <div class="details">
          <div>
            <i>📐</i> 1200 Total area
          </div>
          <div>
            <i>🚗</i> 3 Garages
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
