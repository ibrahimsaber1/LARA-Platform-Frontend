import React from "react";
import "../../../assets/styles/CreateAssistant.css";

const CreateAssistant = () => {
  return (
    <div className="create-assistant">
      <div className="header">
        <h2>Create Your New Assistant</h2>
        <div className="go-back">
          <button className="go-back-btn">
            <i className="fa-sharp fa-solid fa-arrow-right"></i> Go Back
          </button>
        </div>
      </div>

      <form>
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 form-group">
              <label>Assistant Name</label>
              <input
                type="text"
                placeholder="Title"
                className="form-control form-input"
              />
            </div>
          </div>

          {/* Assistant Type and Color */}
          <div className="row mb-3">
            <div className="col-md-6 col-12 form-group">
              <label className="form-label">Assistant Type</label>
              <select className="form-select">
                <option>Type / Drop Down</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col-md-6 col-12 form-group">
              <label className="form-label">Assistant Color</label>
              <input type="color" className="form-control form-color-input" />
            </div>
          </div>

          {/* Assistant Voice and Domain */}
          <div className="row mb-3">
            <div className="col-md-6 col-12 form-group">
              <label className="form-label">Assistant Voice</label>
              <select className="form-select">
                <option>Voice Drop Down</option>
                <option>Voice Drop Down2</option>
                <option>Voice Drop Down3</option>
              </select>
            </div>
            <div className="col-md-6 col-12 form-group">
              <label className="form-label">Assistant Domain</label>
              <select className="form-select">
                <option>Business Administration</option>
                <option>Business Administration2</option>
                <option>Business Administration3</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="row mb-3">
            <div className="col-12 form-group">
              <label>Assistant Description</label>
              <textarea
                className="form-control"
                placeholder="Enter description..."
              ></textarea>
            </div>
          </div>

          {/* File Upload Section */}
          <div className="row mb-3">
            <div className="col-12 form-group upload-section">
              <label>Upload File</label>
              <div className="upload-area">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8337 21.3333L16.5003 16L11.167 21.3333"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 16V28"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.6866 24.5199C28.9871 23.8109 30.0144 22.6891 30.6064 21.3314C31.1985 19.9737 31.3216 18.4575 30.9562 17.0221C30.5909 15.5868 29.7579 14.3139 28.5888 13.4045C27.4198 12.4951 25.9811 12.0009 24.4999 11.9999H22.8199C22.4164 10.4389 21.6642 8.98968 20.6199 7.76122C19.5756 6.53277 18.2664 5.55703 16.7907 4.90737C15.3151 4.25772 13.7113 3.95104 12.1001 4.01041C10.4889 4.06977 8.91204 4.49363 7.48818 5.25012C6.06433 6.0066 4.8305 7.07603 3.87944 8.37801C2.92839 9.67998 2.28487 11.1806 1.99725 12.7671C1.70964 14.3536 1.78542 15.9846 2.2189 17.5376C2.65238 19.0906 3.43227 20.525 4.49995 21.7332"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                <br />
                Drag & Drop or Click to Upload <br />
                <span className="file-size-note">
                  Maximum File Size is 25 MB
                </span>
              </div>
              <div className="data-source">
                <div className="data-file">Data Source 1</div>
                <div className="data-file">Data Source 2</div>
              </div>
            </div>
          </div>

          {/* Add More Files */}
          <div className="file-upload-container">
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              multiple
              accept=".doc,.docx,.pdf"
            />
            <label htmlFor="file-upload" className="file-note">
              <i className="fa fa-plus-circle"></i> Add More Files (It must be
              readable Word files or PDFs)
            </label>
          </div>

          {/* Save & Create Button */}
          <button type="submit" className="btn btn-dark custom-btn mb-5">
            Save & Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssistant;
