import React from "react";
import "./Home.css";
import Neighbourhood from "./assets/bluredNeighbourhood.png";

const Home = () => {
  return (
    <div>
      <h1 className="subtext"> Discover your featured Property</h1>
      <p className="subtextP">
        Explore our exclusive listings and find your dream home or apartment
        today
      </p>

      <div className="learn-more">
        <img className="img" src={Neighbourhood} alt="Neighbourhood" />
        <h1 className="subtext2">
          Putting a plan to action, to assure your satisfaction?
        </h1>
        <p className="subtextP2">
          We are committed to helping you find the perfect property that meets
          your needs and exceeds your expectations.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>

      <div className="consumer-feedbacks">
        <h1>What our clients say </h1>
        <p>
          I had an amazing experience working with Real Estate. From start to
          finish, the team was professional, knowledgeable, and genuinely cared
          about helping me find the perfect home. They made the entire process
          smooth and stress-free — always quick to respond, transparent with
          information, and incredibly supportive every step of the way.
        </p>
      </div>
    </div>
  );
};

export default Home;
