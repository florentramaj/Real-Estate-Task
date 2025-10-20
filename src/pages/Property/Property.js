import React from "react";
import "./Property.css";
import Ad from "./../../components/Ad/Ad";
import Card from "../../components/Card/Card";
import divisionroadhouse from "./../../assets/images/properties-home/Division Road house.png";
import bloomfieldhouse from "./../../assets/images/properties-home/Bloomfield house.png";
import leescreekhouse from "./../../assets/images/properties-home/Lees Creek house.png";
import northroadhouse from "./../../assets/images/properties-home/North Road house.png";
import rockvilleavevilla from "./../../assets/images/properties-home/Rockville Ave villa.png";
import scotchplainsvilla from "./../../assets/images/properties-home/Scotch Plains villa.png";
import Condominium from "./../../assets/images/Condominium.png";
import SulphurVilla from "./../../assets/images/sulphurvilla.png";
import ohioscotchvila from "./../../assets/images/ohioscotchvila.png";
import Pawnee from "./../../assets/images/pawneeaveapartment.png";
import oxfordave from "./../../assets/images/oxfordaveapartment.png";
import Fremont from "./../../assets/images/fremontaveapartment.png";

const Property = () => {
  return (
    <div>
      <Ad />
      <div className="featured-property margin-containment- ">
        <Card
          //   pourpuse=""
          imagesrc={divisionroadhouse}
          name="Division Road house"
          adress="506 Division Road Pembroke Pines, FL 33028"
          price="$250000"
          bedroom="3"
          bathroom="2"
          area="1200"
          garage="3"
        />
        <Card
          //   pourpuse=""
          imagesrc={northroadhouse}
          name="North Road house "
          adress="19 North Road Piscataway, NJ 08854"
          price="$222000"
          bedroom="2"
          bathroom="3"
          area="1200"
          garage="1"
        />
        <Card
          //   pourpuse=""
          imagesrc={bloomfieldhouse}
          name="Bloomfield house"
          adress="29 W. Pawnee St.Bloomfield, NJ 07003"
          price="$250000"
          bedroom="4"
          bathroom="2"
          area="850"
          garage="2"
        />
        <Card
          //   pourpuse=""
          imagesrc={rockvilleavevilla}
          name="Rockville Ave villa"
          adress="8460 Rockville Ave. Greenville, NC 27834"
          price="$180000"
          bedroom="5"
          bathroom="2"
          area="320"
          garage="2"
        />
        <Card
          //   pourpuse=""
          imagesrc={scotchplainsvilla}
          name="Scotch Plains villa"
          adress="820 Ohio Road Scotch Plains, NJ 07076"
          price="$160000"
          bedroom="2"
          bathroom="2"
          area="1200"
          garage="2"
        />
        <Card
          //   pourpuse=""
          imagesrc={leescreekhouse}
          name="Lees Creek house"
          adress="7916 Lees Creek St. Dayton, OH 45420"
          price="$210000"
          bedroom="3"
          bathroom="1"
          area="480"
          garage="1"
        />
        <Card
          //   pourpuse=""
          imagesrc={Condominium}
          name="Rockville Ave condominium"
          adress="8460 Rockville Ave. Greenville, NC 27834"
          price="$120000"
          bedroom="2"
          bathroom="2"
          area="100"
          garage="2"
        />

        <Card
          //   pourpuse=""
          imagesrc={ohioscotchvila}
          name="Ohio Scotch villa"
          adress="820 Ohio Road Scotch Plains, NJ 07076"
          price="$160000"
          bedroom="4"
          bathroom="2"
          area="984"
          garage="3"
        />
        <Card
          //   pourpuse=""
          imagesrc={SulphurVilla}
          name="Sulphur villa"
          adress="9514 Smoky Hollow St. Sulphur, LA 70663"
          price="$350000"
          bedroom="3"
          bathroom="1"
          area="480"
          garage="1"
        />
        <Card
          //   pourpuse=""
          imagesrc={Pawnee}
          name="Pawne ave apartment"
          adress="29 W. Pawnee St.Bloomfield, NJ 07003"
          price="$180000"
          bedroom="2"
          bathroom="2"
          area="220"
          garage="0"
        />
        <Card
          //   pourpuse=""
          imagesrc={oxfordave}
          name="Oxford ave apartment"
          adress="3 W. Oxford Ave. Cary, NC 27511"
          price="$160000"
          bedroom="3"
          bathroom="2"
          area="120"
          garage="0"
        />

        <Card
          //   pourpuse=""
          imagesrc={Fremont}
          name="Fremint ave apartment"
          adress="60 Fremont Ave. Hamden, CT 06514"
          price="$210000"
          bedroom="3"
          bathroom="2"
          area="480"
          garage="0"
        />
      </div>
    </div>
  );
};

export default Property;
