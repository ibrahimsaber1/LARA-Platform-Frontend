import React from "react";
import { useTranslation } from 'react-i18next';

import "../../../assets/styles/Home/Main.css";


const Main = ({ onShowCreateAssistant }) => {
  const { t } = useTranslation();

  return (
    <main className="container main">
    {/* Header Section */}
    <div className="header-section d-flex justify-content-between align-items-center">
      <h1>{t("main.assistantsSpace")}</h1>
      <button
        className="btn create-assistant-btn"
        onClick={onShowCreateAssistant}
      >
        <span>+</span> {t("main.createNewAssistant")}
      </button>
    </div>

    {/* Search and Filter Section */}
    <div className="row mb-4">
      <div className="search-filter-section d-flex align-items-center col-lg-4">
        <input
          type="text"
          className="search-input w-75"
          placeholder={t("main.searchAssistantName")}
        />
        {/* Filter Dropdown */}
        <select className="filter-btn">
          <option value="hide">{t("main.type")}</option>
          <option>{t("main.option1")}</option>
          <option>{t("main.option2")}</option>
        </select>

        <button className="btn sort-btn w-10">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>

    {/* Assistant Cards */}
    <div className="row g-3">
      {/* Assistant Card 1 */}
      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">{t("main.title")}: Lara Plus Assistant</h5>
              <span className="status-badge">{t("main.statusJustCreated")}</span>
            </div>
            <p className="card-text">
              {t("main.type")}: {t("main.defaultGeneralPurpose")} <br />
              {t("main.scriptAssistantDescription")}
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="usage-info d-flex justify-content-between mt-2">
              <span>{t("main.tokensUsed")}: 12.37K</span>
              <span>{t("main.availableRequests")}: 2579</span>
            </div>
          </div>
        </div>
      </div>      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">{t("main.title")}: Lara Plus Assistant</h5>
              <span className="status-badge">{t("main.statusJustCreated")}</span>
            </div>
            <p className="card-text">
              {t("main.type")}: {t("main.defaultGeneralPurpose")} <br />
              {t("main.scriptAssistantDescription")}
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="usage-info d-flex justify-content-between mt-2">
              <span>{t("main.tokensUsed")}: 12.37K</span>
              <span>{t("main.availableRequests")}: 2579</span>
            </div>
          </div>
        </div>
      </div>      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">{t("main.title")}: Lara Plus Assistant</h5>
              <span className="status-badge">{t("main.statusJustCreated")}</span>
            </div>
            <p className="card-text">
              {t("main.type")}: {t("main.defaultGeneralPurpose")} <br />
              {t("main.scriptAssistantDescription")}
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="usage-info d-flex justify-content-between mt-2">
              <span>{t("main.tokensUsed")}: 12.37K</span>
              <span>{t("main.availableRequests")}: 2579</span>
            </div>
          </div>
        </div>
      </div>      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">{t("main.title")}: Lara Plus Assistant</h5>
              <span className="status-badge">{t("main.statusJustCreated")}</span>
            </div>
            <p className="card-text">
              {t("main.type")}: {t("main.defaultGeneralPurpose")} <br />
              {t("main.scriptAssistantDescription")}
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="usage-info d-flex justify-content-between mt-2">
              <span>{t("main.tokensUsed")}: 12.37K</span>
              <span>{t("main.availableRequests")}: 2579</span>
            </div>
          </div>
        </div>
      </div>      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">{t("main.title")}: Lara Plus Assistant</h5>
              <span className="status-badge">{t("main.statusJustCreated")}</span>
            </div>
            <p className="card-text">
              {t("main.type")}: {t("main.defaultGeneralPurpose")} <br />
              {t("main.scriptAssistantDescription")}
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="usage-info d-flex justify-content-between mt-2">
              <span>{t("main.tokensUsed")}: 12.37K</span>
              <span>{t("main.availableRequests")}: 2579</span>
            </div>
          </div>
        </div>
      </div>      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">{t("main.title")}: Lara Plus Assistant</h5>
              <span className="status-badge">{t("main.statusJustCreated")}</span>
            </div>
            <p className="card-text">
              {t("main.type")}: {t("main.defaultGeneralPurpose")} <br />
              {t("main.scriptAssistantDescription")}
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="usage-info d-flex justify-content-between mt-2">
              <span>{t("main.tokensUsed")}: 12.37K</span>
              <span>{t("main.availableRequests")}: 2579</span>
            </div>
          </div>
        </div>
      </div>      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">{t("main.title")}: Lara Plus Assistant</h5>
              <span className="status-badge">{t("main.statusJustCreated")}</span>
            </div>
            <p className="card-text">
              {t("main.type")}: {t("main.defaultGeneralPurpose")} <br />
              {t("main.scriptAssistantDescription")}
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="usage-info d-flex justify-content-between mt-2">
              <span>{t("main.tokensUsed")}: 12.37K</span>
              <span>{t("main.availableRequests")}: 2579</span>
            </div>
          </div>
        </div>
      </div>      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">{t("main.title")}: Lara Plus Assistant</h5>
              <span className="status-badge">{t("main.statusJustCreated")}</span>
            </div>
            <p className="card-text">
              {t("main.type")}: {t("main.defaultGeneralPurpose")} <br />
              {t("main.scriptAssistantDescription")}
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="usage-info d-flex justify-content-between mt-2">
              <span>{t("main.tokensUsed")}: 12.37K</span>
              <span>{t("main.availableRequests")}: 2579</span>
            </div>
          </div>
        </div>
      </div>      <div className="col-lg-4 col-md-6 col-sm-12 assistant-card-col">
        <div className="assistant-card card">
          <div className="card-body">
            <div className="cart-title-badge">
              <h5 className="card-title">{t("main.title")}: Lara Plus Assistant</h5>
              <span className="status-badge">{t("main.statusJustCreated")}</span>
            </div>
            <p className="card-text">
              {t("main.type")}: {t("main.defaultGeneralPurpose")} <br />
              {t("main.scriptAssistantDescription")}
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="usage-info d-flex justify-content-between mt-2">
              <span>{t("main.tokensUsed")}: 12.37K</span>
              <span>{t("main.availableRequests")}: 2579</span>
            </div>
          </div>
        </div>
      </div>


    </div>

</main>

  )
}



export default Main;

