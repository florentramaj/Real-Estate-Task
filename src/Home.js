import React from "react";
import "./Home.css";
import Mia from "./assets/client.png";
import LM from "./assets/lm-img.png";
import Prop1 from "./assets/property1.png";
import Prop2 from "./assets/property2.png";
import Prop3 from "./assets/property3.png";
import Prop4 from "./assets/property4.png";
import Rooms from "./assets/bed.png";
import Bathrooms from "./assets/bathroom.png";
import Area from "./assets/maximize.png";
import Garages from "./assets/garage.png";

const Home = () => {
  return (
    <div>
      <h1 className="subtext"> Discover your featured Property</h1>
      <p className="subtextP">
        Explore our exclusive listings and find your dream home or apartment
        today
      </p>

      <div className="learn-more">
        <div className="lm-image">
          <img id="lm-image" src={LM} alt="Learn More" />
        </div>
        <div>
          <h1 className="lm-text">
            Putting a plan to action, <br />
            to assure your satisfaction!
          </h1>
          <p>
            Discover how easy it is to find your dream home, <br /> with our
            expert guidance. Learn more today!
          </p>
          <button className="lm-btn">Learn More</button>
        </div>
      </div>

      <div className="consumer-feedbacks">
        <div className="feedbackText">
          <h1 id="feedbackH1">
            What our clients say
            <br />
            about us
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

      <h1 className="subtext"> Comercial Property</h1>
      <p className="subtextP">Get your dream Comercial Property.</p>

      <div className="comercial-Property">
        <div className="card">
          <img className="card-image" src={Prop1} alt="Property 1" />
        </div>

        <div className="card">
          <img className="card-image" src={Prop2} alt="Property 2" />
        </div>

        <div className="card">
          <img className="card-image" src={Prop3} alt="Property 3" />
        </div>

        <div className="card">
          <img className="card-image" src={Prop4} alt="Property 4" />
        </div>
      </div>
      <div className="props">
        <div className="apartment-props">
          <h4>Pembroke Pines Office</h4>
          <h4>$150000</h4>
          <hr />
          <img className="apartment-rooms" src={Rooms} alt="Rooms" />
          <span>2</span>
          <img className="apartment-rooms" src={Bathrooms} alt="Rooms" />
          <span>2</span>
          <img className="apartment-rooms" src={Area} alt="Rooms" />
          <span>100m2</span>
          <img className="apartment-rooms" src={Garages} alt="Rooms" />
          <span>2</span>
        </div>
        <div className="apartment-props">
          <h4>Pembroke Pines Office</h4>
          <h4>$1500/Month</h4>
          <hr />
          <img className="apartment-rooms" src={Rooms} alt="Rooms" />
          <span>2</span>
          <img className="apartment-rooms" src={Bathrooms} alt="Rooms" />
          <span>2</span>
          <img className="apartment-rooms" src={Area} alt="Rooms" />
          <span>100m2</span>
          <img className="apartment-rooms" src={Garages} alt="Rooms" />
          <span>2</span>
        </div>
        <div className="apartment-props">
          <h4>Pembroke Pines Office</h4>
          <h4>$150000</h4>
          <hr />
          <img className="apartment-rooms" src={Rooms} alt="Rooms" />
          <span>2</span>
          <img className="apartment-rooms" src={Bathrooms} alt="Rooms" />
          <span>2</span>
          <img className="apartment-rooms" src={Area} alt="Rooms" />
          <span>100m2</span>
          <img className="apartment-rooms" src={Garages} alt="Rooms" />
          <span>2</span>
        </div>
        <div className="apartment-props">
          <h4>Pembroke Pines Office</h4>
          <h4>$150000</h4>
          <hr />
          <img className="apartment-rooms" src={Rooms} alt="Rooms" />
          <span>2</span>
          <img className="apartment-rooms" src={Bathrooms} alt="Rooms" />
          <span>2</span>
          <img className="apartment-rooms" src={Area} alt="Rooms" />
          <span>100m2</span>
          <img className="apartment-rooms" src={Garages} alt="Rooms" />
          <span>2</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
