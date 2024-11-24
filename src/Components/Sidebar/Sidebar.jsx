import React, { useState } from "react";
import "../../assets/styles/Sidebar.css";

const Sidebar = () => {
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

  return (
    <aside
      className={`sidebar ${isCollapsed ? "sidebarCollapsed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        {/* Logo */}
        <div className="fixed-logo">
          <img src="src/assets/images/z_logo.svg" alt="Logo" />
        </div>

        {/* Static Menu Items */}
        <ul className="sidebar-menu">
          {/* Dashboard */}
          <li>
            <a
              href="javascript:void(0)"
              onClick={() => toggleCollapse("dashboard")}
            >
              <div>
                <i className="bi bi-speedometer2"></i>
                <i class="fa fa-home"></i>

                <span>Dashboard</span>
              </div>
              <i
                className={`bi bi-chevron-down ${
                  collapsedStates["dashboard"] ? "rotate" : ""
                }`}
              ></i>
            </a>
            <ul
              className={`collapse ${
                collapsedStates["dashboard"] ? "show" : ""
              }`}
            >
              <li>
                <a href="/dashboard/learning-progress">
                  <i className="bi bi-bar-chart"></i>
                  
                  <i class="fa fa-home"></i>

                  <span>Learning Progress</span>
                </a>
              </li>
              <li>
                <a href="/dashboard/gamified-performance">
                  <i className="bi bi-trophy"></i>
                  <span>Gamified Performance</span>
                </a>
              </li>
              <li>
                <a href="/dashboard/leaderboard">
                  <i className="bi bi-graph-up"></i>
                  <span>Leader Board</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Content Catalogue */}
          <li>
            <a
              href="javascript:void(0)"
              onClick={() => toggleCollapse("contentCatalogue")}
            >
              <div>
                <i className="bi bi-journal"></i>
                <span>Content Catalogue</span>
              </div>
              <i
                className={`bi bi-chevron-down ${
                  collapsedStates["contentCatalogue"] ? "rotate" : ""
                }`}
              ></i>
            </a>
            <ul
              className={`collapse ${
                collapsedStates["contentCatalogue"] ? "show" : ""
              }`}
            >
              <li>
                <a href="/content/pathways">
                  <i className="bi bi-diagram-3"></i>
                  <span>Pathways</span>
                </a>
              </li>
              <li>
                <a href="/content/courses">
                  <i className="bi bi-book"></i>
                  <span>Courses</span>
                </a>
              </li>
              <li>
                <a href="/content/books">
                  <i className="bi bi-bookmark"></i>
                  <span>Books</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Other Menu Items */}
          <li>
            <a href="/status-summary">
              <div>
                <i className="bi bi-card-list"></i>
                <span>Status Summary</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/assignments">
              <div>
                <i className="bi bi-pencil-square"></i>
                <span>Assignments</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/certificates">
              <div>
                <i className="bi bi-award"></i>
                <span>Certificates</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/assessment">
              <div>
                <i className="bi bi-clipboard-check"></i>
                <span>Assessment</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/instructors">
              <div>
                <i className="bi bi-person-workspace"></i>
                <span>Instructors</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
