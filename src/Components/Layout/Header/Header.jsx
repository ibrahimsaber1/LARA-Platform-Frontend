import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [inputVisible, setInputVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [isDevEnvironment, setIsDevEnvironment] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const searchContainerRef = useRef(null);

  // Fetch initial data (e.g., notifications count)
  useEffect(() => {
    // Example: Fetch notification count from API
    // fetchNotifications();
    // Determine environment
    setIsDevEnvironment(checkIfDevEnvironment());
  }, []);

  // Handle clicks outside the search container to hide results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setResultsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to check if the environment is development
  const checkIfDevEnvironment = () => {
    return (
      window.location.hostname.includes("localhost") ||
      window.location.hostname.includes("dev")
    );
  };

  // Handle language change
  const onLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    // Call API to change language if necessary
    // Example:
    // changeLanguageAPI(lang).then(() => {
    //   window.location.reload();
    // });
    // For demonstration, we'll just reload the page
    window.location.reload();
  };

  // Toggle search input visibility
  const toggleSearchInput = () => {
    setInputVisible(!inputVisible);
    if (!inputVisible) {
      setResultsVisible(false);
    }
  };

  // Perform search
  const performSearch = () => {
    if (searchText.trim() === "") {
      setSearchResults([]);
      setResultsVisible(false);
      return;
    }

    // Example: Fetch search results from API
    // Replace with your actual search service
    fetch(`/api/search?query=${searchText}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
        setResultsVisible(true);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  // Handle logout
  const onLogout = () => {
    // Example: Clear auth tokens and redirect to login
    localStorage.removeItem("tokenKey");
    window.location.href = `/auth/login`;
  };

  return (
    <header className="header">
      <ul className="main-list">
        {/* Search Icon */}
        <li ref={searchContainerRef}>
          <div className={`search-container ${inputVisible ? "active" : ""}`}>
            <button
              className="icon-button search-toggle"
              onClick={toggleSearchInput}
              aria-label="Toggle Search"
            >
              <img
                src="src/assets/images/header/search.svg"
                alt="Search"
                className="search-icon"
              />
            </button>
            {inputVisible && (
              <div className="search-parent">
                <div className="close-btn">
                  <button
                    className="close-button"
                    onClick={toggleSearchInput}
                    aria-label="Close Search"
                  >
                    <i className="bi bi-x-circle"></i>
                  </button>
                </div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Enter search text"
                    className="search-input"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") performSearch();
                    }}
                  />
                  <button
                    className="inner-search-icon"
                    onClick={performSearch}
                    aria-label="Perform Search"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>

                {resultsVisible && searchResults.length > 0 && (
                  <div className="search-results">
                    {searchResults.map((result) => (
                      <a
                        key={result.id}
                        href={result.path}
                        className="result-item-link"
                      >
                        <div className="result-item">
                          <img
                            src={`${result.coverPath}`}
                            alt={result.productsName}
                          />
                          <div>
                            <h3>{result.productsName}</h3>
                            {result.instructors.map((instructor) => (
                              <p key={instructor.id}>
                                Instructor: {instructor.fName}{" "}
                                {instructor.lName}
                              </p>
                            ))}
                            <p>
                              <strong>Type : </strong>
                              <span>Book</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </li>

        {/* Help Icon */}
        <li>
          <Link to="/help" className="icon-container">
            <img src="src/assets/images/header/info.svg" alt="Help" />
          </Link>
        </li>

        {/* Notifications Icon with Badge */}
        <li>
          <Link to="/notifications" className="icon-container">
            <img src="src/assets/images/header/notif.svg" alt="Notifications" />
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </Link>
        </li>

        {/* Language Selector */}
        <li>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedLanguage.toUpperCase()} <i className="bi bi-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#!"
                  onClick={() => onLanguageChange("en")}
                >
                  English
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#!"
                  onClick={() => onLanguageChange("ar")}
                >
                  Arabic
                </a>
              </li>
            </ul>
          </div>
        </li>

        {/* Profile Icon */}
        <li>
          <div className="dropdown">
            <button
              className="icon-button dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Profile Menu"
            >
              <img src="src/assets/images/header/profile.svg" alt="Profile" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/profile" className="dropdown-item">
                  <i className="bi bi-person-fill"></i> Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link to="/settings" className="dropdown-item">
                  <i className="bi bi-gear-fill"></i> Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link to="/support" className="dropdown-item">
                  <i className="bi bi-patch-question-fill"></i> Support
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" onClick={onLogout}>
                  <i className="bi bi-box-arrow-in-right"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </li>

        {/* Dev Environment Icon (Conditional) */}
        {/* {isDevEnvironment && (
          <li>
            <Link to="/dev" className="icon-container">
              <img src="src/assets/images/header/test.png" alt="Dev" />
            </Link>
          </li>
        )} */}
      </ul>
    </header>
  );
};

export default Header;
