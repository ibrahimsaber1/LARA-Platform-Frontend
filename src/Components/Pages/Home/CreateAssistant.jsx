// src/components/Home/CreateAssistant.jsx
import React from "react";
import "../../../assets/styles/Home/CreateAssistant.css";
import { useTranslation } from 'react-i18next';

const CreateAssistant = ({ onClose }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="create-assistant">
      <div className="Assistant-header d-flex justify-content-between align-items-center">
        <h3>{t("createAssistant.title")}</h3>
        <div className="go-back">
          <button className="go-back-btn" onClick={onClose}>
            <i className="fa-sharp fa-solid fa-arrow-right"></i> {t("createAssistant.goBack")}
          </button>
        </div>
      </div>

      <form>
        <div className="container">
          {/* Assistant Name */}
          <div className="row mb-3">
            <div className="col-12 form-group">
              <label>{t("createAssistant.assistantName")}</label>
              <input
                type="text"
                placeholder={t("createAssistant.titlePlaceholder")}
                className="form-control form-input"
              />
            </div>
          </div>

          {/* Assistant Type and Color */}
          <div className="row mb-3">
            <div className="col-md-6 col-12 form-group">
              <label className="form-label">{t("createAssistant.assistantType")}</label>
              <select className="form-select form-control">
                <option>{t("createAssistant.typePlaceholder")}</option>
                <option>{t("createAssistant.option1")}</option>
                <option>{t("createAssistant.option2")}</option>
              </select>
            </div>
            <div className="col-md-6 col-12 form-group">
              <label className="form-label">{t("createAssistant.assistantColor")}</label>
              <input type="color" className="form-control form-color-input" />
            </div>
          </div>

          {/* Assistant Voice and Domain */}
          <div className="row mb-3">
            <div className="col-md-6 col-12 form-group">
              <label className="form-label">{t("createAssistant.assistantVoice")}</label>
              <select className="form-select form-control">
                <option>{t("createAssistant.voicePlaceholder")}</option>
                <option>{t("createAssistant.voiceOption1")}</option>
                <option>{t("createAssistant.voiceOption2")}</option>
                <option>{t("createAssistant.voiceOption3")}</option>
              </select>
            </div>
            <div className="col-md-6 col-12 form-group">
              <label className="form-label">{t("createAssistant.assistantDomain")}</label>
              <select className="form-select form-control">
                <option>{t("createAssistant.domainPlaceholder")}</option>
                <option>{t("createAssistant.domainOption1")}</option>
                <option>{t("createAssistant.domainOption2")}</option>
                <option>{t("createAssistant.domainOption3")}</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="row mb-3">
            <div className="col-12 form-group">
              <label>{t("createAssistant.assistantDescription")}</label>
              <textarea
                className="form-control"
                placeholder={t("createAssistant.descriptionPlaceholder")}
              ></textarea>
            </div>
          </div>

          {/* File Upload Section */}
          <div className="row mb-3">
            <div className="col-12 form-group upload-section">
              <label>{t("createAssistant.uploadFile")}</label>
              <div className="upload-area">
                <i className="bi bi-file-earmark-arrow-up"></i>
                <br />
                {t("createAssistant.dragDrop")}
                <br />
                <span className="file-size-note">
                  {t("createAssistant.fileSizeNote")}
                </span>
              </div>
              <div className="data-source">
                <div className="data-file">{t("createAssistant.dataSource1")}</div>
                <div className="data-file">{t("createAssistant.dataSource2")}</div>
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
              <i className="fa fa-plus-circle"></i> {t("createAssistant.addMoreFiles")}
            </label>
          </div>

          {/* Save & Create Button */}
          <button type="submit" className="btn custom-btn mb-5">
            {t("createAssistant.saveAndCreate")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssistant;
