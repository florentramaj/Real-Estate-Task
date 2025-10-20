import ContactAgent from "../ContactAgent/ContactAgent";
import FeaturedListings from "../FeaturedListings/FeaturedListings";
import "./OtherTools.css";
import Card from "./../../components/Card/Card.js";
import luxurylasvegas from "./../../assets/images/properties-home/Bloomfield house.png";

const OtherTools = () => {
  return (
    <aside className="aside">
      <ContactAgent></ContactAgent>
      <FeaturedListings></FeaturedListings>
      <div className="related-property">
        <h3>Related property</h3>
        <p>Leo morbi faucibus mattis pharetra tellus velit </p>
        <Card
          //   pourpuse=""
          imagesrc={luxurylasvegas}
          name="Luxury house in Las Vegas"
          adress="7914 Lees Creek St. Dayton, LV 45420"
          price="$250000"
          bedroom="2"
          bathroom="2"
          area="1200"
          garage="2"
        />
      </div>
    </aside>
  );
};

export default OtherTools;
