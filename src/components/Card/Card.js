import react from "react";
import "./Card.css";
import House from "./../../assets/images/property1.png";
import bed from "./../../assets/icons/property-details/double-bed 1.svg";
import bathroomimg from "./../../assets/icons/property-details/bath-tub 1.svg";
import maximize from "./../../assets/icons/Icon.svg";
import garageimg from "./../../assets/icons/garage.svg";
import ForSaleTag from "../ForSaleTag/ForSaleTag";
import ForRentTag from "../ForRentTag/ForRentTag";

const Card = ({
  pourpuse,
  imagesrc,
  name,
  adress,
  price,
  bedroom,
  bathroom,
  area,
  garage,
}) => {
  return (
    <div className="property-card">
      <img src={imagesrc} alt="property being sold" />
      {pourpuse === "rent" || pourpuse === "r" ? (
        <ForRentTag />
      ) : pourpuse === "sale" || pourpuse === "s" ? (
        <ForSaleTag />
      ) : (
        <p>Invalid pourpuse</p>
      )}

      {/* <span className={pourpuse}>{pourpuse}</span> */}
      <div className="main-prop-info">
        <h3 className="title">{name}</h3>
        <p className="address">{adress}</p>
        <p className="price">{price}</p>
      </div>
      <br />
      <hr />
      <div class="details">
        <div>
          <div>
            <img src={bed} alt="" /> {bedroom}
          </div>
          <p>Bedrooms</p>
        </div>
        <div>
          <div>
            <img src={bathroomimg} alt="" /> {bathroom}
          </div>
          <p>Bathrooms</p>
        </div>
        <div>
          <div>
            <img src={maximize} alt="" /> {area}
          </div>
          <p>Total area</p>
        </div>
        <div>
          <div>
            <img src={garageimg} alt="" /> {garage}
          </div>
          <p>Garages</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
