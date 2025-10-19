import "./PropertyDetails.css";
import area from "./../../assets/icons/Icon.svg";
import bedrooms from "./../../assets/icons/property-details/double-bed 1.svg";
import bathrooms from "./../../assets/icons/property-details/bath-tub 1.svg";
import floor from "./../../assets/icons/property-details/stairs 1.svg";
import construction from "./../../assets/icons/property-details/brick(2) 1.svg";
import elevator from "./../../assets/icons/property-details/elevator 1.svg";
import parking from "./../../assets/icons/property-details/parking-sign 1.svg";
import wifi from "./../../assets/icons/property-details/wifi 1.svg";
import tv from "./../../assets/icons/property-details/tv 1.svg";

const PropertyDetails = () => {
  return (
    <div>
      <h2 className="gantari">Property details</h2>
      <div className="property-details gantari">
        <div className="property-details-1">
          <div className="area">
            <div className="property-details-1-var">
              <img src={area} alt="" />
              <span>Total area</span>
            </div>
            <span>100sq.ft</span>
          </div>
          <div className="bedrooms">
            <div className="property-details-1-var">
              <img src={bedrooms} alt="" />
              <span>Bedrooms</span>
            </div>
            <span>2</span>
          </div>
          <div className="bathrooms">
            <div className="property-details-1-var">
              <img src={bathrooms} alt="" />
              <span>Bathrooms</span>
            </div>
            <span>2</span>
          </div>
          <div className="floor">
            <div className="property-details-1-var">
              <img src={floor} alt="" />
              <span>Floor</span>
            </div>
            <span>3rd</span>
          </div>
          <div className="construciton-year">
            <div className="property-details-1-var">
              <img src={construction} alt="" />
              <span>Construction year</span>
            </div>
            <span>2020</span>
          </div>
        </div>
        <div className="property-details-2">
          <div>
            <div>
              <img src={elevator} alt="" />
              <span>Elevator</span>
            </div>
            <span>2</span>
          </div>
          <div>
            <div>
              <img src={parking} alt="" />
              <span>Parking</span>
            </div>
            <span>Yes</span>
          </div>
          <div>
            <div>
              <img src={wifi} alt="" />
              <span>Wi-Fi</span>
            </div>
            <span>Yes</span>
          </div>
          <div>
            <div>
              <img src={tv} alt="" />
              <span>Cable TV</span>
            </div>
            <span>Yes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
