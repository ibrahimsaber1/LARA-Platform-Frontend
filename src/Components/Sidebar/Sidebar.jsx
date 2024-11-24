import React, { useState, useEffect } from 'react';
import "../../assets/styles/Sidebar.css";


const Sidebar = () => {
  const [sidemenu, setSidemenu] = useState([]);
  const [collapsedStates, setCollapsedStates] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    // Retrieve sidemenu from localStorage
    const storedSidemenu = localStorage.getItem('sidemune');
    if (storedSidemenu) {
      setSidemenu(JSON.parse(storedSidemenu));
    }
  }, []);

  const toggleCollapse = (id) => {
    setCollapsedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeMenu = () => {
    setIsCollapsed(true);
  };

  const goToHome = () => {
    window.location.replace(`https://${window.location.hostname}/landing/post-login`);
  };

  const getFullUrl = (path) => {
    return `https://${window.location.hostname}${path}`;
  };

  return (
    <aside
      className={`sidebar ${isCollapsed ? 'sidebarCollapsed' : ''}`}
      onMouseLeave={closeMenu}
    >
      <div>
        <div className="logo" onClick={goToHome}>
          <img src="assets/shared/logo.svg" alt="Logo" />
        </div>
        <ul>
          {sidemenu.map((item) => (
            <li key={item.id}>
              {/* Parent Item */}
              {!item.children || item.children.length === 0 ? (
                <a href={getFullUrl(item.pagePath)} title={item.enName}>
                  <div>
                    <i className={item.iconPath}></i>
                    <span>{item.enName}</span>
                  </div>
                </a>
              ) : (
                // Item with children
                <>
                  <a
                    href="javascript:void(0)"
                    onClick={() => toggleCollapse(item.id)}
                    title={item.enName}
                  >
                    <div>
                      <i className={item.iconPath}></i>
                      <span>{item.enName}</span>
                    </div>
                    <i className={`bi bi-chevron-down ${collapsedStates[item.id] ? 'rotate' : ''}`}></i>
                  </a>
                  <ul className={`collapse ${collapsedStates[item.id] ? 'show' : ''}`}>
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <a href={getFullUrl(child.pagePath)} title={child.enName}>
                          <i className={child.iconPath}></i>
                          <span>{child.enName}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="toggle-icon" onClick={toggleMenu}>
        <i className={`bi bi-chevron-left ${!isCollapsed ? 'rotate' : ''}`}></i>
      </div>
    </aside>
  );
};

export default Sidebar;
