import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import "./Sidebar.css";

const Sidebar = () => {
  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [collapsedStates, setCollapsedStates] = useState({});

  const toggleCollapse = (id) => {
    setCollapsedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleMouseEnter = () => {
    setIsCollapsed(false);
  };

  const handleMouseLeave = () => {
    setIsCollapsed(true);
  };

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={`sidebar ${isCollapsed ? "sidebarCollapsed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo Section */}
      <div className="fixed-logo">
        <img src="src/assets/images/z_logo.svg" alt={t("shared.logoAlt")} />
      </div>

      {/* Menu Section */}
      <div className="sidebar-menu-container">
        <ul className="sidebar-menu">
          {/* Dashboard */}
          <li>
            <button
              type="button"
              className="sidebar-link"
              onClick={() => toggleCollapse("dashboard")}
            >
              <div>
                <i className="bi bi-speedometer2 sidebar-icon"></i>
                <span>{t("sidebar.dashboard")}</span>
              </div>
              <i
                className={`bi bi-chevron-down ${
                  collapsedStates["dashboard"] ? "rotate" : ""
                }`}
                style={{ display: isCollapsed ? "none" : "inline-block" }}
              ></i>
            </button>
            <ul
              className={`collapse ${
                collapsedStates["dashboard"] ? "show" : ""
              }`}
            >
              <li>
                <Link to="/dashboard/learning-progress" className="sidebar-link">
                  <i className="bi bi-bar-chart"></i>
                  <span>{t("sidebar.learningProgress")}</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/gamified-performance" className="sidebar-link">
                  <i className="bi bi-trophy"></i>
                  <span>{t("sidebar.gamifiedPerformance")}</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/leaderboard" className="sidebar-link">
                  <i className="bi bi-graph-up"></i>
                  <span>{t("sidebar.leaderboard")}</span>
                </Link>
              </li>
            </ul>
          </li>

          {/* Content Catalogue */}
          <li>
            <button
              type="button"
              className="sidebar-link"
              onClick={() => toggleCollapse("contentCatalogue")}
            >
              <div>
                <i className="bi bi-journal-bookmark sidebar-icon"></i>
                <span>{t("sidebar.contentCatalogue")}</span>
              </div>
              <i
                className={`bi bi-chevron-down ${
                  collapsedStates["contentCatalogue"] ? "rotate" : ""
                }`}
                style={{ display: isCollapsed ? "none" : "inline-block" }}
              ></i>
            </button>
            <ul
              className={`collapse ${
                collapsedStates["contentCatalogue"] ? "show" : ""
              }`}
            >
              <li>
                <Link to="/content/pathways" className="sidebar-link">
                  <i className="bi bi-diagram-3"></i>
                  <span>{t("sidebar.pathways")}</span>
                </Link>
              </li>
              <li>
                <Link to="/content/courses" className="sidebar-link">
                  <i className="bi bi-book"></i>
                  <span>{t("sidebar.courses")}</span>
                </Link>
              </li>
              <li>
                <Link to="/content/books" className="sidebar-link">
                  <i className="bi bi-bookmark"></i>
                  <span>{t("sidebar.books")}</span>
                </Link>
              </li>
            </ul>
          </li>

          {/* Lara Voice Assistant */}
          <li>
            <button
              type="button"
              className="sidebar-link"
              onClick={() => toggleCollapse("lara")}
            >
              <div>
                <i className="bi bi-box-seam sidebar-icon"></i>
                <span>{t("sidebar.laraVoiceAssistant")}</span>
              </div>
              <i
                className={`bi bi-chevron-down ${
                  collapsedStates["lara"] ? "rotate" : ""
                }`}
                style={{ display: isCollapsed ? "none" : "inline-block" }}
              ></i>
            </button>
            <ul
              className={`collapse ${
                collapsedStates["lara"] ? "show" : ""
              }`}
            >
              <li>
                <Link to="/assistants-space" className="sidebar-link">
                  <i className="bi bi-alexa"></i>
                  <span>{t("sidebar.assistantsSpace")}</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="sidebar-link">
                  <i className="bi bi-ui-checks-grid"></i>
                  <span>{t("sidebar.dashboard")}</span>
                </Link>
              </li>
              <li>
                <Link to="/subscriptions" className="sidebar-link">
                  <i className="bi bi-coin"></i>
                  <span>{t("sidebar.subscriptions")}</span>
                </Link>
              </li>
              <li>
                <Link to="/general-info" className="sidebar-link">
                  <i className="bi bi-info-circle"></i>
                  <span>{t("sidebar.generalInfo")}</span>
                </Link>
              </li>
            </ul>
          </li>

          {/* Other Menu Items */}
          <li>
            <Link to="/status-summary" className="sidebar-link">
              <div>
                <i className="bi bi-view-list sidebar-icon"></i>
                <span>{t("sidebar.statusSummary")}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/assignments" className="sidebar-link">
              <div>
                <i className="bi bi-pencil-square sidebar-icon"></i>
                <span>{t("sidebar.assignments")}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/certificates" className="sidebar-link">
              <div>
                <i className="bi bi-award sidebar-icon"></i>
                <span>{t("sidebar.certificates")}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/assessment" className="sidebar-link">
              <div>
                <i className="bi bi-clipboard-check sidebar-icon"></i>
                <span>{t("sidebar.assessment")}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/instructors" className="sidebar-link">
              <div>
                <i className="bi bi-mortarboard sidebar-icon"></i>
                <span>{t("sidebar.instructors")}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Toggle Section */}
      <div className="rigth-arrow" onClick={toggleSidebar}>
        <i
          className={`bi bi-chevron-right ${
            isCollapsed ? "" : "rotate-arrow"
          }`}
          style={{ display: isCollapsed ? "" : "inline-block" }}
        ></i>
      </div>
    </aside>
  );
};

export default Sidebar;
