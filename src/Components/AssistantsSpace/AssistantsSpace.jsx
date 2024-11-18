import React from "react";
import "../../assets/styles/AssistantsSpace.css"; 

export default function AssistantsSpace() {
  return (
    <div className="assistants-space-container">
      {/* Header Section */}
      <div className="assistants-header-section d-flex justify-content-between align-items-center">
        <h1 className="assistants-title">Lara Assistant Title</h1>
        <div className="assistants-buttons">
          <button className="assistants-btn go-back-btn">Go back to the assistants space</button>
          <button className="assistants-btn history-btn">Check the history</button>
        </div>
      </div>

      {/* AI Voice Section */}
      <div className="ai-voice-section d-flex align-items-center justify-content-center mt-5">
      <img src="src/assets/images/ai_voice.gif" alt="AI Voice" className="ai-voice-image" />

      </div>
    </div>
  );
}
