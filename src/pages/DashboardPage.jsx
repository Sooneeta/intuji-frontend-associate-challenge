import React from "react";
import TopBar from "../components/TopBar";
import "../styles/dashboard.scss";
import SearchIcon from "../assets/icons/search-normal.svg";
import BellIcon from "../assets/icons/notification-bing.svg";
import MessageIcon from "../assets/icons/message-text.svg";
import GalleryIcon from "../assets/icons/gallery.svg";
import ArrowDownIcon from "../assets/icons/arrow-down.svg";
import { Card } from "../components/Card";

const DashboardPage = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="search-topbar">
        <TopBar>
          <img src={SearchIcon} width={16} height={16} />
          <span>Search here...</span>
        </TopBar>
      </div>
      <div className="user-topbar">
        <TopBar>
          <div className="bell">
            <img src={BellIcon} />
          </div>
          <div className="message">
            <img src={MessageIcon} />
          </div>
          <div className="gallery">
            <div>
              <img src={GalleryIcon} />
            </div>
            <span>Mirie Kiritani</span>
            <img src={ArrowDownIcon} />
          </div>
        </TopBar>
      </div>
      <div className="overview-card">
        <Card title="Overview"></Card>
      </div>
      <div className="saving-card">
        <Card title="Saving Plan"></Card>
      </div>
      <div className="analytics-card">
        <Card title="Analytics"></Card>
      </div>
      <div className="transaction-card">
        <Card title="Recent Transaction"></Card>
      </div>
    </div>
  );
};

export default DashboardPage;
