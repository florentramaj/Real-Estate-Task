import "./DetailedInfo.css";

import PropertyDescription from "../PropertyDescription/PropertyDescription";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import NearbyProperty from "../NearbyProperty/NearbyProperty";
import ApartmentPlan from "../ApartmentPlan/ApartmentPlan";
import Video from "../Video/Video";

const DetailedInfo = () => {
  return (
    <div className="detailedinfo">
      <PropertyDescription></PropertyDescription>
      <PropertyDetails></PropertyDetails>
      <NearbyProperty></NearbyProperty>
      <ApartmentPlan></ApartmentPlan>
      <Video></Video>
    </div>
  );
};
export default DetailedInfo;
