import ContactAgent from "../ContactAgent/ContactAgent";
import FeaturedListings from "../FeaturedListings/FeaturedListings";
import "./OtherTools.css";

const OtherTools = () => {
  return (
    <aside className="aside">
      <ContactAgent></ContactAgent>
      <FeaturedListings></FeaturedListings>
    </aside>
  );
};

export default OtherTools;
