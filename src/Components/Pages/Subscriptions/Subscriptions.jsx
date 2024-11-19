import React from 'react';
import "../../../assets/styles/Subscriptions.css"; 

const Subscriptions = () => {
  return (
    <div className="container my-5">
      {/* Toggle for Monthly and Annually */}
      <div className="text-center mb-4">
        <button className="btn btn-outline-primary mx-2">Monthly</button>
        <button className="btn btn-outline-secondary mx-2">Annually (First month is free)</button>
      </div>

      {/* Subscription Cards */}
      <div className="row justify-content-center">
        {/* Free Plan */}
        <div className="col-md-3 text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Free</h5>
              <h2>$0</h2>
              <p className="card-text">Out the most advanced AI audio.</p>
              <button className="btn btn-primary btn-block">Subscribe</button>
              <ul className="list-unstyled mt-3">
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Podcaster Plan */}
        <div className="col-md-3 text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Podcaster</h5>
              <p className="badge bg-success">First month 50% off</p>
              <h2>$3</h2>
              <p className="card-text">Out the most advanced AI audio.</p>
              <button className="btn btn-primary btn-block">Subscribe</button>
              <ul className="list-unstyled mt-3">
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="col-md-3 text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pro</h5>
              <h2>$15</h2>
              <p className="card-text">Out the most advanced AI audio.</p>
              <button className="btn btn-primary btn-block">Subscribe</button>
              <ul className="list-unstyled mt-3">
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
                <li>✔ 10,000 Characters per month (~10 min audio)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
