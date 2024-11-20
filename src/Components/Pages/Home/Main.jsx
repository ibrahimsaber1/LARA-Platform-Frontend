import React from "react";
import "../../../assets/styles/Main.css";

const Main = ({ onShowCreateAssistant }) => {
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
      
    {/* Assistant Card */}
    <div className="row g-3"> {/* Add Bootstrap's "g-3" for gutter spacing */}
      {/* Assistant Card 1 */}
      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card ">
          <div className="card-body ">
            <div className="cart-title-badge">
              <h5 className="card-title">Title: Lara Plus Assistant</h5>
              <span className="status-badge">Just Created</span>
            </div>
            <p className="card-text text-muted">
              Type: Default General Purpose <br />
              Script Assistant Specific in writing script...
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="usage-info d-flex justify-content-between text-muted mt-2">
              <span>Tokens Used: 12.37K</span>
              <span>Available Requests: 2579</span>
            </div>
          </div>
        </div>
      </div>
      {/* Assistant Card 2 */}
      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">Title: Another Assistant</h5>
              <span className="status-badge">Just Updated</span>
            </div>
            <p className="card-text text-muted">
              Type: Advanced General Purpose <br />
              This assistant specializes in advanced tasks...
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="usage-info d-flex justify-content-between text-muted mt-2">
              <span>Tokens Used: 8.92K</span>
              <span>Available Requests: 3401</span>
            </div>
          </div>
        </div>
      </div>
      {/* Assistant Card 3 */}
      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">Title: New Assistant</h5>
              <span className="status-badge">In Progress</span>
            </div>
            <p className="card-text text-muted">
              Type: Beginner Purpose <br />
              Script Assistant in development...
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="usage-info d-flex justify-content-between text-muted mt-2">
              <span>Tokens Used: 5.12K</span>
              <span>Available Requests: 1800</span>
            </div>
          </div>
        </div>
      </div>
      {/* Assistant Card 1 */}
      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col ">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">Title: Lara Plus Assistant</h5>
              <span className="status-badge">Just Created</span>
            </div>
            <p className="card-text text-muted">
              Type: Default General Purpose <br />
              Script Assistant Specific in writing script...
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="usage-info d-flex justify-content-between text-muted mt-2">
              <span>Tokens Used: 12.37K</span>
              <span>Available Requests: 2579</span>
            </div>
          </div>
        </div>
      </div>
      {/* Assistant Card 2 */}
      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">Title: Another Assistant</h5>
              <span className="status-badge">Just Updated</span>
            </div>
            <p className="card-text text-muted">
              Type: Advanced General Purpose <br />
              This assistant specializes in advanced tasks...
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="usage-info d-flex justify-content-between text-muted mt-2">
              <span>Tokens Used: 8.92K</span>
              <span>Available Requests: 3401</span>
            </div>
          </div>
        </div>
      </div>
      {/* Assistant Card 3 */}
      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">Title: New Assistant</h5>
              <span className="status-badge">In Progress</span>
            </div>
            <p className="card-text text-muted">
              Type: Beginner Purpose <br />
              Script Assistant in development...
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="usage-info d-flex justify-content-between text-muted mt-2">
              <span>Tokens Used: 5.12K</span>
              <span>Available Requests: 1800</span>
            </div>
          </div>
        </div>
      </div>
      {/* Assistant Card 1 */}
      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">Title: Lara Plus Assistant</h5>
              <span className="status-badge">Just Created</span>
            </div>
            <p className="card-text text-muted">
              Type: Default General Purpose <br />
              Script Assistant Specific in writing script...
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="usage-info d-flex justify-content-between text-muted mt-2">
              <span>Tokens Used: 12.37K</span>
              <span>Available Requests: 2579</span>
            </div>
          </div>
        </div>
      </div>
      {/* Assistant Card 2 */}
      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">Title: Another Assistant</h5>
              <span className="status-badge">Just Updated</span>
            </div>
            <p className="card-text text-muted">
              Type: Advanced General Purpose <br />
              This assistant specializes in advanced tasks...
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="usage-info d-flex justify-content-between text-muted mt-2">
              <span>Tokens Used: 8.92K</span>
              <span>Available Requests: 3401</span>
            </div>
          </div>
        </div>
      </div>
      {/* Assistant Card 3 */}
      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col ">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">Title: New Assistant</h5>
              <span className="status-badge">In Progress</span>
            </div>
            <p className="card-text text-muted">
              Type: Beginner Purpose <br />
              Script Assistant in development...
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="usage-info d-flex justify-content-between text-muted mt-2">
              <span>Tokens Used: 5.12K</span>
              <span>Available Requests: 1800</span>
            </div>
          </div>
        </div>
      </div>
    </div>

</main>

  )
}



export default Main;

