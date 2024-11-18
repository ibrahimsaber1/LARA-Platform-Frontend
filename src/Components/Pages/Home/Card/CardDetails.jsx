import React from "react";
import "../../../assets/styles/Main.css";

const Main = () => {
  return (
    <main className="container main">
      {/* Header Section */}
      <div className="header-section d-flex justify-content-between align-items-center">
        <h1>Assistants Space</h1>
        <button
          className="btn create-assistant-btn"
          onClick={onShowCreateAssistant}
        >
          <span>+</span> Create new assistant
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="row mb-4">
        <div className="search-filter-section d-flex align-items-center col-lg-4">
          <input
            type="text"
            className="search-input w-75"
            placeholder="Search the assistant name"
          />
          <button className="btn filter-btn w-10">
            Type <i className="fa-sharp fa-solid fa-caret-down"></i>
          </button>
          <button className="btn sort-btn w-10">
            <svg
              width={22}
              height={18}
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 5H3.5"
                stroke="#232323"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 9H6"
                stroke="#232323"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 13H8"
                stroke="#232323"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      
    
</main>

  )
}



export default Main;

