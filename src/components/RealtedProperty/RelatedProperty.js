import "./RelatedProperty.css";
import division from "./../../assets/images/Division Road  apartment.png";
import piscataway from "./../../assets/images/Piscataway apartment.png";
import tanglewood from "./../../assets/images/Tanglewood  apartment.png";
import Card from "./../../components/Card/Card.js";

const RelatedProperty = () => {
  return (
    <div className="detailedinforelatedproperty">
      <h2>Related listings</h2>
      <p>
        Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
      </p>
      <div className="deatiledinfocards">
        <Card
          //   pourpuse=""
          imagesrc={piscataway}
          name="Piscataway apartment"
          adress="19 North Road Piscataway, NJ 08854"
          price="$142000"
          bedroom="3"
          bathroom="1"
          area="120"
          garage="0"
        />
        <Card
          //   pourpuse=""
          imagesrc={division}
          name="Division Road  apartment"
          adress="506 Division Road Pembroke Pines, FL 33028"
          price="$120000"
          bedroom="2"
          bathroom="2"
          area="140"
          garage="0"
        />
        <Card
          //   pourpuse=""
          imagesrc={tanglewood}
          name="Tanglewood  apartment"
          adress="8911 Tanglewood Ave. Capitol Heights, MD 20743"
          price="$160000"
          bedroom="3"
          bathroom="1"
          area="100"
          garage="0"
        />
      </div>
    </div>
  );
};

export default RelatedProperty;
