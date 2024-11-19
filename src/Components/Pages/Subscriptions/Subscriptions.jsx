

import React, { useState } from 'react';
import "../../../assets/styles/Subscriptions.css";

const Subscriptions = () => {
  const [activeToggle, setActiveToggle] = useState("monthly"); // Default to "monthly"

  const handleToggle = (type) => {
    setActiveToggle(type);
  };

  return(
    <div className="subscriptions-container">
      {/* Header with toggle */}
      
      <div className="toggle-container">
      {/* Monthly Button */}
      <button
        className={`toggle-btn monthly-btn ${
          activeToggle === "monthly" ? "active" : ""
        }`}
        onClick={() => handleToggle("monthly")}
      >
        Monthly
      </button>

      {/* Annually Button */}
      <button
        className={`toggle-btn annually-btn ${
          activeToggle === "annually" ? "active" : ""
        }`}
        onClick={() => handleToggle("annually")}
      >
        Annually (First month is free)
      </button>
    </div>
    
      {/* Subscription Cards */}
      <div className="row justify-content-center mt-4">
        {/* Free Plan */}
        <div className="col-md-4 col-sm-12">
          <div className="card">
              <h5 className="card-title">Free</h5>
              <h2 className="card-price">$0</h2>
              <p className="card-text">out the most advanced AI audio.</p>
              <button className="btn btn-dark">Subscribe</button>
              <ul className="card-features">
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
              </ul>
          </div>
        </div>

        {/* Podcaster Plan */}
        <div className="col-md-4 col-sm-12">
          <div className="card highlighted-card">
              <p className="most-chosen-badge">Most Chosen</p>
              <h5 className="card-title">Podcaster</h5>
              <p className="discount-badge">First month 50% off</p>
              <h2 className="card-price">$3</h2>
              <p className="card-text">out the most advanced AI audio.</p>
              <button className="btn btn-dark">Subscribe</button>
              <ul className="card-features">
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
              </ul>
            </div>
        </div>

        {/* Pro Plan */}
        <div className="col-md-4 col-sm-12">
          <div className="card">
              <h5 className="card-title">Pro</h5>
              <h2 className="card-price">$15</h2>
              <p className="card-text">out the most advanced AI audio.</p>
              <button className="btn btn-dark">Subscribe</button>
              <ul className="card-features">
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
