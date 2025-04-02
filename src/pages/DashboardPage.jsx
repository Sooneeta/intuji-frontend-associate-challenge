import React from "react";
import TopBar from "../components/TopBar";
import "../styles/dashboard.scss";
import SearchIcon from "../assets/icons/search-normal.svg";
import BellIcon from "../assets/icons/notification-bing.svg";
import MessageIcon from "../assets/icons/message-text.svg";
import GalleryIcon from "../assets/icons/gallery.svg";
import ArrowDownIcon from "../assets/icons/arrow-down.svg";
import { Card } from "../components/Card";
import { OverviewCard } from "../components/Card";
import { overview } from "../data/overview";
import { savingPlan } from "../data/savingplan";
import { recentTransaction } from "../data/recenttransaction";

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
      <div className="overview-card-wrapper">
        <Card title="Overview">
          <div className="overview-subcard-container">
            {overview?.map((item, index) => (
              <div key={index} className="overview-subcard">
                <OverviewCard cardData={item} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="saving-card">
        <Card title="Saving Plan">
          <div className="saving-plan-items">
            {savingPlan.map((item, index) => (
              <div key={index} className="saving-item">
                <div className="saving-header">
                  <span className="name">{item.name}</span>
                  <span className="target">{`Target: ${item.savedAmount}`}</span>
                </div>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: item.progressRate,
                      backgroundColor: item.progressColor,
                    }}
                  ></div>
                </div>
                <div className="amounts">
                  <span className="saved">{item.targetAmount}</span>
                  <span className="progress-rate">{item.progressRate}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="analytics-card">
        <Card title="Analytics"></Card>
      </div>
      <div className="transaction-card">
        <Card title="Recent Transaction">
          <div className="transaction-list">
            {recentTransaction.map((transaction, index) => (
              <div key={index} className="transaction-item">
                <span className="name">{transaction.remarks}</span>
                <span className="date">August20,2022</span>
                <span
                  className={`amount ${
                    transaction.type === "income" ? "income" : "expense"
                  }`}
                >
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
