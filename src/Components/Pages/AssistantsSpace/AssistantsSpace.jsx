// AssistantsSpace.jsx
import React, { useState } from 'react';
import "../../../assets/styles/AssistantsSpace/AssistantsSpace.css"; 
import { Link } from "react-router-dom";
import StatisticsHistoryPortal from './StatisticsHistory.jsx'; // Adjust the path accordingly
import { useTranslation } from 'react-i18next';

export default function AssistantsSpace({ onOpenHistory }) {
  const {t} = useTranslation();
  const [showStatistics, setShowStatistics] = useState(false);
  return (
    <div className="assistants-space-container">
      {/* Header Section */}
      <div className="assistants-header-section d-flex justify-content-between align-items-center">
        <h1 className="assistants-title">{t("assistant_space.lara_assistant_title")}</h1>
        <div className="assistants-buttons">
          <Link to={'/'} className="assistants-btn go-back-btn">{t("assistant_space.back_to_home")}</Link>

          <div className="content">
            {/* Other content */}
            <button className="btn Show-Statistics-btn " onClick={() => setShowStatistics(true)}>{t("assistant_space.show_statistics")}</button>
            {showStatistics && <StatisticsHistoryPortal onClose={() => setShowStatistics(false)} />}
          </div>
        </div>
      </div>

      {/* AI Voice Section */}
      <div className="ai-voice-section d-flex align-items-center justify-content-center mt-5">
        <img src="src/assets/images/ai_voice2.gif" alt="AI Voice" className="ai-voice-image" />
      </div>
    </div>
  );
}
