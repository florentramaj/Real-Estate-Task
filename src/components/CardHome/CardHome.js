import react from "react";
import "./CardHome.css";
import House from "./../../assets/images/property1.png";
import bed from "./../../assets/icons/property-details/double-bed 1.svg";
import bathroomimg from "./../../assets/icons/property-details/bath-tub 1.svg";
import maximize from "./../../assets/icons/Icon.svg";
import garageimg from "./../../assets/icons/garage.svg";

const CardHome = ({
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
        </div>
        <div>
          <div>
            <img src={bathroomimg} alt="" /> {bathroom}
          </div>
        </div>
        <div>
          <div>
            <img src={maximize} alt="" /> {area}
          </div>
        </div>
        <div>
          <div>
            <img src={garageimg} alt="" /> {garage}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardHome;
