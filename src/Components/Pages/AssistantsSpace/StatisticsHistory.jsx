// src/components/AssistantsSpace/StatisticsHistory.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  History,
  FileText,
  Trash2,
  Download,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import "../../../assets/styles/AssistantsSpace/StatisticsHistory.css";

function StatisticsHistory({ onClose }) {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState("dataSources");
  const files = [
    { name: t("statisticsHistory.dataSource"), size: "52 MB" },
    { name: t("statisticsHistory.dataSource"), size: "28 MB" },
    { name: t("statisticsHistory.dataSource"), size: "35 MB" },
  ];

  return (
    <div className="statistics-history">
      <div className="statistics-header d-flex justify-content-between align-items-center">
        <h2 className="statistics-title">{t("statisticsHistory.title")}</h2>
        <button className="statistics-go-back-btn" onClick={onClose}>
          <ArrowLeft className="icon" />
          {t("statisticsHistory.goBack")}
        </button>
      </div>

      <div className="statistics-form">
        <div className="row mb-3">
          <div className="col-md-6 col-12 form-group">
            <label className="form-label">
              {t("statisticsHistory.assistantVoice")}
            </label>
            <select className="form-select form-control">
              <option>{t("statisticsHistory.voicePlaceholder")}</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="col-md-6 col-12 form-group">
            <label className="form-label">
              {t("statisticsHistory.assistantDomain")}
            </label>
            <select className="form-select form-control">
              <option>{t("statisticsHistory.domainPlaceholder")}</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>

      <div className="statistics-progress-section">
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: "50%" }}
            role="progressbar"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        <div className="progress-info d-flex justify-content-between">
          <span>{t("statisticsHistory.tokensUsed")}: 12.37K</span>
          <span>{t("statisticsHistory.availableRequests")}: 2579</span>
        </div>
      </div>

      <div className="statistics-tabs-section">
        <div className="statistics-tabs d-flex">
          <button
            onClick={() => setActiveTab("history")}
            className={`tab-btn ${
              activeTab === "history" ? "active" : ""
            }`}
          >
            <History className="icon" />
            {t("statisticsHistory.history")}
          </button>
          <button
            onClick={() => setActiveTab("dataSources")}
            className={`tab-btn ${
              activeTab === "dataSources" ? "active" : ""
            }`}
          >
            <FileText className="icon" />
            {t("statisticsHistory.dataSources")}
          </button>
        </div>
      </div>

      {activeTab === "dataSources" ? (
        <div className="statistics-data-sources">
          <div className="add-files-section">
            <button className="add-files-btn">
              + {t("statisticsHistory.addMoreFiles")}
            </button>
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
                  <button className="file-action-btn" aria-label={t("statisticsHistory.deleteFile")}>
                    <Trash2 />
                  </button>
                  <button className="file-action-btn" aria-label={t("statisticsHistory.downloadFile")}>
                    <Download />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="statistics-history-content">
          <p>{t("statisticsHistory.historyContent")}</p>
        </div>
      )}
    </div>
  );
}

export default function StatisticsHistoryPortal(props) {
  return ReactDOM.createPortal(
    <StatisticsHistory {...props} />,
    document.getElementById("portal-root") // Ensure this matches the ID in your HTML
  );
}
