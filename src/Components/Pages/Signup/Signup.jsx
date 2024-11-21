import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../assets/styles/Login.css"; 
import appIcon from '../../../assets/images/z_logo.svg'; // Adjust the path as needed

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return (
    <div className="login-background">
      <div className="background-overlay" /> {/* Transparent overlay for image */}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card-signup shadow-lg col-lg-4 col-md-8 col-sm-10">
          <div className="card-body text-center p-4">
            <img src={appIcon} alt="App Icon" className="form-img mb-3" />
            <form>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control-1" 
                  placeholder="Full Name" 
                  required 
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control-1" 
                  placeholder="Email Address" 
                  required 
                />
              </div>
              <div className="mb-3 position-relative">
                <input 
                  type={passwordVisible ? 'text' : 'password'} 
                  className="form-control-1" 
                  placeholder="Password" 
                  required 
                />
                <i
                  className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} toggle-password-icon`}
                  onClick={togglePasswordVisibility}
                  aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      togglePasswordVisibility();
                    }
                  }}
                ></i>
              </div>
              <button 
                type="submit" 
                className="btn btn-linear-effect w-100 mb-3 glow-on-hover"
              >
                Sign Up
              </button>
              <div className="or">
                <div className="line" />
                <p>Or</p>
                <div className="line" />
              </div>
              <button 
                type="button" 
                className="google-signin btn-linear-effect"
              >
                <img 
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                  alt="Google Logo" 
                />
                Continue with Google
              </button>
            </form>
            <p className="text-center mt-3 text-light">
              <Link to="/login" className="text-white">Instead, you can login</Link>
            </p>
          </div>
        </div>
      </div> {/* img background  */}
    </div> 
  );
}
