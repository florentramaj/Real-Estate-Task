import "./ContactAgent.css";
import emiliabuck from "./../../assets/images/EmiliaBuck.png";
import Contact from "../Contact/Contact";

const Message = () => {
  return (
    <div className="emilia">
      <img src={emiliabuck} alt="Emilia Buck" />
      <div>
        <p>Emilia Buck</p>
        <p>(437) 402-2459</p>
        <p>rsmartin@optonline.net</p>
      </div>
    </div>
  );
};
const ContactAgent = () => {
  return (
    <div>
      <Contact
        title="Contact agent"
        message={<Message></Message>}
        className="contactagentdiv"
      ></Contact>
    </div>
  );
};

export default ContactAgent;
