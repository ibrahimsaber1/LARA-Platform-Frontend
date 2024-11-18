import React from "react";
import "../../../assets/styles/CreateAssistant.css";

const CreateAssistant = () => {
  return (

    <div className="create-assistant">

      <div className="header">
        <h2>Create Your New Assistant</h2>

        <div className="go-back">
        <button className="go-back-btn"><i className="fa-sharp fa-solid fa-arrow-right"></i>Go Back</button>
          </div>

      </div>

    <form>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 form-group">
            <label>Assistant Name</label>
            <input type="text" placeholder="Title" className="form-control form-input " />

          </div>
        </div>

        {/* Assistant Type and Color */}
        <div className="row mb-3">
          
        <div className="col-6 form-group">
        <label className="form-label">Assistant Type</label>
        <select className="form-select">
          <option>Type / Drop Down</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>

        {/* Assistant color */}
        <div className="col-6 form-group">
          <label className="form-label">Assistant Color</label>
          <input type="color" className="form-control form-color-input" />
        </div>



        </div>

        {/* Assistant Voice and Domain */}
        <div className="row mb-3">
          <div className="col-6 form-group">
            <label className="form-label">Assistant Voice</label>
            <select className="form-select">
              <option>Voice Drop Down</option>
              <option>Voice Drop Down2</option>
              <option>Voice Drop Down3</option>

            </select>
          </div>
          <div className="col-6 form-group">
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
              Drag & Drop or Click to Upload <br />
              <span className="file-size-note">Maximum File Size is 25 MB</span>
            </div>
            <div className="data-source">
              <div className="data-file">Data Source 1</div>
              <div className="data-file">Data Source 2</div>
            </div>
          </div>
        </div>



      {/* Add More Files */}
      {/* <p className="file-note">
          <i className="fa fa-plus-circle"></i> Add More Files (It must be readable Word files or PDFs)
        </p> */}

        <div className="file-upload-container">
          <input
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            multiple
            accept=".doc,.docx,.pdf"
          />
          <label htmlFor="file-upload" className="file-note">
            <i className="fa fa-plus-circle"></i> Add More Files (It must be readable Word files or PDFs)
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
