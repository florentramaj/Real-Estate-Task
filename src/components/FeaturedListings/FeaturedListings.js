import "./FeaturedListings.css";
import divisionhouse from "./../../assets/images/property/Division Road house.png";
import leeshouse from "./../../assets/images/property/Lees Creek house.png";
import northhouse from "./../../assets/images/property/North Road house.png";
import rockvillehouse from "./../../assets/images/property/Rockville Ave villa.png";
import scotchhouse from "./../../assets/images/property/Scotch Plains villa.png";

const FeaturedListings = () => {
  return (
    <div className="featuredlistings inter">
      <h3 className="gantari">Featured listings</h3>
      <p>Leo morbi faucibus mattis pharetra tellus velit</p>
      <div>
        <img src={divisionhouse} alt="image of a property" />
        <div>
          <h4 className="gantari">Division Road house</h4>
          <p>Division Road Pembroke Pines</p>
          <span>$250000</span>
        </div>
      </div>
      <div>
        <img src={northhouse} alt="image of a property" />
        <div>
          <h4 className="gantari">North Road house </h4>
          <p>North Road Piscataway</p>
          <span>$222000</span>
        </div>
      </div>
      <div>
        <img src={rockvillehouse} alt="image of a property" />
        <div>
          <h4 className="gantari">Rockville Ave villa</h4>
          <p>Smoky Hollow St. Sulphur, LA 70663</p>
          <span>$180000</span>
        </div>
      </div>
      <div>
        <img src={leeshouse} alt="image of a property" />
        <div>
          <h4 className="gantari">Lees Creek house</h4>
          <p>Lees Creek St. Dayton</p>
          <span>$210000</span>
        </div>
      </div>
      <div>
        <img src={scotchhouse} alt="image of a property" />
        <div>
          <h4 className="gantari">Scotch Plains villa</h4>
          <p> Ohio Road Scotch Plains</p>
          <span>$160000</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
