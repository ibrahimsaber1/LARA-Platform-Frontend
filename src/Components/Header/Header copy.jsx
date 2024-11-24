// src/Components/Header/Header.jsx
import React, { useContext } from 'react';
import "../../assets/styles/Header.css"; 
import { Link } from "react-router-dom";
import { ThemeContext } from '../../Context/ThemeContext/ThemeContext'; // Adjust the path as necessary

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="background-color px-5">
      <div className="background-overlay"></div>

      <nav className="mynavbar navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          {/* the logo */}
          <Link className="navbar-brand mylogo" to="/">
            <img src="src/assets/images/z_logo.svg" alt="LARA AI voice assistance icon" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* the meddle navbar icons  */}
          <div className="collapse navbar-collapse meddle-icons" id="navbarSupportedContent">
            <ul className="navbar-nav meddle-icons">
              <li className="nav-item ">

            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.49512 8.06006L12.3251 13.17L21.0951 8.09003" stroke="#FDEEEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.3252 22.2302V13.1602" stroke="#FDEEEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.2553 3.10012L4.91531 6.07015C3.70531 6.74015 2.71533 8.42013 2.71533 9.80013V15.4502C2.71533 16.8302 3.70531 18.5101 4.91531 19.1801L10.2553 22.1502C11.3953 22.7802 13.2653 22.7802 14.4053 22.1502L19.7453 19.1801C20.9553 18.5101 21.9453 16.8302 21.9453 15.4502V9.80013C21.9453 8.42013 20.9553 6.74015 19.7453 6.07015L14.4053 3.10012C13.2553 2.46012 11.3953 2.46012 10.2553 3.10012Z" stroke="#FDEEEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.325 13.8602V10.2003L7.83496 4.72021" stroke="#FDEEEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link className="nav-link active text-white" aria-current="page" to="/assistantsspace"> Assistants Space</Link>
          </li>

          <li className="nav-item ">
            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.49512 8.06006L12.3251 13.17L21.0951 8.09003" stroke="#FDEEEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.3252 22.2302V13.1602" stroke="#FDEEEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.2553 3.10012L4.91531 6.07015C3.70531 6.74015 2.71533 8.42013 2.71533 9.80013V15.4502C2.71533 16.8302 3.70531 18.5101 4.91531 19.1801L10.2553 22.1502C11.3953 22.7802 13.2653 22.7802 14.4053 22.1502L19.7453 19.1801C20.9553 18.5101 21.9453 16.8302 21.9453 15.4502V9.80013C21.9453 8.42013 20.9553 6.74015 19.7453 6.07015L14.4053 3.10012C13.2553 2.46012 11.3953 2.46012 10.2553 3.10012Z" stroke="#FDEEEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.325 13.8602V10.2003L7.83496 4.72021" stroke="#FDEEEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <a className="nav-link active text-white" aria-current="page" href="#">Dashboard</a>
          </li>
          <li className="nav-item ">
            <svg width={26} height={25} viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.355 9.59469C15.2106 9.1886 14.9442 8.83706 14.5924 8.58818C14.2405 8.3393 13.8203 8.20525 13.3893 8.20437H11.7756C11.3152 8.20196 10.8703 8.37035 10.5269 8.67696C10.1834 8.98358 9.96592 9.40664 9.91634 9.86435C9.86677 10.3221 9.98868 10.7819 10.2585 11.1549C10.5283 11.5279 10.9269 11.7877 11.3771 11.8839L13.8342 12.42C14.3367 12.53 14.7807 12.8218 15.0811 13.2393C15.3815 13.6568 15.517 14.1706 15.4616 14.6819C15.4062 15.1932 15.1638 15.6661 14.7809 16.0095C14.3981 16.353 13.9018 16.5429 13.3875 16.5427H11.999C11.0911 16.5427 10.3191 15.9637 10.0332 15.1542M12.6941 8.20437V6.1189M12.6941 18.6282V16.5445M4.00195 24.2323V19.7647H8.46955" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24.3556 10.4828C24.83 13.0118 24.4512 15.6268 23.2787 17.9173C22.1062 20.2078 20.2064 22.0441 17.8773 23.1381C15.5483 24.2321 12.922 24.5217 10.4105 23.9616C7.89906 23.4015 5.64467 22.0234 4.00118 20.0434M1.52434 14.7574C1.04993 12.2283 1.42869 9.61336 2.60119 7.32286C3.77369 5.03237 5.67355 3.19603 8.00257 2.10206C10.3316 1.00809 12.9579 0.71843 15.4694 1.27853C17.9809 1.83864 20.2352 3.2168 21.8787 5.19672" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.8792 1.00781V5.47541H17.4116" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link className="nav-link active text-white" aria-current="page" to="subscriptions">Subscriptions</Link>
          </li>
          <li className="nav-item ">
            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.01473 19.1102V16.1902C6.01473 15.2202 6.77473 14.3502 7.85473 14.3502C8.82473 14.3502 9.69474 15.1102 9.69474 16.1902V19.0002C9.69474 20.9502 8.07474 22.5702 6.12474 22.5702C4.17474 22.5702 2.55473 20.9402 2.55473 19.0002V12.8402C2.44473 7.22017 6.88474 2.67017 12.5047 2.67017C18.1247 2.67017 22.5547 7.22017 22.5547 12.7302V18.8902C22.5547 20.8402 20.9347 22.4602 18.9847 22.4602C17.0347 22.4602 15.4147 20.8402 15.4147 18.8902V16.0802C15.4147 15.1102 16.1747 14.2402 17.2547 14.2402C18.2247 14.2402 19.0947 15.0002 19.0947 16.0802V19.1102" stroke="#FDEEEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <a className="nav-link active text-white" aria-current="page" href="#">General Info</a>
          </li>
        </ul>
      </div>

      <div className="logout-countner collapse navbar-collapse " id="navbarSupportedContent">
            <div className="logout nav-item d-flex justify-content-start align-items-center">
              <button className="dark-mode-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
                {isDarkMode ? '🌙' : '☀️'}
              </button>

              <Link className="navbar-brand ms-2" to="/logout">
                <i className="fa-solid fa-right-from-bracket"></i>
              </Link>
            </div>
          </div>

    </div>

  </nav>
</header>

  );
};

export default Header;
