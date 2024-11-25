import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [inputVisible, setInputVisible] = useState(false);

  const onLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
  };

  const toggleSearchInput = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <header className="header">
      <ul className="main-list">
        {/* Search Icon */}
        <li>
          <div className={`h-icon icon-container search ${inputVisible ? "active" : ""}`}>
            {inputVisible ? (
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Enter search text"
                  className="search-input"
                />
                <button className="search-btn" onClick={toggleSearchInput}>
                <img
                src="src/assets/images/header/search.svg"
                alt="Search"
                onClick={toggleSearchInput}
              />
                  <i className="h-icon bi bi-search"></i>
                </button>
              </div>
            ) : (
              <img
                src="src/assets/images/header/search.svg"
                alt="Search"
                onClick={toggleSearchInput}
              />
            )}
          </div>
        </li>

        {/* Help Icon */}
        <li>
          <div className="h-icon icon-container">
            <img src="src/assets/images/header/info.svg" alt="Help" />
          </div>
        </li>

        {/* Notifications Icon with Badge */}
        <li>
          <div className="h-icon icon-container">
            <img src="src/assets/images/header/notif.svg" alt="Notifications" />
            <span className="notification-badge">0</span>
          </div>
        </li>

        {/* Language Selector */}
        <li>
          <div className="dropdown">
            <button className="btn dropdown-toggle">
              {selectedLanguage.toUpperCase()} <i className="bi bi-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a onClick={() => onLanguageChange("en")}>English</a>
              </li>
              <li>
                <a onClick={() => onLanguageChange("ar")}>Arabic</a>
              </li>
            </ul>
          </div>
        </li>

        {/* Profile Icon */}
        <li>
          <div className="h-icon icon-container">
            <img src="src/assets/images/header/profile.svg" alt="Profile" />
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
