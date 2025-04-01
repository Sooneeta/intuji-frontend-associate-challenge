import React from "react";
import TopBar from "../components/TopBar";
import "../styles/dashboard.scss";
import SearchIcon from "../assets/icons/search-normal.svg";
import BellIcon from "../assets/icons/notification-bing.svg";
import MessageIcon from "../assets/icons/message-text.svg";
import GalleryIcon from "../assets/icons/gallery.svg"

const DashboardPage = () => {

  return (
    <div className="dashboard-wrapper">
      <section className="topbar-wrapper">
        <div className="search-topbar">
          <TopBar>
            <img src={SearchIcon} />
            <span>Search here...</span>
          </TopBar>
        </div>
        <div className="user-topbar">
          <TopBar>
            <img src={BellIcon} />
            <img src={MessageIcon} />
            <img src={GalleryIcon} />
          </TopBar>

        </div>
      </section>
    </div>
  )
};

export default DashboardPage;
