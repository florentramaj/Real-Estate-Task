import React from "react";
import "./AboutUs.css";
import "./../Home/Home.css";
// import AboutUsImg from "./../../assets/images/AboutUsImg.png";
import playbutton from "./../../assets/icons/video-play-button.svg";
import Properties from "../../assets/icons/property-insurance.png";
import Apartments from "../../assets/icons/apartment.svg";
import Houses from "../../assets/icons/house.svg";
import HouseIcon from "./../../assets/icons/house-icon.svg";
import Villas from "../../assets/icons/villa.svg";
import AuP from "../../assets/images/AboutusParagraph.png";
import Neighbourhood from "../../assets/images/PropertyBanner.png";
import Agent1 from "../../assets/images/TerrellNorman1.png";
import LMAB from "../../assets/images/LM-ab.png";
import design1 from "../../assets/images/design1.png";
import design2 from "../../assets/images/design2.png";
import design3 from "../../assets/images/design3.png";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="abtus">
      <div className="margin-containment">
        <div className="hero-container">
          <div className="hero-image">
            {/* <img
              className="abtus-img-container"
              src={AboutUsImg}
              alt="aboutuspicture"
            /> */}
            <div>
              <h1>Faucibus mattis pharetra </h1>
              <p>Watch video</p>
            </div>
            <img src={playbutton} alt="video-playing-button" />
          </div>
          <div className="under-part">
            <div className="counter">
              <div className="properties-sold">
                <img
                  className="sold-properties"
                  src={Properties}
                  alt="Properties Sold"
                />
                <h1 className="sold-number">1250</h1>
                <h3 className="property-name">Properties Sold</h3>
              </div>
              <div className="properties-sold">
                <img
                  className="sold-properties"
                  src={Apartments}
                  alt="Properties Sold"
                />
                <h1 className="sold-number">320</h1>
                <h3 className="property-name">Apartments Sold</h3>
              </div>
              <div className="properties-sold">
                <img
                  className="sold-properties"
                  src={HouseIcon}
                  alt="Properties Sold"
                />
                <h1 className="sold-number">125</h1>
                <h3 className="property-name">Houses Sold</h3>
              </div>
              <div className="properties-sold">
                <img
                  className="sold-properties"
                  src={Villas}
                  alt="Properties Sold"
                />
                <h1 className="sold-number">120</h1>
                <h3 className="property-name">Villas Sold</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="about-us-article">
          <div className="aua-image">
            <img id="lm-image" src={AuP} alt="Family" />
          </div>
          <div className="au-text-part">
            <h1 className="aua-text">
              Expert advice for all <br />
              your real estate needs
            </h1>
            <p className="aua-text">
              We help people find homes they love, with honest advice <br />
              and a personal touch every step of the way.
            </p>
          </div>
        </div>

        <div>
          <h1 className="cc-text-h1">Our client's success is our success</h1>
          <p className="cc-text">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis
            rhoncus.
            <br /> Porttitor fermentum eu urna eget
          </p>
        </div>

        <div className="client-container">
          <div className="buy-sell-rent">
            <div className="buy">
              <img className="cc-cards-image" src={Houses} alt="House" />
              <h3 className="bsr-text">Buy a property</h3>
              <p className="bsr-text">
                Buy a Property in our <br />
                Real Estate company
              </p>
              <button className="find-btn">Find Property</button>
            </div>

            <div className="sell">
              <img className="cc-cards-image" src={Houses} alt="House" />
              <h3 className="bsr-text">Sell a property</h3>
              <p className="bsr-text">
                Sell a Property to our <br />
                Real Estate company
              </p>
              <button className="find-btn">Learn more</button>
            </div>

            <div className="rent">
              <img className="cc-cards-image" src={Houses} alt="House" />
              <h3 className="bsr-text">Rent a property</h3>
              <p className="bsr-text">
                Find a rent Property in our <br />
                Real Estate company
              </p>
              <button className="find-btn">Find a rent</button>
            </div>
          </div>
        </div>
      </div>
      <div class="image-section">
        <img src={Neighbourhood} alt="Property" class="bg" />
        <div class="text-content">
          <h1>Discover your featured property</h1>
          <p>
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis
            rhoncus
          </p>
        </div>
      </div>
      <div className="margin-containment">
        <div className="agents-container">
          <div className="text-zone">
            <h1>Our professional agents</h1>
            <p>These are some of our Agents</p>
          </div>

          <div className="agents-card">
            <div className="agent">
              <div className="agent-image">
                <img src={Agent1} />
              </div>
              <div className="agent-data">
                <h3>Terrell Norman</h3>
                <h5>Real Estate Agent</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="realestatepers">
          <div>
            <h1 className="">
              Real estate, personalized <br />
              for you
            </h1>
            <p className="">
              Pretium interdum risus risus facilisis cras pellentesque ipsum
              suspendisse venenatis. Morbi posuere semper etiam imperdiet orci
              ut. Lacus odio arcu massa porttitor curabitur a in. Faucibus ipsum
              lacinia aenean nec.
            </p>
            <button className="lm-btn">Learn More</button>
          </div>
          <div className="">
            <img id="" src={LMAB} alt="Learn More" />
          </div>
        </div>

        <div className="blog-text">
          <h1>Blog News</h1>
          <p>Explore our architect's designs</p>
        </div>

        <aside className="contactusaside inter">
          <div className="offices">
            <div className="office">
              <img src={design1} alt="image of an office" />
              <p>23.12.2023</p>
              <h3 className="gantari">Home sales start to rise</h3>
              <p>
                Nam eget habitasse semper turpis.
                <br /> Ultrices vitae tristique sem nulla
              </p>
            </div>
            <div className="office">
              <img src={design2} alt="image of an office" />
              <p>23.12.2023</p>
              <h3 className="gantari">North Road</h3>
              <p>
                Nam eget habitasse semper turpis.
                <br /> Ultrices vitae tristique sem nulla
              </p>
            </div>
            <div className="office">
              <img src={design3} alt="image of an office" />
              <p>23.12.2023</p>
              <h3 className="gantari">Rockville Ave</h3>
              <p>
                Nam eget habitasse semper turpis.
                <br /> Ultrices vitae tristique sem nulla
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default AboutUs;
