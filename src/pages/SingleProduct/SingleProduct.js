import BasicPropertyDeatils from "../../components/BasicPropertyDeatils/BasicPropertyDeatils";
import DetailedInfo from "../../components/DetailedInfo/DetailedInfo";
import OtherTools from "../../components/OtherTools/OtherTools";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <div className="margin-containment single-product">
      <BasicPropertyDeatils></BasicPropertyDeatils>
      <div className="main">
        <DetailedInfo></DetailedInfo>
        <OtherTools></OtherTools>
      </div>
    </div>
  );
};

export default SingleProduct;
