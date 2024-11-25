// StatisticsHistory.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { History, FileText, Trash2, Download, ChevronDown, ArrowLeft } from 'lucide-react';
import "../../../assets/styles/AssistantsSpace/StatisticsHistory.css";

function StatisticsHistory({ onClose }) {
  const [activeTab, setActiveTab] = useState("dataSources");
  const files = [
    { name: "Data Source", size: "52 MB" },
    { name: "Data Source", size: "28 MB" },
    { name: "Data Source", size: "35 MB" },
  ];

  return (
    <div className="statistics-history">
      <div className="statistics-header d-flex justify-content-between align-items-center">
        <h2 className="statistics-title">Statistics & History</h2>
        <button className="statistics-go-back-btn" onClick={onClose}>
          <ArrowLeft className="icon" />
          Go Back
        </button>
      </div>

      <div className="statistics-form">
        <div className="row mb-3">
          <div className="col-md-6 col-12 form-group">
            <label className="form-label">Assistant Voice</label>
            <select className="form-select form-control">
              <option>Voice Drop Down</option>
            </select>
          </div>
          <div className="col-md-6 col-12 form-group">
            <label className="form-label">Assistant Domain</label>
            <select className="form-select form-control">
              <option >Business Administration</option>
            </select>
          </div>
        </div>
      </div>

      <div className="statistics-progress-section">
        <div className="progress">
          <div className="progress-bar" style={{ width: "50%" }}></div>
        </div>
        <div className="progress-info d-flex justify-content-between">
          <span>Tokens Used: 12.37K</span>
          <span>Available Requests: 2579</span>
        </div>
      </div>

      <div className="statistics-tabs-section">
        <div className="statistics-tabs d-flex">
          <button
            onClick={() => setActiveTab("history")}
            className={`tab-btn ${activeTab === "history" ? "active" : ""}`}
          >
            <History className="icon" />
            History
          </button>
          <button
            onClick={() => setActiveTab("dataSources")}
            className={`tab-btn ${activeTab === "dataSources" ? "active" : ""}`}
          >
            <FileText className="icon" />
            Data Sources
          </button>
        </div>
      </div>

      {activeTab === "dataSources" ? (
        <div className="statistics-data-sources">
          <div className="add-files-section">
            <button className="add-files-btn">+ Add More Files</button>
          </div>
          <div className="files-list">
            {files.map((file, index) => (
              <div
                key={index}
                className="file-card d-flex justify-content-between align-items-center"
              >
                <div className="file-info">
                  <FileText className="file-icon" />
                  <div>
                    <p className="file-name">{file.name}</p>
                    <p className="file-size">{file.size}</p>
                  </div>
                </div>
                <div className="file-actions">
                  <button className="file-action-btn">
                    <Trash2 />
                  </button>
                  <button className="file-action-btn">
                    <Download />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="statistics-history-content">
          <p>History content goes here...</p>
        </div>
      )}
    </div>
  );
}

export default function StatisticsHistoryPortal(props) {
  return ReactDOM.createPortal(
    <StatisticsHistory {...props} />,
    document.getElementById('portal-root') // Ensure this matches the ID in your HTML
  );
}