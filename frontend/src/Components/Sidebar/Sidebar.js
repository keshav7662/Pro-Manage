import React, { useState } from "react";
import styles from "./sidebar.module.css";
import AppLogo from "../../assets/AppLogo.png";
import BoardLogo from "../../assets/Board.svg";
import AnalyticsLogo from "../../assets/Analytics.svg";
import SettingsLogo from "../../assets/settings.svg";

const Sidebar = ({setHeroLabel}) => {
  const [selectedTab, setSelectedTab] = useState("Board");

  const handleTabSelection = (tab) => {
    setSelectedTab(tab);
    setHeroLabel(tab);
  };

  return (
    <div className={styles.SidebarContainer}>
      <div className={`${styles.sidebarTab} ${styles.appLogo}`}>
        <img src={AppLogo} alt="" />
        <p>Pro Manage</p>
      </div>
      <div
        className={`${styles.sidebarTab} ${
          selectedTab === "Board" ? styles.selectedTabStyle : ""
        }`}
        onClick={() => handleTabSelection("Board")}
      >
        <img src={BoardLogo} alt="" />
        <p>Board</p>
      </div>
      <div
        className={`${styles.sidebarTab} ${
          selectedTab === "Analytics" ? styles.selectedTabStyle : ""
        }`}
        onClick={() => handleTabSelection("Analytics")}
      >
        <img src={AnalyticsLogo} alt="" />
        <p>Analytics</p>
      </div>
      <div
        className={`${styles.sidebarTab} ${
          selectedTab === "Settings" ? styles.selectedTabStyle : ""
        }`}
        onClick={() => handleTabSelection("Settings")}
      >
        <img src={SettingsLogo} alt="" />
        <p>Settings</p>
      </div>
    </div>
  );
};

export default Sidebar;
