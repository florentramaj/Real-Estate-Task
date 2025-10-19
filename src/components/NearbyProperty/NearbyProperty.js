import Nearbytext from "../Nearbytext/Nearbytext";
import "./NearbyProperty.css";
import education from "./../../assets/icons/property-details/education.svg";
import health from "./../../assets/icons/property-details/health.svg";
import food from "./../../assets/icons/property-details/food.svg";
import culture from "./../../assets/icons/property-details/culture.svg";

const NearbyProperty = () => {
  return (
    <div>
      <h2>What’s nearby</h2>
      <div className="nearby gantari">
        <div className="nearby-titles">
          <img src={education} alt="" />
          <span>Education</span>
        </div>
        <Nearbytext></Nearbytext>
        <div className="nearby-titles">
          <img src={health} alt="" />
          <span>Health & Medicine </span>
        </div>
        <Nearbytext></Nearbytext>
        <div className="nearby-titles">
          <img src={food} alt="" />
          <span>Food</span>
        </div>
        <Nearbytext></Nearbytext>
        <div className="nearby-titles">
          <img src={culture} alt="" />
          <span>Culture</span>
        </div>
        <Nearbytext></Nearbytext>
      </div>
    </div>
  );
};

export default NearbyProperty;
