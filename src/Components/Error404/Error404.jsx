import React from 'react';
import "../../assets/styles/Error404.css"; 

const Error404 = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-illustration">
          <img src="src/assets/images/error404.jpeg" alt="Error 404" className="error-image" />
        </div>
        <button className="error-btn" onClick={() => (window.location.href = '/')}>
          Go to the Assistants Space
        </button>
      </div>
    </div>
  );
};

export default Error404;
