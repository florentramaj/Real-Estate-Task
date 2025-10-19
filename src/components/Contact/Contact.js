import "./Contact.css";

const Contact = ({ title, message, className }) => {
  return (
    <div className={className}>
      <div className="contactAgent gantari">
        <h3>{title}</h3>
        <div>{message}</div>
        <form id="contactAgentForm" className="inter">
          <input type="text" placeholder="Your name"></input>
          <input type="text" placeholder="Your mail"></input>
          <input type="text" placeholder="Your phone"></input>
          <input type="text" placeholder="Your message"></input>
          <button
            type="button"
            onClick={() => document.getElementById("contactAgentForm").reset()}
            className="gantari"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
