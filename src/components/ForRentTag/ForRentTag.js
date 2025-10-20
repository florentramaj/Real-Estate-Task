import "./ForRentTag.css";
import { Link } from "react-router-dom";

const ForRentTag = () => {
  return (
    <Link to="/single-product">
      <button className="forrent gantari">For rent</button>
    </Link>
  );
};

export default ForRentTag;
