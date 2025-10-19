import GetInTouch from "../../components/GetInTouch/GetInTouch";
import "./ContactUs.css";
import location from "./../../assets/icons/location.svg";
import phone from "./../../assets/icons/phone.svg";
import mail from "./../../assets/icons/mail.svg";
import SmokyHollow from "./../../assets/images/property/Smoky Hollow.png";
import NorthRoad from "./../../assets/images/property/North Road.png";
import RockvilleAve from "./../../assets/images/property/Rockville Ave.png";

const ContactUs = () => {
  return (
    <article className="contactuspage">
      <main>
        <div className="contact">
          <GetInTouch></GetInTouch>
          <div className="contactinfo inter">
            <h1 className="gantari">
              Feel free to <br /> contact us
            </h1>
            <p>Leo morbi faucibus mattis pharetra </p>
            <div>
              <img src={location} alt="" />
              <p>
                8911 Tanglewood Ave. <br /> Capitol Heights, MD 20743
              </p>
            </div>
            <div>
              <img src={phone} alt="" />
              <p>(566) 237-4687</p>
            </div>
            <div>
              <img src={phone} alt="" />
              <p>(239) 319-8083</p>
            </div>
            <div>
              <img src={mail} alt="" />
              <p>moinefou@hotmail.com</p>
            </div>
          </div>
        </div>
      </main>
      <aside className="contactusaside inter">
        <h2 className="gantari">Our Offices</h2>
        <p>
          Pretium interdum risus risus facilisis cras pellentesque ipsum
          suspendisse
        </p>
        <div className="offices">
          <div className="office">
            <img src={SmokyHollow} alt="image of an office" />
            <h3 className="gantari">Smoky Hollow</h3>
            <p>9514 Smoky Hollow St. Sulphur, LA 70663</p>
            <p>Phone: (736) 267-8659</p>
            <p>Email: rsmartin@gmail.com</p>
          </div>
          <div className="office">
            <img src={NorthRoad} alt="image of an office" />
            <h3 className="gantari">North Road</h3>
            <p>19 North Road Piscataway, NJ 08854</p>
            <p>Phone: (736) 267-8659</p>
            <p>Email: rsmartin@gmail.com</p>
          </div>
          <div className="office">
            <img src={RockvilleAve} alt="image of an office" />
            <h3 className="gantari">Rockville Ave</h3>
            <p>8460 Rockville Ave. Greenville, NC 27834</p>
            <p>Phone: (736) 267-8659</p>
            <p>Email: rsmartin@gmail.com</p>
          </div>
        </div>
      </aside>
    </article>
  );
};

export default ContactUs;
