import "./WhatCity.css";

const WhatCity = () => {
  return (
    <div className="whatcity">
      <h1>What city will you live in?</h1>
      <p>
        Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus.
        Porttitor fermentum eu urna eget
      </p>
      <div className="cities">
        <div className="city city-1">
          <p>New York</p>
          <span>28 properties</span>
        </div>
        <div className="city city-2">
          <p>Boston</p>
          <span>12 properties</span>
        </div>
        <div className="city city-3">
          <p>Chicago</p>
          <span>32 properties</span>
        </div>
        <div className="city city-4">
          <p>Washington</p>
          <span>18 properties</span>
        </div>
        <div className="city city-5">
          <p>Miami</p>
          <span>32 properties</span>
        </div>
      </div>
    </div>
  );
};

export default WhatCity;
