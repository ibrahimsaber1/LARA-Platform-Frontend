// AssistantsSpace.jsx
import React, { useState } from 'react';
import "../../../assets/styles/AssistantsSpace.css"; 
import { Link } from "react-router-dom";
import StatisticsHistoryPortal from './StatisticsHistory.jsx'; // Adjust the path accordingly

export default function AssistantsSpace({ onOpenHistory }) {
  const [showStatistics, setShowStatistics] = useState(false);
  return (
    <div className="assistants-space-container">
      {/* Header Section */}
      <div className="assistants-header-section d-flex justify-content-between align-items-center">
        <h1 className="assistants-title">Lara Assistant Title</h1>
        <div className="assistants-buttons">
          <Link to={'/'} className="assistants-btn go-back-btn">Back</Link>

          <div className="content">
            {/* Other content */}
            <button className="btn Show-Statistics-btn " onClick={() => setShowStatistics(true)}>Show Statistics</button>
            {showStatistics && <StatisticsHistoryPortal onClose={() => setShowStatistics(false)} />}
          </div>
        </div>
      </div>

      {/* AI Voice Section */}
      <div className="ai-voice-section d-flex align-items-center justify-content-center mt-5">
        <img src="src/assets/images/ai_voice.gif" alt="AI Voice" className="ai-voice-image" />
      </div>
    </div>
  );
}
