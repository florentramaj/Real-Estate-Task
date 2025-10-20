import "./ForSaleTag.css";
import { Link } from "react-router-dom";

const ForSaleTag = () => {
  return (
    <Link to="/single-product">
      <button className="forsale gantari">For sale</button>
    </Link>
  );
};
export default ForSaleTag;
