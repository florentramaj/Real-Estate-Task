import React from "react";
import "./Home.css";
import Mia from "./assets/client.png";
import LM from "./assets/lm-img.png";
import Card from "./Card.js";

const Home = (image, properties, name) => {
  return (
    <div>
      <h1 className="subtext"> Discover your featured Property</h1>
      <p className="subtextP">
        Explore our exclusive listings and find your dream home or apartment
        today
      </p>

      <div className="featured-property">
        <Card /> <Card /> <Card />
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
      <div className="GetInTouch-container">
        <div class="contact-container">
          <div class="contact-form">
            <h2>Get in touch</h2>
            <p>Send us messages from this!</p>
            <br />
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <input type="tel" placeholder="Your phone number" />
            <textarea placeholder="Your message" required></textarea>
            <button type="submit">Send</button>
          </div>
        </div>
        <div className="text-container">
          <h1 className="text-h1">
            Putting a plan to action, <br />
            to assure your satisfaction!
          </h1>
          <p>
            Discover how easy it is to find your dream home, <br /> Just contact
            us for an easier experience!
          </p>
        </div>
      </div>
      <h1 className="subtext"> Comercial Property</h1>
      <p className="subtextP">Get your dream Comercial Property.</p>
      <div className="comercial-Property"></div>
      <div className="cards">
        <Card /> <Card /> <Card /> <Card />
      </div>
    </div>
  );
};

export default Home;
