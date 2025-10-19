import "./ApartmentPlan.css";
import apartmentplan from "./../../assets/images/Plan.png";
import check from "./../../assets/icons/check.svg";

const ApartmentPlan = () => {
  return (
    <div className="apartmentplan">
      <div className="apartementplantext">
        <h2 className="gantari">Apartment plan</h2>
        <div>
          <div>
            <img src={check} alt="" />
            <h3 className="gantari">Fermentum ultricies in </h3>
          </div>
          <p className="inter">
            Aliquam viverra malesuada dui consequat in cras
          </p>
        </div>
        <div>
          <div>
            <img src={check} alt="" />
            <h3 className="gantari">Dignissim ut rhoncus elit </h3>
          </div>
          <p className="inter">
            Velit at netus pretium nibh bibendum sit posuere turpis{" "}
          </p>
        </div>
        <div>
          <div>
            <img src={check} alt="" />
            <h3 className="gantari">Aliquam viverra malesui</h3>
          </div>
          <p className="inter">
            Nunc porttitor et odio sed vel. Velit at netus pretium nibh bibendum
          </p>
        </div>
      </div>
      <img src={apartmentplan} alt="the appartment blueprint" />
    </div>
  );
};

export default ApartmentPlan;
