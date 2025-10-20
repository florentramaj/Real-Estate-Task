import React from "react";
import "./Home.css";
import Ad from "./../../components/Ad/Ad.js";
import Mia from "../../assets/images/client.png";
import LM from "./../../assets/images/lm-img.png";
import Card from "./../../components/Card/Card.js";
import divisionroadhouse from "./../../assets/images/properties-home/Division Road house.png";
import bloomfieldhouse from "./../../assets/images/properties-home/Bloomfield house.png";
import leescreekhouse from "./../../assets/images/properties-home/Lees Creek house.png";
import northroadhouse from "./../../assets/images/properties-home/North Road house.png";
import rockvilleavevilla from "./../../assets/images/properties-home/Rockville Ave villa.png";
import scotchplainsvilla from "./../../assets/images/properties-home/Scotch Plains villa.png";
import GetInTouch from "../../components/GetInTouch/GetInTouch.js";
import WhatCity from "../../components/WhatCity/WhatCity.js";
import CardHome from "../../components/CardHome/CardHome.js";

const Home = (image, properties, name) => {
  return (
    <div>
      <div className="margin-containment-">
        <Ad />
        <div className="home-title">
          <h1 className="subtext"> Discover your featured Property</h1>
          <p className="subtextP">
            Explore our exclusive listings and find your dream home or apartment
            today
          </p>
        </div>
        <div className="featured-property">
          <Card
            pourpuse="s"
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
            pourpuse="s"
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
            pourpuse="r"
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
            pourpuse="s"
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
            pourpuse="r"
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
            pourpuse="s"
            imagesrc={leescreekhouse}
            name="Lees Creek house"
            adress="7916 Lees Creek St. Dayton, OH 45420"
            price="$210000"
            bedroom="3"
            bathroom="1"
            area="480"
            garage="1"
          />
        </div>
      </div>

      <div className="learn-more">
        <div className="lm-image">
          <img id="lm-image" src={LM} alt="Learn More" />
        </div>
        <div>
          <h1 className="lm-text">
            Putting a plan to action, <br />
            to assure your satisfaction!
          </h1>
          <p className="lm-text">
            Discover how easy it is to find your dream home, <br /> with our
            expert guidance. Learn more today!
          </p>
          <button className="lm-btn">Learn More</button>
        </div>
      </div>
      <div className="consumer-feedbacks margin-containment">
        <div className="feedbackText">
          <h1 id="feedbackH1">
            What our clients say
            <br />
            about us
            <br />"
          </h1>
          <p className="consumer-feedbackP">
            I had an amazing experience working with Real Estate.
            <br /> From start to finish, the team was professional,
            knowledgeable,
            <br />
            and genuinely cared about helping me find the perfect home.
            <br /> They made the entire process smooth and stress-free — always
            quick to respond,
            <br />
            transparent with information, and incredibly supportive every step
            of the way.
          </p>
          <h4 className="consumer-feedbackP">John Doe</h4>
        </div>
        <div className="feedbackImage">
          <img className="john" src={Mia} alt="John Doe" />
        </div>
      </div>
      <div className="margin-containment-">
        <div className="comertialpropformating">
          <h1 className="subtext"> Comercial Property</h1>
          <p className="subtextP">Get your dream Comercial Property.</p>
        </div>
        <div className="comercial-Property"></div>
        <div className="cards">
          <CardHome
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
          <CardHome
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
          <CardHome
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
          <CardHome
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
        </div>
      </div>

      <div className="text-container">
        <div className="getintouch">
          <GetInTouch></GetInTouch>
        </div>
        <div className="getintouchhomeinfo">
          <h1 id="plantoactionh1">
            Putting a plan to action, <br />
            to assure your satisfaction!
          </h1>
          <p>
            Discover how easy it is to find your dream home, <br /> Just contact
            us for an easier experience!
          </p>
        </div>
      </div>
      <div className="margin-containment">
        <WhatCity></WhatCity>
      </div>
    </div>
  );
};

export default Home;
