import "./BasicPropertyDeatils.css";
import ForSaleTag from "./../ForSaleTag/ForSaleTag";
import basicinfoproperty from "./../../assets/images/BasicInfo/BasicInfoProperty.png";
import basicinfopropertys from "./../../assets/images/BasicInfo/BasicInfoPropertyS.png";
import basicinfomap from "./../../assets/images/BasicInfo/BasicInfoPropertyLocation.png";
import camera from "./../../assets/icons/camera.svg";
import mappin from "./../../assets/icons/map-pin.svg";

const BasicPropertyDeatils = () => {
  return (
    <div>
      <span className="forsale- gantari">For sale</span>;
      <div className="basic-info-no-imp">
        <div className="basic-info-nameprice">
          <span className="gantari">Amazing modern apartment</span>
          <span className="inter">$120.000</span>
        </div>
        <div className="basic-info-locationprice inter">
          <span>43 W. Wellington Road Fairhope, AL 36532</span>
          <span>$1200/sq.ft</span>
        </div>
        <div className="basicinfoimages">
          <img
            src={basicinfoproperty}
            alt="Property"
            className="basicinfoproperty"
          />
          <div>
            <div className="otherproperiesfull">
              <img
                src={basicinfopropertys}
                alt="other properties"
                className="basicinfopropertys"
              />
              <div className="basicinfopropstext gantari">
                <img src={camera} />
                <span>Show all</span>
                <span>12 photos</span>
              </div>
            </div>
            <div className="basicinfofullmap">
              <img
                src={basicinfomap}
                alt="map of the property"
                className="basicinfomap"
              />
              <img src={mappin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasicPropertyDeatils;
