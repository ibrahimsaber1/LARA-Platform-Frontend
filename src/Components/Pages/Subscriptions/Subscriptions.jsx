import React, { useState } from 'react';
import "../../../assets/styles/Subscriptions.css";

const Subscriptions = () => {
  const [activeToggle, setActiveToggle] = useState("monthly"); // Default to "monthly"

  const handleToggle = (type) => {
    setActiveToggle(type);
  };

  return (
    <div className="subscriptions-container">
      {/* Header with toggle */}
      <div className="toggle-container">
        {/* Monthly Button */}
        <button
          className={`toggle-btn monthly-btn ${activeToggle === "monthly" ? "active" : ""}`}
          onClick={() => handleToggle("monthly")}
        >
          Monthly
        </button>

        {/* Annually Button */}
        <button
          className={`toggle-btn annually-btn ${activeToggle === "annually" ? "active" : ""}`}
          onClick={() => handleToggle("annually")}
        >
          Annually <br /> (First month is free)
        </button>
      </div>

      {/* Subscription Cards */}
      <div className="row justify-content-center mt-5">
        {/* Free Plan */}
        <div className="col-md-6 col-sm-12">
          <div className="subscriptions-card">
            <h5 className="subscriptions-card-title">Free</h5>
            <h2 className="subscriptions-card-price">$0</h2>
            <p className="subscriptions-card-text">Try out the most advanced AI audio.</p>
            <button className="btn btn-dark">Subscribe</button>
            <ul className="subscriptions-card-features">
              <li>✔ 10,000 Characters per month (~10 min audio)</li>
              <li>✔ Limited access to AI tools</li>
              <li>✔ Community support</li>
            </ul>
            {/* Additional Details */}
            <div className="subscriptions-card-details">
              <p><strong>What's Included:</strong></p>
              <ul>
                <li>Basic AI audio generation tools</li>
                <li>Standard quality audio</li>
                <li>Limited character usage per month</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Podcaster Plan */}
        <div className="col-md-6 col-sm-12 ">
          <div className="subscriptions-card highlighted-subscriptions-card">
            <p className="most-chosen-badge">Most Chosen</p>
            <h5 className="subscriptions-card-title">Podcaster</h5>
            <p className="discount-badge">First month 50% off</p>
            <h2 className="subscriptions-card-price">$3</h2>
            <p className="subscriptions-card-text">Get started with AI audio for podcasters.</p>
            <button className="btn btn-dark">Subscribe</button>
            <ul className="subscriptions-card-features">
              <li>✔ 10,000 Characters per month (~10 min audio)</li>
              <li>✔ Advanced AI tools</li>
              <li>✔ Priority support</li>
            </ul>
            {/* Additional Details */}
            <div className="subscriptions-card-details">
              <p><strong>What's Included:</strong></p>
              <ul>
                <li>Advanced audio editing tools</li>
                <li>Extended audio duration</li>
                <li>Priority customer support</li>
                <li>Exclusive podcasts templates and guides</li>
                <li>Access to monthly webinars</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="col-md-6 col-sm-12">
          <div className="subscriptions-card">
            <h5 className="subscriptions-card-title">Pro</h5>
            <h2 className="subscriptions-card-price">$15</h2>
            <p className="subscriptions-card-text">Advanced AI audio tools for pros.</p>
            <button className="btn btn-dark">Subscribe</button>
            <ul className="subscriptions-card-features">
              <li>✔ 10,000 Characters per month (~10 min audio)</li>
              <li>✔ Unlimited access to all features</li>
              <li>✔ Premium support</li>
            </ul>
            {/* Additional Details */}
            <div className="subscriptions-card-details">
              <p><strong>What's Included:</strong></p>
              <ul>
                <li>Full access to all AI tools</li>
                <li>High-quality audio generation</li>
                <li>Priority email and phone support</li>
                <li>Extended audio length</li>
                <li>Advanced analytics and reporting</li>
                <li>Customizable audio output formats</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
